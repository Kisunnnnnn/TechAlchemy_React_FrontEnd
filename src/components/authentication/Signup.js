import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'
const initialState = {
    email: "",
    password: "",
    name: ""
}
const alertInitial = {
    Type: "",
    Message: "",
    Show: false
}
const Signup = () => {
    const [userData, setUserData] = useState(initialState)
    const [alert, setAlert] = useState(alertInitial)
    const [valid, setValid] = useState([])


    useEffect(() => {
        setAlert(alertInitial)
    }, [userData.email, userData.password, userData.name])

    const onHandleInputChange = (event) => {
        setUserData(prevState => {
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
        let validations = userData
        for (let val in validations) {
            if (validations[val] === "" || validations[val] === undefined) {
                validationMessage[val] = 'is-invalid'
                isValid = false
            }
        }
        setValid(validationMessage)
        return isValid

    }

    const onHandleSignupClick = async () => {

        if (checkValidation()) {
            const resp = await axios.post('/signup', userData)

            setAlert(prevState => {
                return {
                    ...prevState,
                    Show: true,
                    Message: resp.data.message,
                    Type: resp.data.error ? "danger" : "success"
                }
            })

        }


    }
    return (

        < section className="vh-100" >

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
                            <center><h3>Register Here!</h3></center>
                            <div className="form-outline mb-4 mt-3">
                                <input type="name" id="form3Example3" name="name" value={userData.name} className={`form-control form-control-lg ${valid['name'] ? 'is-invalid' : ""}`} placeholder="Enter your name" onChange={onHandleInputChange} />

                                {valid['name'] && <label className="text-danger">Please enter your name</label>}
                            </div>
                            <div className="form-outline mb-4 mt-3">
                                <input type="email" id="form3Example3" name="email" value={userData.email} className={`form-control form-control-lg ${valid['email'] ? 'is-invalid' : ""}`} placeholder="Enter a valid email address" onChange={onHandleInputChange} />

                                {valid['email'] && <label className="text-danger">Please enter your email</label>}
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" name="password" value={userData.password} className={`form-control form-control-lg ${valid['password'] ? 'is-invalid' : ""}`} placeholder="Enter password" onChange={onHandleInputChange} />
                                {valid['password'] && <label className="text-danger">Please enter your password</label>}
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg pl-3 pr-3" onClick={onHandleSignupClick}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Signup