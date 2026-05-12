import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'clientTitle', title: 'Client Title', type: 'string' }),
    defineField({ name: 'clientWhatsapp', title: 'Client WhatsApp', type: 'string' }),
    defineField({ name: 'clientEmail', title: 'Client Email', type: 'email' }),
    defineField({ name: 'clientLocation', title: 'Client Location', type: 'string' }),
    defineField({ name: 'clientYears', title: 'Client Years Experience', type: 'number' }),
    defineField({ name: 'clientDomain', title: 'Client Domain', type: 'string' }),
    defineField({ name: 'clientTagline', title: 'Client Tagline', type: 'string' }),
    defineField({ name: 'clientOrigin', title: 'Client Origin Story', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'ga4Id', title: 'GA4 ID', type: 'string' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'facebook', title: 'Facebook', type: 'string' }),
        defineField({ name: 'instagram', title: 'Instagram', type: 'string' }),
        defineField({ name: 'youtube', title: 'YouTube', type: 'string' }),
        defineField({ name: 'tikTok', title: 'TikTok', type: 'string' }),
        defineField({ name: 'telegram', title: 'Telegram', type: 'string' }),
      ],
    }),
    defineField({ name: 'disclaimerText', title: 'Disclaimer Text', type: 'string' }),
    defineField({ name: 'jivoWidgetId', title: 'Jivo Widget ID', type: 'string' }),
    defineField({ name: 'jivoProactiveMessage', title: 'Jivo Proactive Message', type: 'string', initialValue: 'Hi! Need help? Chat with us now.' }),
    defineField({ name: 'jivoEnabled', title: 'Jivo Enabled', type: 'boolean', initialValue: true }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
  ],
})
