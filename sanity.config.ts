'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  structure: (S: any) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Site Settings')
          .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
        S.listItem()
          .title('Consultation Page')
          .child(S.document().schemaType('consultation').documentId('consultation')),
        S.divider(),
        ...S.documentTypeListItems().filter(
          (item: any) => !['siteSettings', 'consultation'].includes(item.getId() || '')
        ),
      ]),
})
