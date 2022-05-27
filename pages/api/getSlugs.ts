import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Slug } from '../../typings'
import { groq } from 'next-sanity'

const postsQuery = groq`*[_type == "post"]{
  _id,
slug {
  current
},
} | order(_createdAt desc)`

type Data = {
  slugs: Slug[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const slugs: Slug[] = await sanityClient.fetch(postsQuery)
  res.status(200).json({ slugs })
}

export default handler
