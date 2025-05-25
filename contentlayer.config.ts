import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Writing',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    bodyPreview: { type: 'string', required: true },
    image: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/writing/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: './content', documentTypes: [Post] })