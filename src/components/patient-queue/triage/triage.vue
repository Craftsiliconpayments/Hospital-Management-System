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
                <h4 class="mb-sm-0 font-size-18">Triage Queue</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="#">Patient's Queue</a></li>
                    <li class="breadcrumb-item"><a href="#">Triage Queue</a></li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header d-none bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                  <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                    <h4 class="card-title text-capitalize mb-0 ">
                      Applications
                    </h4>

                    <div class="d-flex">
                      <a href="bill-new.html" type="button" class="btn btn-primary dropdown-toggle option-selector me-3 text-capitalize">
                        <i class="mdi mdi-plus-circle-outline  font-size-16"></i> <span class="pl-1 d-md-inline">Create A Bill</span>
                      </a>

                    </div>


                  </div>
                  <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                    <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">

                    <div class="flex-grow-1">

                      <div class="search-box mb-0 me-3">
                        <div class="position-relative">
                          <input v-model="search"  type="text" class="form-control bg-light border-light rounded" placeholder="Search..." fdprocessedid="husj3l">
                          <i class="bx bx-search-alt search-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex">
                      <div class="d-flex align-items-center me-3 pe-3">
                        <span class="pr-3 fw-semibold">From:</span>
                        <input  class="form-control" placeholder="Start date" type="date">
                        <span class="px-3 fw-semibold">TO:</span>
                        <input v class="form-control" placeholder="Start date" type="date">
                      </div>
                      <button  data-bs-toggle="modal" data-bs-target=".download-modal" type="button" class="btn btn-primary dropdown-toggle option-selector me-3 text-capitalize">
                        <i class="bx bxs-download  font-size-16"></i> <span class="pl-1 d-md-inline">Download Report</span>
                      </button>

                    </div>

                  </div>
                  <div class="table-responsive">

                    <table class="table align-middle table-hover  contacts-table table-striped">
                      <thead class="table-light">
                      <tr class="table-dark">
                        <th scope="col">NO.</th>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Patient's Name</th>
                        <th scope="col">OPD Visiting</th>
                        <th scope="col">Age</th>
                        <th>Check in Time</th>
                        <th>Waiting time</th>
                        <th>Critical Level</th>
                        <th scope="col" class="text-right">Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item, index) in visitEntries" :value="item" :key="index">
                        <td class="text-capitalize text-nowrap fw-semibold text-black">{{index+1}}</td>
                        <td class="text-capitalize text-nowrap">{{item.visitCode}}</td>
                        <td>{{item.names}}</td>
                        <td class="text-nowrap">{{item.departmentVisiting}}</td>
                        <td>{{getAge(item.dateOfBirth)}} years</td>
                        <td>{{formatDate(item.dateCreated)}}</td>
                        <td>{{getTimeAgo(item.lastUpdate)}}</td>
                        <td>

                          <span v-if="item.criticalLevel === 'Immediate'" class="badge badge-soft-danger fw-bolder text-uppercase">{{item.criticalLevel}}</span>

                          <span v-if="item.criticalLevel === 'Urgent'" class="badge badge-soft-warning fw-bolder text-uppercase ms-2">{{item.criticalLevel}}</span>

                          <span v-if="item.criticalLevel === 'Delayed'" class="badge badge-soft-info fw-bolder text-uppercase ms-2">{{item.criticalLevel}}</span>

                          <span v-if="item.criticalLevel === 'Expectant'" class="badge badge-soft-success fw-bolder text-uppercase ms-2">{{item.criticalLevel}}</span>

                        </td>

                        <td>
                          <div class="d-flex justify-content-end">
                            <a @click="gotTo('vitals', item.visitCode,item.idNo)" href="javascript: void(0);" title="Acknowledge The patient" class="btn text-uppercase btn-primary bnt-sm mx-3">Acknowledge</a>
                            <button type="button" class="btn text-uppercase btn-success btn-sm waves-effect waves-light text-nowrap me-3" data-bs-toggle="modal" data-bs-target=".receipting-modal">Triage Analysis</button>
                            <div class="dropdown d-none">
                              <a class="text-muted font-size-16" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </a>

                              <div class="dropdown-menu dropdown-menu-end ">
                                <a class="dropdown-item " data-bs-toggle="modal" data-bs-target=".receipting-modal" href="# "><i class="font-size-15 mdi mdi-eye me-3 "></i>View</a>
                                <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-printer me-3 "></i>Print</a>
                                <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-email me-3 "></i>Send Email Reminder</a>
                                <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-chat me-3 "></i>Send SMS Reminder</a>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>



                      </tbody>
                      <tfoot class="table-dark">
                      <tr>
                        <th colspan="6">
                          {{visitEntries.length}} Patients
                        </th>
                        <th colspan="3">
                          <span class="badge badge-soft-danger fw-bolder text-uppercase">Immediate</span> {{Immediate}}

                          <span class="badge badge-soft-warning fw-bolder text-uppercase ms-2">Urgent</span>{{Urgent}}

                          <span class="badge badge-soft-info fw-bolder text-uppercase ms-2">Delayed</span> {{Delayed}}

                          <span class="badge badge-soft-success fw-bolder text-uppercase ms-2">Delayed</span> {{Delayed}}
                        </th>

                      </tr>

                      </tfoot>
                    </table>

                    <div v-if="loading" class="card-body px-5 d-flex flex-column justify-items-center align-items-center text-center d-flex justify-content-center">
                      <div class="p-5 py-0 pt-3">
                        <div class="p-5">
                          <div class="spinner-border text-info m-1" role="status">
                            <span class="sr-only text-uppercase">Loading...</span>
                          </div>
                        </div>
                      </div>
                      <h4 class="text-uppercase">Loading Data</h4>
                      <div class="col-sm-12 col-md-8 col-lg-5">
                        <p>We are fetching the data for you. It will be ready soon. Please wait and have fun. Thank you for your interest.</p>

                      </div>
                    </div>
                    <div v-if="visitEntries.length<1 & loading===false" class="card-body d-sm-none d-md-block px-5 d-flex flex-column justify-items-center align-items-center text-center">
                      <div class="p-5 py-0 pt-3">
                        <img :src="'./assets/images/no-results.png'" class="img mb-4"  alt="No search results"/>
                      </div>
                      <h4>No Results To Show</h4>
                      <p>Sorry, we could not find any results that match your search or filter criteria. Please try using different keywords or filters.</p>
                    </div>


                  </div>
                </div>

                <div class="card-footer bg-white">
                  <nav aria-label="Page navigation example " class="d-flex align-items-center justify-content-between">

                    <div class="d-flex align-items-center">
                                            <span class="pr-3 pb-0 mb-0 font-13px">
                                                <span>Rows Per Page</span>
                                            </span>
                      <select class="form-select w-auto font-13px" v-model="pageSize">
                        <option value="5">5 Rows</option>
                        <option value="10">10 Rows</option>
                        <option value="25">25 Rows</option>
                        <option value="50">50 Rows</option>
                        <option value="100">100 Rows</option>
                        <option value="150">150 Rows</option>
                        <option value="200">200 Rows</option>
                      </select>
                    </div>

                    <ul class="pagination">
                      <!-- add a class of disabled and an attribute of disabled when the current page is the first page -->
                      <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <a class="page-link" tabindex="-1" @click="prevPage" :disabled="currentPage === 1">Previous</a>
                      </li>
                      <!-- replace the v-for directive with the pagination function call -->
                      <li v-for="page in pagination(currentPage, totalPages, 3)" :key="page" class="page-item" :class="{ active: currentPage === page }">
                        <!-- check if the page is an ellipsis and display it as plain text -->
                        <span v-if="page === '...'" class="page-link">{{ page }}</span>
                        <!-- otherwise, display it as a clickable link -->
                        <a v-else class="page-link" @click="goToPage(page)">{{ page }}</a>
                      </li>
                      <!-- add a class of disabled and an attribute of disabled when the current page is the last page -->
                      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <a class="page-link"  @click="nextPage" :disabled="currentPage === totalPages">Next</a>
                      </li>
                    </ul>
                  </nav>
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
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title ml-3 me-3" id="myLargeModalLabel">Check In Details For Ticket No T45</h5>
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

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">Pending ...</div>
                            <h5 class="mb-4">Triage</h5>
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
                            <h5 class="mb-4">Consultation</h5>
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
                            <h5 class="mb-4">Cashier</h5>
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
                  <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                    <i class="mdi mdi-clock-start font-28 mr-15px"></i>
                    <p class="fw-semibold mb-0 pb-0">Patients Checkin Details</p>

                  </div>
                </div>

                <div class="col-12">
                  <div class="row">
                    <div class="col-4 col-sm-6 col-md-6 mb-3">
                      <div>
                        <label class="form-label">Mode Of Arrival</label>
                        <p class="text-black fw-semibold">Walk In</p>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6 col-md-6 mb-3">
                      <div>
                        <label class="form-label">Department/Service seeking</label>
                        <p class="text-black fw-semibold">Casualty</p>
                      </div>
                    </div>

                    <div class="col-4 col-sm-6 mb-3">
                      <div>
                        <label class="form-label">Critical Level</label>
                        <p class=""><span class="badge rounded-pill bg-success text-uppercase font-12px">Expectant</span></p>
                      </div>
                    </div>

                    <div class="col-4 col-sm-6 mb-3">
                      <div>
                        <label class="form-label">Payment Method</label>
                        <p class="text-black fw-semibold">cash</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                    <i class="mdi mdi-clipboard-edit-outline font-28 mr-15px"></i>
                    <p class="fw-semibold mb-0 pb-0">Key In Your Findings and Observations below</p>

                  </div>
                </div>



                <div class="col-7">
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">
                          <h5 class="font-size-15 fw-semibold text-capitalize mb-1 mt-4">What is the Patient's chief complain?</h5>

                        </label>
                        <textarea class="form-control" id="" cols="30" rows="3" placeholder="Start Typing ..."></textarea>
                      </div>
                    </div>
                  </div>

                  <h3 class="font-size-15 fw-bold text-capitalize mb-3 mt-4">Patients Vital Signs</h3>
                  <div class="table-responsive">
                    <table class="table table-nowrap table-sm">
                      <thead class="bg-light">
                      <tr>
                        <th style="width: 70px;">#</th>
                        <th>Vitals</th>
                        <th class="" >Results/Findings</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>01</td>
                        <td>Height</td>
                        <td>
                          <input type="text" class="form-control form-control-sm bmi-height" placeholder="Height in CM"/>
                        </td>
                      </tr>

                      <tr>
                        <td>02</td>
                        <td>Weight</td>
                        <td>
                          <input type="text" class="form-control form-control-sm bmi-weight" placeholder="Weight in KG"/>
                        </td>
                      </tr>

                      <tr>
                        <td>03</td>
                        <td>BMI</td>
                        <td class="bmi-results bg-opacity-50 fw-semibold text-black">
                          <span class="bmi-text">--</span>
                          <span class="mx-2 bmi-classification-txt"></span>
                        </td>
                      </tr>

                      <tr>
                        <td>04</td>
                        <td>Temprature (°C)</td>
                        <td class="temp-colore-code text-black bg-opacity-50 fw-semibold">
                          <div class="d-flex align-items-center justify-content-between">
                            <span><input type="text" class="form-control form-control-sm text-temp" placeholder="in °C"/></span>
                            <span class="mx-2 temprature-classification-txt">-</span>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>05</td>
                        <td>Sytolic BP</td>
                        <td class="">
                          <input type="text" class="form-control form-control-sm text-sytolic" placeholder="in mm Hg"/>
                        </td>
                      </tr>
                      <tr>
                        <td>06</td>
                        <td>Diastolic BP</td>
                        <td>
                          <input type="text" class="form-control form-control-sm text-diastolic" placeholder="in mm Hg"/>
                        </td>
                      </tr>
                      <tr>
                        <td>07</td>
                        <td>Blood Pressure Category</td>
                        <td class="bp-colore-code text-black bg-opacity-50 fw-semibold">
                          <div class="d-flex align-items-center justify-content-between">
                            <span class="mx-2 bp-classification-txt">-</span>
                          </div>
                        </td>
                      </tr>


                      <tr>
                        <td>08</td>
                        <td>Pain Severity</td>
                        <td>
                          <select class="form-select form-select-sm text-uppercase">
                            <option class="" selected>-- Select Pain Severity --</option>
                            <option class="">Moderate</option>
                            <option>Acute</option>
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <td>09</td>
                        <td>Mental Status</td>
                        <td>
                          <select class="form-select form-select-sm text-uppercase">
                            <option class="" selected>-- Select Mental State --</option>
                            <option>No Mental Illness</option>

                            <option>Anxiety Disorders</option>
                            <option>Depression</option>

                            <option>Bipolar Disorder</option>
                            <option>Post-Traumatic Stress Disorder (PTSD)</option>

                            <option>Schizophrenia</option>
                            <option>Eating Disorders</option>

                            <option>Disruptive behaviour and dissocial disorders</option>
                            <option>Neurodevelopmental disorders</option>


                          </select>
                        </td>
                      </tr>

                      <tr>
                        <td>10</td>
                        <td>Test for HIV?</td>
                        <td>
                          <select class="form-select form-select-sm text-uppercase">
                            <option class="">Yes</option>
                            <option selected>No</option>
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <td>11</td>
                        <td>Was The patient Bleeding?</td>
                        <td>
                          <select class="form-select form-select-sm text-uppercase bledding-stoped-option">
                            <option class="" selected>-- Select Option --</option>
                            <option class="" value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                      </tr>

                      <tr class="d-none bleeding-stoped">
                        <td>12</td>
                        <td colspan="2">
                          Did you manage to stop the bleeding?
                          <br>

                          <div class="mt-2">
                            <div class="form-check mb-2">
                              <input class="form-check-input" type="radio" name="stop-bleeding" id="bleeding-yes" checked="">
                              <label class="form-check-label" for="bleeding-yes">
                                Yes, I stoped It
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="stop-bleeding" id="bleeding-no">
                              <label class="form-check-label" sele for="bleeding-no">
                                No, I couldn't Stop It
                              </label>
                            </div>
                          </div>

                        </td>

                      </tr>

                      </tbody>
                    </table>
                  </div>



                </div>

                <div class="col-5">
                  <div class="row">
                    <div class="col-12 mb-3">
                      <h5 class="font-size-15 fw-semibold text-capitalize mb-3 mt-4">Is the patient Allergic to any Drugs or Foods?</h5>
                      <div class="mt-2">
                        <div class="form-check mb-2">
                          <input class="form-check-input" value="yes" type="radio" name="radio-allergiey" id="allergie-yes">
                          <label class="form-check-label" for="allergie-yes">
                            Yes
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" value="no" type="radio" name="radio-allergiey" id="allergie-no" checked>
                          <label class="form-check-label" for="allergie-no">
                            None Known
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 d-none allergy-table">
                      <h3 class="font-size-15 fw-bold text-capitalize mb-3 mt-4">Drug and food allergies</h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap table-sm table-editable-1">
                          <thead class="bg-light">
                          <tr>
                            <th style="width: 40px;">#</th>
                            <th>Allergie</th>
                          </tr>
                          <tbody>


                          <tr>
                            <td>1.</td>
                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter Allergies"/>
                            </td>
                          </tr>
                          <tr class="cloneCharges d-none">
                            <td style="width: 80px " class="categoryIndex ">#</td>

                            <td>
                              <input type="text" class="form-control form-control-sm" placeholder="Enter An Allergie"/>
                            </td>
                          </tr>
                          </tbody>

                          <tfoot>
                          <tr>
                            <td colspan="7" class="bg-light add-field-1 cursor-pointer text-black fw-bold">
                              <span class="d-flex align-items-center "><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add Alergy Fields</span></span>
                            </td>
                          </tr>
                          </tfoot>

                          </thead>
                        </table>

                      </div>
                    </div>
                  </div>


                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">Critical Level</label>
                    <select class="form-control selectpicker bg-white select-revenue" title="Select Patient's Critical Level">
                      <option value="Immediate" data-content="<span class='badge rounded-pill bg-danger text-uppercase font-12px'>Immediate</span>">Immediate</option>
                      <option value="Urgent" data-content="<span class='badge rounded-pill bg-warning text-uppercase font-12px'>Urgent</span>">Urgent</option>
                      <option value="Delayed" data-content="<span class='badge rounded-pill bg-info text-uppercase font-12px'>Delayed</span>">Delayed</option>
                      <option value="Expectant" data-content="<span class='badge rounded-pill bg-success text-uppercase font-12px'>Expectant</span>">Expectant</option>
                    </select>
                  </div>
                </div>


                <div class="col-12 mt-3">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">Doctor Notes</label>
                    <textarea class="form-control" id="" cols="30" rows="3" placeholder="Start Typing ..."></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                    <i class="mdi mdi-calendar-month font-28 mr-15px"></i>
                    <p class="fw-semibold mb-0 pb-0">Past Historical Data</p>

                  </div>
                </div>

                <div class="col-12">
                  <div class="table-responsive">
                    <table class="table table-nowrap table-sm">
                      <thead class="bg-light">
                      <tr>
                        <th style="width: 40px;">#</th>
                        <th>Date</th>
                        <th class="" >Visit type</th>
                        <th>Reason For Visit</th>
                        <th>Hospital</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td></td>
                        <td>22 Feb 2023 10:05 AM</td>
                        <td>Outpatient</td>
                        <td>Dental Visit</td>
                        <td>Hosipitali Kuu</td>
                        <td>
                          <a title="Click to View More Information" href="#">View</a>
                        </td>
                      </tr>

                      <tr>
                        <td></td>
                        <td>07 Jan 2023 08:09 AM</td>
                        <td>Outpatient</td>
                        <td>Dental Visit</td>
                        <td>Hosipitali Kuu</td>
                        <td>
                          <a title="Click to View More Information" href="#">View</a>
                        </td>
                      </tr>

                      <tr>
                        <td></td>
                        <td>11 Sep 2022 09:34 AM</td>
                        <td>Outpatient</td>
                        <td>Physiotherapy</td>
                        <td>Hosipitali Kuu</td>
                        <td>
                          <a title="Click to View More Information" href="#">View</a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-12 text-capitalize">
                  <div>
                    <a href="">... Plus 3 More other past records, click here to view all the past records</a>
                  </div>
                </div>

                <div class="col-12 mt-3">
                  <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                    <i class="mdi mdi-fast-forward-outline font-28 mr-15px"></i>
                    <p class="fw-semibold mb-0 pb-0">Next Stage Assignement</p>

                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">Assign to Doctor</label>
                    <select class="form-control selectpicker bg-white select-revenue" title="Select doctor for consultation" data-live-search="true">
                      <option value="Physician/Doctor/Clinician">Martha Simpio</option>
                      <option value="Mental And Child Health Care (MCH)">Dr Alex Kinoti</option>
                      <option value="Dental Clinic">Dr Felix Oduor</option>
                      <option value="Physiotherapy">Dr Makuti</option>
                      <option value="Occupational Therapy">Dr Ann Wanja</option>
                      <option value="Occupational Therapy" >Evans Kimpepmbe</option>
                    </select>
                    <p>Assign to the correct doctor for consultation</p>
                  </div>
                </div>

              </div>
            </div>
            <div class="modal-footer">

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

      <!-- certificate issueance modal -->
      <div class="modal fade certificate-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Issue Certifcate</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <address>
                    <strong class="text-capitalize">Test Results For:</strong><br>
                    Andrew Kinoti AT Mombasa Road<br>
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
                <div class="col-12">
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

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">14 Sep 2023 12:57 PM</div>
                            <h5 class="mb-4">Approved</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">Mary Max</p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
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

              <a href="PrintDocs/Food-handler/health-permit.html" target="_blank" type="button" class="btn btn-info waves-effect waves-light w-100">
                <i class="mdi mdi-file-check font-size-16 align-middle"></i> Process Certificate
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
/* eslint-disable */
import moment from 'moment'
import {biller, execute, executeDownload, getRight, patient} from "@/api";
import NavigationBar from "@/components/Navigation.vue";
import router from "@/router";
import ToolBarPatient from "@/components/master-patient/ToolBar.vue";

export default {
  name: "PatientQueue",
  components: {ToolBarPatient, NavigationBar},
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


      patients: [
        {
          id: null,
          patientID: null,
          title: null,
          names: null,
          phoneNumber: null,
          physicalAddress: null,
          gender: null,
          idNo: null,
          dateOfBirth: null,
          maritalStatus: null,
          levelOfEducation: null,
          occupation: null,
          religion: null,
          languages: null,
          countyID: null,         // (Optional, can be removed if unused)
          countyName: null,       // (Optional, can be removed if unused)
          bloodGroup: null,
          subCountyID: null,      // Missing field
          subCountyName: null,    // Missing field
          wardName: null,         // Missing field
          wardID: null,           // Missing field
          lastSeen: null,         // Missing field
          email: null,            // Missing field
          town: null              // Missing field
        }
      ],
      receiptDetail:
          {
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
          },
      receiptDetails: [
        {
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
        }
      ],
      receiptInfos: [
        {
          id: null,
          receiptNo: null,
          billNo: null,
          feeID: null,
          feeDescription: null,
          billTotal: null,
          receiptAmount: null,
          billBalance: null,
          customer: null,
          clientPhoneNo: null,
          description: null,
          receiptDate: null,
          printCount: null,
          wardID: null,
          subCountyID: null,
          subCountyName: null,
          wardName: null,
          dateCreated: null,
          dateModified: null,
          createdBy: null,
          modifiedBy: null,
          printedBy: null,
          updated: null,
          isActive: null,
          status: null,
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
          invoicedBy: null,
          invoicedByPhoneNumber: null,
          invoicedByIdNo: null,
          code: null,
          patientID: null
        }
      ],

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

      visitEntries: [
        {
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
          dateCreated: null,
          dateOfBirth: null,
          lastUpdate: null,
          criticalLevel: null
        }
      ],

      Immediate:0,
      Urgent:0,
      Delayed:0,
      Expectant:0,


    };
  },
  watch: {
    //pagination code
    // define a watcher for the pageSize property
    pageSize(newPageSize) {
      this.getVisitEntries()//Todo to change here
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
      this.getVisitEntries()
    },
    documentType(){
      if(this.documentType === "pdf"){
        // this.downloadReport()
      }else if(this.documentType ==="excel"){
        // this.downloadReport()
      }else {

      }

    }

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


    // this.dateTo = moment().endOf('month').format('YYYY-MM-DD')

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

    this.getVisitEntries()
    this.getPatientDetails()

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

    getAge(birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      // Check if the birthday hasn't occurred yet this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
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
    gotTo(route,visitCode,idNo) {
      sessionStorage.setItem("selectedSub",route)
      sessionStorage.setItem("visitCode",visitCode)
      sessionStorage.setItem("idNo",idNo)
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
    getVisitEntries() {

      this.Immediate = 0;
      this.Urgent = 0;
      this.Delayed = 0;
      this.Expectant = 0;

      this.loading = true
      this.visitEntries.splice(0)
      const data = new FormData();
      data.append("function", "getVisitEntries");
      data.append("dateFrom", this.dateFrom);
      data.append("dateTo", this.dateTo);
      data.append("page", this.currentPage);
      data.append("rows_per_page", this.pageSize);
      data.append("keyword", this.search);
      execute(data, patient)
          .then((res) => {
            this.loading = false
            if (res.data.success) {
              this.visitEntries = res.data.data.visitEntries



// Loop through the visitEntries array and count each critical level
              this.visitEntries.forEach(entry => {
                if (entry.criticalLevel === "Immediate") {
                  this.Immediate++;
                } else if (entry.criticalLevel === "Urgent") {
                  this.Urgent++;
                } else if (entry.criticalLevel === "Delayed") {
                  this.Delayed++;
                } else if (entry.criticalLevel === "Expectant") {
                  this.Expectant++;
                }
              });

              //todo pagination
              this.totalItems = res.data.data.totalItems
              this.totalPages =  Math.ceil(this.totalItems / this.pageSize);

            } else {
              //alert(res.data.data.message);
            }
          })
          .catch((e) => {
            alert(e.message);
          });
    },
    getPatientDetails() {
      const data = new FormData();
      data.append("function", "getPatientDetails");
      data.append("keyword", sessionStorage.getItem("patientID"));
      execute(data, patient)
          .then((res) => {
            this.loading = false
            if (res.data.success) {
              this.patientsDetails = res.data.data

              this.patientInitials =  this.patientsDetails.patient.names ? this.patientsDetails.patient.names.slice(0, 2).toUpperCase() : '';

            } else {
              //alert(res.data.data.message);
            }
          })
          .catch((e) => {
            alert(e.message);
          });
    },
    calculateAge(dateOfBirth) {
      if (!dateOfBirth) return '';

      const birthDate = new Date(dateOfBirth);
      const today = new Date();

      const yearDiff = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      // Calculate years and months
      let years = yearDiff;
      let months = monthDiff;

      if (months < 0) {
        years--;
        months += 12;
      }

      // Format the birth date
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const formattedBirthDate = birthDate.toLocaleDateString('en-GB', options);

      return `${formattedBirthDate} (${years} Years ${months} Months)`;
    },
    getTimeAgo(timestamp) {
      const now = new Date();
      const past = new Date(timestamp);
      const diffInSeconds = Math.floor((now - past) / 1000); // Difference in seconds

      // Define time intervals in seconds
      const intervals = {
        year: 365 * 24 * 60 * 60,
        month: 30 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1
      };

      for (const interval in intervals) {
        const timeDiff = Math.floor(diffInSeconds / intervals[interval]);
        if (timeDiff > 1) {
          return `${timeDiff} ${interval}s ago`;
        } else if (timeDiff === 1) {
          return `1 ${interval} ago`;
        }
      }

      return 'Just now';
    }

  },
}
</script>


<style scoped>

</style>