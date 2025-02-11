import React from 'react'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
export const  App = () => {
    return (
        <div className='cosi'>
            <Header/>
            <div className='hero'>
                <div className='container hero__container'></div>
            </div>
            <Outlet/>
        </div>
    )
}