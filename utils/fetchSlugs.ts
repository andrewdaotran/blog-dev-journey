import { Slug } from '../typings'

export const fetchSlugs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSlugs`)
  const data = await res.json()

  const slugs: Slug[] = data.slugs
  return slugs
}
