import React, { Component, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2';


function Dashboard() {

   useEffect(() => {
      console.log('mounted');
      const isReload = sessionStorage.getItem('isReload');
      // console.log(isReload);
      if (isReload == 'true') {
         console.log('ini true');
         sessionStorage.setItem('isReload', false)

         window.location.reload(true);

      } else {
         console.log('ini false');
      }
   });

   return (
      <div>
         {/* Content Wrapper. Contains page content */}
         <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
               <div className="container-fluid">
                  <div className="row mb-2">
                     <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Dashboard</h1>
                     </div>{/* /.col */}
                     <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                           <li className="breadcrumb-item"><a href="#">Home</a></li>
                           <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                     </div>{/* /.col */}
                  </div>{/* /.row */}
               </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
               <div className="container-fluid">
                  {/* Small boxes (Stat box) */}
                  <div className="row">
                     <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-info">
                           <div className="inner">
                              <h3>150</h3>
                              <p>Driver</p>
                           </div>
                           <div className="icon">
                              <i className="ion ion-person" />
                           </div>
                           <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                     </div>
                     {/* ./col */}
                     <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-success">
                           <div className="inner">
                              <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                              <p>Truck</p>
                           </div>
                           <div className="icon">
                              <i className="ion ion-android-bus" />
                           </div>
                           <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                     </div>
                     {/* ./col */}
                     <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-secondary">
                           <div className="inner">
                              <h3>44</h3>
                              <p>Company</p>
                           </div>
                           <div className="icon">
                              <i className="ion ion-briefcase" />
                           </div>
                           <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                     </div>
                     {/* ./col */}
                     <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-danger">
                           <div className="inner">
                              <h3>65</h3>
                              <p>Sparepart</p>
                           </div>
                           <div className="icon">
                              <i className="ion ion-android-settings" />
                           </div>
                           <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                     </div>
                     {/* ./col */}
                  </div>
                  {/* /.row */}
                  {/* Main row */}
                  <div className="row">
                     <div className="col-md-4">
                        <div className="card card-primary">
                           <div className="card-header">
                              <h3 className="card-title">Driver</h3>
                              <div className="card-tools">
                                 <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                    <i className="fas fa-minus" />
                                 </button>
                                 <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times" />
                                 </button>
                              </div>
                           </div>
                           {/* /.card-header */}
                           <div className="card-body p-0">
                              <ul className="products-list product-list-in-card pl-2 pr-2">
                                 <li className="item">
                                    <div className="product-img">
                                       <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-20" />
                                    </div>
                                    <div className="product-info">
                                       <a href="javascript:void(0)" className="product-title">Samsung TV
                                          <span className="badge badge-warning float-right">$1800</span></a>
                                       <span className="product-description">
                                          Samsung 32" 1080p 60Hz LED Smart HDTV.
                                       </span>
                                    </div>
                                 </li>
                                 {/* /.item */}
                                 <li className="item">
                                    <div className="product-img">
                                       <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                    </div>
                                    <div className="product-info">
                                       <a href="javascript:void(0)" className="product-title">Bicycle
                                          <span className="badge badge-info float-right">$700</span></a>
                                       <span className="product-description">
                                          26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                                       </span>
                                    </div>
                                 </li>
                                 {/* /.item */}
                                 <li className="item">
                                    <div className="product-img">
                                       <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                    </div>
                                    <div className="product-info">
                                       <a href="javascript:void(0)" className="product-title">
                                          Xbox One <span className="badge badge-danger float-right">
                                             $350
                                          </span>
                                       </a>
                                       <span className="product-description">
                                          Xbox One Console Bundle with Halo Master Chief Collection.
                                       </span>
                                    </div>
                                 </li>
                                 {/* /.item */}
                                 <li className="item">
                                    <div className="product-img">
                                       <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                    </div>
                                    <div className="product-info">
                                       <a href="javascript:void(0)" className="product-title">PlayStation 4
                                          <span className="badge badge-success float-right">$399</span></a>
                                       <span className="product-description">
                                          PlayStation 4 500GB Console (PS4)
                                       </span>
                                    </div>
                                 </li>
                                 {/* /.item */}
                              </ul>
                           </div>
                           {/* /.card-body */}
                           <div className="card-footer text-center">
                              <a href="javascript:void(0)" className="uppercase">View All Products</a>
                           </div>
                           {/* /.card-footer */}
                        </div>

                     </div>
                     <div class="col-md-4">
                        {/* Widget: user widget style 2 */}
                        <div className="card card-widget widget-user-2">
                           {/* Add the bg color to the header using any of the bg-* classes */}
                           <div className="widget-user-header bg-warning">
                              <div className="widget-user-image">
                                 <img className="img-circle elevation-2" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
                              </div>
                              {/* /.widget-user-image */}
                              <h3 className="widget-user-username">Nadia Carmichael</h3>
                              <h5 className="widget-user-desc">Lead Developer</h5>
                           </div>
                           <div className="card-footer p-0">
                              <ul className="nav flex-column">
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">
                                       Projects <span className="float-right badge bg-primary">31</span>
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">
                                       Tasks <span className="float-right badge bg-info">5</span>
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">
                                       Completed Projects <span className="float-right badge bg-success">12</span>
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">
                                       Followers <span className="float-right badge bg-danger">842</span>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        {/* /.widget-user */}

                        {/* /.row (main row) */}
                     </div>{/* /.container-fluid */}
                  </div>
               </div>
            </section>
            {/* /.content */}
         </div>

      </div>
   )
}

export default Dashboard
