export default {
  name: 'pageContent',
  title: 'Page Content (Text Blocks)',
  type: 'document',
  fields: [
    {
      name: 'section',
      title: 'Section Key',
      type: 'string',
      description: 'Unique identifier for the content block (e.g. services-heading, cta-text)',
      validation: (rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Title / Heading',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Eyebrow',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'text',
      rows: 4,
    },
  ],
}
