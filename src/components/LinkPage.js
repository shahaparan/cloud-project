import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <section>
            <br />
            <h2>Public</h2>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/">Home</Link>
        </section>
    )
}

export default LinkPage
