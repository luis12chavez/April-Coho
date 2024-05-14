import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

const LoginPage = (props) => {


    const navigate = useNavigate()

    // Register Setup
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState({})
    const { accountUpdater } = props

    const fNameHandler = (e) => {
        setFName(e.target.value)
    }
    const lNameHandler = (e) => {
        setLName(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }

    const registerHandler = (e) => {
        e.preventDefault()
        console.log('Registering Handler')

        axios.post('http://localhost:8000/api/users', { fName, lName, email, password, confirmPassword }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate('/home')
            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data)
                setErrors(err.response.data.error.errors)
            })
    }

    // Login Setup
    const [account, setAccount] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value })
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/login', account, { withCredentials: true })
            .then((res) => {
                console.log('Res Data: ', res.data)
                accountUpdater(res.data)
                console.log('LINE 65: LoginPage.jsx ', account)
                setAccount(account)
                navigate('/home')
            })
            .catch((err) => {
                console.log('Could not login')
                console.log('LINE 73: LoginPage.jsx ', err.response.data)
                setErrors(err.response.data)
            })
    }


    return (
        <>
            <h1>Coast</h1>
            <h3>Find your drive</h3>

            <div className="container">
                <div class="row mb-4">
                    <div class="col">
                        <form onSubmit={registerHandler}>

                            <div class="row mb-4">
                                <div class="col">
                                    <div className="form-outline">
                                        {/* <label htmlFor="fName">First Name</label> */}
                                        <input class="form-control" placeholder='First Name' type="text" value={fName} onChange={fNameHandler} />
                                        {errors.fName && <p className="err-Msg">{errors.fName.message}</p>}
                                    </div>
                                </div>

                                <div class="col">
                                    {/* <label htmlFor="lName">Last Name</label> */}
                                    <input class="form-control" placeholder='Last Name' type="text" value={lName} onChange={lNameHandler} />
                                    {errors.lName && <p className="err-Msg">{errors.lName.message}</p>}
                                </div>
                            </div>


                            <div class="form-outline mb-4">
                                {/* <label htmlFor="email">Email</label> */}
                                <input class="form-control" placeholder='First Name' type="email" value={email} onChange={emailHandler} />
                                {errors.email && <p className="err-Msg">{errors.email.message}</p>}
                            </div>


                            <div class="form-outline mb-4">
                                {/* <label htmlFor="password">Password</label> */}
                                <input placeholder='Password' class="form-control" type="text" value={password} onChange={passwordHandler} />
                                {errors.password && <p className="err-Msg">{errors.password.message}</p>}
                            </div>


                            <div class="form-outline mb-4">
                                {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
                                <input placeholder='Confirm Password' class="form-control" type="text" value={confirmPassword} onChange={confirmPasswordHandler} />
                                {errors.confirmPassword && <p className="err-Msg">{errors.confirmPassword.message}</p>}
                            </div>

                            <button class="btn btn-secondary btn-floating mx-1">Create Account</button>

                        </form>
                    </div>


                    <div class="col">
                        <form onSubmit={loginSubmitHandler}>
                            <div class="form-outline mb-4">
                                {/* <label class="form-label" htmlFor="email">Email</label> */}
                                <input placeholder='Email' class="form-control" type="email" value={account.email} name="email" onChange={changeHandler} />
                                {errors && <p className="err-Msg">{errors.message}</p>}

                            </div>

                            {/* <label htmlFor="password">Password</label> */}
                            <input placeholder='Password' class="form-control" type="password" name="password" onChange={changeHandler} value={account.password} />
                            {errors && <p className="err-Msg">{errors.message}</p>}
                            
                            <button class="btn btn-primary floating mx-1">Sign in</button>
                        </form >
                    </div>
                </div >
            </div>
        </>
    )
}
export default LoginPage