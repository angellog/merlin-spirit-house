import { createClient, type SanityClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2026-05-09'

const isConfigured = projectId && projectId !== 'your_project_id' && /^[a-z0-9-]+$/.test(projectId)

export const client: SanityClient = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      stega: {
        studioUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/studio'
          : '/studio',
      },
    })
  : null as unknown as SanityClient

const builder = isConfigured ? createImageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) {
    const stub = { url: () => '', width: () => stub, height: () => stub, format: () => stub, auto: () => stub }
    return stub
  }
  return builder.image(source)
}
