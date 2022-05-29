export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Approved comments are visible to all users.',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: {
        type: 'post',
      },
    },
  ],
}
