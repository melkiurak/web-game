import React, { useState } from 'react'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Hero } from './Hero/Hero';
import { useQuery } from '@apollo/client';
import { GamesData } from '../types/types';
import { GET_GAMES } from '../service/gamedata';
export const  App = () => {
    const { data } = useQuery<GamesData>(GET_GAMES);
    const [slide, setSlide] = useState(0);

    return (
        <div className='wrapper'>
            <Header/>
            <Hero data={data} slide={slide} setSlide={setSlide}/>
            <Outlet/>
            <div className='background__slider'>
                {data?.games.edges.map((edge, index) =>(
                    index === slide && (
                        <div key={edge.node.objectId} className={`background__slide ${index === 0 ? 'first-slide' : ''}`} style={{backgroundImage: `url('${edge.node.BackgroundTop.url}')`, display: index === slide ? 'flex' : 'none', opacity: index === slide ? 1 : 0, visibility: index === slide ? 'visible' : 'hidden', transition: 'opacity 0.5s ease, visibility 0s 0.5s'}}></div>
                    )
                ))}
            </div>
        </div>
    )
}