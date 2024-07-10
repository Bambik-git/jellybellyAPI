import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css'

export const Navbar= () => {
    return (
        <nav className={'navbar'}>
            <div className="navigation">
                <Link className={'navigation_link'} to={'/'}>Main</Link>
                <Link className={'navigation_link'} to={'/Beans'}>Beans</Link>
                <Link className={'navigation_link'} to={'/Facts'}>Facts</Link>
                <Link className={'navigation_link'} to={'/Recipes'}>Recipes</Link>
                <Link className={'navigation_link'} to={'/Combinations'}>Combinations</Link>
                <Link className={'navigation_link'} to={'/History'}>History</Link>
            </div>
        </nav>
    )
}