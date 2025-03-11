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

  <!-- <body data-layout="horizontal" data-topbar="dark"> -->
  <!-- Loader -->
  <!-- Begin page -->

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
                <h4 class="mb-sm-0 font-size-18">Scheduled Lab tests pending payment</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="lab-stats.html">Medical lab</a></li>
                    <li class="breadcrumb-item"><a href="#">Tests pending payment</a></li>
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
                    <table class="table table-striped table-striped-info table-s  align-middle text-nowrap">
                      <thead class="bg-info text-black text-uppercase border border-info">
                      <th title="Date and Time of Lab Test Order">Date</th>
                      <th title="Patient Visit Number">Visit No.</th>
                      <th title="invoice number for the scheduled test">Invoice No.</th>
                      <th title="Patient Name">Patient</th>
                      <th title="Outpatient or Inpatient">Type</th>
                      <th title="Doctor Who Ordered the Test">Sent By</th>
                      <th title="Lab Test(s) Ordered">Test(s)</th>
                      <th title="Mode of Payment (e.g., Cash, Insurance)">Payment</th>
                      <th title="Payment Status (Paid or Unpaid)">Status</th>
                      <th title="Amount Owed for the Test(s)" class="text-right">Amount</th>
                      <th title="Available Actions" class="text-right">Actions</th>
                      </thead>
                      <tbody class="border border-info">
                      <tr  :key="index" :value="item" v-for="(item, index) in billDetails">
                        <td>{{formatDate(item.dateCreated)}}</td>
                        <td>{{item.patientID}}</td>
                        <td>{{item.billNo}}</td>
                        <td>{{item.description}}</td>
                        <td>Outpatient</td>
                        <td>Dr. {{item.names}}</td>
                        <td>{{item.feeDescription}}</td>
                        <td>MPESA</td>
                        <td class="text-uppercase">
                          <span v-if="item.status !=='PAID'" class="badge rounded-pill bg-danger float-end">{{item.status}}</span>
                          <span v-else class="badge rounded-pill bg-success float-end">{{item.status}}</span>
                        </td>
                        <td class="text-right">KES {{formatPrice(item.billBalance)}}</td>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
                            <a @click="printBill(item.billNo)" href="javascript: void(0);" type="button" class="btn btn-sm btn-dark waves-effect waves-light text-uppercase">
                              <i class="mdi mdi-printer fs-6 align-middle me-2"></i> Print Invoice
                            </a>
                            <button @click="getBill(item.billNo)" class="btn btn-sm btn-info text-uppercase ms-2" data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Lab Test Details">
                              Details
                            </button>
                            <button @click="getBill(item.billNo)" class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2 modal-details-btn" data-bs-toggle="modal" data-bs-target="#payment-modal" title="Initiate Payment for Lab Tests">
                              <div>Initiate Payment</div>
                              <div class="spinner-border text-white ms-2 d-none" style="height: 19px; width: 19px;" role="status">
                                <span class="sr-only">Loading...</span>
                              </div>
                            </button>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                      <tfoot class="border border-dark">
                      <tr class="table-primary text-black border-dark">
                        <th colspan="3">{{billDetails.length}} Patients</th>
                        <th colspan="6">{{billDetails.length}} Tests</th>
                        <th class="text-right"></th>
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

      <!-- payment modal -->
      <div class="modal fade" id="payment-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header d-none">
              <span class="badge badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Receive Payment</span>


              <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle close-modal" data-dismiss="modal"  aria-label="Close">
                        <span class="avatar-title bg-transparent text-reset font-18px">
                            <i class="bx bx-x"></i>
                        </span>
              </button>

            </div>
            <div class="modal-body">
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge  badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Receive Payment</span>


                <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle pull-right close-modal" data-bs-dismiss="modal" aria-label="Close">
                        <span class="avatar-title bg-transparent text-reset font-18px">
                            <i class="bx bx-x"></i>
                        </span>
                </button>
              </div>

              <div class="payment-panel-parent">

                <div v-if="paymentPanel" class="text-center payment-active-panel d-flex flex-column justify-content-around align-items-center sent-success payment-panel">
                  <div class="success-image mb-4 pb-4 pt-4">
                    <img src="assets/images/bills.svg" height="200" alt="">
                  </div>
                  <h4 class="text-black fw-bold">{{message}}</h4>
                  <p class="text-muted mb-4">The bill has been created Successfully, you can print the bill or opt to receive payment for this bill.</p>
                  <div class="d-flex w-100 pb-2">
                    <button @click="showPaymentMethod()" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                      <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                      Receive Payment
                    </button>
                    <a @click="printBill(billDetail.billNo)" target="_blank" data-dismiss="" type="button" class="btn btn-outline-secondary waves-effect dismin-modal">Print Bill</a>
                  </div>
                </div>

                <div v-if="paymentMethod" class="send-method payment-panel ">
                  <label for="" class="mb-0 pb-0">Payment Method</label>
                  <p><small class="text-muted">How would you like to send this money?</small></p>

                  <div>
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button fw-medium" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div class="flex-shrink-0 me-3">
                              <img class="rounded-circle" src="assets/images/users/mpesa.jpg" alt="Mobile Money" height="65">
                            </div>
                            <div class="d-flex flex-column">
                              <p class="m-0 p-0 text-uppercase fw-semibold">MPESA</p>
                              <p class="mb-0 p-0"> <small>A payment request will be sent directly to the customer</small></p>
                            </div>
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <div>
                              <p>
                                A payment request of <strong class="text-black">KES {{billDetail.billBalance}}</strong> will be sent to the MPESA number you enter below.
                              </p>
                            </div>
                            <div class="form-group">
                              <label for="">MPESA Number</label>
                              <div class="form-floating mb-3">
                                <input v-model="phoneNumber" type="text" class="form-control font-21 text-success form-control-lg" id="phone-input" placeholder="Enter Name">
                                <label for="floatingnameInput">Phone No.</label>
                              </div>

                              <button @click="showTransactionSummary('MPESA')" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                                <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                                Send Payment Request
                              </button>

                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button class="accordion-button fw-medium collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div class="flex-shrink-0 me-3">
                              <img class="rounded-circle" src="assets/images/users/money.jpg" alt="Mobile Money" height="65">
                            </div>
                            <div class="d-flex flex-column">
                              <p class="m-0 p-0 text-uppercase fw-semibold">bank Receipting</p>
                              <p class="mb-0 p-0"> <small>Enter the receipt number here to confirm payment for this transaction.</small></p>


                            </div>
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <div class="form-group">
                              <label for="">Enter The Bank's Receipt Number</label>
                              <div class="form-floating mb-3">
                                <input v-model="paymentData.bankReceiptNo" type="text" class="form-control font-21 text-success form-control-lg" id="phone-input" placeholder="Enter Name">
                                <label for="floatingnameInput">Bank Ref No.</label>
                              </div>

                              <button @click="showTransactionSummary('BANK')" class="btn w-100 btn-warning mt-3 btn-bank">
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div v-if="transactionSummary" class="transaction-summary payment-panel">
                  <label for="">Transaction Breakdown</label>
                  <div class="border p-4 rounded ">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="text-muted ">
                          BillO NO.
                        </div>
                      </div>

                      <div class="col-lg-6 align-self-end">
                        <div class=" text-right text-black">
                          {{billDetail.billNo}}
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="text-muted mt-2">
                          Bill For
                        </div>
                      </div>

                      <div class="col-lg-6 align-self-end">
                        <div class=" text-right text-black">
                          {{billDetail.incomeTypeDescription}}
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="text-muted mt-2">
                          Payment Method
                        </div>
                      </div>

                      <div class="col-lg-6 align-self-end">
                        <div class=" text-right text-black">
                          {{paymentData.paymentMode}}
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="text-muted mt-2">
                          Transaction Amount
                        </div>
                      </div>

                      <div class="col-lg-6 align-self-end">
                        <div class=" text-right text-black">
                          KES {{billDetail.billBalance}}
                        </div>
                      </div>


                      <div class="col-12 text-black"><hr class="mb-0 pb-0"></div>

                      <div class="col-lg-6 text-uppercase">
                        <div class="text-muted mt-2 font-21">
                          Total
                        </div>
                      </div>

                      <div class="col-lg-6 align-self-end text-uppercase">
                        <div class=" text-right text-black font-21 fw-bold">
                          KES {{billDetail.billBalance}}
                        </div>
                      </div>
                    </div>

                    <div class="mpesa-confirmation ">
                      <div v-if="paymentData.paymentMode==='MPESA'">
                        <p class="text-muted mt-2">A payment request of <strong class="text-black">KES {{billDetail.billBalance}}</strong> will be sent to <strong class="text-black"> phone number ({{ phoneNumber }})</strong> soon after you click the <strong class="text-black text-capitalize">Send Request</strong> button bellow.
                          <br>
                          <br>
                          Remember to <strong class="text-black">Check your phone</strong> to confirm payment by entering your Mpesa pin.</p>
                      </div>

                      <div>{{message}}  </div>
                      <br>
                      <button @click="makePayment()" class="btn btn-primary btn-flex flex-grow-1 waves-effect btn-send waves-light text-center w-100">
                        <div class="d-flex justify-content-center align-items-center">
                          <div class="stk-timer-container d-none justify-content-center align-items-center">
                            <span class="mdi mdi-timer-outline font-16px"></span>
                            <span class="stk-timer px-2"></span>
                          </div>
                          <div class="justify-content-center align-items-center d-flex">
                            <span class="px-2">Send Request</span>
                            <div class="flip-x"><i class="mdi mdi-reply ms-3 font-16px"></i></div>
                          </div>
                        </div>
                      </button>
                    </div>


                  </div>
                </div>

                <div v-if="transactionCompleted" class="text-center d-flex flex-column justify-content-around align-items-center sent-success payment-panel">
                  <div class="success-image mb-4">
                    <img src="assets/images/payment-confirmation-images/sent.svg" height="200" alt="">
                  </div>
                  <h4 class="text-blink-primary fw-bold">Transaction Complete</h4>
                  <p class="text-muted mb-4"><strong class="text-black">KES {{receiptDetails.receiptAmount}}</strong> has been received for <strong class="text-black">Bill No. {{receiptDetails.billNo}}</strong></p>
                  <button @click="printReceipt()" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                    <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                    Print Receipt
                  </button>
                </div>



              </div>
            </div>
            <div class="modal-footer d-flex d-none bill-modal-footer">
              <button href="javascript: void(0);" disabled class="btn btn-outline-light waves-effect waves-light payment-prev"> <i class="mdi mdi-arrow-left ms-1"></i>Previouse</button>
              <button href="javascript: void(0);" class="btn btn-primary waves-effect waves-light payment-next">Next <i class="mdi mdi-arrow-right ms-1"></i></button>
              <button href="javascript: void(0);" class="btn btn-primary btn-flex flex-grow-1 waves-effect waves-light text-center d-none">
                <div class="d-flex justify-content-center align-items-center"> <span>Send Money</span> <div class="flip-x"><i class="mdi mdi-reply flip-x ms-3 font-16px"></i></div></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end of payment modal -->

      <!-- certificate issueance modal -->
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
                    {{billDetail.description}}<br>
                    Age: 890 Gender: Female<br>
                    ID No. 12345689, Phone: {{billDetail.customerPhoneNumber}}, Email: email@email.com<br/>
                    <p class="text-black fw-semibold text-uppercase mb-0">(Visit No. 22 Order Num ORD-1234)</p>
                    <br>

                    <small class="text-uppercase d-none">Application Date {{formatDate(billDetail.dateCreated)}}</small>

                    <div class="alert alert-warning alert-dismissible fade show border-warning border-2 " role="alert">
                      <i class="mdi mdi-alert-outline me-2 text-danger"></i>
                      This Lab test order is yet to be paid For.
                      <button type="button" class="btn-close d-none" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <hr class="mt-0 pt-0">

                  </address>
                </div>

                <div class="col-12">
                  <div class="hori-timeline">
                    <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel mb-3" id="timeline-carousel">
                      <div class="item event-list">
                        <div>
                          <div class="event-date ">
                            <div class="text-primary mb-1">Pending Payment</div>
                            <h5 class="mb-4">Scheduled for Lab Test</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx bxs-error-circle h1 text-warning down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize mb-0">By ALex Wanjala (Physician)</p>
                            <i><small>General OPD department</small></i>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list">
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
                    <tr :key="index" :value="item" v-for="(item, index) in billInfo">
                      <td>{{index+1}}</td>
                      <td>{{item.feeDescription}}</td>
                      <td class="text-right">KES {{formatPrice(item.billBalance)}}</td>
                    </tr>


                    </tbody>
                    <tfoot class="border border-dark table-light">
                    <tr class="text-black">
                      <th colspan="2">{{billInfo.length}} Tests</th>
                      <th class="text-right">KES {{formatPrice(billDetail.billBalance)}}</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div class="col-12">
                <div class="row row flex-justify-end justify-content-end">
                  <div class="col-8">
                    <div class="table-responsive mt-4">
                      <table class="table text-uppercase table-sm table-striped table-striped-warning border border-warning">
                        <tbody>
                        <tr>
                          <th>Invoice Number</th>
                          <td  class="text-black">{{billDetail.billNo}}</td>
                        </tr>
                        <tr>
                          <th>Receipt No.</th>
                          <td  class="text-black">-</td>
                        </tr>
                        <tr>
                          <th>Payment Mode.</th>
                          <td  class="text-black">-</td>
                        </tr>
                        <tr>
                          <th>Paid By</th>
                          <td  class="text-black">-</td>
                        </tr>

                        <tr>
                          <th>Invoiced/Scheduled By</th>
                          <td  class="text-black">{{billDetail.names}} (Physician)</td>
                        </tr>

                        <tr>
                          <th>Receipted By</th>
                          <td class="text-black">-</td>
                        </tr>

                        <tr>
                          <th>Date receipted</th>
                          <td class="text-black">-</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div class="modal-footer">

              <a @click="printBill(billDetail.billNo)" href="javascript: void(0);" type="button" class="btn btn-dark waves-effect waves-light text-uppercase">
                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Invoice
              </a>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.Approve application -->
      </div>
      <!-- certificate issueance modal -->

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
import moment from 'moment'
import {biller, execute, executeDownload, getRight, parking, patient, rent, trade} from "@/api";
import NavigationBar from "@/components/Navigation.vue";
import router from "@/router";
import ToolBarPatientQue from "@/components/patient-queue/triage/ToolBarPatientQue.vue";
import SideBarConsultation from "@/components/patient-queue/consultation/SideBarConsultation.vue";
import ToolBarLabStat from "@/components/medical-lab/ToolBarLabStat.vue";
import LabToolBar from "@/components/medical-lab/LabToolBar.vue";

export default {
  name: "LabOrdersPendingPayments",
  components: {LabToolBar, ToolBarLabStat, SideBarConsultation, ToolBarPatientQue, NavigationBar},
  data() {
    return {
      patientInitials:"",

      loading: false,
      // set the initial current page as 1
      currentPage: 1,
      // set the total number of pages as 10 (you can change this according to your data source)
      totalPages: 0,
      // set the number of items per page as 5 (you can change this according to your preference)
      pageSize: 10,
      totalItems:0,

      search:"",
      patientsDetails:{
        patient: {
          id: null,
          patientID: null,
          title: null,
          names: null,
          phoneNumber: null,
          gender: null,
          idNo: null,
          dateOfBirth: null,
          maritalStatus: null,
          levelOfEducation: null,
          nationality:null,
          occupation: null,
          religion: null,
          languages: null,
          bloodGroup: null,
          physicalAddress: null,
          subCountyID: null,
          subCountyName: null,
          wardName: null,
          wardID: null,
          lastSeen: null,
          lastUpdate: null,
          email: null,
          town: null,
          dateCreated: null,
          height: null,
          weight	: null,
          bmi: null,
          registrationFacility: null,
          createdBy: null,
          updatedBy: null,
          lastSeenAt: null,
          careCard: null
        },
        guarantor: {
          id: null,
          visitCode: null,
          patientIDNo: null,
          idNo: null,
          names: null,
          phoneNumber: null,
          email: null,
          physicalAddress: null,
          relationship: null
        },
        kins: [
          {
            id: null,
            patientIDNo: null,
            idNo: null,
            names: null,
            phoneNumber: null,
            address: null,
            relationShip: null
          },
          {
            id: null,
            patientIDNo: null,
            idNo: null,
            names: null,
            phoneNumber: null,
            address: null,
            relationShip: null
          }
        ],
        visitEntries: {
          id: null,
          visitCode: null,
          idNo: null,
          names: null,
          phoneNumber: null,
          email: null,
          reasonForVisit: null,
          description: null,
          departmentVisiting: null,
          doctorNurse: null,
          triage: null,
          meansOfArrival: null,
          payment: null,
          dateCreated: null
        },
        nhif: {
          id: null,
          visitCode: null,
          number: null,
          policyholder: null
        },
        insurance: {
          id: null,
          visitCode: null,
          provider: null,
          policyNumber: null,
          authorizationCode: null,
          policyholder: null
        },
        insurances: [{
          id: null,
          visitCode: null,
          provider: null,
          policyNumber: null,
          authorizationCode: null,
          policyholder: null
        }],
        employer: {
          id: null,
          visitCode: null,
          companyName: null,
          companyID: null,
          authorizationCode: null
        },
        chronicIllnesses:[
          {
            illness:null,
            dateCreated:null
          }
        ],
        allergies:[
          {
            allergy:null,
            dateCreated:null
          }
        ],
      },
      billDetails: [
        {
          receiptAmount: "0",
        }

      ],
      billDetail: {
         id: null,
          billNo: null,
        incomeTypeID: null,
        incomeTypeDescription: null,
        costCenterNo: null,
        accountNo: null,
        description: null,
        feeID: null,
        feeDescription: null,
        detailAmount: null,
        receiptAmount: null,
        billBalance: null,
        wardID: null,
        subCountyID: null,
        subCountyName: null,
        wardName: null,
        status: null,
        dateCreated: null,
        zone: null,
        departmentID: null,
        department: null,
        idNo: null,
        phoneNumber: null,
        names: null,
        customerPhoneNumber: null,
        category: null,
        incomeTypePrefix: null,
        printable: true,
        customers: null,
        receiptedBy: null,
        patientID: null

      },
      billInfo: [
        {
          id: null,
          billNo: null,
          feeID: null,
          feeDescription: null,
          fiscalYear: null,
          paymentCode: null,
          customer: null,
          description: null,
          periodID: null,
          wardID: null,
          subCountyID: null,
          subCountyName: null,
          wardName: null,
          createdBy: null,
          billTotal: null,
          receiptAmount: null,
          billBalance: null,
          status: null,
          dateCreated: null,
          zone: null,
          departmentID: null,
          department: null,
          idNo: null,
          phoneNumber: null,
          names: null,
          customerPhoneNumber: null,
          category: null,
          incomeTypePrefix: null,
          quantity: null,
          patientID: null
        }],
      paymentData: {
        bankReceiptNo: null,
        accNo: null,
        payBillNo: null,
        amount: null,
        phoneNumber: null,
        success: false,
        paymentMode:null,
        sessionNames:null,
        sessionIdNo:null,
        sessionPhoneNumber:null
      },
      amount:0,
      feeID:null,
      unitFeeAmount:0,
      totalAmount:0,
      message: null,
      transactionCompleted: false,
      transactionSummary: false,
      paymentPanel: true,
      paymentMethod: false,
      phoneNumber:null,

    }
  },
  watch: {

    //pagination code
    // define a watcher for the pageSize property
    pageSize(newPageSize) {
      this.getPatient()//Todo to change here
      // get the total number of items from your data source (you can change this according to your logic)
      const totalItems = this.totalItems;
      // calculate the new total pages by dividing the total items by the new page size and rounding up
      const newTotalPages = Math.ceil(totalItems / newPageSize);
      // update the totalPages data property with the new value
      this.totalPages = newTotalPages;
      // reset the current page to 1
      this.currentPage = 1;

    },

    search(){
      this.getPatient()
    },
    documentType(){
      if(this.documentType === "pdf"){
        // this.downloadReport()
      }else if(this.documentType ==="excel"){
        // this.downloadReport()
      }else {

      }

    },

  },
  computed:{
    //pagination code todo pagination
    // calculate the start index of the items for the current page
    startIndex() {
      return (this.currentPage - 1) * this.pageSize;
    },
    // calculate the end index of the items for the current page
    endIndex() {
      return this.currentPage * this.pageSize;
    },
  },
  mounted() {

    this.dateFrom = moment().format('YYYY-MM-DD')
    this.dateTo = moment().format('YYYY-MM-DD')

    this.$watch('dateFrom', function (newValue) {
      if (this.dateFrom === '' || this.dateTo === '') {

      } else {
        this.getSubCountiesRevenue()
      }

    })
    this.$watch('dateTo', function (newValue) {
      if (this.dateFrom === '' || this.dateTo === '') {

      } else {
        this.getSubCountiesRevenue()
      }
    })
    this.menuAccess()
    this.getBills()
  },
  methods: {

    menuAccess(){

      const data = new FormData();
      data.append("function", "menuAccess");
      data.append("menu", "Reports Sub County");
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

    getRight(type){
      return getRight(type)
    },
    //pagination code todo pagination
    pagination(currentPage, totalPages, maxVisibleButtons) {
      //initialize an empty array for the pages
      let pages = [];
      //calculate the start and end indices of the visible buttons
      let start = currentPage - Math.floor(maxVisibleButtons / 2);
      let end = currentPage + Math.floor(maxVisibleButtons / 2);
      //adjust the start and end indices if they are out of bounds
      if (start < 1) {
        start = 1;
        end = start + maxVisibleButtons - 1;
        if (end > totalPages) {
          end = totalPages;
        }
      }
      if (end > totalPages) {
        end = totalPages;
        start = end - maxVisibleButtons + 1;
        if (start < 1) {
          start = 1;
        }
      }
      //loop through the start and end indices and push the pages to the array
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      //add an ellipsis at the beginning if there are more pages before the start index
      if (start > 1) {
        pages.unshift("...");
      }
      //add an ellipsis at the end if there are more pages after the end index
      if (end < totalPages) {
        pages.push("...");
      }
// return the array of pages
      return pages;
    },
    // define a method to go to the previous page
    prevPage() {
      // check if the current page is not the first page
      if (this.currentPage > 1) {
        // decrement the current page by 1
        this.currentPage--;
        this.getVisitEntries()//Todo change
      }
    },
    // define a method to go to the next page
    nextPage() {
      // check if the current page is not the last page
      if (this.currentPage < this.totalPages) {
        // increment the current page by 1
        this.currentPage++;
        this.getVisitEntries()//Todo change
      }
    },
    // define a method to go to a specific page
    goToPage(page) {
      // check if the page is valid and not equal to the current page
      if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
        // set the current page to the given page
        this.currentPage = page;
        this.getVisitEntries()//Todo change
      }
    },

    formatDate(date) {
      let d = new Date(date);
      let day = d.getDate();
      let month = d.toLocaleString('en-US', { month: 'short' });
      let year = d.getFullYear();

      let suffix = '';
      if (day % 10 === 1 && day !== 11) {
        suffix = 'st';
      } else if (day % 10 === 2 && day !== 12) {
        suffix = 'nd';
      } else if (day % 10 === 3 && day !== 13) {
        suffix = 'rd';
      } else {
        suffix = 'th';
      }
      return `${day}${suffix} ${month} ${year}`;
    },
    showDate() {
      const dateObj = new Date();
      const currentDate =
          dateObj.getDate() +
          "/" +
          dateObj.getMonth() +
          "/" +
          dateObj.getFullYear();
      return currentDate;
    },
    gotTo(route,patientID) {
      sessionStorage.setItem("selectedSub",route)
      sessionStorage.setItem("patientID",patientID)
      sessionStorage.setItem("patientIDNo",patientID)
      router.push(route)
    },
    gotToAll(route) {
      sessionStorage.setItem("currentPage",route)
      sessionStorage.setItem("dateTo", this.dateTo)
      sessionStorage.setItem("dateFrom", this.dateFrom)
      sessionStorage.setItem("subCountyName", "ALL SUB COUNTIES")
      sessionStorage.setItem("subCountyID", "")
      //todo to check on this figures
      sessionStorage.setItem("totalTransactions", this.totalTransactions)
      sessionStorage.setItem("amountTotal", this.totalAmount)
      sessionStorage.setItem("totalAgents", this.totalAgents)
      sessionStorage.setItem("totalZones", this.totalZones)
      router.push(route)
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    numberFormat(num) {
      const britishNumberFormatter = new Intl.NumberFormat("en-GB");
      return britishNumberFormatter.format(num)
    },
    getBills() {
      this.billDetails.splice(0)
      this.loading = true
      const data = new FormData();
      data.append("function", "getBills");
      data.append("page", this.currentPage);
      data.append("rows_per_page", this.pageSize);
    /*  data.append("status", "PAID");*/
      data.append("dateFrom", this.dateFrom);
      data.append("dateTo", this.dateTo);
      data.append("keyword", this.search)
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              this.billDetails = res.data.data.billDetails

            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
    printBill(billNo) {
      localStorage['params'] = JSON.stringify({
        billNo: billNo
      })
      const routeData = this.$router.resolve({name: 'bill'});
      window.open(routeData.href, '_blank');
    },
    getBill(billNo) {
      this.billNo = billNo
      const data = new FormData();
      data.append("function", "getBill");
      data.append("billNo", billNo);
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              this.message = res.data.message
              this.billInfo = res.data.data.billInfo
              this.billDetail = res.data.data.billDetails

              this.invoiceGenerated = true
              this.paymentData.amount = res.data.data.billDetails.billBalance
              this.paymentData.accNo = res.data.data.billDetails.billNo
              this.paymentData.payBillNo = res.data.data.payBill.shortCode
              this.paymentData.sessionPhoneNumber = sessionStorage.getItem("sessionPhoneNumber")
              this.paymentData.sessionNames = sessionStorage.getItem("sessionNames")
              this.paymentData.sessionIdNo = sessionStorage.getItem("sessionIdNo")

            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
    printReceipt() {
      if (this.receiptDetails.receiptNo == null) {
        alert("Try again later");
      } else {
        //  this.$refs.closeReceived.click();
        localStorage['params'] = JSON.stringify({
          receiptNo: this.receiptDetails.receiptNo
        })
        const routeData = this.$router.resolve({name: 'receipt'});
        window.open(routeData.href, '_blank');
      }
    },
    showPaymentMethod(){
      this.paymentMethod = true;
      this.paymentPanel = false;
      this.transactionSummary = false;
      this.transactionCompleted = false
    },
    showTransactionSummary(paymentMode){

      this.paymentData.paymentMode = paymentMode

      if(paymentMode === "MPESA") {
        if (this.phoneNumber == null) {
          alert("Enter phone number");
          return;
        }
      }
      if(paymentMode === "BANK") {
        if (this.paymentData.bankReceiptNo == null) {
          alert("Enter Bank Receipt No");
          return;
        }

      }

      this.paymentMethod = false;
      this.paymentPanel = false;
      this.transactionSummary = true;
      this.transactionCompleted = false
    },
    makePayment() {
      if(this.paymentData.paymentMode === "MPESA") {
        if (this.phoneNumber == null) {
          alert("Enter phone number");
          return;
        }
      }
      if(this.paymentData.paymentMode === "BANK") {
        if (this.paymentData.bankReceiptNo == null) {
          alert("Enter Bank Receipt No");
          return;
        }
      }
      this.message = "Payment Request sent";
      this.paymentData.phoneNumber = this.phoneNumber

      const data = new FormData();
      data.append("function", "makePayment");
      data.append("paymentData", JSON.stringify(this.paymentData));

      let stream = null;
      if (this.paymentData.accNo.startsWith("SBP")) {
        stream = trade;
      }
      if (this.paymentData.accNo.startsWith("PKN")) {
        stream = parking;
      }

      if (this.paymentData.accNo.startsWith("RNT")) {
        stream = rent;
      }

      if (this.paymentData.accNo.startsWith("BLL")) {
        stream = biller;
      }

      execute(data, stream)
          .then((res) => {
            if (res.data.success) {
              this.paymentMethod = false;
              this.paymentPanel = false;
              //start checking payment
              this.timer = setInterval(() => {

                this.checkPayment();
              }, 3000);
            } else {
              this.rate = null;
              alert(res.data.message);
            }
          })
          .catch((e) => {
            alert(e.message);
          });
    },
    checkPayment() {
      this.randomNumber = Math.floor(Math.random() * 3) + 1
      if(this.randomNumber === 1){
        this.message = "Waiting for payment.";
      }
      if(this.randomNumber === 2){
        this.message = "Waiting for payment..";
      }
      if(this.randomNumber ===3){
        this.message = "Waiting for payment...";
      }
      const data = new FormData();
      data.append("function", "checkPayment");
      data.append("accountRef", this.paymentData.accNo);

      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              this.message = null;
              clearInterval(this.timer);
              this.receipt = true;
              this.paymentData.success = false;
              this.transaction = res.data.data.transaction;
              this.receiptDetails = res.data.data.receipt.receiptDetails
              //Close the modal
              this.transactionSummary = false
              this.transactionCompleted = true
            }
          })
          .catch((e) => {
            alert(e.message);
          });
    },



  },
}
</script>





<style scoped>

</style>