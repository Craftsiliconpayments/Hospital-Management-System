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
                <h4 class="mb-sm-0 font-size-18">{{patientsDetails.patient.names}}</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="#">Patient's Queue</a></li>
                    <li class="breadcrumb-item"><a href="#">Triage Quee</a></li>
                    <li class="breadcrumb-item"><a href="#">{{patientsDetails.patient.names}}</a></li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->
          <div class="row">
            <div class="col-12">
              <div class="card">

                <div class="kev-card-nav">
                  <div class="card-header text-white text-uppercase ">
                    <h4 class="card-title">
                      <div>
                        <span class="mb-0">{{patientsDetails.patient.names}}</span>

                        <div class="float-end mb-0 d-flex align-items-center">
                          <div class="input-group input-group-sm mx-3 d-flex flex-no-wrap">
                            <label class="input-group-text">VISIT NO.</label>
                            <input type="text" class="form-control fw-bold w-auto " disabled value="T90">
                          </div>

                          <div class="input-group input-group-sm d-flex align-items-center flex-row flex-no-wrap">
                            <label class="input-group-text">AGE/GENDER : </label>
                            <input type="text" class="form-control fw-bold w-auto form-control-sm" disabled value="27 YRS 4 MO / MALE">
                          </div>
                        </div>
                      </div>

                    </h4>
                  </div>

                <ToolBarPatientQue/>

                </div>

                <div class="card-header bg-white border-bottom">
                  <h4 class="card-title text-uppercase">Consultation Summary: Record and Review Patient Consultation Details</h4>

                </div>

                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                     <SideBarConsultation/>
                    </div>
                    <div class="col-9">
                      <div class="row">
                        <div class="col-12 mb-2">
                          <div class="bg-warning border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                            <i class="mdi mdi-pill font-28 mr-15px"></i>
                            <p class="fw-semibold mb-0 pb-0 text-uppercase">Current medication</p>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="table-responsive">
                            <table class="table table-striped">
                              <thead class="table-dark">
                              <tr>
                                <th>Medicine</th>
                                <th>Prescribed Quantity</th>
                                <th>Issued Quantity</th>
                                <th>Issued By</th>
                                <th>Issued at Facility</th>
                                <th>Prescribed By</th>
                                <th>Prescription Date</th>
                                <th>End Date</th>
                                <th>Facility</th>
                                <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr v-for="(item, index) in medications" :value="item" :key="index">
                                <td>{{item.medicine}}</td>
                                <td>{{item.prescribedQuantity}}</td>
                                <td>{{item.issuedQuantity}}</td>
                                <td>{{item.issuedBy}}</td>
                                <td>{{item.issuedAtFacility}}</td>
                                <td>{{item.prescribedBy}}</td>
                                <td>{{formatDate(item.prescriptionDate)}}</td>
                                <td>{{formatDate(item.endDate)}}</td>
                                <td>{{item.facility}}</td>
                                <td>
                                  <button @click="confirmEndMedication(item.medicine,item.id)" class="btn btn-danger btn-sm text-uppercase no-wrap">End medication</button>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 mb-2">
                          <div class="bg-info border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                            <i class="mdi mdi-pill font-28 mr-15px"></i>
                            <p class="fw-semibold mb-0 pb-0 text-uppercase">Previous medication</p>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="table-responsive">
                            <table class="table table-striped">
                              <thead class="table-dark">
                              <tr>
                                <th>Medicine</th>
                                <th>Prescribed Quantity</th>
                                <th>Issued Quantity</th>
                                <th>Issued By</th>
                                <th>Issued at Facility</th>
                                <th>Prescribed By</th>
                                <th>Prescription Date</th>
                                <th>End Date</th>
                                <th>Facility</th>
                                <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr v-for="(item, index) in medicationsEnded" :value="item" :key="index">
                                <td>{{item.medicine}}</td>
                                <td>{{item.prescribedQuantity}}</td>
                                <td>{{item.issuedQuantity}}</td>
                                <td>{{item.issuedBy}}</td>
                                <td>{{item.issuedAtFacility}}</td>
                                <td>{{item.prescribedBy}}</td>
                                <td>{{formatDate(item.prescriptionDate)}}</td>
                                <td>{{formatDate(item.endDate)}}</td>
                                <td>{{item.facility}}</td>
                                <td>
                                  <button disabled @click="confirmEndMedication(item.medicine,item.id)" class="btn btn-info btn-sm text-uppercase no-wrap">End medication</button>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>
                    </div>
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
  import ToolBarPatientQue from "@/components/patient-queue/triage/ToolBarPatientQue.vue";
  import SideBarConsultation from "@/components/patient-queue/consultation/SideBarConsultation.vue";

  export default {
    name: "CurrentMedications",
    components: {SideBarConsultation, ToolBarPatientQue, NavigationBar},
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

        medications: [
          {
            id: null,
            idNo: null,
            visitCode: null,
            medicine: null,
            prescribedQuantity: null,
            issuedQuantity: null,
            issuedBy: null,
            issuedAtFacility: null,
            prescribedBy: null,
            prescriptionDate: null,
            endDate: null,
            facility: null
          }
        ],
        medicationsEnded: [
          {
            id: null,
            idNo: null,
            visitCode: null,
            medicine: null,
            prescribedQuantity: null,
            issuedQuantity: null,
            issuedBy: null,
            issuedAtFacility: null,
            prescribedBy: null,
            prescriptionDate: null,
            endDate: null,
            facility: null
          }
        ]

      };
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

      this.getMedications()
      this.getEndedMedications()
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

      confirmEndMedication(medicine,id) {
        const userConfirmed = window.confirm(`Are you sure you want to end the ${medicine} medication?`);
        if (userConfirmed) {
          // Proceed with ending the medication
          this.endMedication(id);
        } else {
          // User canceled the action
          console.log("User canceled the end medication process.");
        }
      },
      endMedication(id) {
        // Your logic to end the medication goes here
        console.log("Medication has been ended.");

        const data = new FormData();
        data.append("function", "endMedication");
        data.append("id", id);
        execute(data, patient)
            .then((res) => {
              if (res.data.success) {
                this.getMedications()
                this.getEndedMedications()
              } else {
                //alert(res.data.data.message);
              }
            })
            .catch((e) => {
              alert(e.message);
            });
      },

      getMedications() {
        this.medications.splice(0)
        this.loading = true
        const data = new FormData();
        data.append("function", "getMedications");
        data.append("page", this.currentPage);
        data.append("rows_per_page", this.pageSize);
        data.append("keyword", this.search);
        data.append("idNo", sessionStorage.getItem("idNo"));
        execute(data, patient)
            .then((res) => {
              this.loading = false
              if (res.data.success) {
                this.medications = res.data.data.medications

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
      getEndedMedications() {
        this.medicationsEnded.splice(0)
        const data = new FormData();
        data.append("function", "getEndedMedications");
        data.append("page", this.currentPage);
        data.append("rows_per_page", this.pageSize);
        data.append("keyword", this.search);
        data.append("idNo", sessionStorage.getItem("idNo"));
        execute(data, patient)
            .then((res) => {
              this.loading = false
              if (res.data.success) {
                this.medicationsEnded = res.data.data.medicationsEnded
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
        data.append("keyword", sessionStorage.getItem("idNo"));
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

    },
  }

</script>


<style scoped>

</style>