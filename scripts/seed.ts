// Idempotent content seed: populates thoughts, documents and the homepage
// announcement from seed-data.ts, uploading PDFs from seed-assets/.
// Run with: npm run db:seed  (safe to re-run — existing records are skipped)

import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '@payload-config'
import { thoughts, documents, announcement, type Block } from './seed-data'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = path.resolve(dirname, '../seed-assets')

// --- minimal Lexical builders -------------------------------------------------

const text = (t: string) => ({ type: 'text', text: t, format: 0, style: '', mode: 'normal', detail: 0, version: 1 })

const blockToLexical = (b: Block) => {
  if (b.h2 !== undefined)
    return { type: 'heading', tag: 'h2', children: [text(b.h2)], direction: 'ltr', format: '', indent: 0, version: 1 }
  if (b.quote !== undefined)
    return { type: 'quote', children: [text(b.quote)], direction: 'ltr', format: '', indent: 0, version: 1 }
  if (b.ul !== undefined)
    return {
      type: 'list',
      listType: 'bullet',
      tag: 'ul',
      start: 1,
      children: b.ul.map((item, i) => ({
        type: 'listitem',
        value: i + 1,
        children: [text(item)],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      })),
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    }
  return { type: 'paragraph', children: [text(b.p ?? '')], direction: 'ltr', format: '', indent: 0, version: 1 }
}

const toLexical = (blocks: Block[]) => ({
  root: {
    type: 'root',
    children: blocks.map(blockToLexical),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})

// --- seed --------------------------------------------------------------------

const run = async () => {
  const payload = await getPayload({ config })

  // Upload a PDF once; identified by its alt text.
  const mediaIds = new Map<string, number | string>()
  const ensureMedia = async (file: string, alt: string) => {
    if (mediaIds.has(file)) return mediaIds.get(file)!
    const existing = await payload.find({ collection: 'media', where: { alt: { equals: alt } }, limit: 1 })
    let id = existing.docs[0]?.id
    if (id) {
      payload.logger.info(`media exists: ${file}`)
    } else {
      const created = await payload.create({
        collection: 'media',
        data: { alt },
        filePath: path.join(ASSETS_DIR, file),
      })
      id = created.id
      payload.logger.info(`media uploaded: ${file}`)
    }
    mediaIds.set(file, id)
    return id
  }

  for (const t of thoughts) {
    const existing = await payload.find({ collection: 'thoughts', where: { slug: { equals: t.slug } }, limit: 1 })
    if (existing.docs.length) {
      payload.logger.info(`thought exists, skipping: ${t.slug}`)
      continue
    }
    const pdf = t.pdfFile ? await ensureMedia(t.pdfFile, t.title) : undefined
    await payload.create({
      collection: 'thoughts',
      data: {
        title: t.title,
        slug: t.slug,
        tlNumber: t.tlNumber,
        subtitle: t.subtitle,
        excerpt: t.excerpt,
        publishedDate: t.publishedDate,
        pdf,
        body: t.body ? (toLexical(t.body) as any) : undefined,
      },
    })
    payload.logger.info(`thought created: ${t.slug}`)
  }

  for (const d of documents) {
    const existing = await payload.find({ collection: 'documents', where: { title: { equals: d.title } }, limit: 1 })
    if (existing.docs.length) {
      payload.logger.info(`document exists, skipping: ${d.title}`)
      continue
    }
    const file = await ensureMedia(d.file, d.title)
    await payload.create({ collection: 'documents', data: { title: d.title, file, category: d.category } })
    payload.logger.info(`document created: ${d.title}`)
  }

  const existingAnnouncement = await payload.find({
    collection: 'announcements',
    where: { title: { equals: announcement.title } },
    limit: 1,
  })
  if (existingAnnouncement.docs.length) {
    payload.logger.info('announcement exists, skipping')
  } else {
    const pdf = await ensureMedia(announcement.pdfFile, 'The Will to Win — 10-Year Anniversary Report')
    const { pdfFile, ...data } = announcement
    await payload.create({ collection: 'announcements', data: { ...data, pdf } })
    payload.logger.info('announcement created')
  }

  payload.logger.info('Seed complete.')
  process.exit(0)
}

// `payload run` calls process.exit as soon as the module finishes evaluating,
// so the seed must be awaited at the top level — not left as a floating promise.
await run().catch((err) => {
  console.error(err)
  process.exit(1)
})
