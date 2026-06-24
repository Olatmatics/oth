import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Olatmatics Tech Hub — CMS',
  projectId: 'l1myt0ib',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (template) => template.templateId !== 'siteSettings'
        )
      }
      return prev
    },
    actions: (prev, {schemaType}) => {
      if (schemaType === 'siteSettings') {
        return prev.filter(
          (action) => action.action === 'publish' || action.action === 'discardChanges'
        )
      }
      return prev
    },
  },
})
