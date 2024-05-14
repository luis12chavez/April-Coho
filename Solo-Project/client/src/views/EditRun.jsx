import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const EditRun = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    const [editedRun, setEditedRun] = useState({})
    const [errors, setErrors] = useState({})


    const changeHandler = (e) => {
        setEditedRun({ ...editedRun, [e.target.name]: e.target.value })
    }

    // Grab run filtered by ._id
    useEffect(() => {
        axios.get(`http://localhost:8000/api/runs/${id}/details`)
            .then(res => {
                console.log(res)
                setEditedRun(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const updateHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/runs/${id}`, editedRun)
            .then(res => {
                console.log('LINE 33: EditRun.jsx ', res)
                navigate('/home')
            })
            .catch(error => {
                console.log('Line 37: EditRun.jsx ', error.response.data.errors)
                setErrors(error.response.data.errors)
            })
    }

    const deleteRun = () => {
        axios.delete(`http://localhost:8000/api/runs/${id}`)
            .then((res) => {
                console.log(res.data)
                navigate('/home')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <form onSubmit={updateHandler} class="border border-dark p-2 border-5 rounded">
                <div class="form-outline" data-mdb-input-init>
                    <label htmlFor="name" class="form-label">Run Name</label>
                    <input type="text" name="name" value={editedRun.name} onChange={changeHandler} class="form-control" />
                    {errors.name && <p className="err-Msg">{errors.name.message}</p>}
                </div>

                <div class="form-outline" data-mdb-input-init>
                    <label class="form-label" htmlFor="location">Location</label>
                    <input type="text" name="location" value={editedRun.location} onChange={changeHandler} class="form-control" />
                    {errors.location && <p className="err-Msg">{errors.location.message}</p>}
                </div>

                <div class="form-outline" data-mdb-input-init>
                    <label class="form-label" for="textAreaExample">Description</label>
                    <textarea class="form-control" value={editedRun.description} onChange={changeHandler} name="description" rows="4"></textarea>
                    {errors.description && <p className="err-Msg">{errors.description.message}</p>}
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-primary mt-2" data-mdb-ripple-init>Update</button>
                    <button onClick={deleteRun} class="btn btn-danger mt-2" data-mdb-ripple-init>Delete</button>
                </div>
            </form>
        </>
    )
}
export default EditRun