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


    <NavigationBar/>


    <div class="content-minimize">

      <div class="page-content">
        <div class="container-fluid">

          <!-- start page title -->
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-18">Patient Details</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item active"><a href="patients.html">MPI</a></li>
                    <li class="breadcrumb-item active">Patient Details</li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->

          <!-- navigation bar -->
          <ToolBarPatient/>
          <!-- navigation bar end -->

          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mb-3">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex mb-4 align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar-sm ">
                              <p class="avatar-title text-uppercase rounded-circle ">
                                {{ patientInitials }}
                              </p>
                            </div>
                          </div>
                          <div class="flex-grow-1 align-items-center">
                            <h5 class="font-size-14 m-0">{{patientsDetails.patient.title}} {{patientsDetails.patient.names}}</h5>
                            <p class="text-muted mb-0 pb-0">{{calculateAge(patientsDetails.patient.dateOfBirth)}}</p>
                          </div>
                        </div>

                        <div>

                          <!-- prefill the form when directing to this page -->

                          <a @click="gotTo('out-patient-checkin')" href="javascript: void(0)" type="button" class="btn btn-dark waves-effect waves-light text-uppercase ">
                            <i class="bx bx-calendar-check font-size-16 align-middle me-2"></i> outpatient check-in
                          </a>

                          <a href="patient-new.html" type="button" class="btn btn-primary waves-effect waves-light text-uppercase mx-2">
                            <i class="bx bxs-edit-alt font-size-16 align-middle me-2"></i> Edit Details
                          </a>

                          <a href="#" target="new" type="button" class="btn btn-success waves-effect waves-light text-uppercase">
                            <i class="bx bx-printer font-size-16 align-middle me-2"></i> Print Care Card
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 text-uppercase col-sm-12 col-md-4">
                      <div class="p-4 border-info border">
                        <div class="table-responsive font-12" style="height:520px; overflow-y: auto;">
                          <table class="table table-striped table-sm font-12 sources-table">
                            <thead>
                            <tr class="font-weight-bold table-dark">
                              <th scope="col" colspan="2"><i class="bx bx-user fs-4 text"> </i> Basic Information</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <th>Patient ID</th>
                              <td>{{patientsDetails.patient.patientID}}</td>
                            </tr>

                            <tr>
                              <th>Full Names</th>
                              <td>{{patientsDetails.patient.title}} {{patientsDetails.patient.names}}</td>
                            </tr>

                            <tr>
                              <th>Gender</th>
                              <td>{{patientsDetails.patient.gender}}</td>
                            </tr>

                            <tr>
                              <th>ID/PPT NO.</th>
                              <td>{{patientsDetails.patient.idNo}}</td>
                            </tr>

                            <tr>
                              <th>Languages</th>
                              <td>{{patientsDetails.patient.languages}}</td>
                            </tr>

                            <tr>
                              <th>Date of birth</th>
                              <td>{{calculateAge(patientsDetails.patient.dateOfBirth)}}</td>
                            </tr>

                            <tr>
                              <th>Blood Type</th>
                              <td>{{patientsDetails.patient.bloodGroup}}</td>
                            </tr>

                            <tr>
                              <th>Religion</th>
                              <td>{{patientsDetails.patient.religion}}</td>
                            </tr>

                            <tr>
                              <th>Occupation</th>
                              <td>{{patientsDetails.patient.occupation}}</td>
                            </tr>

                            <tr>
                              <th>Level of Education</th>
                              <td>{{patientsDetails.patient.levelOfEducation}}</td>
                            </tr>

                            <tr>
                              <th>Marital Status</th>
                              <td>{{patientsDetails.patient.maritalStatus}}</td>
                            </tr>

                            <tr>
                              <th>Nationality</th>
                              <td>{{patientsDetails.patient.nationality}}</td>
                            </tr>

                            <tr>
                              <th>Height</th>
                              <td>{{patientsDetails.patient.height}}</td>
                            </tr>
                            <tr>
                              <th>Weight</th>
                              <td>{{patientsDetails.patient.weight}}</td>
                            </tr>

                            <tr>
                              <th>BMI</th>
                              <td>{{patientsDetails.patient.bmi}}</td>
                            </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div class="col-4 text-uppercase col-sm-12 col-md-4">
                      <div class="p-4 border-info border">
                        <div class="table-responsive font-12" style="height:520px; overflow-y: auto;">
                          <table class="table table-striped table-sm font-12 sources-table">
                            <thead>
                            <tr class="font-weight-bold table-dark">
                              <th scope="col" colspan="2"><i class="bx bx-phone-call fs-4 text"> </i> Contact Information</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <th>Phone Number</th>
                              <td>{{patientsDetails.patient.phoneNumber}}</td>
                            </tr>

                            <tr>
                              <th>Email Address</th>
                              <td>{{patientsDetails.patient.email}}</td>
                            </tr>

                            <tr>
                              <th>Residential Address</th>
                              <td>{{patientsDetails.patient.physicalAddress}}</td>
                            </tr>

                            <tr>
                              <th>Sub County</th>
                              <td>{{patientsDetails.patient.subCountyName}}</td>
                            </tr>

                            <tr>
                              <th>Ward</th>
                              <td>{{patientsDetails.patient.wardName}}</td>
                            </tr>

                            <tr>
                              <th>Village/Town/City</th>
                              <td>{{patientsDetails.patient.town}}</td>
                            </tr>

                            <tr class="table-dark">
                              <th colspan="2" class=""><i class="bx bx-clipboard fs-4 text"> </i> Administrative Details</th>
                            </tr>
                            <tr>
                              <th>Registration Date</th>
                              <td>{{formatDate(patientsDetails.patient.dateCreated)}}</td>
                            </tr>

                            <tr>
                              <th>Registration Facility</th>
                              <td>{{patientsDetails.patient.registrationFacility}}</td>
                            </tr>

                            <tr>
                              <th>Registered By</th>
                              <td>{{patientsDetails.patient.createdBy}}</td>
                            </tr>

                            <tr>
                              <th>Last Visit</th>
                              <td>{{formatDate(patientsDetails.patient.lastSeen)}}</td>
                            </tr>


                            <tr>
                              <th>Last Update</th>
                              <td>{{formatDate(patientsDetails.patient.lastUpdate)}}</td>
                            </tr>


                            <tr>
                              <th>Last Updated By</th>
                              <td>{{patientsDetails.patient.updatedBy}}</td>
                            </tr>

                            <tr>
                              <th>Last seen at</th>
                              <td>{{patientsDetails.patient.lastSeenAt}}</td>
                            </tr>

                            <tr>
                              <th>Care Card</th>
                              <td>{{patientsDetails.patient.careCard}}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                    </div>

                    <div class="col-4 text-uppercase col-sm-12 col-md-4">
                      <div class="p-4 border-info border">
                        <div class="table-responsive font-12" style="height:520px; overflow-y: auto;">
                          <table class="table table-striped table-sm font-12 sources-table">
                            <thead>
                            <tr class="font-weight-bold table-dark">
                              <th scope="col" colspan="3"><i class="mdi mdi-account-group fs-5 text"> </i> Next of Kin</th>
                            </tr>
                            <tr class="table-primary">
                              <th>Name</th>
                              <th>Relationship</th>
                              <th>Phone</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in patientsDetails.kins" :value="item" :key="index">
                              <td>{{item.names}}</td>
                              <td>{{item.relationShip}}</td>
                              <td>{{item.phoneNumber}}</td>
                            </tr>


                            <tr class="font-weight-bold table-dark">
                              <th scope="col" colspan="3"><i class="mdi mdi-card-account-details fs-4 text"> </i> Insurances</th>
                            </tr>
                            <tr class="table-primary">
                              <th>Provider</th>
                              <th>Policy No.</th>
                              <th >Holder</th>
                            </tr>
                            <tr v-for="(item, index) in patientsDetails.insurances" :value="item" :key="index">
                              <th>{{item.provider}}</th>
                              <td>{{item.policyNumber}}</td>
                              <td>{{item.policyholder}}</td>
                            </tr>


                            <tr class="table-dark text-warning">
                              <th colspan="3" class=""><i class="mdi mdi-stethoscope fs-4 text"></i> Chronic Illnesses</th>
                            </tr>
                            <tr v-for="(item, index) in patientsDetails.chronicIllnesses" :value="item" :key="index">
                              <th colspan="3">
                                <i>{{ item.type ? item.type : 'NONE' }}</i>
                              </th>
                            </tr>

                            <tr class="table-dark text-warning">
                              <th colspan="3" class=""><i class="mdi mdi-sticker-alert-outline fs-4 text"></i> Allergies</th>
                            </tr>
                            <tr v-for="(item, index) in patientsDetails.allergies" :value="item" :key="index">
                              <th colspan="3">
                                <i>{{ item.allergen ? item.allergen : 'NONE' }}</i>
                              </th>
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

          <!-- end row -->
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->

      <!-- receipting modal -->
      <div class="modal fade receipting-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Food Handler Certificate Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <address>
                    <strong class="text-capitalize">Patient Details</strong><br>
                    Mrs Jane Doe<br>
                    <a href="mailto:email@mail.com">email@mail.com</a>, <a href="tel:+254704549859">0704 549 859</a><br>

                    <br>
                    Valid From 1 Mar 2022, 10:20 AM
                    <br>
                    <span class="pr-2">Valid Till 2 Mar 2023, 10:20 AM </span>
                    <span class="badge rounded-pill bg-success text-uppercase me-3">Active</span>

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
                  <div class="hori-timeline mt-4">
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

                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">15 Sep 2023 12:54 PM</div>
                            <h5 class="mb-4">Certification</h5>
                          </div>
                          <div class="event-down-icon">
                            <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted">Certifcate Issued By Kiprop Tanui</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-sm-6 text-sm-end d-none">
                  <address class="mt-2 mt-sm-0">
                    <strong>Payment Method</strong><br>
                    <span class="fw-medium">MPESA</span><br>
                    Phone No. 0704 549 859<br> <br>
                    On 1 Mar 2022, 10:20 AM
                  </address>
                </div>
              </div>
              <div class="col-12">
                <div class="py-2 mt-3">
                  <h3 class="font-size-15 fw-bold">ND12368</h3>
                </div>
              </div>
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-nowrap vertical-align-middle">
                    <thead class="bg-light">
                    <tr>
                      <th>More Details</th>
                      <th class="text-end"></th>

                    </tr>
                    </thead>

                    <tbody>
                    <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Serial Number</p>
                      </td>
                      <td class="">12WER345</td>

                    </tr>

                    <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Business Owner(s)</p>
                      </td>
                      <td class="">John Doe Kamau, James Kuria Kimotho</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Profession/Occupation</p>

                      </td>
                      <td class="">Food Processing</td>

                    </tr>
                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Application Date</p>

                      </td>
                      <td class="">5 Jan 2022 10:09 AM</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Date Approved</p>

                      </td>
                      <td class="">11 Jan 2022 09:54 AM</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Days To Expiry</p>

                      </td>
                      <td class="">134 Days</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Amount Paid</p>

                      </td>
                      <td class="text-uppercase">KES 1,000</td>

                    </tr>




                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-footer">

              <a href="PrintDocs/Food-handler/health-permit.html" target="_blank" type="button" class="btn btn-primary waves-effect waves-light">
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
      <div class="modal fade invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
                  <h3 class="font-size-15 fw-bold">Invoice Details ( <span class="text-primary fw-medium">No. 1237</span> )</h3>
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
                        <strong>Balance</strong></td>
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
                        <select class="form-control selectpicker w-100 payment-method" data-style="btn-secondary w-100" data-live-search="true" title="Select payment Method">
                          <option value="Mpesa">MPESA</option>
                          <option value="Cash">CASH</option>
                        </select>
                      </td>
                      <td class="px-3 ">
                        <div class="phone-num d-none">
                          <label for="">Phone No.</label>
                          <input type="text " class="form-control w-100 d-flex " placeholder="Phone No." spellcheck="false" data-ms-editor="true">
                        </div>

                      </td>
                      <td class="px-3">
                        <label for="">Amount To Be Paid</label>
                        <input type="text " class="form-control w-100 d-flex" placeholder="KES" spellcheck="false" data-ms-editor="true">

                      </td>
                      <td class="text-right float-right">
                        <div class="d-flex flex-column">
                          <label class="opacity-0">Something</label>
                          <a href="#" class="btn btn-primary w-md waves-effect waves-light">Submit</a>
                        </div>
                      </td>


                    </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div class="float-end">
                <a href="javascript:window.print()" class="btn btn-success waves-effect waves-light me-1"><i class="mdi mdi-printer font-16px"></i></a>
                <a href="javascript: void(0);" class="btn btn-primary w-md waves-effect waves-light">Receive Payment</a>
              </div>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- invoice details -->

      <!-- patients details modal -->
      <div class="modal fade patient-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">More Details On Jane</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <address>
                    <strong class="text-capitalize">Patient Details</strong><br>
                    Mrs Jane Doe<br>
                    <a href="mailto:email@mail.com">email@mail.com</a>, <a href="tel:+254704549859">0704 549 859</a><br>

                    <br>
                    Registered on 1 Mar 2022, 10:20 AM <br>At Sipital Kuu Medical Center
                    <br>
                    <br>
                    <span class="pr-2">Last Seen: 10    Mar 20233. 03:46 PM</span>
                    <span class="badge rounded-pill bg-success text-uppercase me-3 d-none">Active</span>

                  </address>
                </div>

                <div class="col-6 text-right">
                  <address>
                    <strong class="text-capitalize">Location Details</strong><br>
                    County: Busia, Sub County: Funyula, Ward: Marachi West,
                    <br>
                    Physical Address: Near Karachi West Primary School


                  </address>
                </div>

                <div class="col-sm-6 text-sm-end d-none">
                  <address class="mt-2 mt-sm-0">
                    <strong>Payment Method</strong><br>
                    <span class="fw-medium">MPESA</span><br>
                    Phone No. 0704 549 859<br> <br>
                    On 1 Mar 2022, 10:20 AM
                  </address>
                </div>
              </div>
              <div class="col-12">
                <div class="py-2 mt-3">
                  <h3 class="font-size-15 fw-bold">ND12368</h3>
                </div>
              </div>
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-nowrap vertical-align-middle">
                    <thead class="bg-light">
                    <tr>
                      <th>More Details</th>
                      <th class="text-end"></th>

                    </tr>
                    </thead>

                    <tbody>
                    <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Patient ID</p>
                      </td>
                      <td class="">MPI/1234</td>

                    </tr>

                    <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Blood Group</p>
                      </td>
                      <td class="">A+</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Age</p>

                      </td>
                      <td class="">22 Years</td>

                    </tr>
                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Marital Status</p>

                      </td>
                      <td class="">Single</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Occupation</p>

                      </td>
                      <td class="">Software Developer</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Gender</p>

                      </td>
                      <td class="">Male</td>

                    </tr>

                    <tr>
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Height</p>

                      </td>
                      <td class="">156 CM</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Weight</p>

                      </td>
                      <td class="">78 KGs</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Unpaid Bills Amount</p>

                      </td>
                      <td class="">KES 400</td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Last Updated</p>

                      </td>
                      <td class="">12 Jul 2023, 11:45 AM By Kennedy Livondo at Costa Rick Hospital</td>

                    </tr>




                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-footer">

              <a href="PrintDocs/Food-handler/health-permit.html" target="_blank" type="button" class="btn btn-primary waves-effect waves-light">
                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Certificate
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- end of patieonts details modal -->

      <!-- kin details modal -->
      <div class="modal fade kin-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Jane's Kin Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-nowrap vertical-align-middle">


                    <tbody>

                    <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Relationship with patient</p>
                      </td>
                      <td class="">Brother</td>

                    </tr>

                    <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Full Names</p>
                      </td>
                      <td class="">Alex Kinoti Livondo</td>

                    </tr>

                    <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Phone Number</p>
                      </td>
                      <td class="">
                        <a href="tel:+254712345678">0712 345 678</a>
                      </td>

                    </tr>

                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Email Address</p>

                      </td>
                      <td class=""><a href="mailto:Alex@kinoti.com">Alex@kinoti.com</a></td>

                    </tr>
                    <tr >
                      <td>
                        <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Physical Address</p>

                      </td>
                      <td class="">Near Mount Kilimanjaro Joint</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-footer d-none">

              <a href="PrintDocs/Food-handler/health-permit.html" target="_blank" type="button" class="btn btn-primary waves-effect waves-light">
                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Certificate
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- end of kin details modal -->

      <!-- Patient registration -->
      <div class="modal fade " id="registerCustomer" data-backdrop="static" data-keyboard="false" tabindex="-1 " role="dialog " aria-labelledby="staticBackdropLabel " aria-hidden="true ">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content ">


            <div class="modal-header">
              <h5 class="modal-title text-capitalize" id="exampleModalLongTitle">New Patient Registration</h5>
              <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body steps-container">
              <div class="mb-4 the-step patient-info active">
                <div class="avatar-md mx-auto mb-4 d-none">
                  <div class="avatar-title bg-light rounded-circle text-primary h1 ">
                    <i class="mdi mdi-account-multiple-plus "></i>
                  </div>
                </div>

                <div class="row  text-left">
                  <div class="col-12">
                    <h4 class="text-primary text-capitalize">Patient's Details</h4>
                    <form>
                      <div class="row ">
                        <div class="col-12 ">
                          <div class="">
                            <label for="digit1-input " class="">Patient's Full Name</label>
                          </div>
                        </div>

                        <div class="col-12 mb-3">
                          <div class="row">
                            <div class="col-4">
                              <input type="text " class="form-control two-step " placeholder="First Name">
                            </div>

                            <div class="col-4">
                              <input type="text " class="form-control two-step " placeholder="Middle Name">
                            </div>

                            <div class="col-4">
                              <input type="text " class="form-control two-step " placeholder="Last Name">
                            </div>
                          </div>
                        </div>

                        <div class="col-4 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Date Of Birth</label>
                            <input class="form-control" type="date" value="2019-08-19" id="example-date-input">
                          </div>
                        </div>
                        <div class="col-4 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Nationality</label>
                            <select class="form-control selectpicker bg-white select-revenue" title="Select Nationality" data-live-search="true">
                              <option value="">-- select one --</option>
                              <option value="afghan">Afghan</option>
                              <option value="albanian">Albanian</option>
                              <option value="algerian">Algerian</option>
                              <option value="american">American</option>
                              <option value="andorran">Andorran</option>
                              <option value="angolan">Angolan</option>
                              <option value="antiguans">Antiguans</option>
                              <option value="argentinean">Argentinean</option>
                              <option value="armenian">Armenian</option>
                              <option value="australian">Australian</option>
                              <option value="austrian">Austrian</option>
                              <option value="azerbaijani">Azerbaijani</option>
                              <option value="bahamian">Bahamian</option>
                              <option value="bahraini">Bahraini</option>
                              <option value="bangladeshi">Bangladeshi</option>
                              <option value="barbadian">Barbadian</option>
                              <option value="barbudans">Barbudans</option>
                              <option value="batswana">Batswana</option>
                              <option value="belarusian">Belarusian</option>
                              <option value="belgian">Belgian</option>
                              <option value="belizean">Belizean</option>
                              <option value="beninese">Beninese</option>
                              <option value="bhutanese">Bhutanese</option>
                              <option value="bolivian">Bolivian</option>
                              <option value="bosnian">Bosnian</option>
                              <option value="brazilian">Brazilian</option>
                              <option value="british">British</option>
                              <option value="bruneian">Bruneian</option>
                              <option value="bulgarian">Bulgarian</option>
                              <option value="burkinabe">Burkinabe</option>
                              <option value="burmese">Burmese</option>
                              <option value="burundian">Burundian</option>
                              <option value="cambodian">Cambodian</option>
                              <option value="cameroonian">Cameroonian</option>
                              <option value="canadian">Canadian</option>
                              <option value="cape verdean">Cape Verdean</option>
                              <option value="central african">Central African</option>
                              <option value="chadian">Chadian</option>
                              <option value="chilean">Chilean</option>
                              <option value="chinese">Chinese</option>
                              <option value="colombian">Colombian</option>
                              <option value="comoran">Comoran</option>
                              <option value="congolese">Congolese</option>
                              <option value="costa rican">Costa Rican</option>
                              <option value="croatian">Croatian</option>
                              <option value="cuban">Cuban</option>
                              <option value="cypriot">Cypriot</option>
                              <option value="czech">Czech</option>
                              <option value="danish">Danish</option>
                              <option value="djibouti">Djibouti</option>
                              <option value="dominican">Dominican</option>
                              <option value="dutch">Dutch</option>
                              <option value="east timorese">East Timorese</option>
                              <option value="ecuadorean">Ecuadorean</option>
                              <option value="egyptian">Egyptian</option>
                              <option value="emirian">Emirian</option>
                              <option value="equatorial guinean">Equatorial Guinean</option>
                              <option value="eritrean">Eritrean</option>
                              <option value="estonian">Estonian</option>
                              <option value="ethiopian">Ethiopian</option>
                              <option value="fijian">Fijian</option>
                              <option value="filipino">Filipino</option>
                              <option value="finnish">Finnish</option>
                              <option value="french">French</option>
                              <option value="gabonese">Gabonese</option>
                              <option value="gambian">Gambian</option>
                              <option value="georgian">Georgian</option>
                              <option value="german">German</option>
                              <option value="ghanaian">Ghanaian</option>
                              <option value="greek">Greek</option>
                              <option value="grenadian">Grenadian</option>
                              <option value="guatemalan">Guatemalan</option>
                              <option value="guinea-bissauan">Guinea-Bissauan</option>
                              <option value="guinean">Guinean</option>
                              <option value="guyanese">Guyanese</option>
                              <option value="haitian">Haitian</option>
                              <option value="herzegovinian">Herzegovinian</option>
                              <option value="honduran">Honduran</option>
                              <option value="hungarian">Hungarian</option>
                              <option value="icelander">Icelander</option>
                              <option value="indian">Indian</option>
                              <option value="indonesian">Indonesian</option>
                              <option value="iranian">Iranian</option>
                              <option value="iraqi">Iraqi</option>
                              <option value="irish">Irish</option>
                              <option value="israeli">Israeli</option>
                              <option value="italian">Italian</option>
                              <option value="ivorian">Ivorian</option>
                              <option value="jamaican">Jamaican</option>
                              <option value="japanese">Japanese</option>
                              <option value="jordanian">Jordanian</option>
                              <option value="kazakhstani">Kazakhstani</option>
                              <option value="kenyan" selected>Kenyan</option>
                              <option value="kittian and nevisian">Kittian and Nevisian</option>
                              <option value="kuwaiti">Kuwaiti</option>
                              <option value="kyrgyz">Kyrgyz</option>
                              <option value="laotian">Laotian</option>
                              <option value="latvian">Latvian</option>
                              <option value="lebanese">Lebanese</option>
                              <option value="liberian">Liberian</option>
                              <option value="libyan">Libyan</option>
                              <option value="liechtensteiner">Liechtensteiner</option>
                              <option value="lithuanian">Lithuanian</option>
                              <option value="luxembourger">Luxembourger</option>
                              <option value="macedonian">Macedonian</option>
                              <option value="malagasy">Malagasy</option>
                              <option value="malawian">Malawian</option>
                              <option value="malaysian">Malaysian</option>
                              <option value="maldivan">Maldivan</option>
                              <option value="malian">Malian</option>
                              <option value="maltese">Maltese</option>
                              <option value="marshallese">Marshallese</option>
                              <option value="mauritanian">Mauritanian</option>
                              <option value="mauritian">Mauritian</option>
                              <option value="mexican">Mexican</option>
                              <option value="micronesian">Micronesian</option>
                              <option value="moldovan">Moldovan</option>
                              <option value="monacan">Monacan</option>
                              <option value="mongolian">Mongolian</option>
                              <option value="moroccan">Moroccan</option>
                              <option value="mosotho">Mosotho</option>
                              <option value="motswana">Motswana</option>
                              <option value="mozambican">Mozambican</option>
                              <option value="namibian">Namibian</option>
                              <option value="nauruan">Nauruan</option>
                              <option value="nepalese">Nepalese</option>
                              <option value="new zealander">New Zealander</option>
                              <option value="ni-vanuatu">Ni-Vanuatu</option>
                              <option value="nicaraguan">Nicaraguan</option>
                              <option value="nigerien">Nigerien</option>
                              <option value="north korean">North Korean</option>
                              <option value="northern irish">Northern Irish</option>
                              <option value="norwegian">Norwegian</option>
                              <option value="omani">Omani</option>
                              <option value="pakistani">Pakistani</option>
                              <option value="palauan">Palauan</option>
                              <option value="panamanian">Panamanian</option>
                              <option value="papua new guinean">Papua New Guinean</option>
                              <option value="paraguayan">Paraguayan</option>
                              <option value="peruvian">Peruvian</option>
                              <option value="polish">Polish</option>
                              <option value="portuguese">Portuguese</option>
                              <option value="qatari">Qatari</option>
                              <option value="romanian">Romanian</option>
                              <option value="russian">Russian</option>
                              <option value="rwandan">Rwandan</option>
                              <option value="saint lucian">Saint Lucian</option>
                              <option value="salvadoran">Salvadoran</option>
                              <option value="samoan">Samoan</option>
                              <option value="san marinese">San Marinese</option>
                              <option value="sao tomean">Sao Tomean</option>
                              <option value="saudi">Saudi</option>
                              <option value="scottish">Scottish</option>
                              <option value="senegalese">Senegalese</option>
                              <option value="serbian">Serbian</option>
                              <option value="seychellois">Seychellois</option>
                              <option value="sierra leonean">Sierra Leonean</option>
                              <option value="singaporean">Singaporean</option>
                              <option value="slovakian">Slovakian</option>
                              <option value="slovenian">Slovenian</option>
                              <option value="solomon islander">Solomon Islander</option>
                              <option value="somali">Somali</option>
                              <option value="south african">South African</option>
                              <option value="south korean">South Korean</option>
                              <option value="spanish">Spanish</option>
                              <option value="sri lankan">Sri Lankan</option>
                              <option value="sudanese">Sudanese</option>
                              <option value="surinamer">Surinamer</option>
                              <option value="swazi">Swazi</option>
                              <option value="swedish">Swedish</option>
                              <option value="swiss">Swiss</option>
                              <option value="syrian">Syrian</option>
                              <option value="taiwanese">Taiwanese</option>
                              <option value="tajik">Tajik</option>
                              <option value="tanzanian">Tanzanian</option>
                              <option value="thai">Thai</option>
                              <option value="togolese">Togolese</option>
                              <option value="tongan">Tongan</option>
                              <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                              <option value="tunisian">Tunisian</option>
                              <option value="turkish">Turkish</option>
                              <option value="tuvaluan">Tuvaluan</option>
                              <option value="ugandan">Ugandan</option>
                              <option value="ukrainian">Ukrainian</option>
                              <option value="uruguayan">Uruguayan</option>
                              <option value="uzbekistani">Uzbekistani</option>
                              <option value="venezuelan">Venezuelan</option>
                              <option value="vietnamese">Vietnamese</option>
                              <option value="welsh">Welsh</option>
                              <option value="yemenite">Yemenite</option>
                              <option value="zambian">Zambian</option>
                              <option value="zimbabwean">Zimbabwean</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-4 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Gender</label>
                            <div class="row">
                              <div class="col-auto">
                                <div class="form-check mb-3">
                                  <input class="form-check-input" type="radio" name="gender" id="radioFemale" >
                                  <label class="form-check-label" for="radioFemale">
                                    Female
                                  </label>
                                </div>
                              </div>

                              <div class="col-auto">
                                <div class="form-check mb-3">
                                  <input class="form-check-input" type="radio" name="gender" id="radioMale" >
                                  <label class="form-check-label" for="radioMale">
                                    Male
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-4 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Marital Status</label>
                            <select class="form-control selectpicker bg-white select-revenue" title="Select Marital Status" data-live-search="true">
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
                              <option value="Widowed">Widowed</option>
                              <option value="Separated">Separated</option>
                              <option value="Divorced">Divorced</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-4 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Religion</label>
                            <select class="form-control selectpicker bg-white select-revenue" title="Select Religion" data-live-search="true">
                              <option value="African Traditional & Diasporic">African Traditional & Diasporic</option>
                              <option value="Agnostic">Agnostic</option>
                              <option value="Atheist">Atheist</option>
                              <option value="Baha'i">Baha'i</option>
                              <option value="Buddhism">Buddhism</option>
                              <option value="Cao Dai">Cao Dai</option>
                              <option value="Chinese traditional religion">Chinese traditional religion</option>
                              <option value="Christianity">Christianity</option>
                              <option value="Hinduism">Hinduism</option>
                              <option value="Islam">Islam</option>
                              <option value="Jainism">Jainism</option>
                              <option value="Juche">Juche</option>
                              <option value="Judaism">Judaism</option>
                              <option value="Neo-Paganism">Neo-Paganism</option>
                              <option value="Nonreligious">Nonreligious</option>
                              <option value="Rastafarianism">Rastafarianism</option>
                              <option value="Secular">Secular</option>
                              <option value="Shinto">Shinto</option>
                              <option value="Sikhism">Sikhism</option>
                              <option value="Spiritism">Spiritism</option>
                              <option value="Tenrikyo">Tenrikyo</option>
                              <option value="Unitarian-Universalism">Unitarian-Universalism</option>
                              <option value="Zoroastrianism">Zoroastrianism</option>
                              <option value="primal-indigenous">primal-indigenous</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-4 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Patient's Blood group</label>
                            <select class="form-control selectpicker bg-white select-revenue" title="Select Blood Group" data-live-search="true">
                              <option value="A+">A+</option><option value="A-">A-</option>
                              <option value="B+">B+</option><option value="B-">B-</option>
                              <option value="O+">O+</option><option value="O-">O-</option>
                              <option value="AB+">AB+</option><option value="AB-">AB-</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Occupation</label>
                            <input type="text " class="form-control two-step " placeholder="Patient's Occupation">
                          </div>
                        </div>

                        <div class="col-12 ">
                          <div class="">
                            <label for="digit1-input " class="">Contact Information</label>
                          </div>
                        </div>

                        <div class="col-12 mb-3">
                          <div class="row">
                            <div class="col-6">
                              <input type="text " class="form-control two-step " placeholder="Phone No">
                            </div>

                            <div class="col-6">
                              <input type="email" class="form-control two-step " placeholder="Email Address">
                            </div>


                          </div>
                        </div>


                        <div class="col-12 ">
                          <div class="">
                            <label for="digit1-input " class="">Patient's Residence</label>
                          </div>
                        </div>

                        <div class="col-12 mb-3">
                          <div class="row">
                            <div class="col-4">
                              <select class="form-control selectpicker bg-white select-revenue" title="Select County" data-live-search="true">
                                <option value="">Busia</option>
                                <option value="">Nairobi</option>
                                <option value="">Homabay</option>
                              </select>
                            </div>

                            <div class="col-4">
                              <select class="form-control selectpicker bg-white select-revenue" title="Select Sub County" data-live-search="true">
                                <option value="">Teso North</option>
                                <option value="">Teso South</option>
                                <option value="">Nambale</option>

                                <option value="">Matayos</option>
                                <option value="">Butula</option>
                                <option value="">Funyula</option>
                                <option value="">Budalangi</option>
                              </select>
                            </div>

                            <div class="col-4">
                              <select class="form-control selectpicker bg-white select-revenue" title="Select Ward" data-live-search="true">
                                <option value="">Marachi West</option>
                                <option value="">Marachi North</option>
                                <option value="">Marachi Central</option>
                                <option value="">Kingandole</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 mb-3">
                          <div class="">
                            <label for="digit1-input " class="">Physical Address</label>
                            <textarea name="" id=""  class="form-control" placeholder="Enter Address"></textarea>
                          </div>
                        </div>

                      </div>


                    </form>

                  </div>
                </div>
              </div>
              <div class="mb-4 the-step next-of-kin-modal d-none">
                <h4 class="text-primary text-capitalize">Next Of Kin Details</h4>
                <div class="row">

                  <div class="col-12 mb-4">
                    <label for="" class="text-capitalize">Relationship with Patient Being registerd</label>
                    <select class="form-control selectpicker bg-white select-revenue" title="Select Next Of Kin's Relationship with the patient being registered" data-live-search="true">
                      <option value="">Mother</option>
                      <option value="">Father</option>
                      <option value="">Daughter</option>

                      <option value="">Son</option>
                      <option value="">Sister</option>
                      <option value="">Brother</option>

                      <option value="">Friend</option>
                      <option value="">Uncle</option>
                      <option value="">Aunt</option>
                    </select>
                  </div>

                  <div class="col-12 ">
                    <div class="">
                      <label for="digit1-input " class="">Next Of Kin Full Names</label>
                    </div>
                  </div>


                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-4">
                        <input type="text " class="form-control two-step " placeholder="First Name">
                      </div>

                      <div class="col-4">
                        <input type="text " class="form-control two-step " placeholder="Middle Name">
                      </div>

                      <div class="col-4">
                        <input type="text " class="form-control two-step " placeholder="Last Name">
                      </div>
                    </div>
                  </div>

                  <div class="col-12 ">
                    <div class="">
                      <label for="digit1-input " class="">Next Of Kin Contact information</label>
                    </div>
                  </div>


                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-6">
                        <input type="text" class="form-control two-step " placeholder="Phone Number">
                      </div>

                      <div class="col-6">
                        <input type="email" class="form-control two-step " placeholder="Email address">
                      </div>


                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <div class="">
                      <label for="digit1-input " class="">Physical Address</label>
                      <textarea name="" id=""  class="form-control" placeholder="Enter Address"></textarea>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div class="modal-footer d-flex">
              <div class="d-none">
                <button data-toggle="modal" data-target="#subscribeModal" data-dismiss="modal" type="button" class="btn btn-link waves-effect">Back To Patient Search</button>
              </div>
              <div class="d-flex modal-next-prev-container">
                <button type="button" class="btn btn-outline-secondary btn-prev waves-effect waves-effect waves-light me-3">
                  <i class="bx bx-left-arrow-alt font-size-16 align-middle me-2"></i> Previouse
                </button>

                <button type="button" class="btn btn-primary waves-effect waves-effect waves-light btn-next">
                  Next <i class="bx bx-right-arrow-alt font-size-16 align-middle me-2"></i>
                </button>

                <button type="button" class="btn btn-submit btn-success d-none ml-3 ms-3 waves-effect waves-effect waves-light btn-next">
                  <i class="bx bx-check-double font-size-16 align-middle me-2"></i> Submit Application
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Patient registration -->

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
import NavigationBar from "@/components/Navigation";
import router from "@/router";
import ToolBarPatient from "@/components/master-patient/ToolBar.vue";

export default {
  name: "PatientDetails",
  components: {ToolBarPatient, NavigationBar},
  data() {
    return {


      loading: false,
      // set the initial current page as 1
      currentPage: 1,
      // set the total number of pages as 10 (you can change this according to your data source)
      totalPages: 0,
      // set the number of items per page as 5 (you can change this according to your preference)
      pageSize: 10,
      totalItems:0,

      search:"",
      patientInitials:"",

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
            type:null,
            dateCreated:null
          }
        ],
        allergies:[
          {
            allergen:null,
            dateCreated:null
          }
        ],
      }

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

    this.menuAccess()
    this.getPatientDetails()

  },
  methods: {

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


    getVariance(dailyTarget, amountCollected) {
      // Calculate the number of days between dateFrom and dateTo
      const numberOfDays = moment(this.dateTo).diff(moment(this.dateFrom), 'days') + 1;

      // Ensure dailyTarget is a number, use 0 if not
      const target = Math.round(Number.isNaN(Number(dailyTarget)) ? 0 : dailyTarget * numberOfDays);

      // Calculate the variance as a percentage and round it to the nearest whole number
      const variance = Math.round(target !== 0 ? (amountCollected / target) * 100 : 0);

      return variance;
    }
    ,
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
    gotTo(route) {
      sessionStorage.setItem("patientIDNo",this.patientsDetails.patient.idNo)
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
    getPatientDetails() {
      this.loading = true
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

  },
}
</script>
