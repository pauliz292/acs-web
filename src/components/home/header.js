import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../../_services/authService';

export default function Header() {

    const history = useHistory();

    const onLogOut = e => {
        e.preventDefault();
        auth.logout();
        history.push('/');
    }
    
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="fake">
                        <i className="fas fa-bars" /></a>
                    </li>
                </ul>
            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button className="btn btn-default" onClick={onLogOut}>
                        <i className="fas fa-sign-out-alt" /><span> Log Out</span>
                    </button>
                </li>
            </ul>
            </nav>
        </div>
    )
}
