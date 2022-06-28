import { useRouter } from "next/router"
import { useGetPostQuery } from "../../api"
import { useUpdatePostMutation } from "../../api/post-api/postApi"

const PostDetail = () => {
    const router = useRouter()
    const { id_post } = router.query
    const { data, isSuccess, isLoading, isError } = useGetPostQuery(id_post)
    const [updatePost] = useUpdatePostMutation()
    const UpdatePost = async () => {
      updatePost(data)
    }
    return(
      <div>
        {isError && <h4 className="post-detail">... Something went wrong</h4>}
        {isLoading && <h4 className="post-detail">... Loading</h4>}
        {isSuccess && (
          <div className="post-detail">
            <span className="post-title">{data?.title}</span>
            <div className="post-body">
              <span className="post-body-text">{data?.body}</span>
            </div>
            <button
              className="button-Add"
              onClick={UpdatePost}
            >
              Update Post
            </button>
          </div>
        )}
      </div>
    )
}

export default PostDetail
