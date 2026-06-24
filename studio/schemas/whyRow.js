export default {
  name: 'whyRow',
  title: 'Why OTH — Row Item',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'e.g. 01, 02...',
      validation: (rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
