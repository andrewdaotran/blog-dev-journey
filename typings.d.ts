export interface Post extends PostBody {
  _id: string
  _createdAt: string
}

export type PostBody = {
  title: string
  description: string
  slug: {
    current: string
  }
  author: {
    name: string
    image: string
  }
  mainImage?: {
    asset: {
      url: string
    }
  }
  body: object[]
  category: string
  imagePosition: string
}

export interface Slug {
  id: string
  slug: {
    current: string
  }
}
