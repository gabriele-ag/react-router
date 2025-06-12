import { useEffect, useState } from "react"
import axios from "axios"


function ListPost() {
    const [postList, setNewList] = useState([])

    const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((resp) => {
                const postData = resp.data.slice(0, 15)
                setNewList(postData)
                console.log(postData)
            })
    }, [])


    return (

        <div className="container my-p">
            <h1>List Posts</h1>
            <div>
                <ul>
                    {postList.map((curPost, index) => (
                        <li key={index}>
                            <div className="card">
                                <h3>{curPost.title}</h3>
                                <p>{curPost.body}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListPost