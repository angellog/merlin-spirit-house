import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'person' }] }),
    defineField({ name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }] }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'faqItems', title: 'FAQ Items', type: 'array', of: [{ type: 'reference', to: [{ type: 'faqItem' }] }] }),
    defineField({ name: 'relatedPosts', title: 'Related Posts', type: 'array', of: [{ type: 'reference', to: [{ type: 'post' }] }] }),
  ],
})
