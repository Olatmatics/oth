export default {
  name: 'knowledgeArticle',
  title: 'Knowledge Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Case Study', value: 'Case Study'},
          {title: 'Technical Article', value: 'Technical Article'},
          {title: 'Industry Update', value: 'Industry Update'},
          {title: 'Guide', value: 'Guide'},
        ],
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
    {
      name: 'image',
      title: 'Article Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'imageEmoji',
      title: 'Fallback Emoji',
      type: 'string',
      description: 'Emoji shown if no image (e.g. ☀️, ⚙️)',
    },
    {
      name: 'date',
      title: 'Publish Date',
      type: 'string',
      description: 'e.g. June 2025',
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g. 8 min read',
    },
    {
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Full Content (HTML)',
      type: 'text',
      description: 'Full article content as HTML',
      rows: 20,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  orderings: [
    {title: 'Order', name: 'order', by: [{field: 'order', direction: 'asc'}]},
  ],
}
