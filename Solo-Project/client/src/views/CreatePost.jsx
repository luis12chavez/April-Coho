import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'



const CreatePost = () => {

    const navigate = useNavigate()
    const [run, setRun] = useState({
        name: '',
        location: '',
        description: ''
    })
    const changeHandler = (e) => {
        setRun({ ...run, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/runs', run, { withCredentials: true })
            .then((res) => {
                navigate('/home')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        < >
            <h1 class="text-center">New Run</h1>
            <form onSubmit={submitHandler} class="border border-primary p-2 border-5 rounded">
                <div class="form-outline" data-mdb-input-init>
                    <label htmlFor="name" class="form-label">Run Name</label>
                    <input type="text" name="name" value={run.name} onChange={changeHandler} class="form-control" />
                </div>

                <div class="form-outline" data-mdb-input-init>
                    <label class="form-label" htmlFor="location">Location</label>
                    <input type="text" name="location" value={run.location} onChange={changeHandler} class="form-control" />
                </div>

                <div class="form-outline" data-mdb-input-init>
                    <label class="form-label" for="textAreaExample">Description</label>
                    <textarea class="form-control" value={run.description} onChange={changeHandler} name="description" rows="4"></textarea>
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-primary mt-2" data-mdb-ripple-init>Create</button>
                </div>
            </form>
        </>
    )
}
export default CreatePost