import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Link, link } from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link to="/">
                        <a className="nav-link" href="/">

                            <i className="fas fa-fw fa-tachometer-alt"></i>


                            <span>Dashboard - DH movies</span></a>
                    </Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link to="/pages">
                        <a className="nav-link collapsed" href="/">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link to="/chart">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link to="/tables">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

        </React.Fragment>
    )
}
export default SideBar;