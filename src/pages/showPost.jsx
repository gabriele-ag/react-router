import {useParams, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"


function ShowPost() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(null)
    
    const apiUrl = (`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((resp) => {
                setPost(resp.data)
            })
            .catch((error) => {
                if (error.status === 404) {
                navigate("/not-found")
                }
            })


    }, [id])

    return (
        <main>
            <div>
               {post === null ? (
                    <h1>Caricamento...</h1>
                ) : (
                    <h1>{post.title}</h1>
                )}
            </div>
        </main>
    )
}

export default ShowPost