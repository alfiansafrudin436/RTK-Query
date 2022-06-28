import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useGetPostsQuery } from '../../api'
import { useAddPostMutation, useDeletePostMutation } from '../../api/post-api/postApi'

const PostPage: NextPage = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useGetPostsQuery()
  const router = useRouter()
  return (
    <div>
      <h1>React Redux Toolkit RTK Query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>...Something went wrong</h2>}
      {isSuccess && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {data?.map(post => {
            return(
              <div  className="post-container" key={post.id}>
                <div
                  className="post"
                  onClick={() => router.push(`./${post.id}`)}>
                  {post.id} {post.title}
                </div>
                <DeletePost id={post.id}/>
              </div>
            )
          })}
          <AddPost />
        </div>
      )}
    </div>
  )
}

export const AddPost = () => {
  const [ addPost ] = useAddPostMutation()
  const dataPost = {
    "userId": 1,
    "title": "ADD TITLE",
    "body" : "BODY POST"
  }
  const AddPost = async () => {
    addPost(dataPost)
  }
  return (
    <button
      className="button-Add"
      onClick={AddPost}
    >
      Add Post
    </button>
  )
}

export const DeletePost = ({id}: {id: number}) => {
  const [ deletePost ] = useDeletePostMutation()
  const DeletePost = async () => {
    deletePost(id)
  }
  return (
    <button
      className="button-Delete"
      onClick={DeletePost}
    >
      Delete Post
    </button>
  )
}

export default PostPage
