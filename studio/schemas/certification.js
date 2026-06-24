export default {
  name: 'certification',
  title: 'Certification / Accreditation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon (emoji)',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body / Description',
      type: 'string',
    },
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: '✓ Active',
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
