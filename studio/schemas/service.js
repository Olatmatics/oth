export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon (emoji)',
      type: 'string',
      description: 'Use a single emoji (e.g. ☀️, 📷, ⚙️)',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'features',
      title: 'Feature List',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'tags',
      title: 'Tags (shown at bottom)',
      type: 'string',
      description: 'Comma-separated tags e.g. Solar · Inverters · Backup Power',
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
