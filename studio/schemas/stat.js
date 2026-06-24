export default {
  name: 'stat',
  title: 'Stat (Stats Bar)',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g. 500+',
      validation: (rule) => rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. Projects Delivered',
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
