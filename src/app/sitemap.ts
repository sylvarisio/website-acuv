import type { MetadataRoute } from 'next'
import config from '@payload-config'
import { getPayload } from 'payload'
import { services } from '@/content/services'

const BASE = process.env.NEXT_PUBLIC_SERVER_URL || 'https://acuvstrategy.com'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/services', '/about', '/engagement-model', '/success-stories', '/thoughts', '/contact', '/privacy', '/terms'].map(
    (route) => ({
      url: `${BASE}${route}`,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }),
  )

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  let thoughtRoutes: MetadataRoute.Sitemap = []
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'thoughts', limit: 200, depth: 0 })
    thoughtRoutes = res.docs
      .filter((t: any) => t.slug)
      .map((t: any) => ({
        url: `${BASE}/thoughts/${t.slug}`,
        lastModified: t.updatedAt ? new Date(t.updatedAt) : undefined,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
      }))
  } catch (e) {
    // Sitemap should still render the static routes if the CMS is unreachable.
  }

  return [...staticRoutes, ...serviceRoutes, ...thoughtRoutes]
}
