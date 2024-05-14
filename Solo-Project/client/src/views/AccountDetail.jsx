import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const AccountDetail = () => {

    const navigate = useNavigate()
    const [account, setAccount] = useState({})
    const [runs, setRuns] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then((res) => {
                console.log(res.data)
                setAccount(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/runs/${id}`)
            .then((res) => {
                console.log('LINE 28: AccountDetails.jsx ', res.data)
                setRuns(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    runs.map((run) => (
                        <div key={run._id} class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">{run.name}</h5>
                                    <p class="card-text">
                                        {run.description}
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated {run.updatedAt}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AccountDetail

{/* <div key={run._id} class="col">
<div class=" text-bg-info card">
    <div class="card-body">
        <h5 class="card-title">{run.name}</h5>
        <p class="card-text">
            {run.description}
        </p>
        <p class="card-text">{run.location}</p>
    </div>
</div>
</div> */}