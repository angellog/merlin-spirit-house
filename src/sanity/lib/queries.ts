export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`

export const SERVICE_PAGES_QUERY = `*[_type == "servicePage"] | order(sortOrder asc){_id, title, slug, icon, badge, subheading, metaDescription, seoH1, heroImage, whatsappPreFill, whatIsSection, whoNeedsSection, howHealerWorks, whatToExpect, conversionCopy, "testimonials": testimonials[]->{name, location, quote, rating}, "faqItems": faqItems[]->{question, answer}}`

export const SERVICE_PAGE_QUERY = `*[_type == "servicePage" && slug.current == $slug][0]{_id, title, slug, icon, badge, subheading, metaDescription, seoH1, heroImage, whatsappPreFill, whatIsSection, whoNeedsSection, howHealerWorks, whatToExpect, conversionCopy, "testimonials": testimonials[]->{name, location, quote, rating}, "faqItems": faqItems[]->{question, answer}}`

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){_id, title, "slug": slug.current, publishedAt, excerpt, mainImage, "categories": categories[]->{title, "slug": slug.current}}`

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{_id, title, "slug": slug.current, publishedAt, excerpt, mainImage, body, "categories": categories[]->{title, "slug": slug.current}, "faqItems": faqItems[]->{question, answer}, "relatedPosts": relatedPosts[]->{title, "slug": slug.current, excerpt, mainImage, publishedAt}, "author": author->{_id, name, title, image, bio, yearsExperience}}`

export const CATEGORIES_QUERY = `*[_type == "category" && defined(slug.current)]{_id, title, "slug": slug.current, description, focus}`

export const CATEGORY_POSTS_QUERY = `*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc){_id, title, "slug": slug.current, publishedAt, excerpt, mainImage, "categories": categories[]->{title, "slug": slug.current}}`

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt desc){_id, name, location, quote, rating, featured, "service": service->{title, "slug": slug.current}}`

export const FEATURED_TESTIMONIALS_QUERY = `*[_type == "testimonial" && featured == true] | order(_createdAt desc)[0..2]{_id, name, location, quote, rating}`

export const FAQ_ITEMS_QUERY = `*[_type == "faqItem"]{_id, question, answer, global, "services": services[]->{title, "slug": slug.current}}`

export const CONSULTATION_QUERY = `*[_type == "consultation"][0]`

export const SERVICE_SLUGS_QUERY = `*[_type == "servicePage" && defined(slug.current)]{"slug": slug.current}`

export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`
