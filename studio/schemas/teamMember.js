export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'techStack',
      title: 'Tech Stack / Skills',
      type: 'string',
      description: 'Pipe-separated list e.g. Siemens S7 | Allen-Bradley | SCADA | HMI',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'whatsappUrl',
      title: 'WhatsApp URL',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
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
