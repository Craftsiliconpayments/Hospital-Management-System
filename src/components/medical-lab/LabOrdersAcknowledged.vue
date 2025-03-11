<template>

  <head>

    <meta charset="utf-8" />
    <title>HOSPITAL MANAGEMENT INFORMATION SYSTEM</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Rental management system by Nouveta LTD" name="description" />
    <meta content="Kelvin Njuguna" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">
    <!-- droping file -->
    <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />

    <!-- owl.carousel css -->
    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.carousel.min.css">

    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.theme.default.min.css">
    <!-- App Css-->
    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

  </head>

  <body data-sidebar="dark">


  <!-- Begin page -->
  <div id="layout-wrapper">


    <!-- ========== Left Sidebar Start ========== -->
    <NavigationBar/>
    <!-- Left Sidebar End -->



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
                <h4 class="mb-sm-0 font-size-18">Acknowledged Lab Tests</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="#">Patient's Queue</a></li>
                    <li class="breadcrumb-item"><a href="#">Acknowledged  Lab Tests</a></li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->

          <!-- quick lab stats -->
          <ToolBarLabStat/>


          <!-- end of stats -->
          <div class="row">
            <div class="col-12">
              <div class="card">

                <LabToolBar/>



                <div class="card-header bg-white border-bottom d-none">
                  <h4 class="card-title text-uppercase">Scheduled lab tests</h4>
                </div>

                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom mt-4">

                  <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                    <div class="flex-grow-1">
                      <div class="search-box mb-0 me-3">
                        <div class="position-relative">
                          <input type="text" class="form-control bg-light border-light rounded" placeholder="Search..." fdprocessedid="husj3l" spellcheck="false" data-ms-editor="true">
                          <i class="bx bx-search-alt search-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex">
                      <div class="d-flex align-items-center me-3 pe-3">
                        <div>
                          <div class="float-end d-flex ">
                            <div class="input-group fw-semibold text-uppercase me-3">
                              <label class="input-group-text text-uppercase">Patient Type</label>
                              <select class="form-select ">
                                <option value="">Select patient Visit Type</option>
                                <option value="All Patients" selected="">All Patients</option>
                                <option value="Inpatient">Inpatient</option>
                                <option value="Outpatient">Outpatient</option>
                              </select>
                            </div>

                            <div class="input-group fw-semibold text-uppercase">
                              <label class="input-group-text text-uppercase">FROM:</label>
                              <input class="form-control form-control-sm" type="date" value="2019-08-19" id="example-date-input">
                            </div>

                            <div class="input-group fw-semibold text-uppercase">
                              <label class="input-group-text text-uppercase">TO:</label>
                              <input class="form-control form-control-sm" type="date" value="2019-08-19" id="example-date-input">
                            </div>
                          </div>
                        </div>
                      </div>
                      <button data-bs-toggle="modal" data-bs-target=".download-modal" type="button" class="btn btn-primary dropdown-toggle option-selector me-3 text-capitalize">
                        <i class="bx bxs-download  font-size-16"></i> <span class="pl-1 d-md-inline">Download Report</span>
                      </button>

                    </div>


                  </div>
                  <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                    <button type="button" data-bs-toggle="modal" data-bs-target=".download-modal" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                  </div>
                </div>

                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-striped-info table-s align-middle text-nowrap table-s">
                      <thead class="bg-info text-black text-uppercase border border-info">
                      <th title="Date and Time of Test Order">Date</th>
                      <th title="Patient Visit Number">Visit No.</th>
                      <th title="Order Number for the Test(s)">Order No.</th>
                      <th title="Name of the Patient">Patient</th>
                      <th title="Visit Type (Outpatient/Inpatient)">Visit Type</th>
                      <th title="Doctor or Staff Who Ordered the Test">Sent By</th>
                      <th title="Tests Ordered">Test(s)</th>
                      <th title="Mode of Payment">Mode</th>
                      <th title="Payment Status" class="text-right">Status</th>
                      <th class="text-right" title="Discounted Amount">Discounted</th>
                      <th class="text-right" title="Total Amount Paid">Paid</th>
                      <th class="text-right" title="Actions (View, Acknowledge)">Actions</th>
                      </thead>
                      <tbody class="border border-info">
                      <tr>
                        <td>12 Oct 2024 12:45 AM</td>
                        <td>V12</td>
                        <td>ORD-20134</td>
                        <td>Kelvin Njuguna</td>
                        <td>Outpatient (General OPD)</td>
                        <td>Kelvin Kiptum (Physician)</td>
                        <td>Lipid Exam, Blood Count</td>
                        <td>NHIF</td>
                        <td class="text-uppercase">
                          <span class="badge rounded-pill bg-info float-end">Approved (Paid in Full)</span>
                        </td>
                        <td class="text-right">0</td>
                        <td class="text-right">7,000</td>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
                            <a @click="gotTo('lab-orders-acknowledged-patient')" href="javascript: void(0);" class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2">Sample collection</a>
                            <button class="btn btn-sm btn-info text-uppercase mx-2" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Lab Test Details">Details</button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>13 Oct 2024 09:15 AM</td>
                        <td>V18</td>
                        <td>ORD-20138</td>
                        <td>Esther Wambui</td>
                        <td>Outpatient (Gyn)</td>
                        <td>Dr. Kamau (Gynecologist)</td>
                        <td>Pap Smear, Blood Count</td>
                        <td>MPESA</td>
                        <td class="text-uppercase">
                          <span class="badge rounded-pill bg-success float-end">Paid in Full</span>
                        </td>
                        <td class="text-right">0</td>
                        <td class="text-right">6,500</td>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
                            <a @click="gotTo('lab-orders-acknowledged-patient')" href="javascript: void(0);" class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2">Sample collection</a>
                            <button class="btn btn-sm btn-info text-uppercase mx-2" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Details">Details</button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>14 Oct 2024 10:30 AM</td>
                        <td>V22</td>
                        <td>ORD-20142</td>
                        <td>Joseph Kimani</td>
                        <td>Inpatient (ICU)</td>
                        <td>Dr. Wanjiru (Physician)</td>
                        <td>CT Scan, Lipid Exam</td>
                        <td>Insurance</td>
                        <td class="text-uppercase">
                          <span class="badge rounded-pill bg-info float-end">Approved (Paid in Full)</span>
                        </td>
                        <td class="text-right">0</td>
                        <td class="text-right">10,000</td>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
                            <a @click="gotTo('lab-orders-acknowledged-patient')" href="javascript: void(0);" class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2">Sample collection</a>
                            <button class="btn btn-sm btn-info text-uppercase mx-2" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Details">Details</button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>15 Oct 2024 08:00 AM</td>
                        <td>V30</td>
                        <td>ORD-20150</td>
                        <td>Grace Muthoni</td>
                        <td>Outpatient (Dermatology)</td>
                        <td>Dr. Mwangi (Dermatologist)</td>
                        <td>Skin Biopsy</td>
                        <td>NHIF</td>
                        <td class="text-uppercase">
                          <span class="badge rounded-pill bg-warning float-end">Discounted</span>
                        </td>
                        <td class="text-right">1,200</td>
                        <td class="text-right">3,800</td>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
                            <a @click="gotTo('lab-orders-acknowledged-patient')" href="javascript: void(0);" class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2">Sample collection</a>
                            <button class="btn btn-sm btn-info text-uppercase mx-2" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Details">Details</button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>16 Oct 2024 11:50 AM</td>
                        <td>V38</td>
                        <td>ORD-20162</td>
                        <td>Tom Ochieng</td>
                        <td>Inpatient (Surgical)</td>
                        <td>Dr. Kibet (Surgeon)</td>
                        <td>Surgical Swab</td>
                        <td>MPESA</td>
                        <td class="text-uppercase">
                          <span class="badge rounded-pill bg-success float-end">Paid in Full</span>
                        </td>
                        <td class="text-right">0</td>
                        <td class="text-right">15,000</td>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
                            <a @click="gotTo('lab-orders-acknowledged-patient')" href="javascript: void(0);" class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2">Sample collection</a>
                            <button class="btn btn-sm btn-info text-uppercase mx-2" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Details">Details</button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>17 Oct 2024 09:40 AM</td>
                        <td>V45</td>
                        <td>ORD-20170</td>
                        <td>Mary Atieno</td>
                        <td>Outpatient (ENT)</td>
                        <td>Dr. Onyango (ENT Specialist)</td>
                        <td>Hearing Test</td>
                        <td>NHIF</td>
                        <td class="text-uppercase">
                          <span class="badge rounded-pill bg-info float-end">Approved (Paid in Full)</span>
                        </td>
                        <td class="text-right">0</td>
                        <td class="text-right">4,000</td>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
                            <a @click="gotTo('lab-orders-acknowledged-patient')" href="javascript: void(0);" class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2">Sample collection</a>
                            <button class="btn btn-sm btn-info text-uppercase mx-2" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Details">Details</button>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                      <tfoot class="border border-dark">
                      <tr class="table-primary text-black border-dark text-uppercase">
                        <th colspan="2">33 Tests</th>
                        <th colspan="2">28 Patients</th>
                        <th colspan="5" class="text-end fw-bold">Total:</th>
                        <th class="text-right fw-bold">2,700</th>
                        <th class="text-right fw-bold">46,300</th>
                        <th></th>
                      </tr>
                      </tfoot>
                    </table>


                  </div>
                </div>




              </div>
            </div>
            <!-- end col -->
          </div>

          <!-- end row -->
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->



      <!-- decline application modal -->
      <div class="modal fade decline-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Decline The Application</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <address>
                    <strong class="text-capitalize">Test Results For:</strong><br>
                    Alex Wanjala AT Mombasa Road<br>
                    email@mail.com, 0704 549 859<br>
                    ID No. 12345689.<br/>
                    <br>
                    <small class="text-uppercase d-none">Application Date 1 Mar 2022, 10:20 AM</small>

                  </address>
                </div>
                <div class="col-6 text-right">
                  <address>
                    <strong class="text-capitalize">Location Details</strong><br>
                    Street/Road: Mombasa Road<br>
                    Plot No.: 122202/1250<br>
                    Building: The Tower. Floor: 12. Door/Stall No.: 123<br/>
                    Subcounty: CBD. Ward: Mututu


                  </address>
                </div>
                <div class="col-12 mt-4">
                  <div class="hori-timeline">
                    <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel" id="timeline-carousel">
                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Sep 2023 10:09 AM</div>
                            <h5 class="mb-4">Application</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize">Self Service Portal</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">13 Sep 2023 10:09 AM</div>
                            <h5 class="mb-4">Lab Test</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3 text-capitalize">
                            <p class="text-muted">Dr Mary Jane at Taifa Clinic</p>
                            <a href="PrintDocs/health-result-slip-master/health-result-slip-master/slip33.html" target="_blank" type="button" class="btn btn-link waves-effect"><i class="mdi mdi-eye-outline"></i> View Result Slip</a>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending</div>
                            <h5 class="mb-4">Application Verdict</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Certification</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="py-2 mt-3">
                  <h3 class="font-size-15 fw-bold">ND12368</h3>
                </div>
              </div>
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-nowrap">
                    <thead class="bg-light">
                    <tr>
                      <th style="width: 70px;">#</th>
                      <th>Test</th>
                      <th class="" >Results</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>01</td>
                      <td>Stool</td>
                      <td>
                        <span class="badge badge-soft-success fw-bolder  text-uppercase">Pass</span>
                      </td>
                    </tr>

                    <tr>
                      <td>02</td>
                      <td>Urinalysis</td>
                      <td>
                        <span class="badge badge-soft-success fw-bolder  text-uppercase">Pass</span>
                      </td>
                    </tr>

                    <tr>
                      <td>03</td>
                      <td>Salmonella Ag</td>
                      <td>
                        <span class="badge badge-soft-danger fw-bolder  text-uppercase">Fail</span>
                      </td>
                    </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div class="alert alert-warning" role="alert">
                <h4 class="alert-heading">Doctor Notes</h4>
                <p>
                  The applicant needs a retake ...
                </p>
              </div>

              <div class="col-12 mt-3">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label text-capitalize">Reasons for Declining the application</label>
                  <textarea class="form-control" id="" cols="30" rows="3" placeholder="Start Typing ..."></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">

              <a href="#" target="_blank" type="button" class="btn btn-danger waves-effect waves-light w-100">
                <i class="mdi mdi-close font-size-16 align-middle me-2"></i> Decline application
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- delcine application modal -->

      <!-- Approve application -->
      <div class="modal fade approve-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Approve The Application</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <address>
                    <strong class="text-capitalize">Test Results For:</strong><br>
                    Alex Wanjala AT Mombasa Road<br>
                    email@mail.com, 0704 549 859<br>
                    ID No. 12345689.<br/>
                    <br>
                    <small class="text-uppercase d-none">Application Date 1 Mar 2022, 10:20 AM</small>

                  </address>
                </div>
                <div class="col-6 text-right">
                  <address>
                    <strong class="text-capitalize">Location Details</strong><br>
                    Street/Road: Mombasa Road<br>
                    Plot No.: 122202/1250<br>
                    Building: The Tower. Floor: 12. Door/Stall No.: 123<br/>
                    Subcounty: CBD. Ward: Mututu


                  </address>
                </div>
                <div class="col-12 mt-4">
                  <div class="hori-timeline">
                    <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel" id="timeline-carousel">
                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Sep 2023 10:09 AM</div>
                            <h5 class="mb-4">Application</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize">Self Service Portal</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">13 Sep 2023 10:09 AM</div>
                            <h5 class="mb-4">Lab Test</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3 text-capitalize">
                            <p class="text-muted">Dr Mary Jane at Taifa Clinic</p>
                            <a href="PrintDocs/health-result-slip-master/health-result-slip-master/slip33.html" target="_blank" type="button" class="btn btn-link waves-effect"><i class="mdi mdi-eye-outline"></i> View Result Slip</a>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending</div>
                            <h5 class="mb-4">Application Verdict</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Certification</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="py-2 mt-3">
                  <h3 class="font-size-15 fw-bold">ND12368</h3>
                </div>
              </div>
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-nowrap">
                    <thead class="bg-light">
                    <tr>
                      <th style="width: 70px;">#</th>
                      <th>Test</th>
                      <th class="" >Results</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>01</td>
                      <td>Stool</td>
                      <td>
                        <span class="badge badge-soft-success fw-bolder  text-uppercase">Pass</span>
                      </td>
                    </tr>

                    <tr>
                      <td>02</td>
                      <td>Urinalysis</td>
                      <td>
                        <span class="badge badge-soft-success fw-bolder  text-uppercase">Pass</span>
                      </td>
                    </tr>

                    <tr>
                      <td>03</td>
                      <td>Salmonella Ag</td>
                      <td>
                        <span class="badge badge-soft-success fw-bolder  text-uppercase">Pass</span>
                      </td>
                    </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div class="alert alert-warning" role="alert">
                <h4 class="alert-heading">Doctor Notes</h4>
                <p>
                  Looks good
                </p>
              </div>
            </div>
            <div class="modal-footer">

              <a href="#" target="_blank" type="button" class="btn btn-success waves-effect waves-light w-100">
                <i class="mdi mdi-check font-size-16 align-middle"></i> Approve Appliction
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.Approve application -->
      </div>
      <!-- invoice details -->

      <!-- Lab test details modal -->
      <div class="modal fade test-details-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-uppercase" id="myLargeModalLabel">Lab Test Requisition Details </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <address>
                    <strong class="text-uppercase">Patient's Details</strong><br>
                    Kelvin Njuguna Ndungu<br>
                    Age: 890 Gender: Female<br>
                    ID No. 12345689, Phone: 0704549859, Email: email@email.com<br/>
                    <p class="text-black fw-semibold text-uppercase mb-0">(Visit No. 22 Order Num ORD-1234)</p>
                    <br>
                    <small class="text-uppercase d-none">Application Date 1 Mar 2022, 10:20 AM</small>
                    <br>


                    <hr class="mt-0 pt-0">

                  </address>
                </div>

                <div class="col-12">
                  <div class="alert alert-success alert-dismissible fade show border-success border-2  " role="alert">
                    <i class="mdi mdi-cash-check me-2 text-success fs-3"></i>
                    <span> This Lab Test is approved for the Test(s) to be done</span>
                    <button type="button" class="btn-close d-none" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                </div>

                <div class="col-12">
                  <div class="hori-timeline">
                    <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel mb-3" id="timeline-carousel">
                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Oct 2024, 12:54 AM</div>
                            <h5 class="mb-4">Scheduled for Lab Test</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize mb-0">By ALex Wanjala (Physician)</p>
                            <i><small>General OPD department</small></i>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Acknowledgement</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3 text-capitalize">
                            <p class="text-muted">-</p>
                            <a href="PrintDocs/health-result-slip-master/health-result-slip-master/slip33.html" target="_blank" type="button" class="btn btn-link waves-effect d-none"><i class="mdi mdi-eye-outline"></i> View Result Slip</a>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Sample collection</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list ">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Results Release</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="table-responsive mt-2">
                    <table class="table table-nowrap border border-dark text-uppercase">
                      <thead class="bg-light">
                      <tr>
                        <th style="width: 70px;">#</th>
                        <th>Test</th>
                        <th class="text-right">Amount</th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>01</td>
                        <td>GLUCOSE CHALLENGE TEST</td>
                        <td class="text-right">KES 3,000</td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td>CARDIAC ENZYMES (CpPK, LDH, SGOT)</td>
                        <td class="text-right">KES 2,500</td>
                      </tr>




                      </tbody>
                      <tfoot class="border border-dark table-light">
                      <tr class="text-black">
                        <th colspan="2">3 Tests</th>
                        <th class="text-right">KES 5,500</th>
                      </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                <!-- tests that were paid for using MPESA -->

                <div class="col-12">
                  <div class="row flex-justify-end justify-content-end">

                    <div class="col-8">
                      <div class="table-responsive mt-4">
                        <table class="table border border-success text-uppercase table-sm table-striped table-striped-success">
                          <tbody>
                          <tr>
                            <th>Invoice Amount</th>
                            <td  class="text-black">KES 7000</td>
                          </tr>
                          <tr>
                            <th>Amount Discounted</th>
                            <td  class="text-black text-black">KES 0.00</td>
                          </tr>
                          <tr>
                            <th>Amount Paid</th>
                            <td  class="text-black FS-2 text-black fw-bold">KES 7,000</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>


                    <div class="col-8">
                      <div class="table-responsive mt-4">
                        <table class="table border border-success text-uppercase table-sm table-striped table-striped-success">
                          <tbody>
                          <tr>
                            <th>Invoice Number</th>
                            <td  class="text-black">HSP1234</td>
                          </tr>
                          <tr>
                            <th>Receipt No.</th>
                            <td  class="text-black">RCP12345</td>
                          </tr>
                          <tr>
                            <th>Payment Mode.</th>
                            <td  class="text-black">MPESA-0704549859 REF: SERYU5785</td>
                          </tr>
                          <tr>
                            <th>Paid By</th>
                            <td  class="text-black">Kelvin Ndungu</td>
                          </tr>

                          <tr>
                            <th>Invoiced/Scheduled By</th>
                            <td  class="text-black">Alex Wanjala (Physician)</td>
                          </tr>

                          <tr>
                            <th>Receipted By</th>
                            <td class="text-black">Self Payment</td>
                          </tr>

                          <!-- for receipts receipted by hospital staff -->
                          <tr>
                            <th>Receipted By</th>
                            <td class="text-black">Alex Wanjala - (Lab Receptionist)</td>
                          </tr>

                          <tr>
                            <th>Date receipted</th>
                            <td class="text-black">12 Oct 2024 at 12:54 AM</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <!-- tests that were paid for using insurance -->
                    <div class="col-8 d-none">
                      <div class="table-responsive mt-4">
                        <table class="table border border-success text-uppercase table-sm table-striped table-striped-success">
                          <tbody>
                          <tr>
                            <th>Invoice Number</th>
                            <td  class="text-black">HSP1234</td>
                          </tr>
                          <tr>
                            <th>Payment Mode</th>
                            <td  class="text-black">NHIF (Owner)</td>
                          </tr>
                          <tr>
                            <th>Policy Number</th>
                            <td  class="text-black">UIIU50698</td>
                          </tr>
                          <tr>
                            <th>Policy Holder's Name</th>
                            <td  class="text-black">Kelvin Njuguna Ndungu</td>
                          </tr>

                          <tr>
                            <th>Invoiced/Scheduled By</th>
                            <td  class="text-black">Alex Wanjala (Physician)</td>
                          </tr>

                          <tr>
                            <th>Approved By</th>
                            <td class="text-black">Felix Obong (Hospital CEO)</td>
                          </tr>

                          <!-- for receipts receipted by hospital staff -->
                          <tr>
                            <th>Approved By</th>
                            <td class="text-black">Alex Wanjala - (NHIF Accountant)</td>
                          </tr>

                          <tr>
                            <th>Date Approved</th>
                            <td class="text-black">12 Oct 2024 at 12:54 AM</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <!-- exempted tests that have been approved -->
                    <div class="col-8 d-none">
                      <div class="table-responsive mt-4">
                        <table class="table border border-success text-uppercase table-sm table-striped table-striped-success">
                          <tbody>
                          <tr>
                            <th>Invoice Number</th>
                            <td  class="text-black">HSP1234</td>
                          </tr>
                          <tr>
                            <th>Exemption Number</th>
                            <td  class="text-black">EX031024-01</td>
                          </tr>
                          <tr>
                            <th>Exemption Reason</th>
                            <td  class="text-black">Gender Based Violence Victim</td>
                          </tr>
                          <tr>
                            <th>Initiated By</th>
                            <td  class="text-black">Patrick Martion Otieno (Hospital Social Worker)</td>
                          </tr>

                          <tr>
                            <th>Invoiced/Scheduled By</th>
                            <td  class="text-black">Alex Wanjala (Physician)</td>
                          </tr>

                          <tr>
                            <th>Received By</th>
                            <td class="text-black">Felix Tanui (Hospital Receptionist)</td>
                          </tr>

                          <!-- for receipts receipted by hospital staff -->
                          <tr>
                            <th>Approved By</th>
                            <td class="text-black">Alex Wanjala - (Hospital CEO)</td>
                          </tr>

                          <tr>
                            <th>Date Approved</th>
                            <td class="text-black">12 Oct 2024 at 12:54 AM</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>



            </div>
            <div class="modal-footer">
              <button @click="gotTo('lab-orders-acknowledged-patient')" href="javascript: void(0);" data-bs-dismiss="modal" class="btn btn-success text-uppercase d-flex align-items-center ms-2 Acknowledge-order" title="Initiate Payment for Lab Tests">
                Collect Specimen(s)
              </button>
            </div>


          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.Approve application -->
      </div>
      <!-- lab test details modal -->

      <!-- acknowledged lab test request that has been approved -->
      <div class="modal fade test-acknowledged-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header d-none">
              <h4 class="modal-title text-uppercase" id="myLargeModalLabel">Acknowledgment confirmartion</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">

                <!-- Confirmation Icon and Message -->
                <div class="col-12 d-flex align-items-center justify-content-center pt-3">
                  <div class="p-4 px-5 d-flex align-items-center justify-content-center flex-column pt-5">
                    <div class="flex-shrink-0 align-self-center mb-4">
                      <div class="avatar-md rounded-circle bg-primary mini-stat-icon" title="Action Successful">
                                                <span class="avatar-title rounded-circle bg-success">
                                                    <i class="bx bx-check-double fs-1" title="Acknowledgment Successful"></i>
                                                </span>
                      </div>
                    </div>
                    <h4 class="text-uppercase text-success text-black modal-title" title="Acknowledgment Confirmed">Acknowledgement Confirmation</h4>
                    <p class="text-center px-5" title="Patient has been queued for specimen collection">
                      The patient has been queued for specimen collection. If this was accidental, you can revert the action by clicking the <strong>Revert Button</strong>.
                    </p>
                  </div>
                </div>

                <!-- Patient and Visit Details -->
                <div class="col-12">
                  <div class="table-responsive">
                    <table class="table border border-info table-sm table-striped-info table-striped text-black" title="Patient and visit details">
                      <tbody class="text-black text-uppercase">
                      <tr>
                        <td title="Visit Number">Visit No.</td>
                        <th title="OPD Number">OPD123</th>
                      </tr>
                      <tr>
                        <td title="Patient Name">Patient</td>
                        <th title="Full Name of Patient">Kelvin Njuguna Ndungu</th>
                      </tr>
                      <tr>
                        <td title="Patient's Age and Gender">Age & Gender</td>
                        <th title="Patient's Age and Gender">30 Years 5 Months Male</th>
                      </tr>
                      <tr>
                        <td title="Type of Visit">Visit Type</td>
                        <th title="Outpatient or Inpatient">Outpatient</th>
                      </tr>
                      <tr>
                        <td title="Order Number">Order No.</td>
                        <th title="Test Order Number">ORD-123</th>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Test Details -->
                <div class="col-12">
                  <div class="table-responsive mt-2">
                    <table class="table table-nowrap border border-dark text-uppercase" title="List of tests and their costs">
                      <thead class="bg-light">
                      <tr>
                        <th style="width: 70px;" title="Test number">#</th>
                        <th title="Name of Test">Test</th>
                        <th class="text-right" title="Test Amount">Amount</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td title="Test 1">01</td>
                        <td title="Glucose Challenge Test">GLUCOSE CHALLENGE TEST</td>
                        <td class="text-right" title="Cost of the test">KES 3,000</td>
                      </tr>
                      <tr>
                        <td title="Test 2">02</td>
                        <td title="Cardiac Enzyme Tests">CARDIAC ENZYMES (CpPK, LDH, SGOT)</td>
                        <td class="text-right" title="Cost of the test">KES 2,500</td>
                      </tr>
                      </tbody>
                      <tfoot class="border border-dark table-light">
                      <tr class="text-black">
                        <th colspan="2" title="Total number of tests">3 Tests</th>
                        <th class="text-right" title="Total cost of tests">KES 5,500</th>
                      </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                <!-- Action Buttons with Tooltips -->
                <!-- Action Buttons with Modal Dismiss Functionality -->
                <div class="col-12 d-flex justify-content-end pt-4 text-uppercase">
                  <button type="button" class="btn btn-sm btn-danger text-uppercase d-flex align-items-center revertAcknowledgment mx-2" id="revertButton" title="Click to undo this action">
                    <div>Revert Acknowledgment</div>
                    <div class="spinner-border text-white ms-2 d-none" style="height: 19px; width: 19px;" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                  <button type="button" class="btn btn-outline-dark waves-effect waves-light text-uppercase" data-bs-dismiss="modal" title="Click to close the modal">Close</button>
                </div>

              </div>
            </div>


            <div class="modal-footer d-none">
              <button class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2 Acknowledge-order" data-bs-toggle="modal" data-bs-target="#payment-modal" title="Initiate Payment for Lab Tests">
                <div>Acknowledge</div>
                <div class="spinner-border text-white ms-2 d-none" style="height: 19px; width: 19px;" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.Approve application -->
      </div>
      <!-- end of confirmed acknowledgment -->

      <!-- specimen labels generation -->
      <div class="modal fade specimen-collection-moda" tabindex="-1" role="dialog" aria-labelledby="specimenLabelModal" aria-hidden="true">
        <div class="modal-dialog w-100 modal-lg modal-dialog-centered modal-full">
          <div class="modal-content w-100">
            <div class="modal-header text-black text-uppercase">
              <h5 class="modal-title ml-3 me-3" id="specimenLabelModal">Generated Specimen Labels</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <address>
                    <strong class="text-uppercase">Patient Details</strong><br>
                    Kelvin Njuguna Ndungu<br>
                    Age: 890, Gender: Female<br>
                    ID No. 12345689, Phone: 0704549859, Email: email@email.com<br>
                    <p class="text-black fw-semibold text-uppercase mb-0">(Visit No. 22, Order No. ORD-1234)</p>
                    <small class="text-uppercase d-none">Application Date: 1 Mar 2022, 10:20 AM</small>
                    <hr class="mt-0 pt-0">
                  </address>
                </div>
              </div>

              <div class="row">
                <!-- Specimen generation notification -->
                <div class="col-12 pt-3">
                  <div class="row">
                    <div class="col-12">
                      <div class="bg-success border-2 bg-soft p-2 mb-4 d-flex align-items-center text-black">
                        <i class="mdi mdi-checkbox-marked-circle-outline font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Specimen Labels Successfully Created</p>
                      </div>
                    </div>

                    <!-- Specimen Table -->
                    <div class="col-12">
                      <p class="mb-2">You may print or manually input the system-generated specimen label codes.</p>
                      <div class="table-responsive mt-2">
                        <table class="table table-nowrap border border-dark text-uppercase align-middle text-black">
                          <thead class="bg-light">
                          <tr>
                            <th style="width: 70px;">#</th>
                            <th>Test</th>
                            <th>Specimen</th>
                            <th>System Label</th>
                            <th>Manual Label</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>01</td>
                            <td>Urinalysis</td>
                            <td>Urine</td>
                            <td>URI-04102401</td>
                            <td>
                              <input type="text" class="form-control" placeholder="Enter Manual Code" title="Enter manual code if using pre-made labels">
                            </td>
                          </tr>
                          <tr>
                            <td>02</td>
                            <td>Urinalysis</td>
                            <td>Urine</td>
                            <td>URI-04102401</td>
                            <td>
                              <input type="text" class="form-control" placeholder="Enter Manual Code" title="Enter manual code if using pre-made labels">
                            </td>
                          </tr>
                          <tr>
                            <td>03</td>
                            <td>Blood Count</td>
                            <td>Blood</td>
                            <td>BLO-04102402</td>
                            <td>
                              <input type="text" class="form-control" placeholder="Enter Manual Code" title="Enter manual code if using pre-made labels">
                            </td>
                          </tr>
                          </tbody>
                          <tfoot class="border border-dark table-light">
                          <tr class="text-black">
                            <th colspan="2">2 Tests</th>
                            <th colspan="3">3 Samples</th>
                          </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Submission button -->
                <div class="col-12 mt-3">
                  <button type="button" class="btn w-100 btn-primary text-uppercase d-flex align-items-center justify-content-center specimen-submit" id="acknowledgeAgainButton" title="Click to acknowledge this order">
                    <span class="d-flex align-items-center justify-content-center mx-3"><i class="bx bx-printer fs-3 mx-2"></i> <span> Print Label(s)</span></span>
                    <div class="spinner-border text-white ms-4 d-none" style="height: 19px; width: 19px;" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- end of generated specimen labels -->


      <!-- specimen collection modal start -->
      <div class="modal fade specimen-collection-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog  w-100 modal-xl modal-dialog-centered modal-full">
          <div class="modal-content w-100">
            <div class="modal-header text-black text-uppercase" >
              <h5 class="modal-title ml-3 me-3" id="myLargeModalLabel">Patient Specimen Collection & Lab Test Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <address>
                    <strong class="text-uppercase">Patient's Details</strong><br>
                    Kelvin Njuguna Ndungu<br>
                    Age: 890 Gender: Female<br>
                    ID No. 12345689, Phone: 0704549859, Email: email@email.com<br>
                    <p class="text-black fw-semibold text-uppercase mb-0">(Visit No. 22 Order Num ORD-1234)</p>
                    <br>
                    <small class="text-uppercase d-none">Application Date 1 Mar 2022, 10:20 AM</small>
                    <br>


                    <hr class="mt-0 pt-0">

                  </address>
                </div>

              </div>

              <div class="row">
                <div class="col-12">
                  <div class="hori-timeline">
                    <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel mb-3" id="timeline-carousel">
                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Oct 2024, 12:54 AM</div>
                            <h5 class="mb-4">Scheduled for Lab Test</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize mb-0">By ALex Wanjala (Physician)</p>
                            <i><small>General OPD department</small></i>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list ">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Oct 2024, 12:54 AM</div>
                            <h5 class="mb-4">Acknowledgement</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize mb-0">By Jane John (Lab Receptionist)</p>
                            <i><small>Medical Lab Two</small></i>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Sample collection</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list ">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Results Release</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">-</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <!-- consaltation findings and feedback -->
                <div class="col-12 pt-3">

                  <div class="row">
                    <div class="col-12">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center text-black">
                        <i class="mdi mdi-test-tube  font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">ABO Blood Group - Specimen collection</p>

                      </div>
                    </div>
                    <div class="col-12 allergy-table">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3 mt-1 d-none">Patient's Specimen</h3>
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3">Select the specimen sample collected for the test</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap table-s table-editable-1">
                          <thead class="bg-light">
                          <tr>
                            <th style="width: 40px;">#</th>
                            <th>Specimen</th>
                            <th>Brought By</th>
                            <th title="Where Applicable use the manual generated labels">Manual Label</th>
                            <th  style="width: 40px;"></th>
                          </tr>
                          <tbody>

                          <tr>
                            <td>1.</td>
                            <td>
                              <select class="form-control selectpicker bg-white select-revenue form-control-sm" title="Specimen" data-live-search="true">
                                <option value="Sputum">Sputum</option>
                                <option value="Semen">Semen</option>
                                <option value="Stool">Stool</option>
                                <option value="Urine">Urine</option>
                                <option value="Saliva">Saliva</option>
                                <option value="Oral fluid">Oral fluid</option>
                                <option value="Sweat">Sweat</option>

                                <option value="Blood">Blood</option>
                                <option value="Tissue biopsy">Tissue biopsy</option>
                                <option value="Cerebrospinal fluid (CSF)">Cerebrospinal fluid (CSF)</option>
                                <option value="Bone marrow">Bone marrow</option>
                                <option value="Amniotic fluid">Amniotic fluid</option>
                              </select>
                            </td>

                            <td>
                              <div class="d-flex">
                                <select name="" class="form-select form-control form-select-sm" id="">
                                  <option value="" selected>Select Users Position</option>
                                  <option value="" selected>The Patient</option>
                                  <option value="">Physician</option>
                                  <option value="">Nurse</option>
                                </select>
                                <select name="" id=""  class="form-select form-control form-select-sm">
                                  <option value="">Kelvin Njuguna</option>
                                  <option value="">Dr Waswa Were</option>
                                  <option value="">Prof Amos Waweru</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <input type="" class="form-control form-control-sm" title="Enter manual code if using pre-made labels" placeholder="Enter Manual Code" name="" value="">
                            </td>
                            <td></td>
                          </tr>

                          <tr data-id="4" class="cloneCharges d-none">
                            <td style="width: 80px" class="categoryIndex">#</td>
                            <td>
                              <select class="form-control selectpicker bg-white select-revenue form-control-sm" title="Specimen" data-live-search="true">
                                <option value="Sputum">Sputum</option>
                                <option value="Semen">Semen</option>
                                <option value="Stool">Stool</option>
                                <option value="Urine">Urine</option>
                                <option value="Saliva">Saliva</option>
                                <option value="Oral fluid">Oral fluid</option>
                                <option value="Sweat">Sweat</option>

                                <option value="Blood">Blood</option>
                                <option value="Tissue biopsy">Tissue biopsy</option>
                                <option value="Cerebrospinal fluid (CSF)">Cerebrospinal fluid (CSF)</option>
                                <option value="Bone marrow">Bone marrow</option>
                                <option value="Amniotic fluid">Amniotic fluid</option>
                              </select>
                            </td>

                            <td>
                              <div class="d-flex">
                                <select name="" class="form-select form-control form-select-sm" id="">
                                  <option value="" selected>Select Users Position</option>
                                  <option value="" selected>The Patient</option>
                                  <option value="">Physician</option>
                                  <option value="">Nurse</option>
                                </select>
                                <select name="" id=""  class="form-select form-control form-select-sm">
                                  <option value="">Kelvin Njuguna</option>
                                  <option value="">Dr Waswa Were</option>
                                  <option value="">Prof Amos Waweru</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <input type="" class="form-control form-control-sm" title="Enter manual code if using pre-made labels" placeholder="Enter Manual Code" name="" value="">
                            </td>
                            <td class="text-right cell-change d-flex align-items-center justify-content-end">
                              <a class="btn btn-light btn-rounded waves-effect btn-circle btn-transparent cancel-new-category-2" title="Cancel">
                                <i class="bx bx-x"></i>
                              </a>
                            </td>
                          </tr>

                          <tr class="cloneCharges d-none">
                            <td style="width: 80px " class="categoryIndex ">#</td>

                            <td>
                              <select class="form-control selectpicker bg-white select-revenue form-control-sm" title="Specimen" data-live-search="true">
                                <option value="Sputum">Sputum</option>
                                <option value="Semen">Semen</option>
                                <option value="Stool">Stool</option>
                                <option value="Urine">Urine</option>
                                <option value="Saliva">Saliva</option>
                                <option value="Oral fluid">Oral fluid</option>
                                <option value="Sweat">Sweat</option>

                                <option value="Blood">Blood</option>
                                <option value="Tissue biopsy">Tissue biopsy</option>
                                <option value="Cerebrospinal fluid (CSF)">Cerebrospinal fluid (CSF)</option>
                                <option value="Bone marrow">Bone marrow</option>
                                <option value="Amniotic fluid">Amniotic fluid</option>
                              </select>
                            </td>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Generated Specimen Label Code"/>
                            </td>
                          </tr>
                          </tbody>

                          <tfoot>
                          <tr>
                            <td colspan="7" class="bg-light add-field-1 cursor-pointer text-black fw-bold" title="Click here to add another speciment that has been collected from the patient for this test">
                              <span class="d-flex align-items-center "><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add Specimen</span></span>
                            </td>
                          </tr>
                          </tfoot>

                          </thead>
                        </table>

                      </div>

                      <h3 class="font-size-15 fw-bold text-capitalize mb-3 mt-4">B. Fasting Blood Sugar</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap table-editable-1">
                          <thead class="bg-light">
                          <tr>
                            <th style="width: 40px;">#</th>
                            <th>Specimen</th>
                            <th>Brought By</th>
                            <th title="Where Applicable use the manual generated labels">Manual Label</th>
                            <th style="width: 40px;"></th>
                          </tr>
                          <tbody>

                          <tr>
                            <td>1.</td>
                            <td>
                              <select class="form-control selectpicker bg-white select-revenue form-control-sm" title="Specimen" data-live-search="true">
                                <option value="Sputum">Sputum</option>
                                <option value="Semen">Semen</option>
                                <option value="Stool">Stool</option>
                                <option value="Urine">Urine</option>
                                <option value="Saliva">Saliva</option>
                                <option value="Oral fluid">Oral fluid</option>
                                <option value="Sweat">Sweat</option>

                                <option value="Blood">Blood</option>
                                <option value="Tissue biopsy">Tissue biopsy</option>
                                <option value="Cerebrospinal fluid (CSF)">Cerebrospinal fluid (CSF)</option>
                                <option value="Bone marrow">Bone marrow</option>
                                <option value="Amniotic fluid">Amniotic fluid</option>
                              </select>
                            </td>

                            <td>
                              <div class="d-flex">
                                <select name="" class="form-select form-control form-select-sm" id="">
                                  <option value="" selected>Select Users Position</option>
                                  <option value="" selected>The Patient</option>
                                  <option value="">Physician</option>
                                  <option value="">Nurse</option>
                                </select>
                                <select name="" id=""  class="form-select form-control form-select-sm">
                                  <option value="">Kelvin Njuguna</option>
                                  <option value="">Dr Waswa Were</option>
                                  <option value="">Prof Amos Waweru</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <input type="" class="form-control form-control-sm" title="Enter manual code if using pre-made labels" placeholder="Enter Manual Code" name="" value="">
                            </td>
                            <td></td>

                          </tr>

                          <tr data-id="4" class="cloneCharges d-none">
                            <td style="width: 80px" class="categoryIndex">#</td>
                            <td>
                              <select class="form-control selectpicker bg-white select-revenue form-control-sm" title="Specimen" data-live-search="true">
                                <option value="Sputum">Sputum</option>
                                <option value="Semen">Semen</option>
                                <option value="Stool">Stool</option>
                                <option value="Urine">Urine</option>
                                <option value="Saliva">Saliva</option>
                                <option value="Oral fluid">Oral fluid</option>
                                <option value="Sweat">Sweat</option>

                                <option value="Blood">Blood</option>
                                <option value="Tissue biopsy">Tissue biopsy</option>
                                <option value="Cerebrospinal fluid (CSF)">Cerebrospinal fluid (CSF)</option>
                                <option value="Bone marrow">Bone marrow</option>
                                <option value="Amniotic fluid">Amniotic fluid</option>
                              </select>
                            </td>

                            <td class="text-right cell-change d-flex align-items-center justify-content-end">
                              <a class="btn btn-light btn-rounded waves-effect btn-circle btn-transparent cancel-new-category-2" title="Cancel">
                                <i class="bx bx-x"></i>
                              </a>
                            </td>
                          </tr>

                          <tr class="cloneCharges d-none">
                            <td style="width: 80px " class="categoryIndex ">#</td>

                            <td>
                              <select class="form-control selectpicker bg-white select-revenue form-control-sm" title="Specimen" data-live-search="true">
                                <option value="Sputum">Sputum</option>
                                <option value="Semen">Semen</option>
                                <option value="Stool">Stool</option>
                                <option value="Urine">Urine</option>
                                <option value="Saliva">Saliva</option>
                                <option value="Oral fluid">Oral fluid</option>
                                <option value="Sweat">Sweat</option>

                                <option value="Blood">Blood</option>
                                <option value="Tissue biopsy">Tissue biopsy</option>
                                <option value="Cerebrospinal fluid (CSF)">Cerebrospinal fluid (CSF)</option>
                                <option value="Bone marrow">Bone marrow</option>
                                <option value="Amniotic fluid">Amniotic fluid</option>
                              </select>
                            </td>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Generated Specimen Label Code"/>
                            </td>
                          </tr>
                          </tbody>

                          <tfoot>
                          <tr>
                            <td colspan="7" class="bg-light add-field-1 cursor-pointer text-black fw-bold" title="Click here to add another speciment that has been collected from the patient for this test">
                              <span class="d-flex align-items-center "><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add Specimen</span></span>
                            </td>
                          </tr>
                          </tfoot>

                          </thead>
                        </table>

                      </div>
                    </div>


                  </div>
                </div>
                <!-- end of consaltation -->
                <div class="col-12 mt-3">

                  <button type="button" class="btn w-100 btn-primary text-uppercase d-flex align-items-center justify-content-center specimen-submit text-center" id="acknowledgeAgainButton" title="Click to acknowledge this order again">
                    <div>Submit Specimen collection <i class="dripicons-checkmark"></i></div>
                    <div class="spinner-border text-white ms-2 d-none" style="height: 19px; width: 19px;" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>

                </div>




              </div>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- end of specimen sample collection -->




      <!-- end of revert modal -->

      <footer class="footer ">
        <div class="container-fluid ">
          <div class="row ">
            <div class="col-sm-6 ">
              ©Hospital Management Information System
            </div>
            <div class="col-sm-6 ">
              <div class="text-sm-end d-sm-block ">

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
import router from "@/router";
import ToolBarLabStat from "@/components/medical-lab/ToolBarLabStat.vue";
import LabToolBar from "@/components/medical-lab/LabToolBar.vue";
export default {
  name: 'LabOrdersAcknowledged',
  components: {
    LabToolBar,
    ToolBarLabStat,
    NavigationBar
  },

  data() {
    return {

    }
  },

  methods:{
    gotTo(route) {
      sessionStorage.setItem("selectedSub", route);
      this.$router.push(route);
    },

  },
  mounted() {

  }

};

</script>


<style scoped>

</style>