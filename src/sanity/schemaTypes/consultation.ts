import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'consultation',
  title: 'Consultation Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroCopy', title: 'Hero Copy', type: 'string' }),
    defineField({ name: 'whatHappensCopy', title: 'What Happens Copy', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'whatYouLearn', title: 'What You Learn', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'privacyGuarantee', title: 'Privacy Guarantee', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'guaranteeCopy', title: 'Guarantee Copy', type: 'string' }),
    defineField({ name: 'responseTimeText', title: 'Response Time Text', type: 'string' }),
    defineField({ name: 'availabilityText', title: 'Availability Text', type: 'string' }),
  ],
})
