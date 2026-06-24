export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Solar & Power', value: 'solar'},
          {title: 'Security', value: 'security'},
          {title: 'Automation', value: 'automation'},
          {title: 'Elevator', value: 'elevator'},
          {title: 'Petroleum', value: 'petroleum'},
          {title: 'BMS', value: 'bms'},
          {title: 'Consultancy', value: 'consultancy'},
        ],
      },
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Contract Value',
      type: 'string',
      description: 'e.g. ₦85M',
    },
    {
      name: 'tagIcon',
      title: 'Tag Icon (emoji)',
      type: 'string',
      description: 'e.g. ☀️, 🔒, ⚙️',
    },
    {
      name: 'tagLabel',
      title: 'Tag Label',
      type: 'string',
      description: 'e.g. Solar · Power',
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
