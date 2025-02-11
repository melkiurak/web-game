import React from 'react';
import  controller from '../../assets/Header/controller.png';
import  gamingLogo from '../../assets/Header/gamingLogo.png';
import  prime from '../../assets/Header/Prime.png';
import search from '../../assets/Header/search.png';
export const  Header = () => {
    return (
        <header className='header'>
            <div className="header__container container"> 
                <div className="header__logos">
                    <div className="header__brand">
                        <img src={controller} alt="controller" className="header__brand-logo" /> 
                        <img src={prime} alt="prime" className="header__brand-logo" />
                    </div>
                    <img src={gamingLogo} alt="gamingLogo" className="header__main-gaming" />
                </div>
                <button className="header__search"> 
                    <img src={search} alt="search" className="header__search-icon" /> 
                </button>
                <nav className="header__navigation">
                    <ul className="header__nav">
                        <li className="header__nav-item"><a href="/" className="header__nav-link">Home</a></li>
                        <li className="header__nav-item"><a href="/news" className="header__nav-link">News</a></li>
                        <li className="header__nav-item"><a href="/store" className="header__nav-link">Store</a></li>
                        <li className="header__nav-item"><a href="/review" className="header__nav-link">Review</a></li>
                        <li className="header__nav-item"><a href="/guide" className="header__nav-link">Guide</a></li>
                        <li className="header__nav-item"><a href="/about" className="header__nav-link">About Us</a></li>
                    </ul>
                </nav>
                <div className="header__auth">
                    <button className="header__signup"> 
                        <span className="header__signup-text">Sign Up</span>
                    </button>
                    <button className="header__login"> 
                        <span className="header__login-text">Login</span> 
                    </button>
                </div>
                <div className="header__burger">
                    <button className="header__burger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>

    )
}
