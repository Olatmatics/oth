export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: "Nigeria's #1 Engineering & Automation Partner",
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'text',
      rows: 2,
      initialValue: 'Power. Automate.\nEngineer the Future.',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      initialValue: 'From solar power systems and industrial automation to CCTV surveillance, elevator services, and fuel station automation — OTH Ltd delivers end-to-end engineering excellence across Abuja, Lagos and West Africa.',
    },
    {
      name: 'sliderImages',
      title: 'Hero Slider Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'clientPills',
      title: 'Trusted By Pill Labels',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      initialValue: ['Manufacturing', 'Oil & Gas', 'Real Estate', 'Hospitality', 'Government', 'Healthcare'],
    },
  ],
}
