import React from 'react'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
export const  App = () => {
    return (
        <div>
            <Header/>
            <div>
                <h1>hih</h1>
            </div>
            <Outlet/>
        </div>
    )
}