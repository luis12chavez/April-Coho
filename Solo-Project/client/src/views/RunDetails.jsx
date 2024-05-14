import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const RunDetails = (props) => {

    const { id } = useParams()
    const [run, setRun] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/runs/${id}/details`)
            .then((res) => {
                console.log(res.data)
                setRun(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <>
            <h1>{run.name}</h1>
            <div class="card text-bg-info mb-3" style={{ maxWidth: "50rem" }}>
                <div class="card-header">Run Details:</div>

                <div class="card-body">
                    <h5 class="card-title">About</h5>
                    <p class="card-text">{run.description}</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Location</h5>
                    <p class="card-text">{run.location}</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Uploaded By</h5>
                    <p class="card-text">{run.userId}</p>
                </div>
            </div>

        </>
    )
}
export default RunDetails