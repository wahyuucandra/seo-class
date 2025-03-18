import { ImageObject } from 'schema-dts'

export type IImageSchema = Partial<{
  url: string
  name: string
  author: string
  datePublished: string
}>

export const createImageSchema = (image: IImageSchema): Partial<ImageObject> => {
  const schema: Partial<ImageObject> = {}

  if (image.url) schema.contentUrl = image.url
  if (image.name) schema.name = image.name
  if (image.author) schema.author = { '@type': 'Person', name: image.author }
  if (image.datePublished) schema.datePublished = image.datePublished

  return schema
}

export const generateSingleImageSchema = (image: IImageSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    ...createImageSchema(image),
  }
}

export const generateMultipleImageSchema = (images: Array<IImageSchema>) => {
  return {
    '@context': 'https://schema.org',
    '@graph': images.map(image => generateSingleImageSchema(image)) as ImageObject[],
  }
}
