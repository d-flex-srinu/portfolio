import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Portfolio />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App