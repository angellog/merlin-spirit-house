import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (r) => r.min(1).max(5) }),
    defineField({ name: 'service', title: 'Service', type: 'reference', to: [{ type: 'servicePage' }] }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
  ],
})
