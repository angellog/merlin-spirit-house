import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'services', title: 'Services', type: 'array', of: [{ type: 'reference', to: [{ type: 'servicePage' }] }] }),
    defineField({ name: 'global', title: 'Global', type: 'boolean' }),
  ],
})
