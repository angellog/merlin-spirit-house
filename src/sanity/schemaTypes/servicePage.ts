import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'seoH1', title: 'SEO H1', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon', type: 'string' }),
    defineField({ name: 'badge', title: 'Badge', type: 'string' }),
    defineField({ name: 'whatsappPreFill', title: 'WhatsApp Pre-fill', type: 'string' }),
    defineField({ name: 'whatIsSection', title: 'What Is Section', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'whoNeedsSection', title: 'Who Needs Section', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'howHealerWorks', title: 'How Healer Works', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'whatToExpect', title: 'What to Expect', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'testimonials', title: 'Testimonials', type: 'array', of: [{ type: 'reference', to: [{ type: 'testimonial' }] }] }),
    defineField({ name: 'faqItems', title: 'FAQ Items', type: 'array', of: [{ type: 'reference', to: [{ type: 'faqItem' }] }] }),
    defineField({
      name: 'conversionCopy',
      title: 'Conversion Copy',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'string' }),
      ],
    }),
    defineField({ name: 'sortOrder', title: 'Sort Order', type: 'number' }),
  ],
})
