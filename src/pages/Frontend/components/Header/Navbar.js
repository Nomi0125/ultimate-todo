import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const isAuthenticated =true
    const handleLogout =() =>{
        console.log("const")
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="" className="navbar-brand" >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            {isAuthenticated ?<> <Link to="/login" className=" btn btn-primary" >Dashboard</Link> <button onClick={handleLogout} className=" btn btn-danger">Logout</button></>
                            :<Link to="/login" className=" btn btn-primary" >Login</Link>
                            }
                            

                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
