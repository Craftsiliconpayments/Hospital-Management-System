<template>
  <head>

    <meta charset="utf-8" />
    <title>Desk Birdy | Business Permits</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Rental management system by Nouveta LTD" name="description" />
    <meta content="Kelvin Njuguna" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">
    <!-- droping file -->
    <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
          type="text/css" />

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->

    <!-- owl.carousel css -->
    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.carousel.min.css">

    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.theme.default.min.css">

    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

  </head>

  <body @contextmenu.prevent data-sidebar="dark">


  <!-- Begin page -->
  <div id="layout-wrapper">



    <NavigationBar/>

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="content-minimize">

      <div class="page-content">
        <div class="container-fluid">

          <!-- start page title -->
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-18">Medical Certificate Quick Stats( Food Handler)</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="#">Certificates & Licenses</a></li>
                    <li class="breadcrumb-item"><a href="#">Medical Certificates</a></li>
                    <li class="breadcrumb-item active">Quick Stats</li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->

          <!-- tool bar -->
          <ToolBarMedical/>

          <!-- end of toolbar -->
          <div class="row">
            <div class="col-lg-12 px-sm-30px">
              <div class="card">
                <div class="card-body">
                  <div class="row">

                    <div class="col-sm-12 align-self-center text-capitalize">
                      <div class="text-lg-left mt-4 mt-lg-0">
                        <div class="row">
                          <div class="col-sm-6 col-md-2 col-lg-2 mb-5 mb-md-0">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-info font-size-16">
                                                                        <i class="mdi mdi-briefcase-edit text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Potential Businessess</p>
                              <h5 class="mb-0">{{numberFormat(certQuickStats.licenceCountSummary.potentialBusinesses)}}</h5>
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-2 col-lg-2 mb-5 mb-md-0">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle font-size-16">
                                                                        <i class="mdi mdi mdi-briefcase-check text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Invoiced Businesses</p>
                              <h5 class="mb-0">{{numberFormat(certQuickStats.licenceCountSummary.invoicedBusinesses)}}</h5>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-pink font-size-16">
                                                                        <i class="mdi mdi-progress-clock text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Unpaid Invoices</p>
                              <h5 class="mb-0">{{numberFormat(certQuickStats.licenceCountSummary.unPaidInvoices)}}</h5>

                            </div>
                          </div>
                          <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-whatsApp font-size-16">
                                                                        <i class="mdi mdi-progress-clock text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Paid Invoices</p>
                              <h5 class="mb-0">{{numberFormat(certQuickStats.licenceCountSummary.paidInvoices)}}</h5>

                            </div>
                          </div>

                          <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-warning font-size-16">
                                                                        <i class="mdi mdi-close text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Awaiting Approval</p>
                              <h5 class="mb-0">{{numberFormat(certQuickStats.licenceCountSummary.awaitingApproval)}}</h5>

                            </div>
                          </div>

                          <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-danger font-size-16">
                                                                        <i class="mdi mdi-clock-alert text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Active Certificates</p>
                              <h5 class="mb-0">{{numberFormat(certQuickStats.licenceCountSummary.activeCertificates)}}</h5>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>



                  </div>
                  <!-- end row -->
                </div>
              </div>
            </div>

            <div class="col-xl-12 px-sm-30px">
              <div class="row">
                <div class="col-lg-3">
                  <div class="card mini-stats-wid">
                    <div class="card-body">
                      <div class="d-flex flex-wrap">
                        <div class="me-3">
                          <p class="text-muted mb-2">Value of Pending Invoices</p>
                          <h5 class="mb-0 fw-bold">KES {{numberFormat(certQuickStats.licenceAmountSummary.pendingInvoicesSum)}}</h5>
                        </div>

                        <div class="avatar-sm ms-auto">
                          <div class="avatar-title bg-light rounded-circle text-danger font-size-20">
                            <i class="mdi mdi-account-cash"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body border-top py-3">
<!--                      <p class="mb-0"> From 34 Businesses</p>-->
                    </div>
                  </div>
                </div><!--end col-->
                <div class="col-lg-3">
                  <div class="card mini-stats-wid">
                    <div class="card-body">
                      <div class="d-flex flex-wrap">
                        <div class="me-3">
                          <p class="text-muted mb-2">Today's Collections</p>
                          <h5 class="mb-0 fw-bold">KES {{numberFormat(certQuickStats.licenceAmountSummary.todaysCollectionsSum)}}</h5>
                        </div>

                        <div class="avatar-sm ms-auto">
                          <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                            <i class="mdi mdi-calendar-text-outline "></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body border-top py-3">
<!--                      <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 18.89%</span> Target Margin</p>-->
                    </div>
                  </div>
                </div><!--end col-->
                <div class="col-lg-3">
                  <div class="card mini-stats-wid">
                    <div class="card-body">
                      <div class="d-flex flex-wrap">
                        <div class="me-3">
                          <p class="text-muted mb-2">This Month's Collections</p>
                          <h5 class="mb-0 fw-bold">KES {{numberFormat(certQuickStats.licenceAmountSummary.thisMonthsCollectionsSum)}}</h5>
                        </div>

                        <div class="avatar-sm ms-auto">
                          <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                            <i class="mdi mdi-calendar-month-outline "></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body border-top py-3">
<!--                      <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 8.41%</span> Target Margin</p>-->
                    </div>
                  </div>
                </div><!--end col-->
                <div class="col-lg-3">
                  <div class="card mini-stats-wid">
                    <div class="card-body">
                      <div class="d-flex flex-wrap">
                        <div class="me-3">
                          <p class="text-muted mb-2">This FY Collections</p>
                          <h5 class="mb-0 fw-bold">KES {{numberFormat(certQuickStats.licenceAmountSummary.financialYearCollectionsSum)}}</h5>
                        </div>

                        <div class="avatar-sm ms-auto">
                          <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                            <i class="mdi mdi-calendar-check-outline "></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body border-top py-3">
<!--                      <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 8.41%</span> Target Margin</p>-->
                    </div>
                  </div>
                </div><!--end col-->

              </div>
            </div>

            <div class="col-sm-12 col-md-6 px-sm-30px">
              <div class="card">

                <div class="card-header bg-white border-bottom">
                  <h4 class="card-title">Important Statistics</h4>
                </div>

                <div class="card-body">

                  <div>
                    <div class="table-responsive font-12" style="height: 450px; overflow-y: auto;">
                      <table class="table table-striped table-sm font-12 sources-table">
                        <thead class="table-dark">
                        <tr class="font-weight-bold">
                          <th scope="col">Sub County</th>
                          <th scope="col">Invoiced Vs Potential</th>
                          <th>Pending Invoices</th>
                          <th>Paid SBPs</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style="cursor: pointer;"
                            v-for="(item, index) in certQuickStats.statistics" :value="item" :key="index"
                        >
                          <td scope="row">{{item.subCountyName}}</td>
                          <td class="rNorth-alcohol">-</td>
                          <td class="table-danger">{{numberFormat(item.pendingCount)}} <span class="fw-bold text-dark">(Sh {{numberFormat(item.pendingTotal)}})</span></td>
                          <td class="table-success">{{numberFormat(item.paidCount)}} <span class="fw-bold text-dark">(Sh {{numberFormat(item.paidTotalSum)}}))</span></td>

                        </tr>



                        <!-- Continue replacing ward names in the same manner for other rows -->

                        <tr class="table-dark">
                          <th><strong>Total</strong></th>
                          <th class="alcoholTxt">-</th>

                          <td class="text-danger">{{numberFormat(totalPendingCount)}} <span class="fw-bold">(Sh {{totalPendingTotal}})</span></td>
                          <td class="text-success">{{numberFormat(totalPaidCount)}} <span class="fw-bold">(Sh {{totalPaidTotalSum}})</span></td>
                        </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-sm-12 col-md-6 px-sm-30px">
              <div class="card">

                <div class="card-header bg-white border-bottom">
                  <h4 class="card-title">Revenue Performance</h4>
                </div>
                <div class="card-body">
                  <div id="revenuePerfomanceFire"></div>
                </div>
              </div>
            </div>

          </div>

          <!-- end row -->
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->

      <!-- receipting modal -->
      <div class="modal fade receipting-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-full modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Business Details</h5>
              <span
                  class="badge rounded-pill bg-success text-uppercase font-12px text-uppercase mx-3">Active
                                Certificate</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <div class="hori-timeline mt-4">
                    <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel"
                         id="timeline-carousel">
                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Sep 2023 10:09 AM</div>
                            <h5 class="mb-4">Application</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">Kelvin Omondi</a></p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">15 Sep 2023 12:59 AM</div>
                            <h5 class="mb-4">Details Verification</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">By Kelvin Ouma</a></p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">20 Sep 2023 08:23 AM</div>
                            <h5 class="mb-4">Premices Inspection</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">By Alex Kinoti</a></p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">23 sep 2023 08:23 AM</div>
                            <h5 class="mb-4">Approval Of Application</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">By John King</a></p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">23 sep 2023 08:25 AM</div>
                            <h5 class="mb-4">issueance Of Certifcate</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">By John King</a></p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">By 31 Dec 2023 12:00 AM</div>
                            <h5 class="mb-4">Renewal</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bx-down-arrow-circle h1 text-info down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">-</a></p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4">
                  <div class="row">
                    <div class="col-12 mt-4">
                      <div class="bg-success border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bx-certification font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Certificate details</p>

                      </div>
                    </div>
                    <div class="col-12">
                      <div class="table-responsive">
                        <table
                            class="table table-nowrap vertical-align-middle table-striped table-sm">
                          <tbody>
                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Serial
                                No.</p>
                            </td>
                            <td class="">12345</td>

                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Last Paid for</p>
                            </td>
                            <td class="">12 Jan 2023</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Expiry
                                Date</p>

                            </td>
                            <td class="">31 Dec 2023</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Days
                                to expiry</p>

                            </td>
                            <td class="">204 Days</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Printing status</p>

                            </td>
                            <td class="">Printed</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Amount
                                Paid</p>

                            </td>
                            <td class="text-uppercase text-black fw-semibold">KES 25,000
                            </td>

                          </tr>




                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4">
                  <div class="row">
                    <div class="col-12 mt-4">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bx-briefcase-alt-2 font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Business Details</p>

                      </div>
                    </div>
                    <div class="col-12">
                      <div class="table-responsive">
                        <table
                            class="table table-nowrap vertical-align-middle table-striped table-sm">
                          <tbody>
                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Business
                                Name</p>
                            </td>
                            <td class="">Wireless Electronics</td>

                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Certificate of Incoporation No. </p>
                            </td>
                            <td class="">1234557768</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">KRA
                                Pin
                                No.</p>

                            </td>
                            <td class="">12345</td>

                          </tr>
                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">VAT
                                No.
                              </p>

                            </td>
                            <td class="">12345</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Business
                                Activity</p>

                            </td>
                            <td class="">Accomodation and Catering</td>
                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Business
                                Sub category</p>

                            </td>
                            <td class="">Small Lodging House</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4">
                  <div class="row">
                    <div class="col-12 mt-4">
                      <div class="bg-warning border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bxs-user-pin font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Owner Details</p>

                      </div>
                    </div>
                    <div class="col-12">
                      <div class="table-responsive">
                        <table
                            class="table table-nowrap vertical-align-middle table-striped table-sm">
                          <tbody>
                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Owner's Full Names</p>
                            </td>
                            <td class="">Mr Alex Wanjala Akinyi</td>

                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                ID/PPT No.</p>
                            </td>
                            <td class="">1234557768</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Owner's Fax</p>

                            </td>
                            <td class="">12345</td>

                          </tr>
                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Owner's Mobile No.</p>

                            </td>
                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Alternative Mobile No.</p>

                            </td>
                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                          </tr>



                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Postal
                                Address</p>

                            </td>
                            <td class="">12-1004 Nairobi</td>
                          </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>


                </div>

                <div class="col-sm-12 col-md-4">
                  <div class="row">
                    <div class="col-12 mt-4">
                      <div class="bg-danger border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bx-phone-call pin font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Location and Contact information</p>

                      </div>
                    </div>
                    <div class="col-12">
                      <div class="table-responsive">
                        <table
                            class="table table-nowrap vertical-align-middle table-striped table-sm">
                          <tbody>
                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Business Mobile No.</p>
                            </td>
                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Alternative Phone No</p>
                            </td>
                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                          </tr>



                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Business Email address</p>
                            </td>
                            <td class=""><a
                                href="mailto:email@email.com">email@email.com</a>
                            </td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold"> Sub
                                county</p>

                            </td>
                            <td class="">Homabay Town Sub county</td>

                          </tr>
                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Ward
                              </p>

                            </td>
                            <td class=""><a href="tel:0704549859">Rodi Township Ward</a>
                            </td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Physical address/Street</p>

                            </td>
                            <td class=""><a href="tel:0704549859">Along Moi Avenue
                              opposite cooperative Bank</a></td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Building Name</p>

                            </td>
                            <td class="">ALexis complex</td>

                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Stall/Room No.</p>

                            </td>
                            <td class="">122</td>

                          </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>


                </div>

                <div class="col-sm-12 col-md-8">
                  <div class="row">
                    <div class="col-12 mt-4">
                      <div class="bg-dark border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bx-map font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Map View</p>

                      </div>
                    </div>
                    <div class="col-12">
                      <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46449.71551863634!2d36.67523836781685!3d-1.3353441122372378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0cb9ff59a4a3%3A0x4073419e11826405!2sOrbital%20Africa%20%7C%20Land%20%26%20Topo%20Survey%2C%20GPS%2C%20GPR%2C%20GIS%2C%20Mapping%2C%20Drones%2C%20Training%20%26%20Geospatial%20Solutions!5e0!3m2!1sen!2ske!4v1691859398886!5m2!1sen!2ske" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </div>
            <div class="modal-footer">

              <a href="PrintDocs/Trade-Permit/permit.html" target="_blank" type="button"
                 class="btn btn-primary waves-effect waves-light">
                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Certificate
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- end of receipting modal -->

      <!-- invoice details -->
      <div class="modal fade invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Invoice Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="col-12">
                <address>
                  <strong>Billed To:</strong><br>
                  Kelvin Njuguna<br>
                  email@mail.com, 0704 549 859<br>
                  Hse No. 410, 90 Degrees By Tsavo
                  <br><br>
                  1 Mar 2022, 10:20 AM
                </address>
              </div>
              <div class="col-12">
                <div class="py-2 mt-3">
                  <h3 class="font-size-15 fw-bold">Invoice Details ( <span
                      class="text-primary fw-medium">No. 1237</span> )</h3>
                </div>
              </div>
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-nowrap">
                    <thead>
                    <tr>
                      <th style="width: 70px;">No.</th>
                      <th>Item</th>
                      <th class="text-end">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>01</td>
                      <td>Rent Deposit</td>
                      <td class="text-end">KES 24,500</td>
                    </tr>

                    <tr>
                      <td>02</td>
                      <td>Monthly Rent</td>
                      <td class="text-end">KES 12,000</td>
                    </tr>

                    <tr>
                      <td>03</td>
                      <td>TAX (18%)</td>
                      <td class="text-end">KES 250</td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-end">Total</td>
                      <td class="text-end fw-bold">KES 36,750</td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-end">Paid</td>
                      <td class="text-end  fw-bold">KES 0.00</td>
                    </tr>

                    <tr>
                      <td colspan="2" class="border-0 text-end">
                        <strong>Balance</strong>
                      </td>
                      <td class="border-0 text-end">
                        <h5 class="m-0 text-uppercase fw-bold">KES 36,750</h5>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="col-12 d-none">
                <div class="table-resposive p-4 px-2 pt-2 overflow-visible">
                  <table class="w-100">
                    <tbody>
                    <tr data-id="1">
                      <td>
                        <label for="" class="">Payment Method</label>
                        <select class="form-control selectpicker w-100 payment-method"
                                data-style="btn-secondary w-100" data-live-search="true"
                                title="Select payment Method">
                          <option value="Mpesa">MPESA</option>
                          <option value="Cash">CASH</option>
                        </select>
                      </td>
                      <td class="px-3 ">
                        <div class="phone-num d-none">
                          <label for="">Phone No.</label>
                          <input type="text " class="form-control w-100 d-flex "
                                 placeholder="Phone No." spellcheck="false"
                                 data-ms-editor="true">
                        </div>

                      </td>
                      <td class="px-3">
                        <label for="">Amount To Be Paid</label>
                        <input type="text " class="form-control w-100 d-flex"
                               placeholder="KES" spellcheck="false" data-ms-editor="true">

                      </td>
                      <td class="text-right float-right">
                        <div class="d-flex flex-column">
                          <label class="opacity-0">Something</label>
                          <a href="#"
                             class="btn btn-primary w-md waves-effect waves-light">Submit</a>
                        </div>
                      </td>


                    </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div class="float-end">
                <a href="javascript:window.print()"
                   class="btn btn-success waves-effect waves-light me-1"><i
                    class="mdi mdi-printer font-16px"></i></a>
                <a href="javascript: void(0);"
                   class="btn btn-primary w-md waves-effect waves-light">Receive Payment</a>
              </div>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- invoice details -->

      <footer class="footer ">
        <div class="container-fluid ">
          <div class="row ">
            <div class="col-sm-6 ">

            <div class="col-sm-6 ">

            </div>
          </div>
        </div>
        </div>
      </footer>

    </div>
    <!-- end main content-->

  </div>
  <!-- END layout-wrapper -->

  <!-- Right bar overlay-->
  <div class="rightbar-overlay "></div>

  </body>


</template>

<script>
/* eslint-disable */

import NavigationBar from "@/components/Navigation.vue";
import ToolBarFire from "@/components/fire/ToolBarFire.vue";
import {fire, execute, health, biller} from "@/api";
import ToolBarHygiene from "@/components/hygiene/ToolBarHygiene.vue";
import ToolBarMedical from "@/components/medical/ToolBarMedical.vue";


export default {
  name: "BillsReceipted",
  components: {ToolBarMedical, ToolBarHygiene, ToolBarFire, NavigationBar},

  data() {
    return{
      paymentMode:'',
      certQuickStats: {
        licenceCountSummary: {
          potentialBusinesses: null,
          invoicedBusinesses: null,
          paidInvoices:null,
          unPaidInvoices:null,
          awaitingApproval: null,
          activeCertificates: null,
        },
        licenceAmountSummary: {
        pendingInvoicesSum: null,
        todaysCollectionsSum: null,
        thisMonthsCollectionsSum: null,
        financialYearCollectionsSum: null,
        },
        revenuePerformance: [
          [
            "Jan",
            0,
            0
          ],
          [
            "Feb",
            2020,
            0
          ],
          [
            "Mar",
            0,
            0
          ],
          [
            "Apr",
            0,
            0
          ],
          [
            "May",
            0,
            0
          ],
          [
            "Jun",
            0,
            0
          ],
          [
            "Jul",
            0,
            0
          ],
          [
            "Aug",
            0,
            0
          ],
          [
            "Sep",
            0,
            0
          ],
          [
            "Oct",
            0,
            0
          ],
          [
            "Nov",
            0,
            0
          ],
          [
            "Dec",
            0,
            0
          ]
        ],
        statistics: [
          {
            subCountyName: null,
            pendingCount: null,
            pendingTotal: null,
            paidTotalSum: null,
            paidCount:null,
          }]
      },
      totalPendingCount:0,
      totalPendingTotal:0,
      totalPaidCount:0,
      totalPaidTotalSum:0,
    }
  },

  mounted() {

    this.getDashboardMedical()
    this.menuAccess();

  },
  methods: {
    menuAccess(){

      const data = new FormData();
      data.append("function", "menuAccess");
      data.append("menu", "Medical Dashboard");
      data.append("sessionNames", sessionStorage.getItem("sessionNames"));
      data.append("sessionIdNo",  sessionStorage.getItem("sessionIdNo"));
      execute(data,biller)
          .then((res) => {
            // alert(res.data.message);
          })
          .catch((e) => {
            // alert(e.message);
          });

    },

    numberFormat(num) {
      const britishNumberFormatter = new Intl.NumberFormat("en-GB");
      return britishNumberFormatter.format(num)
    },
    revenuePerformance(){

      function abbreviateMonth(month) {
        return month.substring(0, 3);
      }
      // Prepare the data
    /* const data = [
        ['Jul', 50000, 55000], // [Month, Last Year, This Year Collections]
        ['Aug', 55000, 58000],
        ['Sep', 52000, 56000],
        ['Oct', 53000, 57000],
        ['Nov', 54000, 56000],
        ['Dec', 60000, 62000],
        ['Jan', 58000, 59000],
        ['Feb', 59000, 60000],
        ['Mar', 61000, 62000],
        ['Apr', 60000, 61000],
        ['May', 62000, 63000],
        ['Jun', 63000, 64000]
      ];*/
      var data = this.certQuickStats.revenuePerformance


      // Set the font family to Montserrat
      Highcharts.setOptions({
        chart: {
          style: {
            fontFamily: 'Montserrat, sans-serif'
          }
        }
      });

      // Create the bar chart
      Highcharts.chart('revenuePerfomanceFire', {
        chart: {
          type: 'column'
        },
        title: {
          text: null
        },
        xAxis: {
          categories: data.map(item => abbreviateMonth(item[0]))
        },
        yAxis: {
          title: {
            text: 'Revenue (KES)'
          }
        },
        legend: {
          enabled: true
        },
        tooltip: {
          shared: true,
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>KES {point.y}</b><br/>'
        },
        plotOptions: {
          bar: {
            pointWidth: 20, // Adjust the width of each column
            stacking: 'normal', // Prevent stacking
            borderWidth: 0
          }
        },
        series: [{
          name: 'Last Year Collections',
          data: data.map(item => item[1])
        },
          {
            name: 'This Year Collections',
            data: data.map(item => item[2]),
            color:"green"
          }]
      });
    },
    getDashboardMedical() {
      const data = new FormData();
      data.append("function", "getDashboardMedical");
      execute(data, health)
          .then((res) => {
            this.loading = false
            if (res.data.success) {

              this.certQuickStats = res.data.data.certQuickStats
              this.totalPendingCount =  this.certQuickStats.statistics.reduce((acc, cur) => {
                let amountToday = Number(cur.pendingCount);
                if (!isNaN(amountToday)) {
                  return acc + amountToday;
                } else {
                  return acc;
                }
              }, 0);
              this.totalPendingTotal =  this.certQuickStats.statistics.reduce((acc, cur) => {
                let amountToday = Number(cur.pendingTotal);
                if (!isNaN(amountToday)) {
                  return acc + amountToday;
                } else {
                  return acc;
                }
              }, 0);

              this.totalPaidCount =  this.certQuickStats.statistics.reduce((acc, cur) => {
                let amountToday = Number(cur.paidCount);
                if (!isNaN(amountToday)) {
                  return acc + amountToday;
                } else {
                  return acc;
                }
              }, 0);
              this.totalPaidTotalSum =  this.certQuickStats.statistics.reduce((acc, cur) => {
                let amountToday = Number(cur.paidTotalSum);
                if (!isNaN(amountToday)) {
                  return acc + amountToday;
                } else {
                  return acc;
                }
              }, 0);

              this.revenuePerformance()

            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            this.message = e.message
          });
    },

  }
}
</script>


<style scoped>

</style>