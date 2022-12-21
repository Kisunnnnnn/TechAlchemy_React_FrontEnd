import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'
const initialState = {
    email: "",
    password: ""
}
const alertInitial = {
    Type: "",
    Message: "",
    Show: false
}
const Login = () => {
    const [loginData, setLoginData] = useState(initialState)
    const [alert, setAlert] = useState(alertInitial)
    const [valid, setValid] = useState([])
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    useEffect(() => {
        setAlert(alertInitial)
        // localStorage.removeItem("name")
        // localStorage.removeItem("role")
    }, [loginData.email, loginData.password])

    const onHandleInputChange = (event) => {
        setLoginData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
        setValid(prevState => {
            return {
                ...prevState,
                [event.target.name]: ''
            }
        })
    }

    const checkValidation = () => {
        let isValid = true, validationMessage = {}
        validationMessage = { ...initialState }
        let validations = loginData
        for (let val in validations) {
            if (validations[val] === "" || validations[val] === undefined) {
                validationMessage[val] = 'is-invalid'
                isValid = false
            }
        }
        setValid(validationMessage)
        return isValid

    }

    const onHandleLoginClick = async () => {

        if (checkValidation()) {

            const resp = await axios.post('/login', loginData)

            if (resp.data.error === false) {

                localStorage.setItem('name', resp.data.data.name)
                localStorage.setItem('email', resp.data.data.email)
                navigate('/home')
                window.location.reload()
            }
            else {
                setAlert(prevState => {
                    return {
                        ...prevState,
                        Show: true,
                        Message: resp.data.message,
                        Type: "danger"
                    }
                })
            }
            // const { email, password } = loginData

            // if (email === "admin@gmail.com" && password === "admin123") {
            //     dispatch(actions.setLogin({ role: "admin", name: "Admin" }))
            //     localStorage.setItem("name", "Admin")
            //     localStorage.setItem("role", "admin")
            //     navigate('/adminDashboard')
            // }
            // else if (Email === "user@gmail.com" && Password === "user123") {
            //     dispatch(actions.setLogin({ role: "user", name: "User" }))
            //     localStorage.setItem("name", "User")
            //     localStorage.setItem("role", "user")
            //     navigate('/userDashboard')
            // }
            // else if (Email === "user1@gmail.com" && Password === "user2004") {
            //     dispatch(actions.setLogin({ role: "user", name: "User 1" }))
            //     localStorage.setItem("name", "User 1")
            //     localStorage.setItem("role", "user")
            //     navigate('/userDashboard')
            // }
            // else {
            //     setAlert(prevState => {
            //         return {
            //             ...prevState,
            //             Show: true,
            //             Message: "No such user exists",
            //             Type: "danger"
            //         }
            //     })
            // }
        }

    }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                {alert.Show && <div className={`alert alert-${alert.Type}`} role="alert" id="alertShow">
                    {alert.Message}
                </div>}
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <center><h3>Login Here!</h3></center>
                            <div className="form-outline mb-4 mt-3">
                                <input type="email" id="form3Example3" name="email" value={loginData.email} className={`form-control form-control-lg ${valid['email'] ? 'is-invalid' : ""}`} placeholder="Enter a valid email address" onChange={onHandleInputChange} />

                                {valid['email'] && <label className="text-danger">Please enter your email</label>}
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" name="password" value={loginData.password} className={`form-control form-control-lg ${valid['password'] ? 'is-invalid' : ""}`} placeholder="Enter password" onChange={onHandleInputChange} />
                                {valid['password'] && <label className="text-danger">Please enter your password</label>}
                            </div>
                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg pl-3 pr-3" onClick={onHandleLoginClick}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Login