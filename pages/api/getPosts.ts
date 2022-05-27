import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
import { groq } from 'next-sanity'

const postQuery = groq`*[_type == "post"]{
  _id,
  _createdAt,
  title,
  description,
author -> {
  name,
  image
},
  slug,
mainImage,
body
}`

type Data = {
  posts: Post[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const posts: Post[] = await sanityClient.fetch(postQuery)
  res.status(200).json({ posts })
}

export default handler
