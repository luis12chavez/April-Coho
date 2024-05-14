import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
    const navigate = useNavigate()
    const [runs, setRuns] = useState([])
    const { accountUpdater } = props
    const { currentAccount } = props
    const { currentRun } = props


    // Grabbing All runs posted to DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/runs', { withCredentials: true })
            .then((res) => {
                console.log(res)
                setRuns(res.data)
                console.log('LINE 16: Dashboard.jsx', runs)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const logoutHandler = () => {

        // e.preventDefault()
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                accountUpdater({})
                navigate('/')
            })
            .catch((err) => {
                console.log('Could not logout')
                console.log(err)
                // setErrors(err.response.data.error.errors)
            })
    }



    return (
        <>
            <h1>{currentAccount.fName}</h1>
            <div className=" p-2 border-bottom border-top row text-center align-items-center ">
                <div className="col">
                    <h1>Dashboard</h1>
                </div>

                <div className="col">
                    <button onClick={logoutHandler}>Logout</button>
                </div>
            </div>

            <table class="table align-middle mb-0 bg-grey">
                <thead class="bg-light">
                    <tr>
                        <th>Run Name</th>
                        <th>Location(State)</th>
                        <th>Uploaded By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        runs.map((run) => (

                            <tr key={run._id}>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="ms-3">
                                            <Link class="fw-bold mb-1" to={`/run/${run._id}/details`}>{run.name}</Link>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <p class="fw-normal mb-1">{run.location}</p>
                                </td>
                                <td>
                                    <p>
                                        <Link to={`/users/${run.userId}/profile`}>View User's Posts</Link>
                                    </p>

                                </td>
                                <td>
                                    <p class="fw-normal mb-1">
                                        {
                                            currentAccount._id == run.userId ? <Link to={`/runs/${run._id}/edit`}>Edit</Link> : <p>N/A</p>
                                        }
                                    </p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Dashboard