import {useState} from "react"
import { useNavigate, useParams, NavLink} from "react-router-dom"
import axios from "axios"

function Home() {
    // const {id} = useParams()
    const navigate = useNavigate()

   const initialFormData = {
        author: "",
        title: "",
        body: "",
        public: false,
    }

    // Definisco gli stati
    const [formData, setFormData] = useState(initialFormData)
    const [showAlert,  setShowAlert] = useState(false)


    // Gestione modifiche al form
    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        console.log(name, value, checked, type);

        setFormData({...formData, [name]: type === "checkbox" ? checked : value})
        // [name] è la variabile

    }

    // Gestisco l'invio dei dati al server
    const sendData = (event) => {
        event.preventDefault();

        axios
            .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then((resp) => {
                console.log(resp)
                    if(resp.data.id) {
                        setFormData(initialFormData)
                        navigate(`/posts/${resp.data.id}`);
                        setTimeout(() => {
                            setShowAlert(true);

                        },4000);
                    } else {
                        setTimeout(() => {
                            setShowAlert(false);

                        },4000);

                    }
            })
    };


    return (
        <>
                <div className="container my-4">
                    <h1>Home</h1>
                    <h3>Crea il tuo post</h3>
                    <div className="card">
                        <div className="card-body">
                                {showAlert && (
                                    <div className="alert alert-success">
                                        Dati inviati correttamente
                                    </div>
                                    )}
                            <form 
                            onSubmit={sendData}>

                            <div className="mb-3">
                                <label 
                                htmlFor="" 
                                className="form-label">Inserisci l'autore</label>
                                <input 
                                type="text" 
                                aria-describedby="author"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}/>      
                            </div>

                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Inserisci titolo del post</label>
                                <input 
                                type="text"
                                name="title"
                                aria-describedby="title-post"
                                value={formData.title}
                                onChange={handleChange}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="textforpost" className="form-label">Inserisci testo del post</label>
                                <textarea 
                                type="text"
                                name="body"
                                aria-describedby="body-post"
                                onChange={handleChange}
                                value={formData.body}/>
                            </div>

                            <div>
                                <label htmlFor="" className="form-label">Publica?</label>
                                <input 
                                type="checkbox"
                                name="public"
                                aria-describedby="public-or-not"
                                onChange={handleChange}
                                checked={formData.public}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Inserisci</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
}


export default Home