import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (  
        <>
            
            <footer>
            <div class="footer">
            <div class="row">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            </div>

            <div class="row">
            <ul>
            <li><Link to='/contact'>Contact us</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
            </ul>
            </div>

            <div class="row">
             AeroSearch Copyright © 2023 AeroSearch - All rights reserved || Designed By: Sunil
            </div>
            </div>
            </footer>
        </>
    );
}

export default Footer;