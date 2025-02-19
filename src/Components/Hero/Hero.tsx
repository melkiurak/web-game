import React from "react";
import date from '../../assets/Hero/date.png'
import matacritic from '../../assets/Hero/metacritic.png';
import {  HeroProps } from "../../types/types";
import arrowNext from '../../assets/Hero/arrowNext.png';
import arrowPrew from '../../assets/Hero/arrowPrew.png';

export const Hero: React.FC<HeroProps> = ({data, slide, setSlide}) =>{

    const buutonNext = () => {
        if(slide < data?.games.edges.length - 1){
            setSlide(slide + 1);
        }
    };
    const buutonPrev = () => {
        if(slide > 0){
            setSlide(slide - 1);
        }
    };
    return (
        <div className="hero">
            {data?.games.edges.map((edge, index) => 
                index === slide ? (
                    <div key={edge.node.objectId} className="hero__container container"> 
                        <div className="hero__info">
                            <div className="hero__text">
                                <h1>{edge.node.name}</h1>
                                <p>{edge.node.description}</p>
                            </div>
                            <div className="hero__details">
                                <div className="hero__ratingDate">
                                    <div className="hero__score">
                                        <img src={matacritic} alt="Metacritic Score" />
                                        <span className="hero__metacriticScore">{edge.node.metacriticScore}</span>  
                                        <span className="hero__metacriticScoreMax">/{edge.node.metacriticScoreMax}</span>
                                    </div>
                                    <div className="hero__date">
                                        <img src={date} alt="Release Date" />
                                        <span>{new Date(edge.node.date).toLocaleDateString("en-US", {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}</span>
                                    </div>
                                </div>
                                <div className="hero__platform-genre">
                                    <div className="hero__platforms">
                                        <span>Available For:</span>
                                        <ul className="hero__list">
                                            {edge.node.platform.map((platform, index) => (
                                                <li key={index}>{platform.value}{index < edge.node.platform.length - 1 ? ' - ' : ''}</li>                                            
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hero__genre">
                                        <span>Genre:</span>
                                        <p>{edge.node.genre}</p>
                                    </div>
                                </div>
                                <div className="hero__buttons-platforms">
                                    {edge.node.platform.map((platform, index) => (
                                        <button key={index}>{platform.value}</button>
                                    ))}
                                </div>
                                <div className="hero__action-buttons">
                                    <button className="hero__buttons-buy">Buy Now</button>
                                    <button className="hero__buttons-review">Game review</button>
                                </div>
                            </div>
                        </div>
                        <div className="hero__banner">
                            <div className="hero__navigation">
                                <div className="hero__text-popular">
                                    <p>The Most <span>Popular</span> Games</p>
                                </div>
                                <div className="hero__slide-controls">
                                    <button className="hero__slide-prev" style={{border: slide > 0 ? '1px solid #FFFFFF' : '1px solid #979797', cursor:  slide > 0 ? "pointer" : 'auto'}} onClick={buutonPrev}><img src={arrowPrew} style={{color: slide > 0 ? '#FFFFFF' : '#979797'}} alt="" /></button>
                                    <button className="hero__slide-next" style={{border: slide < data?.games?.edges.length - 1  ? '1px solid #FFFFFF' : '1px solid #979797', cursor: slide < data?.games.edges.length - 1 ? 'pointer' : 'auto'}} onClick={buutonNext}><img src={arrowNext} style={{color: slide < data?.games.edges.length - 1 ? '#FFFFFF' : '#979797'}} alt="" /></button>
                                </div>
                            </div>
                            <div className="hero__thumbnails">
                                {data?.games.edges.map((edge, index) => (
                                    <div key={edge.node.objectId} className={`hero__slide-thumbnail ${slide === index ? 'active' : ''}`} style={{border: slide === index ? '1px solid #FF5733' : 'none', borderRadius: 4,position: 'relative'}}>
                                        <img src={edge.node.BannerImg.url}  alt="Game Banner" />
                                        {slide === index && (
                                            <div className="hero__overlay" style={{ display: 'flex', alignItems: 'end', padding: '0 0 16px 8px', color: '#FFFFFF', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '4px', background: 'linear-gradient(to top, #000000, rgba(0, 0, 0, 0) 40%)' }}>{edge?.node.name}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null
            )}
        </div>
    )
}