import React from 'react'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import { GET_GAMES } from "../service/gamedata";
import { useQuery } from '@apollo/client';
import { GamesData } from '../types/types';
export const  App = () => {
    const {data} = useQuery<GamesData>(GET_GAMES);
    return (
        <div className='cosi'>
            <Header/>
            <div className='hero'>
                {data?.games.edges.map((edge:any) => (
                    <div key={edge.node.objectId} className='container hero__container' style={{
                        backgroundImage: `
                            linear-gradient(to left, rgba(28, 27, 41, 0), rgba(28, 27, 41, 1) 76.5%),
                            linear-gradient(to top, rgba(28, 27, 41, 1), rgba(28, 27, 41, 0) 20%),
                            url('${edge.node.BackgroundTop.url}')
                        `,
                    }}> 
                    </div>
                ))}
            </div>
            <div>
            </div>
            <Outlet/>
        </div>
    )
}