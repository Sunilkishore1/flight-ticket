import React from 'react';
import { Link} from 'react-router-dom';
import icon from '../assets/iconSearch.png';
import logo from '../assets/logo.png';
import profile from '../assets/userIcon.png';
function NavBar() {
    return (
        <div className='container'>
            <div className='company'>
            <img src={logo}></img>
            <h1 id='company-name'>AeroSearch</h1>

            </div>
            <div className='tools'>
                <Link to={'/flights'}>All flight</Link>
                <Link to={'/'}>Schedule</Link>
                <Link to={'/'}>Passangers</Link>
                <Link to={'/'}>Your orders</Link>
            </div>
            <div className='third-nav'>
                <div className='search'>
                    <input type='text' placeholder='search flight'></input>
                    <button id='search-button'><img src={icon}></img></button>
                </div>
                <div className='profile'>
                    <Link to={'/'}><img src={profile}></img></Link>
                    <h3>NameOfUser</h3>
                </div>
            </div>
        </div>
      );
}

export default NavBar;