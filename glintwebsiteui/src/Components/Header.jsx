import './Header.css';
import './MediaHeader.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const route = useNavigate();

    const handleMenuPopup = () =>{
        setOpenMenu(true);
    }

    // const closeMenu = () => {
    //     setOpenMenu(false);
    // }

    return (
        <>
            <div className="screen-header">
                <div className="header-parent">
                    <div className="header-left">
                        <Link to={'/'}>
                            <img onClick={()=>route('/')} src="https://preview.colorlib.com/theme/glint/images/logo.png" alt="Glint Logo" />
                        </Link>
                    </div>
                    <div className="header-right" >
                        <span>MENU</span>
                        <i class="fa-solid fa-bars fa-lg" onClick={handleMenuPopup} ></i>
                        {openMenu && (<div className="popup-menu">
                            <span>Menu</span>
                            <a onClick={()=>setOpenMenu(false)}>X</a>
                        </div>) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;