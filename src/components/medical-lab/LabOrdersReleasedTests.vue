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
                <h4 class="mb-sm-0 font-size-18">Released Lab Results</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="#">Medical Lab</a></li>
                    <li class="breadcrumb-item"><a href="#">Collected Samples</a></li>
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
                    <table class="table table-nowrap border border-dark text-uppercase align-middle text-black table-striped table-striped-info">
                      <thead class="bg-light">
                      <tr>
                        <th style="width: 70px;" title="Date of order placement">Order Date</th>
                        <th title="Order identifier">Order No.</th>
                        <th title="Patient Name">Patient</th>
                        <th title="Test Type">Test Name</th>
                        <th title="Visit Identifier">Visit ID</th>
                        <th title="Requesting Physician">Requested By</th>
                        <th title="Specimen Type">Specimen(s)</th>
                        <th title="Collector of Specimen">Ordered By</th>
                        <th title="Type of Patient">Patient Type</th>
                        <th title="Specimen Provider">Sample Collector</th>
                        <th title="Results Release Date">Results Date</th>
                        <th title="Time from order to results">Time Taken</th>
                        <th title="Test Status">Review Status</th>
                        <th class="text-right" title="Actions for specimen">Action</th>
                      </tr>
                      </thead>

                      <tfoot class="bg-light">
                      <tr>
                        <td colspan="14" class="text-center">
                          <strong>Note:</strong> This table summarizes test orders and results. Ensure all details are verified for accuracy.
                          <br> For any inquiries, please contact the laboratory directly.
                        </td>
                      </tr>
                      </tfoot>
                      <tbody>
                      <tr>
                        <td>01 Jan 2024 10:15 AM</td>
                        <td>ORD-12345</td>
                        <td>Kelvin Ndungu</td>
                        <td>Urinalysis</td>
                        <td>OPD1234</td>
                        <td>Steve K.</td>
                        <td>Urine</td>
                        <td>Alex Kinoti</td>
                        <td>Out Patient</td>
                        <td>Dan Omingo</td>
                        <td>01 Jan 2024 02:30 PM</td>
                        <td>4 hrs 15 mins</td>
                        <td><span class="badge bg-success">Reviewed</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>01 Jan 2024 09:30 AM</td>
                        <td>ORD-12346</td>
                        <td>Jane Doe</td>
                        <td>Blood Test</td>
                        <td>OPD1235</td>
                        <td>Mary J.</td>
                        <td>Blood</td>
                        <td>Tom Mwangi</td>
                        <td>In Patient</td>
                        <td>James K.</td>
                        <td>01 Jan 2024 01:45 PM</td>
                        <td>4 hrs 15 mins</td>
                        <td><span class="badge bg-warning text-black fw-bold">Pending Review</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>01 Jan 2024 11:00 AM</td>
                        <td>ORD-12347</td>
                        <td>David Kim</td>
                        <td>Lipid Profile</td>
                        <td>OPD1236</td>
                        <td>John R.</td>
                        <td>Blood</td>
                        <td>Alex Kinoti</td>
                        <td>Out Patient</td>
                        <td>Jane M.</td>
                        <td>01 Jan 2024 03:00 PM</td>
                        <td>4 hrs 0 mins</td>
                        <td><span class="badge bg-black text-white">Referral Test</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>02 Jan 2024 08:00 AM</td>
                        <td>ORD-12348</td>
                        <td>Anna W.</td>
                        <td>Complete Blood Count</td>
                        <td>OPD1237</td>
                        <td>Mark T.</td>
                        <td>Blood</td>
                        <td>Tom Mwangi</td>
                        <td>In Patient</td>
                        <td>Alex K.</td>
                        <td>02 Jan 2024 12:30 PM</td>
                        <td>4 hrs 30 mins</td>
                        <td><span class="badge bg-black text-white">Referral Test</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>02 Jan 2024 09:15 AM</td>
                        <td>ORD-12349</td>
                        <td>Grace A.</td>
                        <td>Thyroid Function Test</td>
                        <td>OPD1238</td>
                        <td>Linda B.</td>
                        <td>Blood</td>
                        <td>Alex Kinoti</td>
                        <td>Out Patient</td>
                        <td>Dan Omingo</td>
                        <td>02 Jan 2024 01:00 PM</td>
                        <td>3 hrs 45 mins</td>
                        <td><span class="badge bg-success">Reviewed</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>02 Jan 2024 10:00 AM</td>
                        <td>ORD-12350</td>
                        <td>John D.</td>
                        <td>Allergy Test</td>
                        <td>OPD1239</td>
                        <td>Emma T.</td>
                        <td>Blood</td>
                        <td>Alex Kinoti</td>
                        <td>Out Patient</td>
                        <td>Linda B.</td>
                        <td>02 Jan 2024 03:15 PM</td>
                        <td>5 hrs 15 mins</td>
                        <td><span class="badge bg-warning text-black fw-bold">Pending Review</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>03 Jan 2024 08:30 AM</td>
                        <td>ORD-12351</td>
                        <td>Emily R.</td>
                        <td>Vitamin D Level</td>
                        <td>OPD1240</td>
                        <td>Mark T.</td>
                        <td>Blood</td>
                        <td>Tom Mwangi</td>
                        <td>In Patient</td>
                        <td>Dan Omingo</td>
                        <td>03 Jan 2024 12:45 PM</td>
                        <td>4 hrs 15 mins</td>
                        <td><span class="badge bg-black text-white">Referral Test</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>03 Jan 2024 10:15 AM</td>
                        <td>ORD-12352</td>
                        <td>Chris A.</td>
                        <td>Glucose Test</td>
                        <td>OPD1241</td>
                        <td>Linda B.</td>
                        <td>Blood</td>
                        <td>Alex Kinoti</td>
                        <td>Out Patient</td>
                        <td>Jane M.</td>
                        <td>03 Jan 2024 01:30 PM</td>
                        <td>3 hrs 15 mins</td>
                        <td><span class="badge bg-success">Reviewed</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>03 Jan 2024 11:00 AM</td>
                        <td>ORD-12353</td>
                        <td>Sarah K.</td>
                        <td>Hematocrit Test</td>
                        <td>OPD1242</td>
                        <td>Mark T.</td>
                        <td>Blood</td>
                        <td>Tom Mwangi</td>
                        <td>In Patient</td>
                        <td>Alex K.</td>
                        <td>03 Jan 2024 02:15 PM</td>
                        <td>3 hrs 15 mins</td>
                        <td><span class="badge bg-warning text-black fw-bold">Pending Review</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td>04 Jan 2024 09:45 AM</td>
                        <td>ORD-12354</td>
                        <td>Lucas B.</td>
                        <td>Electrolyte Panel</td>
                        <td>OPD1243</td>
                        <td>Linda B.</td>
                        <td>Blood</td>
                        <td>Dan Omingo</td>
                        <td>Out Patient</td>
                        <td>Tom Mwangi</td>
                        <td>04 Jan 2024 01:00 PM</td>
                        <td>3 hrs 15 mins</td>
                        <td><span class="badge bg-black text-white">Referral Test</span></td>
                        <td class="text-right">
                          <button class="btn mx-2 btn-success btn-sm text-uppercase" title="Enter results" data-bs-toggle="modal" data-bs-target=".results-entry-modal-covid">View Findings</button>
                          <button class="btn btn-sm btn-info text-uppercase" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>
                        </td>
                      </tr>
                      </tbody>
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

      <!-- Test results modal -->
      <div class="modal fade receipting-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog  w-100 modal-lg modal-dialog-centered modal-full">
          <div class="modal-content w-100">
            <div class="modal-header">
              <h5 class="modal-title ml-3 me-3" id="myLargeModalLabel">Lab Test Details For Ticket No T45</h5>
              <span class="badge rounded-pill bg-success text-uppercase font-12px">Critical Level: Expectant</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <address>
                    <strong class="text-capitalize">Patient Details:</strong><br>
                    Alex Wanjala, 23 Year Old Male,<br>
                    email@mail.com, 0704 549 859<br>
                    Patient ID. MPI/23455<br/>
                    <br>


                  </address>
                </div>
                <div class="col-6 text-right d-none">
                  <address>
                    <strong class="text-capitalize">Location Details</strong><br>
                    Street/Road: Mombasa Road<br>
                    Plot No.: 122202/1250<br>
                    Building: The Tower. Floor: 12. Door/Stall No.: 123<br/>
                    Subcounty: CBD. Ward: Mututu

                  </address>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="hori-timeline mt-4">
                    <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel" id="timeline-carousel">
                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Sep 2023, 10:09 AM</div>
                            <h5 class="mb-4">Checked In</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize">By <a href="#">Sharon Omondi</a></p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Sep 2023, 10:47 AM</div>
                            <h5 class="mb-4">Triage</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">By Kelvin Kinoti</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Sep, 10:45 AM</div>
                            <h5 class="mb-4">Consaltation</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">By Dr Kip Patel</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list ">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Sep, 10:47 AM</div>
                            <h5 class="mb-4">Cashier</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">Served By Josphine</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Specimen Collection</h5>
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
                            <h5 class="mb-4">Test Results</h5>
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
                            <h5 class="mb-4">Pharmecey</h5>
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
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="mdi mdi-test-tube  font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Specimen Collection  (2 Tests are to be conducted)</p>

                      </div>
                    </div>
                    <div class="col-12 allergy-table">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3 mt-1 d-none">Patient's Specimen</h3>
                      <p>Select the specimen collected for each test and indicate correctly the label for the corresponding specimen.</p>


                      <h3 class="font-size-15 fw-bold text-capitalize mb-3 mt-4">A. ABO Blood Group</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap table-sm table-editable-1">
                          <thead class="bg-light">
                          <tr>
                            <th style="width: 40px;">#</th>
                            <th>Specimen</th>
                            <th>Specimen Label</th>
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
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Specimen label"/>
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
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Specimen label"/>
                            </td>
                          </tr>
                          </tbody>

                          <tfoot>
                          <tr>
                            <td colspan="7" class="bg-light add-field-1 cursor-pointer text-black fw-bold">
                              <span class="d-flex align-items-center "><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add Specimen</span></span>
                            </td>
                          </tr>
                          </tfoot>

                          </thead>
                        </table>

                      </div>

                      <h3 class="font-size-15 fw-bold text-capitalize mb-3 mt-4">B. Fasting Blood Sugar</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap table-sm table-editable-1">
                          <thead class="bg-light">
                          <tr>
                            <th style="width: 40px;">#</th>
                            <th>Specimen</th>
                            <th>Specimen Label</th>
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
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Specimen label"/>
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
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Specimen label"/>
                            </td>
                          </tr>
                          </tbody>

                          <tfoot>
                          <tr>
                            <td colspan="7" class="bg-light add-field-1 cursor-pointer text-black fw-bold">
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
                  <button class="btn btn-primary w-100 text-center text-uppercase generate-bill"> Done <i class="dripicons-checkmark"></i></button>
                </div>




              </div>
            </div>
            <div class="modal-footer d-none">

              <a href="#" target="_blank" type="button" class="btn btn-primary waves-effect waves-light w-100">
                <i class="mdi mdi-check font-size-16 align-middle me-2"></i> Submit Form
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- end of receipting modal -->

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
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-uppercase" id="myLargeModalLabel">Details of the Lab Test - (ORD1234)</h5>
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

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Oct 2024, 1:03 AM</div>
                            <h5 class="mb-4">Sample collection</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bxs-check-circle h1 text-success h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize mb-0">Leyla Yusuf (Lab Technician)</p>
                            <i><small>Medical Lab Two</small></i>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list ">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">12 Oct 2024, 1:27 AM</div>
                            <h5 class="mb-4">Results Release</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bxs-check-circle h1 text-success h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize mb-0">Dr. Alex Shah (Biochemist Eng)</p>
                            <i><small>Medical Lab Two</small></i>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-12 col-md-8 col-lg-12 col-xl-12 mb-5">
                  <div class="table-responsive mt-4">
                    <table class="table border border-info text-uppercase table-sm table-striped align-middle">
                      <tbody>
                      <tr>
                        <th>Patient</th>
                        <td class="text-black">Mr Kelvin Njuguna</td>
                      </tr>

                      <tr>
                        <th>Age | Gender</th>
                        <td class="text-black">24 | Male</td>
                      </tr>

                      <tr>
                        <th>ID No.</th>
                        <td class="text-black">123456</td>
                      </tr>

                      <tr>
                        <th>Patient ID</th>
                        <td class="text-black">MP12345</td>
                      </tr>

                      <tr>
                        <th>Reason for Test</th>
                        <td class="text-black" title="The test was recommended by another healthcare provider or referred from a different facility.">Referral</td>
                        <td class="text-black d-none" title="Ordered directly by a consulting physician after assessing the patient.">Sent by Consultation Doctor</td>
                        <td class="text-black d-none" title="Test conducted during the patient's stay in the hospital for monitoring or diagnosis.">Inpatient Investigation</td>

                      </tr>
                      <tr>
                        <th>Test Name</th>
                        <td class="text-black">Blood Culture</td>
                      </tr>

                      <tr>
                        <th>Specimen Type</th>
                        <td class="text-black">Blood Sample</td>
                      </tr>

                      <tr>
                        <th>Specimen Provided By</th>
                        <td class="text-black fw-bold">Kelvin Njuguna (Patient)</td>
                      </tr>

                      <tr>
                        <th>Generated System Code</th>
                        <td class="text-black">BLD12345</td>
                      </tr>

                      <tr>
                        <th>Label Print Status</th>
                        <td class="text-black"><span class="badge rounded-pill bg-success text-uppercase">Printed</span></td>
                      </tr>

                      <tr>
                        <th>Manual Code Entered</th>
                        <td class="text-black">HDGF787879</td>
                      </tr>

                      <tr>
                        <th>Patient Type</th>
                        <td class="text-black">Outpatient</td>
                      </tr>


                      <tr>
                        <th>Results Released On</th>
                        <td class="text-black">02 Jan 2024 11:30 AM</td>
                      </tr>

                      <tr>
                        <th>Time Taken</th>
                        <td class="text-black">3 Hrs 45 Min</td>
                      </tr>

                      <tr>
                        <th>Doctor Review Status</th>
                        <td class=""><span class="badge bg-black text-white">Referral Test</span></td>
                      </tr>



                      </tbody>
                    </table>

                  </div>
                </div>


              </div>



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

                <div class="col-8">
                  <div class="table-responsive mt-4">
                    <table class="table border border-success text-uppercase table-sm table-striped table-striped-success">
                      <tbody>
                      <tr>
                        <th>Invoice Amount</th>
                        <td  class="text-black ">KES 7000</td>
                      </tr>
                      <tr>
                        <th>Amount Discounted</th>
                        <td  class="text-black text-black ">KES 0.00</td>
                      </tr>
                      <tr>
                        <th>Amount Paid</th>
                        <td  class="text-black FS-2 text-black fw-bold">KES 7,000</td>
                      </tr>
                      </tbody>
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

      <!-- revert modal confirmation -->
      <div class="modal fade test-revert-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header d-none">
              <h4 class="modal-title text-uppercase" id="myLargeModalLabel">Acknowledgment Reverted</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <!-- Confirmation Icon and Message -->
                <div class="col-12 d-flex align-items-center justify-content-center pt-2">
                  <div class="d-flex align-items-center justify-content-center flex-column pt-3">
                    <div class="flex-shrink-0 align-self-center mb-4">
                      <div class="avatar-md rounded-circle bg-warning mini-stat-icon" title="Action Reverted">
                                                <span class="avatar-title rounded-circle bg-danger">
                                                    <i class="bx bx-undo fs-1" title="Acknowledgment Reverted"></i>
                                                </span>
                      </div>
                    </div>
                    <h4 class="text-uppercase text-danger text-black modal-title" title="Acknowledgment Reverted">Acknowledgement Reverted</h4>
                    <p class="text-center" title="You have successfully reverted this acknowledgment">
                      The acknowledgment has been successfully reverted. If you would like to acknowledge the order again, you can do so from the <strong>order table</strong>.
                    </p>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="col-12 d-flex justify-content-center pt-4 text-uppercase pb-2">
                  <!-- Acknowledge Again Button -->
                  <button type="button" class="btn btn-sm btn-success text-uppercase d-flex align-items-center mx-2 Acknowledge-order" id="acknowledgeAgainButton" title="Click to acknowledge this order again">
                    <div>Acknowledge Again</div>
                    <div class="spinner-border text-white ms-2 d-none" style="height: 19px; width: 19px;" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>

                  <!-- Close Button -->
                  <button type="button" class="btn btn-outline-dark waves-effect waves-light text-uppercase" id="closeButton" data-bs-dismiss="modal" title="Click to close the modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.Approve application -->
      </div>

      <!-- covid test findings modal -->
      <div class="modal fade results-entry-modal-covid" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog  w-100 modal-xl modal-dialog-centered modal-full">
          <div class="modal-content w-100">
            <div class="modal-header text-black text-uppercase" >
              <h5 class="modal-title ml-3 me-3" id="myLargeModalLabel">Lab Tests results entry</h5>
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

                <div class="col-8 col-sm-12 col-md-8 col-lg-7 col-xl-6">
                  <div class="table-responsive mt-4">
                    <table class="table border border-info text-uppercase table-sm table-striped table-striped-info align-middle">
                      <tbody>
                      <tr>
                        <th>Requested By</th>
                        <td class="text-black">Dr. Alex Wanjala (Physician)</td>
                      </tr>
                      <tr>
                        <th>Collected By</th>
                        <td class="text-black">Steve Ogutu (Lab Technician)</td>
                      </tr>
                      <tr>
                        <th>Specimen Provided By</th>
                        <td class="text-black fw-bold">Kelvin Njuguna (Patient)</td>
                      </tr>
                      <tr>
                        <th>Requested Date & Time</th>
                        <td class="text-black">11 Jan 2023 12:34 AM</td>
                      </tr>
                      <tr>
                        <th>Specimen Collection Date & Time</th>
                        <td class="text-black">11 Jan 2023 01:00 AM</td>
                      </tr>
                      <tr>
                        <th>Specimen Type</th>
                        <td class="text-black">Blood Sample</td>
                      </tr>
                      <tr>
                        <th>
                          <p class="mb-0 pb-0">Test Performed On</p>
                        </th>
                        <td class="text-black">
                          12 Jan 2023 11:56 AM
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- consaltation findings and feedback -->
                <div class="col-12 pt-3">

                  <div class="row">
                    <div class="col-12">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center text-black">
                        <i class="mdi mdi-clipboard-text font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Results Entry</p>
                      </div>
                    </div>

                    <div class="col-12 d-none">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3">Urinalysis Exam</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap border border-light text-uppercase align-middle text-black">
                          <thead class="bg-light">
                          <tr>
                            <th>#</th>
                            <th>Parameter/Analyte</th>
                            <th>Result</th>
                            <th>Unit Of Measure</th>
                            <th title="Where applicable, use the manually generated labels">Reference Range</th>
                            <th title="Indicates whether the result is critical or requires immediate attention">Flag</th>
                          </tr>
                          </thead>
                          <tbody>
                          <!-- Physical Characteristics -->
                          <tr>
                            <th>1.</th>
                            <th title="Color of the urine sample">Color</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Pale yellow to amber</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>2.</th>
                            <th title="Clarity of the urine sample">Clarity</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Clear</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>3.</th>
                            <th title="Presence of any unusual odor">Odor</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Normal</td>
                            <td></td>
                          </tr>

                          <!-- Chemical Analysis -->
                          <tr>
                            <th>4.</th>
                            <th title="Acidity or alkalinity of the urine">pH</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>4.5 - 8.0</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>5.</th>
                            <th title="Density of urine indicating concentration">Specific Gravity</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>g/mL</td>
                            <td>1.005 - 1.030</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>6.</th>
                            <th title="Presence of glucose in urine">Glucose</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>7.</th>
                            <th title="Presence of ketones indicating fat metabolism">Ketones</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>8.</th>
                            <th title="Presence of protein in urine">Protein</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>9.</th>
                            <th title="Presence of blood in urine">Blood</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>10.</th>
                            <th title="Presence of nitrite indicating bacterial infection">Nitrite</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>11.</th>
                            <th title="Presence of leukocyte esterase indicating infection">Leukocyte Esterase</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>12.</th>
                            <th title="Presence of bilirubin indicating liver issues">Bilirubin</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>13.</th>
                            <th title="Presence of urobilinogen indicating liver function">Urobilinogen</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>mg/dL</td>
                            <td>0.2 - 1.0</td>
                            <td></td>
                          </tr>

                          <!-- Microscopic Examination -->
                          <tr>
                            <th>14.</th>
                            <th title="Count of red blood cells under microscope">Microscopic RBCs</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>cells/hpf</td>
                            <td>0 - 2</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>15.</th>
                            <th title="Count of white blood cells under microscope">Microscopic WBCs</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>cells/hpf</td>
                            <td>0 - 5</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>16.</th>
                            <th title="Presence of bacteria in urine">Bacteria</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="absent">Absent</option>
                                <option value="present">Present</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Absent</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>17.</th>
                            <th title="Presence of crystals indicating possible kidney issues">Crystals</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>18.</th>
                            <th title="Presence of casts indicating kidney damage">Casts</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          </tbody>
                        </table>

                      </div>
                    </div>

                    <div class="col-12 d-none">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3">amoebic examination</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap border  text-uppercase align-middle text-black">
                          <thead class="bg-light">
                          <tr>
                            <th>#</th>
                            <th>Parameter/Analyte</th>
                            <th>Result</th>
                            <th>Unit Of Measure</th>
                            <th title="Where applicable, use the manually generated labels">Reference Range</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <th>1.</th>
                            <th>Entamoeba histolytica</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Absent</td>
                          </tr>
                          <tr>
                            <th>2.</th>
                            <th>Other Entamoeba Species</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Absent</td>
                          </tr>
                          <tr>
                            <th>3.</th>
                            <th>Red Blood Cells</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Absent</td>
                          </tr>
                          <tr>
                            <th>4.</th>
                            <th>White Blood Cells</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Absent</td>
                          </tr>
                          <tr>
                            <th>5.</th>
                            <th>Macroscopic Appearance</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Normal</td>
                          </tr>
                          <tr>
                            <th>6.</th>
                            <th>Stool Consistency</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Formed</td>
                          </tr>
                          <tr>
                            <th>7.</th>
                            <th>Stool Color</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Brown</td>
                          </tr>
                          <tr>
                            <th>8.</th>
                            <th>Odor</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>NA</td>
                            <td>Normal</td>
                          </tr>
                          </tbody>
                        </table>

                      </div>
                    </div>

                    <div class="col-12 d-none">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3">HIV Rapid Test results (blood)</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap border border-light text-uppercase align-middle text-black">
                          <thead class="bg-light">
                          <tr>
                            <th>#</th>
                            <th>Parameter/Analyte</th>
                            <th>Result</th>
                            <th>Unit Of Measure</th>
                            <th title="Indicates the expected normal range for the test result">Reference Range</th>
                            <th title="Indicates whether the result requires further action or is critical">Flag</th>
                          </tr>
                          </thead>
                          <tbody>
                          <!-- HIV Rapid Test Results -->
                          <tr>
                            <th>1.</th>
                            <th title="HIV-1/2 Antibody Test">HIV-1/2 Ab</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                                <option value="indeterminate">Indeterminate</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>2.</th>
                            <th title="HIV-1 Antigen Test">HIV-1 Ag</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="negative">Negative</option>
                                <option value="positive">Positive</option>
                                <option value="indeterminate">Indeterminate</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>Negative</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>3.</th>
                            <th title="CD4 Cell Count">CD4 Count</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>cells/mm³</td>
                            <td>500 - 1600</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>4.</th>
                            <th title="Viral Load Test">HIV Viral Load</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Findings">
                            </td>
                            <td>copies/mL</td>
                            <td>Undetectable</td>
                            <td></td>
                          </tr>

                          </tbody>
                        </table>

                      </div>
                    </div>

                    <div class="col-12 d-none">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3"> Culture Test Results</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap border border-light text-uppercase align-middle text-black">
                          <thead class="bg-light">
                          <tr>
                            <th>#</th>
                            <th>Parameter</th>
                            <th>Result</th>
                            <th>Unit Of Measure</th>
                            <th title="Indicates the expected normal range for the test result">Normal Range</th>
                            <th title="Indicates whether the result requires further action or is critical">Flag</th>
                          </tr>
                          </thead>
                          <tbody>
                          <!-- Culture Test Results -->
                          <tr>
                            <th>1.</th>
                            <th title="Type of sample (e.g. Sputum, Blood, Urine)">Sample Type</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Sample Type">
                            </td>
                            <td>NA</td>
                            <td>NA</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>2.</th>
                            <th title="Organism Isolated (if any)">Organism Isolated</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Organism">
                            </td>
                            <td>NA</td>
                            <td>No Growth</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>3.</th>
                            <th title="Colony Count for Organism Growth">Colony Count</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Colony Count">
                            </td>
                            <td>CFU/mL</td>
                            <td>10^5</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>4.</th>
                            <th title="Gram Stain Results">Gram Stain</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="gram-positive">Gram Positive</option>
                                <option value="gram-negative">Gram Negative</option>
                                <option value="no organisms seen">No Organisms Seen</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>No Organisms Seen</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>5.</th>
                            <th title="Antibiotic Sensitivity Test">Antibiotic Sensitivity</th>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Antibiotics">
                            </td>
                            <td>NA</td>
                            <td>Sensitive/Resistant</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>6.</th>
                            <th title="Hemolysis Pattern (where applicable)">Hemolysis Pattern</th>
                            <td>
                              <select class="form-select form-select-sm">
                                <option value="">Select</option>
                                <option value="alpha">Alpha</option>
                                <option value="beta">Beta</option>
                                <option value="gamma">Gamma</option>
                                <option value="no hemolysis">No Hemolysis</option>
                              </select>
                            </td>
                            <td>NA</td>
                            <td>NA</td>
                            <td></td>
                          </tr>

                          </tbody>
                        </table>

                      </div>
                    </div>

                    <div class="col-12">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3">COVID-19 RT-PCR Test</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap border border-light text-uppercase align-middle text-black">
                          <thead class="bg-light">
                          <tr>
                            <th>#</th>
                            <th>Parameter/Analyte</th>
                            <th>Result</th>
                            <th>Unit Of Measure</th>
                            <th title="Indicates the expected normal range for the test result">Reference Range</th>
                            <th title="Indicates whether the result requires further action or is critical">Flag</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <th>1.</th>
                            <th>COVID-19 RT-PCR (S-gene)</th>
                            <td>Negative</td> <!-- Result text -->
                            <td>NA</td>
                            <td>Negative</td>
                            <td class="text-success">Normal</td> <!-- Flag with green color for normal result -->
                          </tr>
                          <tr>
                            <th>2.</th>
                            <th>COVID-19 RT-PCR (E-gene)</th>
                            <td>Positive</td> <!-- Text-based result -->
                            <td>NA</td>
                            <td>Negative</td>
                            <td class="text-warning">Requires Attention</td> <!-- Flag with yellow color for attention -->
                          </tr>
                          <tr>
                            <th>3.</th>
                            <th>COVID-19 RT-PCR (SARS-CoV-2)</th>
                            <td>Negative</td> <!-- Text-based result -->
                            <td>NA</td>
                            <td>Negative</td>
                            <td class="text-success">Normal</td> <!-- Green for normal result -->
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>


                    <div class="col-12 d-none">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3">Biochemistry T4 Test</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap border border-light text-uppercase align-middle text-black">
                          <thead class="bg-light">
                          <tr>
                            <th>#</th>
                            <th>Parameter/Analyte</th>
                            <th>Result</th>
                            <th>Unit Of Measure</th>
                            <th title="Indicates the expected normal range for the test result">Reference Range</th>
                            <th title="Indicates whether the result requires further action or is critical">Flag</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <th>1.</th>
                            <th>Total T4 (Thyroxine)</th>
                            <td>
                              <select class="form-select form-select-sm" aria-label="Select result">
                                <option value="">Select</option>
                                <option value="low">Low</option>
                                <option value="normal">Normal</option>
                                <option value="high">High</option>
                              </select>
                            </td>
                            <td>ng/dL</td>
                            <td>4.5 - 11.2</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th>2.</th>
                            <th>Free T4 (Thyroxine)</th>
                            <td>
                              <select class="form-select form-select-sm" aria-label="Select result">
                                <option value="">Select</option>
                                <option value="low">Low</option>
                                <option value="normal">Normal</option>
                                <option value="high">High</option>
                              </select>
                            </td>
                            <td>ng/dL</td>
                            <td>0.8 - 1.8</td>
                            <td></td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>


                  </div>

                  <!-- more actions -->
                  <div class="row">
                    <div class="col-12 mt-3">
                      <div class="bg-warning border-2 bg-soft p-2 mb-4 d-flex align-items-center text-black">
                        <i class="mdi mdi-file-document-outline font-28 mr-15px"></i>

                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Review Notes</p>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="">Review given by ALex Wafula Wanjala (Lab technician)</label>
                      <p>
                        This test was conducted to assess the patient's [brief description of the medical condition or symptoms, e.g., "renal function," "liver health," "infection status"]. The results provide important data on various parameters related to the health of the patient.
                      </p>
                    </div>

                  </div>
                </div>
                <!-- end of consaltation -->
                <div class="col-12 mt-3">

                  <a href="PrintDocs/LabResultsDocument/LabResults.html" target="_blank" type="button" class="btn btn-primary mt-2 waves-effect waves-light text-uppercase">
                    <i class="bx bxs-printer fs-3 align-middle me-2"></i> Print Results Slip
                  </a>

                </div>




              </div>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>

      <button class="btn btn-sm btn-info text-uppercase mx-2 d-none " data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View more details about this test">Details</button>


      <!-- end of revert modal -->

      <footer class="footer ">
        <div class="container-fluid ">
          <div class="row ">
            <div class="col-sm-6 ">
               © Hospital Management Information System
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



<script setup>

import NavigationBar from "@/components/Navigation.vue";
import ToolBarLabStat from "@/components/medical-lab/ToolBarLabStat.vue";
import LabToolBar from "@/components/medical-lab/LabToolBar.vue";
</script>

<style scoped>

</style>