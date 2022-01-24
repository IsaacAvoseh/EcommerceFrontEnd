import React from 'react'
import '../App.css';

export default function Header(props) {
    return (
        <div className="header">
        <div className="container">
            <h1 id="title">{props.title}</h1>
            <nav className="navbar head3 navbar-expand-lg ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link anc2" aria-current="page" href="index.html">Home .</a>
                </li>
                <li className="nav-item">
                <a className="nav-link anc2" href="pages.html">pages</a>
                </li>
                <li className="nav-item">
                <a className="nav-link anc2 active" href="#">. {props.title}</a>
                </li>
            </ul>
            </nav>
        </div>
    </div>
    )
}
