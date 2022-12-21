import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const navigate = useNavigate()

    const style = {
        cursor: "pointer"
    }
    const onLogoutClickHandler = () => {
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        navigate("/")
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tech Alchemy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {!email && <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/weatherData'>Weather</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Signin</Link>
                            </li>
                        </ul>}
                        {email && <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <div onClick={onLogoutClickHandler}>
                                    <i className="fa fa-sign-out ml-2 mt-2" style={style}></i>
                                </div>
                            </li>
                            <li className="nav nav-item">
                                <i className="fa fa-user ml-2 mt-2"></i><b className='mt-1 ml-2'>Welcome , {name}</b>
                            </li>

                        </ul>}


                    </div>
                </div>
            </nav>

        </div>
    )

}
export default Header