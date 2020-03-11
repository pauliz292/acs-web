import React from 'react';

export default function SideBar() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">A.C.S v1.1</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="user" />
                    </div>
                    <div className="info">
                        <a href="fake" className="d-block">Alexander Pierce</a>
                    </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                            with font-awesome or any other icon font library */}
                        <li className="nav-item has-treeview menu-open">
                        <a href="fake" className="nav-link active">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>
                            Dashboard
                            <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="./index.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Patients</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="./index2.html" className="nav-link active">
                                <i className="far fa-circle nav-icon" />
                                <p>Appointments</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="./index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Transactions</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-header">MISCELLANEOUS</li>
                        <li className="nav-item">
                        <a href="https://adminlte.io/docs/3.0" className="nav-link">
                            <i className="nav-icon fas fa-file" />
                            <p>Documentation</p>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
