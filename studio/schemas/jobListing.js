export default {
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'Full-time'},
          {title: 'Part-time', value: 'Part-time'},
          {title: 'Internship', value: 'Internship'},
          {title: 'Contract', value: 'Contract'},
        ],
      },
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'string',
      description: 'e.g. Abuja/Lagos',
    },
    {
      name: 'education',
      title: 'Education Requirement',
      type: 'string',
      description: 'e.g. B.Eng / HND',
    },
    {
      name: 'experience',
      title: 'Experience Required',
      type: 'string',
      description: 'e.g. 3+ yrs exp',
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'skills',
      title: 'Required Skills',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
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
