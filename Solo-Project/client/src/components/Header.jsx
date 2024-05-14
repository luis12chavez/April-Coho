import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const Header = (props) => {
    // const [currentAccount, setCurrentAccount] = useState({})
    const { currentAccount } = props

    const [searchValue, setSearchValue] = useState("")
    const { runUpdater } = props

    const searchHandler = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }

    const searchForm = (e) => {
        e.preventDefault()

        axios.get(`http://localhost:8000/api/runs/${searchValue}/search`)
            .then((res) => {
                runUpdater(res.data)
                // setSearchValue('')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div class="container">
                <nav class="navbar navbar-expand-xl navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand"><Link to={'/run/new'}>New</Link></a>
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                        <div class="collapse navbar-collapse show" id="navbarBasic">
                            <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"><Link to={`/users/${currentAccount._id}/profile`}>Profile</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"> <Link to={'/home'}>Home</Link></a>
                                </li>
                            </ul>

                            <form onSubmit={searchForm} class="d-flex" >
                                <label htmlFor="searchValue" class="form-label"></label>
                                <input name="searchValue" type="text" value={searchValue} onChange={searchHandler} class="form-control me-2" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header