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
                <h4 class="mb-sm-0 font-size-18">Scheduled Lab Tests</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="#">Patient's Queue</a></li>
                    <li class="breadcrumb-item"><a href="#">Scheduled Lab Tests</a></li>
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
<!--                      <th title="Type of Visit (Outpatient or Inpatient)">Visit Type</th>-->
                      <th title="Doctor or Staff Who Ordered the Test">Sent By</th>
                      <th title="List of Tests Ordered">Test(s)</th>
                      <th title="Mode of Payment (e.g., MPESA, Insurance)">Mode</th>
                      <th title="Payment Status">Status</th>
                      <th title="Amount After Discount" class="text-right">Discounted</th>
                      <th title="Total Invoice Amount" class="text-right">Invoiced</th>
                      <th title="Amount Paid for the Test(s)" class="text-right">Paid</th>
                      <th title="Available Actions (View, Acknowledge)" class="text-right">Actions</th>
                      </thead>
                      <tbody class="border border-info">
                      <tr  :key="index" :value="item" v-for="(item, index) in receiptdetails">
                        <td>{{formatDate(item.dateCreated)}}</td>
                        <td>{{item.visitCode}}</td>
                        <td>{{item.billNo}}</td>
                        <td>{{item.description}}</td>
<!--                        <td>Outpatient (General OPD)</td>-->
                        <td>Kelvin Kiptum (Physician)</td>
                        <td>{{item.feeDescription}}</td>
                        <td>{{item.source}}</td>
                        <td class="text-uppercase">
                          <span class="badge rounded-pill bg-info float-end">{{item.status}}</span>
                        </td>
                        <td class="text-right">0</td>
                        <td class="text-right">{{numberFormat(item.detailAmount)}}</td>
                        <th class="text-right">{{numberFormat(item.receiptAmount)}}</th>
                        <td class="text-uppercase text-right">
                          <div class="d-flex justify-content-end">
<!--                            <button class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2"  title="Initiate Payment for Lab Tests"  >
                              <div>Acknowledge</div>
                              <div class="spinner-border text-white ms-2 d-none" style="height: 19px; width: 19px;" role="status">
                                <span class="sr-only">Loading...</span>
                              </div>
                            </button>-->

                            <button
                                class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2"
                                title="Initiate Payment for Lab Tests"
                                @click="openAcknowledgedModal"
                            >
                              <div>Acknowledge</div>
                              <div class="spinner-border text-white ms-2 d-none" style="height: 19px; width: 19px;" role="status">
                                <span class="sr-only">Loading...</span>
                              </div>
                            </button>

                            <button class="btn btn-sm btn-info text-uppercase mx-2 " data-bs-toggle="modal" data-bs-target=".test-details-modal" title="View Lab Test Details">
                              Details
                            </button>
                            <a target="_blank" href="PrintDocs/Bill/bill.html" type="button" class="btn btn-sm btn-dark waves-effect waves-light text-uppercase">
                              <i class="mdi mdi-printer fs-6 align-middle me-2"></i> Print Receipt
                            </a>

                          </div>
                        </td>
                      </tr>
                      </tbody>
                      <tfoot class="border border-dark">
                      <tr class="table-primary text-black border-dark">
                        <th colspan="4">34 Orders</th>
                        <th colspan="2">22 Outpatients</th>
                        <th colspan="2">45 Inpatient</th>
                        <th colspan="2" class="text-right">56,000</th>
                        <th class="text-right">346,000</th>
                        <th class="text-right">156,000</th>
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
              <button @click="openAcknowledgedModal" data-bs-dismiss="modal" class="btn btn-success text-uppercase d-flex align-items-center ms-2 Acknowledge-order" title="Initiate Payment for Lab Tests" >
                <div>Acknowledge Patient</div>
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
      <!-- lab test details modal -->

      <!-- acknowledged lab test request that has been approved -->
      <div id ="test-acknowledged-modal"  class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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

                  <button @click="revertAcknowledgedModal" data-bs-dismiss="modal" type="button" class="btn btn-sm btn-danger text-uppercase d-flex align-items-center revertAcknowledgment mx-2" id="revertButton" title="Click to undo this action">
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
              <button  class="btn btn-sm btn-success text-uppercase d-flex align-items-center ms-2 Acknowledge-order" data-bs-toggle="modal" data-bs-target="#payment-modal" title="Initiate Payment for Lab Tests">
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
      <div id="test-revert-modal" class="modal fade test-revert-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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

      <!-- end of revert modal -->

      <footer class="footer ">
        <div class="container-fluid ">
          <div class="row ">
            <div class="col-sm-6 ">
             Hospital Management Information System
            </div>
            <div class="col-sm-6 ">
              <div class="text-sm-end d-sm-block ">
                Developed by Levetot.
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


import NavigationBar from "@/components/Navigation.vue";
import ToolBarLabStat from "@/components/medical-lab/ToolBarLabStat.vue";
import LabToolBar from "@/components/medical-lab/LabToolBar.vue";
import {biller, execute} from "@/api";

export default {
  name: "LabOrders",
  components: {LabToolBar, ToolBarLabStat, NavigationBar},
  data() {
    return{

      loading: false,
      // set the initial current page as 1
      currentPage: 1,
      // set the total number of pages as 10 (you can change this according to your data source)
      totalPages: 0,
      // set the number of items per page as 5 (you can change this according to your preference)
      pageSize: 10,
      totalItems:0,

      receiptdetails: [{
          visitCode: null,
          id: null,
          receiptNo: null,
          billNo: null,
          detailAmount: null,
          receiptAmount: null,
          billBalance: null,
          costCenterNo: null,
          accountNo: null,
          incomeTypeDescription: null,
          feeID: null,
          feeDescription: null,
          wardID: null,
          subCountyID: null,
          subCountyName: null,
          wardName: null,
          currency: null,
          source: null,
          transactionCode: null,
          paidBy: null,
          dateCreated: null,
          dateModified: null,
          createdBy: null,
          modifiedBy: null,
          isActive: null,
          status: null,
          zone: null,
          departmentID: null,
          department: null,
          idNo: null,
          phoneNumber: null,
          names: null,
          customerPhoneNumber: null,
          description: null,
          category: null,
          incomeTypePrefix: null,
          invoicedBy: null,
          invoicedByPhoneNumber: null,
          invoicedByIdNo: null,
          code: null,
          printed: null,
          receiptedBy: null,
          customers: null,
          patientID: null
        }]
    }
  },
  mounted() {

    this.getReceiptsPaginated()

  },
  methods: {
      openAcknowledgedModal() {
        // Trigger the modal to open using the ID
        // eslint-disable-next-line no-undef
        const modal = new bootstrap.Modal(document.getElementById('test-acknowledged-modal'));
        modal.show();
      },
       revertAcknowledgedModal() {
      // Trigger the modal to open using the ID
      // eslint-disable-next-line no-undef
      const modal = new bootstrap.Modal(document.getElementById('test-revert-modal'));
      modal.show();
    },

    getReceiptsPaginated() {
      this.loading = true
      const data = new FormData();
      data.append("function", "getReceiptsPaginated");
      data.append("page", this.currentPage);
      data.append("rows_per_page", this.pageSize);
      /*  data.append("status", "PAID");*/
      data.append("dateFrom", this.dateFrom);
      data.append("dateTo", this.dateTo);
      data.append("keyword", this.search)
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              this.receiptdetails = res.data.data.receiptdetails
            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
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
    numberFormat(num) {
      const britishNumberFormatter = new Intl.NumberFormat("en-GB");
      return britishNumberFormatter.format(num)
    },

  }
}

</script>

<style scoped>

</style>