import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const anyone = () => true
const authenticated = ({ req }: any) => Boolean(req.user)

export default buildConfig({
  admin: {
    user: 'users',
    meta: { titleSuffix: ' — acuv Strategy' },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'DEV-ONLY-CHANGE-ME',
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || 'file:./data/payload.db' },
  }),
  sharp,
  graphQL: { disable: true },
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [{ name: 'name', type: 'text' }],
    },
    {
      slug: 'media',
      access: { read: anyone, create: authenticated, update: authenticated, delete: authenticated },
      upload: {
        staticDir: process.env.MEDIA_DIR || path.resolve(dirname, '../media'),
      },
      fields: [{ name: 'alt', type: 'text' }],
    },
    {
      slug: 'thoughts',
      labels: { singular: 'Thought', plural: 'Thoughts' },
      admin: { useAsTitle: 'title', defaultColumns: ['tlNumber', 'title', 'publishedDate'] },
      access: { read: anyone, create: authenticated, update: authenticated, delete: authenticated },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'tlNumber', label: 'Thought Leadership #', type: 'number', required: true },
        { name: 'subtitle', type: 'text' },
        { name: 'excerpt', type: 'textarea' },
        { name: 'cover', type: 'upload', relationTo: 'media' },
        { name: 'body', type: 'richText' },
        { name: 'pdf', label: 'Attached PDF (optional)', type: 'upload', relationTo: 'media' },
        { name: 'publishedDate', type: 'date' },
      ],
    },
    {
      slug: 'documents',
      labels: { singular: 'Document', plural: 'Documents' },
      admin: { useAsTitle: 'title' },
      access: { read: anyone, create: authenticated, update: authenticated, delete: authenticated },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'file', type: 'upload', relationTo: 'media', required: true },
        {
          name: 'category',
          type: 'select',
          options: ['report', 'company-profile', 'other'],
          defaultValue: 'other',
          admin: {
            description:
              'Controls which site button downloads this file. "company-profile" → the homepage "Download Company Profile" button. "report" → the About page "Download the Report" button. If several docs share a category, the most recently updated one is used.',
          },
        },
      ],

    },
    {
      slug: 'submissions',
      labels: { singular: 'Submission', plural: 'Submissions' },
      admin: { useAsTitle: 'name', defaultColumns: ['name', 'email', 'topic', 'createdAt'] },
      access: {
        read: authenticated,
        create: anyone,
        update: authenticated,
        delete: authenticated,
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        {
          name: 'topic',
          type: 'select',
          options: ['Strategic Programs', 'Corporate Financial Services'],
          required: true,
        },
        { name: 'message', type: 'textarea', required: true },
      ],
    },
    {
      slug: 'announcements',

      labels: { singular: 'Announcement', plural: 'Announcements' },
      admin: { useAsTitle: 'title', defaultColumns: ['title', 'featured'] },
      access: { read: anyone, create: authenticated, update: authenticated, delete: authenticated },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'kicker', type: 'text', defaultValue: '10 YEARS — THE WILL TO WIN' },
        { name: 'blurb', type: 'textarea' },
        { name: 'pdf', label: 'PDF to download', type: 'upload', relationTo: 'media' },
        { name: 'buttonLabel', type: 'text', defaultValue: 'DOWNLOAD THE REPORT' },
        { name: 'emblemTop', type: 'text', defaultValue: '10' },
        { name: 'emblemBottom', type: 'text', defaultValue: 'YEARS' },
        { name: 'featured', label: 'Feature on homepage', type: 'checkbox', defaultValue: false },
      ],
    },
  ],
})
