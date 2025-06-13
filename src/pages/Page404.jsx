import { Link, useNavigate } from "react-router-dom";

function Page404() {
const navigate = useNavigate()

    return (
        <main>
            <section>
                <h1>404 Pagina non trovata</h1>
                <div>
                    <Link to="/posts">Torna alla pagina dei Post</Link>
                    <Link onClick={(event) => {
                        event.preventDefault();
                        navigate("/")
                    }}
                        >Torna alla Home e crea un nuovo post!</Link>
                </div>
            </section>
        </main>
    );
}

export default Page404

