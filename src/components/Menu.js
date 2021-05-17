import React from "react";
import {Link} from "react-router-dom";

/***
 *  Link will show the router path
 *  Already we declare the path inside the router
 *  Router will output the component view
 *   Link -> Path -> Router
 *                   -> has Path
 *                   -> has Component
 * 
 *                                 ----------------------------------------- 
 *                                 |            Router                     |
 *                                 -----------------------------------------
 *          /about                 |
 *          /contact               |
 *          /music                 |
 *           Path ---------------->|
 *                                 |
 *                                 |
 *                                 |
 *                                 |
 *           About                 |
 *           Music                 |
 *           Contact               |
 *           Components ---------->|
 *                                 |
 * 
 * 
 * 
 * 
 * 
 */
export default function Menu() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-success">
            <div className="container">
                <Link to="/" className="navbar-brand">Music Player</Link>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/music" className="nav-link">Music</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
