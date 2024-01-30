import { useState } from 'react';
import './Header.css';
// import Home from '../Pages/Home';-
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const handleClick = (path) => {
        setActiveLink(path)
    }
    return (
        <>
            <div className="screen-header">
                <div className="header-parent">
                    <div className="header-child-1">
                        <div className="child-1-left">
                            <div className="child-1-left-en">
                                <select name="english" id="">
                                    <option value="En">EN</option>
                                </select>
                            </div>
                            <div className="child-1-left-usd">
                                <select name="usd" id="">
                                    <option value="usd">USD</option>
                                </select>
                            </div>
                        </div>
                        <div className="child-1-right">
                            <div className="child-1-right-1">
                                <span>+1 234 567 8900</span>
                            </div>
                            <div className="child-1-right-2">
                                <span>Sign in</span>
                            </div>
                            <div className="child-1-right-3">
                                <span>Register</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-child-2">
                        <div className="header-child-2-left">
                            <Link to={'/'}>
                                <span>List</span>
                                <span>Race</span>
                            </Link>
                        </div>
                        <div className="header-child-2-right">
                            <ul>
                                <li className={activeLink === '/' ? `active` : ''}>
                                    <Link to={'/'} onClick={() => handleClick('/')}>
                                        Home
                                    </Link>
                                </li>
                                <li className={activeLink === '/how-it-works' ? 'active' : ''}>
                                    <Link to={'/how-it-works'} onClick={() => handleClick('/how-it-works')}>
                                        How it Works
                                    </Link>
                                </li>
                                <li className={activeLink === '/explore' ? 'active' : ''}>
                                    <Link to={'/explore'} onClick={() => handleClick('/explore')}>
                                        Explore
                                    </Link>
                                </li>
                                <li className={activeLink === '/review' ? 'active' : ''}>
                                    <Link to={'/review'} onClick={() => handleClick('/review')}>
                                        Review
                                    </Link>
                                </li>
                                <li className={activeLink === '/blog' ? 'active' : ''}>
                                    <Link to={'/blog'} onClick={() => handleClick('/blog')}>
                                        Blog
                                    </Link>
                                </li>
                                <li className={activeLink === '/contact' ? 'active' : ''}>
                                    <Link to={'/contact'} onClick={() => handleClick('/contact')}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Home /> */}
        </>
    )
}

export default Header;