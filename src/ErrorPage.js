import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <section>
            <h2>Nothing here please return home</h2>
            <Link to={'/'}>
                <h4>Home</h4>
            </Link>
        </section>
    )
}

export default ErrorPage;