import React from 'react';
import { Link} from 'react-router-dom';
import icon from '../assets/iconSearch.png';
import logo from '../assets/logo.png';
import avatar from '../assets/userIcon.png'
import {useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

import { Input } from '@chakra-ui/react';

export default function NavBar() {
    const user = useSelector(selectUser);
    const [open,setOpen]=useState(false);
    // const [open, setOpen] = useState(false);

  let menuRef = useRef();

    return (
        <div className='container-nav'>
            <div className='company'>
            <img src={logo}></img>
            <h1 id='company-name'>AeroSearch</h1>

            </div>
            <div className='tools'>
                <Link to={'/'}>Home</Link>
                <Link to={'/schedules'}>Schedule</Link>
                <Link to={'/booked'}>Booked Flights</Link>
            </div>
            <div className='third-nav'>
                <div className='search-bar'>
                    <input type='text' placeholder='Search..' ></input>
                </div>
                <div className='menu-container' ref={menuRef}>
                    <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                        <img src={avatar} />
                    </div>

                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                        <div className='dd-flex'>
                            <h2>{user.username}</h2>
                            <hr></hr>
                            <Link to={'/profile'}>Profile</Link>
                            <Link to={'/customer'}>Support</Link>
                            <Link to={'/login'}>Logout</Link>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
      )
    }