import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
   render() {
      return (
         <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
               {/* Brand Logo */}
               <Link to="/" className="brand-link">
                  <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                  <span className="brand-text font-weight-bold">AdminLTE 3</span>
               </Link>
               {/* Sidebar */}
               <div className="sidebar">
                  {/* Sidebar user panel (optional) */}
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                     <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                     </div>
                     <div className="info">
                        <Link to="/" className="d-block">Administrator</Link>
                        {/* <a href="#" className="d-block">Administrator</a> */}
                     </div>
                  </div>
                  {/* Sidebar Menu */}
                  <nav className="mt-2">
                     <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                        {/* <li className="nav-item">
                           <a href="pages/widgets.html" className="nav-link">
                              <i className="nav-icon fas fa-th" />
                              <p>
                                 Widgets
                                 <span className="right badge badge-danger">New</span>
                              </p>
                           </a>
                        </li> */}
                        <li className="nav-item has-treeview">
                           <a href="#" className="nav-link">
                              <i className="nav-icon fas fa-copy" />
                              <p>
                                 Master Data
                                 <i className="fas fa-angle-left right" />
                                 <span className="badge badge-info right">6</span>
                              </p>
                           </a>
                           <ul className="nav nav-treeview">
                              <li className="nav-item">
                                 <Link to="/driver" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Driver</p>
                                 </Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="/" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Container</p>
                                 </Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="/" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Truck</p>
                                 </Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="/" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Company</p>
                                 </Link>
                              </li>
                           </ul>
                        </li>

                        <li className="nav-header">MAIN MENU</li>
                        <li className="nav-item">
                           <Link to="/maintenance" className="nav-link">
                              <i className="nav-icon far fa-calendar-alt" />
                              <p>
                                 Maintenance
                                 <span className="badge badge-info right">2</span>
                              </p>
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/" className="nav-link">
                              <i className="nav-icon far fa-image" />
                              <p>
                                 Report
                              </p>
                           </Link>
                        </li>

                     </ul>
                  </nav>
                  {/* /.sidebar-menu */}
               </div>
               {/* /.sidebar */}
            </aside>

         </div>
      )
   }
}
