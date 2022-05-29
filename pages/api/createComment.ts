import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'
import { Post } from '../../typings'
import { groq } from 'next-sanity'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-08-11',
}

const client = sanityClient(config)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id, name, email, comment } = req.body
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (error) {
    return res.status(500).json({ message: 'Could not submit comment', error })
  }

  return res.status(200).json({ message: 'Comment submitted' })
}

export default handler
