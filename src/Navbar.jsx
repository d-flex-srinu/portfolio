import React from 'react';
import logo from './photos/image 11.png'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid gap-lg-4">
                    <a class="navbar-brand " href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <a class="navbar-brand " href="#"><img src={logo} alt="" /></a>
                        <ul class="navbar-nav d-flex ali ms-auto  mb-2 mb-lg-0 ">
                            <li class="nav-item px-2">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">About <span>Us</span></a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">News</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">Softwares</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#"><span>Satisfied</span> Customers</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">Services</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">Contact <span>Us</span></a>
                            </li>
                        </ul>
                        <form class="d-flex d-lg-none ">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
