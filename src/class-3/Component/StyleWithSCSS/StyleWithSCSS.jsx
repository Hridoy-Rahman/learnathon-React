import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

const StyleWithSCSS = () => {
    return (
        <div>
            <div className="nav">
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Login</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default StyleWithSCSS;