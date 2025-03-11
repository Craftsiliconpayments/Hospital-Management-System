<template>
  <head>

    <meta charset="utf-8"/>

    <title>HOSPITAL MANAGEMENT INFORMATION SYSTEM</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Rental management system by Nouveta LTD" name="description" />
    <meta content="Kelvin Njuguna" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">

    <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />

    <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/libs/%40chenfengyuan/datepicker/datepicker.min.css">



    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />


  </head>

  <body data-sidebar="dark">


  <div id="layout-wrapper">


    <!-- ========== Left Sidebar Start ========== -->
   <NavigationBar/>

    <!-- ========== Left Sidebar Start ========== -->

    <!-- Offender email address -->
    <div class="modal fade " id="subscribeModal" data-backdrop="static" data-keyboard="false" tabindex="-1 " role="dialog " aria-labelledby="staticBackdropLabel " aria-hidden="true ">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content ">
          <div class="modal-header border-bottom-0 ">
            <button type="button " class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5">
            <div class="text-center mb-4 ">
              <div class="avatar-md mx-auto mb-4 ">
                <div class="avatar-title bg-light rounded-circle text-dark h1 ">
                  <i class="mdi mdi mdi-account-search-outline "></i>
                </div>
              </div>

              <div class="row justify-content-center ">
                <div class="col-xl-10 ">
                  <h4 class="text-dark text-uppercase ">Patient's Identifier</h4>
                  <p class="text-muted font-size-14 mb-4 ">
                    Select how you would like to search for the patient.
                  </p>

                  <form>

                    <div>

                    </div>

                    <div class="row ">

                      <div class="col-12 ">
                        <div class="mb-3 ">
                          <label for="digit1-input " class="visually-hidden ">ID Number</label>
                          <input v-model="keyword" type="text " class="form-control form-control-lg text-center two-step text-uppercase" placeholder="Enter to Search">
                        </div>
                      </div>
                    </div>

                    <div v-if="message !==null" class="alert alert-danger" role="alert">
                      {{message}}
                    </div>


                    <div class="col-12 mt-3">
                      <button data-dismiss="modal" @click="getPatient()" type="button" class="btn btn-primary w-100  text-uppercase">
                        <div v-if="loading" class="spinner-border text-white m-0" height="20px" width="20px" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>

                        <div v-if="!loading"><i class="bx bx-search"></i> Search</div>

                      </button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Offender's email address -->



    <!-- patient search results from MPI -->
    <div class="modal fade" id="searchResultList" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-capitalize" id="exampleModalLongTitle">Search results based on your search input</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="bg-warning border-2 bg-soft p-3 mb-4 d-flex align-items-center">
              <i class="mdi mdi-text-box-search-outline  font-28 mr-15px"></i>
              <p class="fw-semibold mb-0 pb-0 text-uppercase">Search results for : <span class="text-underline text-uppercase text-primary">{{keyword}}</span></p>
            </div>
            <table class="table table-striped table-s font-12 sources-table">
              <thead>
              <tr class="font-weight-bold table-dark">
                <th scope="col" colspan="8">
                  <i class="mdi mdi-account-group fs-5 text"> </i> Patient Search Results
                </th>
              </tr>
              <tr class="table-primary">
                <th>Select</th>
                <th>Patient ID</th>
                <th>Full Names</th>
                <th>ID No.</th>
                <th>Phone No.</th>
                <th>Physical Address</th>
                <th>Last Seen Date</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item) in patients" :key="item.id">
                <td>
                  <!-- Bind the radio input to the selectedPatient property -->
                  <input
                      type="radio"
                      name="patient-selection"
                      :value="item"
                      v-model="selectedPatient"
                  />
                </td>
                <td>{{ item.patientID }}</td>
                <td>{{ item.names }}</td>
                <td>{{ item.idNo }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>{{ item.physicalAddress }}</td>
                <td>{{ item.lastSeen }}</td>
              </tr>
              </tbody>
            </table>

          </div>
          <div class="modal-footer">
            <button data-bs-dismiss="modal"  @click="getPatientDetails(selectedPatient.patientID)" type="button" class="btn btn-primary w-100 text-uppercase">Select patient</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of search results -->



    <!-- creating a visit slip -->
    <div class="modal fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" id="generateVisit">
      <div class="modal-dialog modal-dialog-centered " role="document">
        <div class="modal-content">

          <div class="modal-body">
            <div class="row transfer-successful">
              <div class="text-center payment-active-panel d-flex flex-column justify-content-around align-items-center sent-success d-non payment-panel">


                <div class="flex-shrink-0 align-self-center  mb-4 pb-4 pt-4">
                  <h8 class="mb-3 fw-semibold display-6 mb-0">{{visitEntries.visitCode}}</h8>
                </div>


                <h4 class="text-black fw-bold text-uppercase">Outpatient Visit Request Confirmation</h4>
                <p class="text-muted mb-4">
                  The outpatient visit request for <strong class="fw-bold">{{visitEntries.names}}</strong> has been received and successfully created. The next step is for you to proceed with invoicing the patient.
                </p>
                <p v-if="billItem && billItem.length > 0" class="text-muted mb-4">Click below to print the Invoice</p>

                <div class="d-flex w-100 pb-4">
                  <!-- Conditionally render the button if billItem is not empty -->
                  <a
                      v-if="billItem && billItem.length > 0"
                      href="javascript: void(0);"
                      class="btn btn-primary btn-block me-3 flex-grow-1 text-uppercase view-inv-btn"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#invoice-modal"
                  >
                    <i class="bx bx-printer font-size-16 align-middle me-2"></i>
                    View Invoice
                  </a>

                  <a
                      @click="gotTo('queue-triage')"
                      v-if="!billItem || billItem.length === 0"
                      href="javascript: void(0);"
                      class="btn btn-primary btn-block me-3 flex-grow-1 text-uppercase view-inv-btn"
                      data-dismiss="modal"
                  >
                    <i class="bx bx-printer font-size-16 align-middle me-2"></i>
                    Close
                  </a>


                </div>


              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
    <!-- end of visit slip generation -->



    <!-- initial bill modal -->
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="invoice-modal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content w-100">
          <div class="modal-header">
            <h5 class="modal-title ml-3 me-3 text-uppercase px-4" id="myLargeModalLabel">Patients Invoice</h5>
            <span class="badge rounded-pill bg-success text-uppercase font-12px d-none">Critical Level: Expectant</span>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-6">
                <address class="px-4">
                  <strong class="text-capitalize">Patient Details:</strong><br>
                  {{patientDetails.patient.names}}, {{patientDetails.patient.dateOfBirth}} {{patientDetails.patient.gender}},<br>
                  {{patientDetails.patient.email}}, {{patientDetails.patient.phoneNumber}}<br>
                  Patient ID. {{patientDetails.patient.patientID}}<br/>
                  <br>

                </address>
              </div>
            </div>

            <div class="row">


              <!-- consaltation findings and feedback -->
              <div class="col-12">

                <div class="row bill-details d-flex justify-content-center align-items-center px-4 py-5">
                  <div class="col-md-12 pb-4">
                    <div class="table-responsive ">
                      <table class="table table-nowrap invoice-table">
                        <thead>
                        <tr>
                          <th style="width: 70px;">#</th>
                          <th>Item</th>
                          <th>Qty</th>
                          <th>Department</th>
                          <th class="text-end">Amount</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="(item,index) in billItem" :key="`item-${index}`">
                          <td>{{index+1}}</td>
                          <td>{{item.feeDescription}}</td>
                          <td class="fw-semibold text-black">{{item.quantity}}</td>
                          <td>{{item.accountDesc}}</td>
                          <td class="text-end">KES {{item.unitFeeAmount}}</td>

                        </tr>

                        <tr class="text-uppercase">
                          <td colspan="3" class="border-0 ">
                            <strong>Sub Total</strong>
                          </td>
                          <td class="border-0 text-end text-right" colspan="2">
                            <h5 class="m-0 text-uppercase fw-bold the-balance text-right">KES {{totalAmount}}</h5>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <!-- payment-modal -->
                    <button v-if="invoiceGenerated" @click="generateInvoice('payment')" type="button" data-toggle="modal" data-target="#payment-modal"  class="btn btn-success text-center text-uppercase receive-pay-btn">Receive Payment <i class="mdi mdi-arrow-right"></i></button>
                    <button @click="generateInvoice('print')" type="button" class="btn btn-primary text-center text-uppercase generate-bill mx-3"><i class="mdi mdi-printer"></i> Print Invoice</button>

                  </div>
                </div>
              </div>
              <!-- end of consaltation -->

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
    <!-- end of bill -->


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


              <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle pull-right close-modal" data-dismiss="modal" aria-label="Close">
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
                  <a @click="printBill()" target="_blank" data-dismiss="" type="button" class="btn btn-outline-secondary waves-effect dismin-modal">Print Bill</a>
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
                              A payment request of <strong class="text-black">KES {{billDetails.billBalance}}</strong> will be sent to the MPESA number you enter below.
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
                        {{billDetails.billNo}}
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="text-muted mt-2">
                        Bill For
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class=" text-right text-black">
                        {{billDetails.incomeTypeDescription}}
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
                        KES {{billDetails.billBalance}}
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
                        KES {{billDetails.billBalance}}
                      </div>
                    </div>
                  </div>

                  <div class="mpesa-confirmation ">
                    <div v-if="paymentData.paymentMode==='MPESA'">
                      <p class="text-muted mt-2">A payment request of <strong class="text-black">KES {{billDetails.billBalance}}</strong> will be sent to <strong class="text-black"> phone number ({{ phoneNumber }})</strong> soon after you click the <strong class="text-black text-capitalize">Send Request</strong> button bellow.
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


    <div class="content-minimize">

      <div class="page-content">

        <div class="container-fluid">

          <!-- start page title -->
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-18 text-uppercase">Outpatient Checkin</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Outpatient Checkin</li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->

          <div class="row">

            <div class="col-12">
              <div class="card">
                <div class="card-header bg-white border-bottom py-3">
                  <div class="btn-toolbar d-flex justify-content-between align-items-center w-100" role="toolbar">
                    <h4 class="card-title text-uppercase mb-0 ">
                      Registration Number: {{patientDetails.patient.patientID}}
                    </h4>
                    <div class="d-flex">
                      <button title="The form will be cleared for new patient registration and check-in." type="button" class="btn btn-success mx-3 text-uppercase waves-effect btn-label waves-light"><i class="mdi mdi-account-plus label-icon"></i> New Patient Registration</button>

                      <button data-toggle="modal" data-target="#subscribeModal" title="Search for another patient"  type="button" class="btn btn-primary text-uppercase waves-effect btn-label waves-light"><i class="mdi mdi-account-search-outline label-icon"></i> Patient Search</button>
                    </div>


                  </div>
                </div>

                <div class="card-body">
                  <div class="row mb-4">
                    <div class="col-12">
                      <div class="alert alert-primary alert-dismissible fade show " role="alert">
                        <i class="mdi mdi-bullseye-arrow me-2"></i>
                        <p>
                          Use the form below to check in the patient. You can update any relevant information before proceeding. <strong>Remember to scroll to the bottom of the page</strong> to initiate the outpatient visit. If you need to change the patient, use the toolbar at the top of this section to search or <strong>register a new patient</strong> before continuing.
                        </p>

                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                    </div>
                  </div>

                  <div v-if="message !==null" class="alert alert-danger" role="alert">
                    {{message}}
                  </div>

                  <!-- basic information about the patient -->
                  <div v-if="!patientRecord" class="row mb-5">
                    <div class="col-12 mb-2">
                      <div class="bg-warning border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                        <i class="bx bx-user  font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Basic Information</p>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-6">
                      <div class="mb-4">
                        <label for="basicpill-firstname-input">Title <strong class="text-danger">*</strong></label>
                        <select v-model="patientDetails.patient.title" class="form-control  bg-white select-revenue" title="Select Title" data-live-search="true">
                          <option value="" disabled>-- Select Title --</option>
                          <option value="mr">Mr.</option>
                          <option value="mrs">Mrs.</option>
                          <option value="miss">Miss</option>
                          <option value="ms">Ms.</option>
                          <option value="dr">Dr.</option>
                          <option value="prof">Prof.</option>
                          <option value="eng">Eng.</option>
                          <option value="hon">Hon.</option>
                          <option value="rev">Rev.</option>
                          <option value="sir">Sir</option>
                          <option value="lady">Lady</option>
                          <option value="capt">Capt.</option>
                          <option value="sgt">Sgt.</option>
                          <option value="col">Col.</option>
                          <option value="gen">Gen.</option>
                          <option value="arch">Arch.</option>
                          <option value="judge">Judge</option>
                          <option value="chief">Chief</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                      <div class="mb-4">
                        <label for="basicpill-firstname-input">Full names <strong class="text-danger">*</strong></label>
                        <input v-model="patientDetails.patient.names" type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter Full Names" spellcheck="false" data-ms-editor="true">
                      </div>
                    </div>


                    <div class="col-lg-2 col-md-6">
                      <div class="mb-4">
                        <label for="basicpill-firstname-input">Gender <strong class="text-danger">*</strong></label>
                        <select v-model="patientDetails.patient.gender" class="form-control  bg-white select-revenue" title="Select Title" data-live-search="true">
                          <option value="" disabled>-- Select Gender --</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>

                        </select>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                      <div class="mb-4">
                        <label for="">ID/PPT Number</label>
                        <input v-model="patientDetails.patient.idNo" type="text" title="Enter Number" class="form-control" id="" placeholder="Enter Number" spellcheck="false" data-ms-editor="true">
                      </div>
                    </div>


                    <div class="col-md-6 col-lg-3 col-sm-6">
                      <div class="mb-4">
                        <label for="" class="">Date of Birth<strong class="text-danger">*</strong></label>
                        <div class="input-group" id="datepicker1">
                          <input v-model="patientDetails.patient.dateOfBirth" type="date" class="form-control mouse-pointer" placeholder="Select Date"  data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" data-date-autoclose="true">

                          <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-lg-3 col-sm-6">
                      <div class="mb-4">
                        <label for="" class="">Marital Status<strong class="text-danger">*</strong></label>
                        <select v-model="patientDetails.patient.maritalStatus" class="form-control bg-white select-revenue" title="Select Marital Status" data-live-search="true">
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Widowed">Widowed</option>
                          <option value="Separated">Separated</option>
                          <option value="Divorced">Divorced</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label for="">Level of Education <strong class="text-danger">*</strong></label>
                        <select v-model="patientDetails.patient.levelOfEducation" class="form-control  bg-white select-revenue" title="Select Level of Education" data-live-search="true">
                          <option value="ece">Early Childhood Education (ECE)</option>
                          <option value="primary">Primary School (Standard 1-8)</option>
                          <option value="kcpe">Kenya Certificate of Primary Education (KCPE)</option>
                          <option value="lower_secondary">Lower Secondary (Grade 7-9)</option>
                          <option value="junior_secondary">Junior Secondary School (Grade 7-9)</option>
                          <option value="upper_secondary">Upper Secondary (Grade 10-12)</option>
                          <option value="kcse">Kenya Certificate of Secondary Education (KCSE)</option>
                          <option value="igcse">International General Certificate of Secondary Education (IGCSE)</option>
                          <option value="alevels">A-Levels</option>
                          <option value="ib">International Baccalaureate (IB)</option>
                          <option value="diploma">Diploma</option>
                          <option value="certificate">Certificate</option>
                          <option value="undergraduate">Undergraduate Degree</option>
                          <option value="bachelors">Bachelor’s Degree</option>
                          <option value="postgraduate_diploma">Postgraduate Diploma</option>
                          <option value="masters">Master’s Degree</option>
                          <option value="doctoral">Doctoral Degree (PhD)</option>
                          <option value="other_international">Other International Qualifications</option>
                          <option value="vocational_training">Vocational Training</option>
                          <option value="technical_institute">Technical Institute</option>
                          <option value="professional_qualification">Professional Qualification</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label for="">Occupation <strong class="text-danger">*</strong></label>
                        <input v-model="patientDetails.patient.occupation" type="text" title="Enter Occupation" class="form-control" id="" placeholder="eg Farmer" spellcheck="false" data-ms-editor="true">
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label for="">Religion <strong class="text-danger">*</strong></label>
                        <select v-model="patientDetails.patient.religion" class="form-control  bg-white select-revenue" title="Select Religion" data-live-search="true">
                          <option value="christianity">Christianity</option>
                          <option value="islam">Islam</option>
                          <option value="hinduism">Hinduism</option>
                          <option value="buddhism">Buddhism</option>
                          <option value="judaism">Judaism</option>
                          <option value="sikhism">Sikhism</option>
                          <option value="traditional_african_religions">Traditional African Religions</option>
                          <option value="bahai">Bahá'í</option>
                          <option value="jainism">Jainism</option>
                          <option value="zoroastrianism">Zoroastrianism</option>
                          <option value="taoism">Taoism</option>
                          <option value="shinto">Shinto</option>
                          <option value="confucianism">Confucianism</option>
                          <option value="spiritual_but_not_religious">Spiritual but not religious</option>
                          <option value="atheism">Atheism</option>
                          <option value="agnosticism">Agnosticism</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="">
                        <label for="digit1-input" class="">Language(s)</label>
                        <select v-model="patientDetails.patient.languages" class="form-control  bg-white select-revenue" title="Select Language(s)" data-live-search="true" multiple>
                          <!-- Kenyan Languages -->
                          <option value="English">English</option>
                          <option value="swahili">Swahili</option>
                          <option value="kikuyu">Kikuyu</option>
                          <option value="luo">Luo</option>
                          <option value="kalenjin">Kalenjin</option>
                          <option value="luhya">Luhya</option>
                          <option value="meru">Meru</option>
                          <option value="kisii">Kisii</option>
                          <option value="kamba">Kamba</option>
                          <option value="masai">Maasai</option>
                          <option value="taita">Taita</option>
                          <option value="embu">Embu</option>
                          <option value="tharaka">Tharaka</option>
                          <option value="mijikenda">Mijikenda</option>
                          <option value="samburu">Samburu</option>
                          <option value="rendille">Rendille</option>
                          <option value="turkana">Turkana</option>
                          <option value="gabra">Gabra</option>
                          <option value="borana">Borana</option>
                          <option value="arabs">Arabs</option>
                          <option value="swati">Swati</option>
                          <option value="elgeyo">Elgeyo</option>
                          <option value="bajuni">Bajuni</option>
                          <option value="konso">Konso</option>
                          <option value="burji">Burji</option>
                          <option value="kuyia">Kuyia</option>
                          <option value="daasanach">Daasanach</option>

                          <!-- Other African Languages -->
                          <option value="amharic">Amharic</option>
                          <option value="zulu">Zulu</option>
                          <option value="xhosa">Xhosa</option>
                          <option value="sesotho">Sesotho</option>
                          <option value="setswana">Setswana</option>
                          <option value="afrikaans">Afrikaans</option>
                          <option value="yoruba">Yoruba</option>
                          <option value="igbo">Igbo</option>
                          <option value="somali">Somali</option>
                          <option value="hausa">Hausa</option>
                          <option value="swati">Swati</option>

                          <!-- Global Languages -->
                          <option value="english">English</option>
                          <option value="french">French</option>
                          <option value="spanish">Spanish</option>
                          <option value="chinese">Chinese (Mandarin)</option>
                          <option value="arabic">Arabic</option>
                          <option value="german">German</option>
                          <option value="italian">Italian</option>
                          <option value="portuguese">Portuguese</option>
                          <option value="russian">Russian</option>
                          <option value="japanese">Japanese</option>
                          <option value="korean">Korean</option>
                          <option value="vietnamese">Vietnamese</option>
                          <option value="turkish">Turkish</option>
                          <option value="dutch">Dutch</option>
                          <option value="swedish">Swedish</option>
                          <option value="norwegian">Norwegian</option>
                          <option value="finnish">Finnish</option>
                          <option value="polish">Polish</option>
                        </select>
                      </div>



                    </div>


                    <div class="col-lg-3 col-md-6">
                      <div class="">
                        <label for="digit1-input " class="">Patient's Blood group</label>
                        <select v-model="patientDetails.patient.bloodGroup" class="form-control  bg-white select-revenue" title="Select Blood Group" data-live-search="true">
                          <option value="A+">A+</option><option value="A-">A-</option>
                          <option value="B+">B+</option><option value="B-">B-</option>
                          <option value="O+">O+</option><option value="O-">O-</option>
                          <option value="AB+">AB+</option><option value="AB-">AB-</option>
                        </select>
                      </div>
                    </div>

                  </div>
                  <!-- end of patients basic information -->


                  <!-- Location & Contact Information -->
                  <div v-if="!patientRecord" class="row mb-5">
                    <div class="col-12 mb-2">
                      <div class="bg-warning border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                        <i class="bx bx-map  font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Location & Contact Information</p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label for="">Phone NO.<strong class="text-danger">*</strong></label>
                        <input v-model="patientDetails.patient.phoneNumber" type="text" title="Enter Phone Number" class="form-control" id="" placeholder="ie 0712345678" spellcheck="false" data-ms-editor="true">
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label for="">Email Address<strong class="text-danger"></strong></label>
                        <input  v-model="patientDetails.patient.email"  type="text" title="enter the Patients email addres" class="form-control" id="" placeholder="eg email@email.com" spellcheck="false" data-ms-editor="true">
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-2">
                        <label for="digit1-input" class="">Sub County</label>
                        <select class="form-select" v-model="subCounty" @change="getWards(subCounty.subCountyID)">

                          <option  selected="" value="">All Sub Counties</option>
                          <option :key="index" :value="item" v-for="(item, index) in subCounties">
                            {{ item.subCountyName }}
                          </option>

                        </select>

                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-2">
                        <label for="digit1-input" class="">Ward</label>

                        <select class="form-select" v-model="ward">
                          <option  selected="" value="">All Wards</option>
                          <option :key="index" :value="item"
                                  v-for="(item, index) in wards">
                            {{ item.wardName }}
                          </option>

                        </select>

                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label for="">Physical Address<strong class="text-danger">*</strong></label>
                        <input v-model="patientDetails.patient.physicalAddress" type="text" title="Enter the physical address" class="form-control" id="" placeholder="Enter the address" spellcheck="false" data-ms-editor="true">
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label for="">Town/Village/Estate<strong class="text-danger">*</strong></label>
                        <input v-model="patientDetails.patient.town" type="text" title="Enter Occupation" class="form-control" id="" placeholder="eg Farmer" spellcheck="false" data-ms-editor="true">
                      </div>
                    </div>
                  </div>
                  <!-- end Location & Contact Information -->

                  <!-- next of kin and dependants -->
                  <div v-if="!patientRecord" class="row mb-5">
                    <div class="col-12 mb-2">
                      <div class="bg-warning border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                        <i class="mdi mdi-account-group  font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Next of Kin & Dependants</p>
                      </div>
                    </div>


                    <div class="col-12">
                      <div class="">
                        <table class="table table-editable-1 align-middle table-edits">
                          <thead class="table-light">
                          <tr class="text-uppercase table-dark">
                            <th>#</th>
                            <th class="">ID/PPT NO.</th>
                            <th>Full Names</th>
                            <th class="">Phone</th>
                            <th>Residential address</th>
                            <th>Relationship</th>
                            <th></th>
                          </tr>
                          </thead>
                          <tbody>

                          <tr v-for="(item,index) in patientDetails.kins" :key="index" >
                            <td style="width: 80px " class="categoryIndex ">{{index+1}}</td>

                            <td>
                              <input v-model="item.idNo" type="text " class="form-control" title="enter Number" placeholder="Enter ID NO." spellcheck="false" data-ms-editor="true">
                            </td>

                            <td>
                              <input v-model="item.names" type="text " class="form-control" title="Enter Full Names" placeholder="eg Wanjiku Ann" spellcheck="false" data-ms-editor="true">
                            </td>
                            <td class="">
                              <input v-model="item.phoneNumber" type="text " class="form-control " placeholder="eg 0704549859" title="Enter Phone Number" spellcheck="false" data-ms-editor="true">
                            </td>
                            <td class="">
                              <input v-model="item.address" type="text " class="form-control " title="Enter Home Address" placeholder="eg Along Mombasa road" spellcheck="false" data-ms-editor="true">
                            </td>
                            <td>
                              <select v-model="item.relationShip" class="form-control"  title="Select Relationship">
                                <option value="" disabled>-- Select Replacement --</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Sister">Sister</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Child">Child</option>
                                <option value="Grandchild">Grandchild</option>
                                <option value="Niece/Nephew">Niece/Nephew</option>
                                <option value="Cousin">Cousin</option>
                                <option value="Aunt/Uncle">Aunt/Uncle</option>
                                <option value="Parent-in-law">Parent-in-law</option>
                                <option value="Sibling-in-law">Sibling-in-law</option>
                                <option value="Friend">Friend</option>
                                <option value="Guardian">Guardian</option>
                              </select>
                            </td>

                            <td @click="removeKin(index)" class="text-right cell-change d-flex align-items-center justify-content-end">
                              <a class="btn btn-light btn-rounded waves-effect btn-circle btn-transparent cancel-new-category-2 " title="Cancel "><i class="bx bx-x "></i></a>
                            </td>

                          </tr>

                          </tbody>
                          <tfoot>
                          <tr>
                            <td colspan="7" class="bg-light add-field-1 cursor-pointer">
                              <span @click="addKin()" class="d-flex align-items-center text-uppercase"><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add Dependant/Kin</span></span>
                            </td>
                          </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                  </div>

                  <div v-if="patientRecord"  class="row">

                    <div class="col-12 mb-2">
                      <div class="bg-warning border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                        <i class="bx bx-user  font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">{{patientDetails.patient.names}}
                          <span class="text-underline text-uppercase text-primary">{{calculateAge(patientDetails.patient.dateOfBirth)}}</span>
                          </p>
                      </div>
                    </div>



                    <div class="col-12 mb-2">
                      <div class="bg-danger border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                        <i class="mdi mdi-calendar-check  font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Outpatient Checkin Details</p>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="truck-reg-cont p-4">
                        <div class="row">
                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label for="digit1-input" class="">Reason for Visit</label>
                              <select v-model="visitEntries.reasonForVisit" id="reason-for-visit" class="form-control  bg-white" title="Select reason" data-live-search="true">
                                <option value="">-- Select reason --</option>
                                <option value="consultation">Consultation</option>
                                <option value="emergency">Emergency</option>
                                <option value="laboratory tests">Laboratory Tests</option>
                                <option value="imaging services">Imaging Services (X-ray, MRI, CT scan, etc.)</option>
                                <option value="surgery">Surgery</option>
                                <option value="maternity services">Maternity Services</option>
                                <option value="vaccination">Vaccination</option>
                                <option value="physical therapy">Physical Therapy</option>
                                <option value="mental health services">Mental Health Services</option>
                                <option value="pharmacy visit">Pharmacy Visit</option>
                                <option value="health check-up">Health Check-Up</option>
                                <option value="blood donation">Blood Donation</option>
                                <option value="specialist referral">Specialist Referral</option>
                                <option value="follow-up visit">Follow-Up Visit</option>
                                <option value="inpatient care">Inpatient Care</option>
                                <option value="outpatient care">Outpatient Care</option>
                                <option value="family planning services">Family Planning Services</option>
                                <option value="dental services">Dental Services</option>
                                <option value="eye care">Eye Care</option>
                                <option value="blood pressure monitoring">Blood Pressure Monitoring</option>
                                <option value="diabetes management">Diabetes Management</option>
                                <option value="wound care">Wound Care</option>
                                <option value="cancer treatment">Cancer Treatment (e.g., chemotherapy)</option>
                                <option value="hiv-aids treatment">HIV/AIDS Treatment and Counseling</option>
                                <option value="substance abuse treatment">Substance Abuse Treatment</option>
                                <option value="genetic counseling">Genetic Counseling</option>
                                <option value="prenatal classes">Prenatal Classes</option>
                                <option value="childbirth classes">Childbirth Classes</option>
                                <option value="sti testing and treatment">STI Testing and Treatment</option>
                                <option value="speech therapy">Speech Therapy</option>
                                <option value="occupational therapy">Occupational Therapy</option>
                                <option value="cardiac care">Cardiac Care</option>
                                <option value="pulmonary rehabilitation">Pulmonary Rehabilitation</option>
                                <option value="sleep studies">Sleep Studies</option>
                                <option value="pain management">Pain Management</option>
                                <option value="dietary consultation">Dietary Consultation</option>
                                <option value="geriatric care">Geriatric Care</option>
                                <option value="palliative care">End-of-Life Care (Palliative)</option>
                                <option value="social services">Social Services</option>
                                <option value="telemedicine consultations">Telemedicine Consultations</option>
                                <option value="dermatology services">Dermatology Services</option>
                                <option value="ophthalmology">Ophthalmology (Eye Surgery)</option>
                                <option value="ent services">ENT (Ear, Nose, and Throat) Services</option>
                                <option value="fertility treatments">Fertility Treatments</option>
                                <option value="bariatric services">Bariatric Services (Weight Loss Surgery)</option>
                                <option value="infectious disease consultation">Infectious Disease Consultation</option>
                                <option value="travel vaccinations">Travel Vaccinations</option>
                                <option value="health screenings">Health Screenings (e.g., cancer screening, cholesterol checks)</option>
                                <option value="child development assessments">Child Development Assessments</option>
                                <option value="chronic pain clinic">Chronic Pain Clinic</option>
                                <option value="bone density testing">Bone Density Testing</option>
                                <option value="asthma treatment">Asthma Treatment</option>
                                <option value="mens health services">Men's Health Services</option>
                                <option value="womens health services">Women's Health Services</option>
                                <option value="adolescent health services">Adolescent Health Services</option>
                                <option value="audiology services">Audiology Services (Hearing Aid Fitting)</option>
                                <option value="orthopedic services">Orthopedic Services</option>
                                <option value="plastic and reconstructive surgery">Plastic and Reconstructive Surgery</option>
                                <option value="burn care">Burn Care</option>
                                <option value="home health services">Home Health Services Consultation</option>
                                <option value="neurology services">Neurology Services (e.g., for epilepsy or Parkinson's)</option>
                                <option value="cpr training">Cardiopulmonary Resuscitation (CPR) Training</option>
                                <option value="smoking cessation programs">Smoking Cessation Programs</option>
                                <option value="weight management programs">Weight Management Programs</option>
                                <option value="family therapy">Family Therapy</option>
                                <option value="cancer screening">Cancer Screening (e.g., mammogram, colonoscopy)</option>
                                <option value="health certificate issuance">Health Certificate Issuance (e.g., for employment or travel)</option>
                                <option value="insurance-related health examinations">Insurance-Related Health Examinations</option>
                              </select>

                            </div>
                          </div>

                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label for="">Description</label>
                              <input v-model="visitEntries.description" type="text" class="form-control" placeholder="Enter description" title="Enter the chief complaint of the Patient eg fever">
                            </div>
                          </div>

                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label for="digit1-input" class="">Department Visiting</label>
                              <select v-model="visitEntries.departmentVisiting" class="form-control  bg-white select-revenue" title="Select department" data-live-search="true">
                                <option value="" disabled>-- Select Department they are going to --</option>
                                <option value="general outpatient">General Outpatient</option>
                                <option value="emergency department">Emergency Department</option>
                                <option value="internal medicine">Internal Medicine</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="obstetrics and gynecology">Obstetrics and Gynecology</option>
                                <option value="surgery">Surgery</option>
                                <option value="orthopedics">Orthopedics</option>
                                <option value="maternity">Maternity</option>
                                <option value="laboratory services">Laboratory Services</option>
                                <option value="radiology">Radiology</option>
                                <option value="pharmacy">Pharmacy</option>
                                <option value="dental services">Dental Services</option>
                                <option value="mental health">Mental Health</option>
                                <option value="ophthalmology">Ophthalmology</option>
                                <option value="ent">ENT (Ear, Nose, and Throat)</option>
                                <option value="physiotherapy">Physiotherapy</option>
                                <option value="nutrition and dietetics">Nutrition and Dietetics</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="hiv care and treatment">HIV Care and Treatment</option>
                                <option value="family planning">Family Planning</option>
                                <option value="antenatal care">Antenatal Care</option>
                                <option value="immunization">Immunization</option>
                                <option value="renal unit">Renal Unit</option>
                                <option value="oncology">Oncology</option>
                                <option value="palliative care">Palliative Care</option>
                                <option value="public health">Public Health</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="endocrinology">Endocrinology</option>
                                <option value="gastroenterology">Gastroenterology</option>
                                <option value="urology">Urology</option>
                                <option value="infectious diseases">Infectious Diseases</option>
                              </select>


                            </div>
                          </div>

                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label for="digit1-input" class="">Doctor/Nurse</label>
                              <select v-model="visitEntries.doctorNurse" class="form-control  bg-white select-revenue" title="Select Doctor/Nurse" data-live-search="true">
                                <option value="">-- Select doctor --</option>
                                <option value="dr.jane doe">Dr. Jane Doe (General Physician)</option>
                                <option value="dr.john mwangi">Dr. John Mwangi (Pediatrician)</option>
                                <option value="dr.susan ndung'u">Dr. Susan Ndung'u (Obstetrician/Gynecologist)</option>
                                <option value="dr.david otieno">Dr. David Otieno (Surgeon)</option>
                                <option value="dr.mary wanjiru">Dr. Mary Wanjiru (Orthopedic Surgeon)</option>
                                <option value="dr.james omondi">Dr. James Omondi (Radiologist)</option>
                                <option value="dr.lucy kiplagat">Dr. Lucy Kiplagat (Dentist)</option>
                                <option value="dr.peter mbugua">Dr. Peter Mbugua (Psychiatrist)</option>
                                <option value="dr.agnes oloo">Dr. Agnes Oloo (Ophthalmologist)</option>
                                <option value="dr.francis mutua">Dr. Francis Mutua (ENT Specialist)</option>
                                <option value="dr.nancy kamau">Dr. Nancy Kamau (Physiotherapist)</option>
                                <option value="dr.george kimani">Dr. George Kimani (Dermatologist)</option>
                                <option value="dr.joyce abongo">Dr. Joyce Abongo (HIV Specialist)</option>
                                <option value="dr.silas cheruiyot">Dr. Silas Cheruiyot (Cardiologist)</option>
                                <option value="dr.rebecca mwiti">Dr. Rebecca Mwiti (Oncologist)</option>
                                <option value="dr.philip okoth">Dr. Philip Okoth (Endocrinologist)</option>
                                <option value="dr.eunice mwenda">Dr. Eunice Mwenda (Gastroenterologist)</option>
                                <option value="dr.samuel ndiritu">Dr. Samuel Ndiritu (Urologist)</option>
                                <option value="dr.wycliffe orwa">Dr. Wycliffe Orwa (Neurologist)</option>
                                <option value="dr.charles ngugi">Dr. Charles Ngugi (Infectious Disease Specialist)</option>
                              </select>

                            </div>
                          </div>

                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label for="">Schedule Patient for Triage</label>
                              <select v-model="visitEntries.triage" name="" id=""  class="form-select text-uppercase" title="Should the patient be scheduled for triage?">
                                <option value="" disabled>Select Option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label for="formrow-firstname-input" class="form-label">Means Of Arrival</label>
                              <select v-model="visitEntries.meansOfArrival" class="form-control  bg-white arrival-means" title="Select Arrival means">
                                <option value="walk In">Walk In</option>
                                <option value="Ambulance">Ambulance</option>
                                <option value="Privae Vehicle">Privae Vehicle</option>
                                <option value="Other">Other ...</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-3 col-md-6">
                            <div class="mb-3">
                              <label for="payment-responsibility">Payment Responsibility</label>
                              <select v-model="visitEntries.payment" id="payment-responsibility" name="payment_responsibility" class="form-select text-uppercase" title="Select who is responsible for payment">
                                <option value="" disabled>Select Option</option>
                                <option value="self">The Patient</option>
                                <option value="NHIF">NHIF</option>
                                <option value="guarantor">Guarantor</option>
                                <option value="insurance">Insurance</option>
                                <option value="employer">Employer</option>
                              </select>
                            </div>
                          </div>




                          <div class="col-12 mt-3 text-primary mb-0">
                            <div class="d-flex justify-content-between align-items-end">
                              <h4 class="card-title text-uppercase text-primary mb-2"><small>Payment Options</small></h4>
                              <button class="btn btn-primary text-uppercase btn-sm kin-modal-btn d-none mb-2 " data-toggle="modal" data-target="#kinsList" type="button" >
                                Select from Kins
                              </button>
                            </div>
                          </div>
                          <div class="col-12">
                            <hr class="mt-0 pt-1 text-primary">
                          </div>

                          <!-- gurantor option for payment -->
                          <div class="col-12 self-pay pay-opt" >
                            <div class="row">
                              <i><p>This means that the patient will be responsible for any charges incurred during their visit. Payments should be processed cashlessly</p></i>

                            </div>
                          </div>

                          <div v-if="visitEntries.payment ==='guarantor'" class="col-12 gurantor-pay pay-opt" >
                            <div class="row">

                              <div class="col-lg-2 col-md-6">
                                <div class="mb-3">
                                  <label for="">ID Number</label>
                                  <input v-model="patientDetails.guarantor.idNo" type="text" class="form-control" placeholder="Enter ID No" title="Enter the name to the gurantor in full">
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="">Gurantor's Full Names</label>
                                  <input v-model="patientDetails.guarantor.names" type="text" class="form-control" placeholder="Enter Full Names" title="Enter the name to the gurantor in full">
                                </div>
                              </div>

                              <div class="col-lg-2 col-md-6">
                                <div class="mb-3">
                                  <label for="">Phone Number</label>
                                  <input v-model="patientDetails.guarantor.phoneNumber" type="text" class="form-control" placeholder="Enter Phone No." title="Enter the name to the gurantor in full">
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="" class="text-capitalize">Residential address</label>
                                  <input v-model="patientDetails.guarantor.physicalAddress" type="text" class="form-control" placeholder="Enter Address" title="Enter the name to the gurantor in full">
                                </div>
                              </div>

                              <div class="col-lg-2 col-md-6">
                                <div class="mb-3">
                                  <label for="">Relationship with Patient</label>
                                  <select v-model="patientDetails.guarantor.relationship" class="form-control"  title="Select Relationship">
                                    <option value="" disabled>-- Select Relationship --</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Spouse">Spouse</option>
                                    <option value="Child">Child</option>
                                    <option value="Grandchild">Grandchild</option>
                                    <option value="Niece/Nephew">Niece/Nephew</option>
                                    <option value="Cousin">Cousin</option>
                                    <option value="Aunt/Uncle">Aunt/Uncle</option>
                                    <option value="Parent-in-law">Parent-in-law</option>
                                    <option value="Sibling-in-law">Sibling-in-law</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Guardian">Guardian</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- payment by insurance -->
                          <div v-if="visitEntries.payment ==='insurance'" class="col-12 insurance-pay pay-opt">
                            <div class="row">
                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="">Insurance Provider</label>
                                  <select v-model="patientDetails.insurance.provider" class="form-control  bg-white" id="insurance-provider" title="Select Insurance Provider">
                                    <option value="" disabled>-- Select Insurance Provider --</option>
                                    <option value="NHIF">NHIF</option>
                                    <option value="Sanlam">Sanlam</option>
                                    <option value="Britam">Britam</option>
                                    <option value="AAR">AAR</option>
                                    <option value="Jubilee">Jubilee</option><option value="Other">Other ...</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="">Policy Number</label>
                                  <input  v-model="patientDetails.insurance.policyNumber"  type="text" class="form-control" placeholder="Enter Policy No." title="Enter the policy number">
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="">Authorization Code (if applicable)</label>
                                  <input  v-model="patientDetails.insurance.authorizationCode"  type="text" class="form-control" placeholder="Enter Authorization Code" title="Enter the authorization code provided by the insurance provider">
                                </div>
                              </div>

                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="">Relationship with Policyholder</label>
                                  <select v-model="patientDetails.insurance.policyholder" class="form-control" title="Select Relationship">
                                    <option value="" disabled>-- Select Relationship --</option>
                                    <option value="Self">Self</option>
                                    <option value="Spouse">Spouse</option>
                                    <option value="Child">Child</option>
                                    <option value="Parent">Parent</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- payment company -->
                          <div v-if="visitEntries.payment ==='employer'" class="col-12 employer-pay pay-opt">
                            <div class="row">
                              <!-- Company Name -->
                              <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                  <label for="company-name" class="form-label">Company Name</label>
                                  <input v-model="patientDetails.employer.companyName" type="text" class="form-control" id="company-id" placeholder="Enter Company Name" title="Enter the company's ID number">
                                </div>
                              </div>

                              <!-- Company ID Number -->
                              <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                  <label for="company-id" class="form-label">Company ID Number</label>
                                  <input v-model="patientDetails.employer.companyID" type="text" class="form-control" id="company-id" placeholder="Enter Company ID No." title="Enter the company's ID number">
                                </div>
                              </div>

                              <!-- Authorization Code (if applicable) -->
                              <div class="col-lg-4 col-md-6">
                                <div class="mb-3">
                                  <label for="authorization-code" class="form-label">Authorization Code (if applicable)</label>
                                  <input v-model="patientDetails.employer.authorizationCode" type="text" class="form-control" id="authorization-code" placeholder="Enter Authorization Code" title="Enter the authorization code provided by the company">
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- payment by NHIF -->
                          <div v-if="visitEntries.payment === 'NHIF' " class="col-12 nhif-pay pay-opt">
                            <div class="row">


                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="">Policy/NHIF Number</label>
                                  <input v-model="patientDetails.nhif.number"  type="text" class="form-control" placeholder="Enter Policy No." title="Enter the policy number">
                                </div>
                              </div>


                              <div class="col-lg-3 col-md-6">
                                <div class="mb-3">
                                  <label for="">Relationship with Policyholder</label>
                                  <select v-model="patientDetails.nhif.policyholder" class="form-control" title="Select Relationship">
                                    <option value="" disabled>-- Select Relationship --</option>
                                    <option value="Self">Self</option>
                                    <option value="Spouse">Spouse</option>
                                    <option value="Child">Child</option>
                                    <option value="Parent">Parent</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>


                      </div>
                    </div>
                  </div>


                  <!-- Initial Invoicing  -->
                  <div v-if="patientRecord" class="row">
                    <div class="col-12 mb-2">
                      <div class="bg-info border-2 bg-soft p-3 mb-4 d-flex align-items-center">
                        <i class="bx bx-receipt font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0 text-uppercase">Initial Invoicing</p>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="truck-reg-cont p-4">
                        <div class="row">
                          <div class="col-12">
                            <table class="table table-editable-1 align-middle table-edits">
                              <thead class="table-light">
                              <tr class="text-uppercase table-dark">
                                <th>#</th>
                                <th class="">Medical Charges Groupings</th>
                                <th>Sub Medical Charges</th>
                                <th class="">Unit Charges</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                              </tr>
                              </thead>
                              <tbody>

                              <tr v-for="(item, index) in invoiceItem" :key="index">

                                <td style="width: 80px" class="categoryIndex">{{ index + 1 }}</td>

                                <td>
                                  <select @change="selectedIncomeType($event, index)" class="form-control" title="Select Charge Category">
                                    <option value="" disabled>-- Select Charge Category --</option>
                                    <option v-for="(income, idx) in incomeTypes" :value="income.incomeTypeId" :key="idx">
                                      {{ income.incomeTypeDescription }}
                                    </option>
                                  </select>
                                </td>

                                <td>
                                  <select @change="selectedFeeAndCharge($event, index)" class="form-control" title="Select Outpatient Charge">
                                    <option value="" disabled> -- Select Outpatient Charge -- </option>
                                    <option v-for="(fee, idx) in item.feesAndCharges" :value="fee.feeId" :key="idx">
                                      {{ fee.feeDescription }} KES {{ fee.unitFeeAmount }}
                                    </option>
                                  </select>
                                </td>

                                <td>
                                  <input type="text" class="form-control" :value="item.feeAmount || ''" placeholder="Amount" disabled>
                                </td>

                                <td>
                                  <!-- Use v-model for two-way binding on quantity -->
                                  <input type="number" class="form-control" v-model="item.quantity" @input="updateTotalAmount(index)" title="QTY">
                                </td>

                                <td>
                                  <!-- Total amount is dynamically calculated -->
                                  <input type="text" class="form-control" :value="item.totalAmount || ''" placeholder="Total Amount" disabled>
                                </td>

                                <td class="text-right cell-change d-flex align-items-center justify-content-end">
                                  <a @click="removeInvoiceItem(index)" class="btn btn-light btn-rounded btn-circle btn-transparent" title="Cancel">
                                    <i class="bx bx-x"></i>
                                  </a>
                                </td>
                              </tr>


                              </tbody>
                              <tfoot>
                              <tr>
                                <td colspan="7" class="bg-light add-field-1 cursor-pointer">
                                  <span @click="addInvoiceItem" class="d-flex align-items-center text-uppercase"><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add INVOICE item</span></span>
                                </td>
                              </tr>
                              </tfoot>
                            </table>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>


                </div>

                <div class="card-footer bg-white border-top py-4 ">
                  <div class="d-flex justify-content-end">

                    <button v-if="invoiceGenerated" @click="clearForm()" class="btn btn-success text-uppercase" title="Submit form to create an Outpatient visit slip">Complete</button>
                    <button v-if="patientRecord && !invoiceGenerated" @click="generateVisitEntries()" data-toggle="modal" data-target="#generateVisit" class="btn btn-primary text-uppercase  generate-visit-slip" title="Submit form to create an Outpatient visit slip">Generate Visit Slip</button>
                    <button v-if="!patientRecord" @click="addPatient()" type="button" class="btn btn-primary  generate-visit-btn text-uppercase d-flex align-items-center ">
                      <div v-if="loading" class="spinner-border  text-white m-0 me-3" height="10px" width="10px" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>

                      <div class=""><i class="bx bx-search"></i>Register Patient</div>

                    </button>

                  </div>
                </div>


              </div>

            </div>

          </div>


        </div>

      </div>

    </div>

  </div>

  <div class="rightbar-overlay "></div>

  </body>



</template>



<script>
/* eslint-disable */

import {authUrl, biller, execute, getRight, parking, patient, rent, trade} from "@/api";
import NavigationBar from "@/components/Navigation.vue";
import router from "@/router";
export default {
  name: 'OutPatientCheckin',
  components: {
    NavigationBar

  },

  data() {
    return {
      invoiceGenerated: false,
      patientRecord: false,
      message:null,
      keyword:'',
      loading: false,
      selectedPatient: null, // To store the selected patient
      patientDetails:{
        patient:{
          patientID:null,
          title: null,
          names: null,
          gender: null,
          idNo: null,
          phoneNumber:null,
          email:null,
          physicalAddress:null,
          dateOfBirth: null,
          maritalStatus: null,
          levelOfEducation: null,
          occupation: null,
          religion: null,
          languages	: null,
          countyID: null,
          countyName: null,
          bloodGroup: null,
          subCountyID: null,
          subCountyName: null,
          wardID:null,
          wardName: null,
          town: null
        },
        guarantor:{
          patientIDNo: null,
          idNo:null,
          names:null,
          phoneNumber: null,
          email	: null,
          physicalAddress: null,
          town: null,
          relationship: null
        },
        kins:[{
          patientIDNo: null,
          idNo: null,
          names: null,
          phoneNumber: null,
          address:null,
          relationShip: null
        }],
        nhif:{
          visitCode: null,
          number:null,
          policyholder:null
        },
        insurance:{
          visitCode:null,
          provider: null,
          policyNumber:null,
          authorizationCode:null,
          policyholder:null
        },
        employer:{
          visitCode:null,
          companyName: null,
          companyID:null,
          authorizationCode:null
        }

      },
      visitEntries:{
        visitCode:null,
        idNo:null,
        names:null,
        phoneNumber:null,
        email: null,
        reasonForVisit:null,
        description:null,
        departmentVisiting:null,
        doctorNurse:null,
        triage:null,
        meansOfArrival:null,
        payment:null,

      },
      patients: [{
        id: null,
        patientID: null,
        title: null,
        names:  null,
        phoneNumber: null,
        physicalAddress:null,
        gender: null,
        idNo:  null,
        dateOfBirth:  null,
        maritalStatus:  null,
        levelOfEducation:  null,
        occupation:  null,
        religion: null,
        languages: null,
        countyID: null,
        countyName:  null,
        bloodGroup:  null,
    }],
      subCounties:[{
        subCountyID: "",
        subCountyName: ""
      }],
      wards:[{
        wardID: "",
        wardName: ""
      }],
      subCounty:{
        subCountyID: "",
        subCountyName: ""
      },
      ward:{
        wardID: "",
        wardName: ""
      },
      invoiceItem:[{
        quantity: 1,
        incomeType:null,
        feesAndCharge:{
          feeId: null,
          feeDescription: null,
          unitOfMeasure: null,
          unitFeeAmount: null,
          accountNo: null,
          incomeTypeId: null,
          feeType: null,
          accountDesc:null ,
          costCenterNo:null,
          zone: null,
          typeDescription: null
        },
        feesAndCharges:[{
          feeId: null,
          feeDescription: null,
          unitOfMeasure: null,
          unitFeeAmount: null,
          accountNo: null,
          incomeTypeId: null,
          feeType: null,
          accountDesc:null ,
          costCenterNo:null,
          zone: null,
          typeDescription: null
        }]
      }],
      incomeTypes:[{
        incomeTypeId: null,
        incomeTypeDescription:null,
        incomeTypePrefix: null,
        fundDescription: null,
        status: null}],
      billItem:[],
      feesAndChargeItems:[{
        feeId: null,
        feeDescription: null,
        unitOfMeasure: null,
        unitFeeAmount: null,
        accountNo: null,
        incomeTypeId: null,
        feeType: null,
        accountDesc:null ,
        costCenterNo:null,
        zone: null,
        typeDescription: null,
        customer: null,
        quantity: 1
      }],
      feesAndCharges:[{
        feeId: null,
        feeDescription: null,
        unitOfMeasure: null,
        unitFeeAmount: null,
        accountNo: null,
        incomeTypeId: null,
        feeType: null,
        accountDesc:null ,
        costCenterNo:null,
        zone: null,
        typeDescription: null
      }],
      amount:0,
      feeID:null,
      unitFeeAmount:0,
      totalAmount:0,
      transactionCompleted: false,
      transactionSummary: false,
      paymentPanel: true,
      paymentMethod: false,
      billDetails:{
        id:'',
        billNo:'',
        incomeTypeID:'',
        incomeTypeDescription:'',
        costCenterNo:'',
        accountNo:'',
        feeID:'',
        detailAmount:'',
        receiptAmount:'',
        billBalance:'',
        wardID:'',
        subCountyID:'',
        status:'',
        dateCreated:''
      },
      billInfo:[],
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
      timer: null,
      randomNumber: null,
      receiptDetails: {
        id: '',
        receiptNo: null,
        billNo: '',
        detailAmount: '',
        receiptAmount: '',
        billBalance: '',
        costCenterNo: '',
        accountNo: '',
        incomeTypeDescription: '',
        feeID: '',
        wardID: '',
        subCountyID:'',
        currency: '',
        source: '',
        transactionCode: '',
        paidBy: '',
        dateCreated: '',
        dateModified: '',
        createdBy: '',
        modifiedBy: '',
        isActive: '',
        status: ''
      },
      receiptInfos: [
        {
          id: '',
          receiptNo: '',
          billNo: '',
          billTotal: '',
          receiptAmount: '',
          billBalance: '',
          customer: '',
          clientPhoneNo: '',
          description: '',
          receiptDate: '',
          printCount: '',
          wardID: '',
          subCountyID: '',
          dateCreated: '',
          dateModified: '',
          createdBy: '',
          modifiedBy: '',
          printedBy: '',
          updated: '',
          isActive: '',
          status: ''
        }],
      //Billing Module

    }
  },

  methods:{

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

    getRight(type){
      return getRight(type)
    },

    gotTo(route){
      sessionStorage.setItem("selectedSub",route)
      sessionStorage.setItem("currentPage",route)
      this.$router.push(route);

    },

    addKin(){
      this.patientDetails.kins.push({})
    },
    removeKin(position){
      this.patientDetails.kins.splice(position,1)
    },


    addPatient(){
      this.message = null

      this.patientDetails.patient.subCountyID = this.subCounty.subCountyID
      this.patientDetails.patient.subCountyName = this.subCounty.subCountyName

      this.patientDetails.patient.wardName = this.ward.wardName
      this.patientDetails.patient.wardID = this.ward.wardID

      this.loading = true
      const data = new FormData();
      data.append("function", "addPatient");
      data.append("patientDetails", JSON.stringify(this.patientDetails));
      execute(data,patient)
          .then((res) =>{
            this.loading = false
            if (res.data.success) {
              this.visitEntries.idNo = this.patientDetails.patient.idNo
              this.visitEntries.names = this.patientDetails.patient.firstName +'' +  this.patientDetails.patient.lastName
              this.visitEntries.phoneNumber = this.patientDetails.patient.phoneNumber
              this.visitEntries.idNo = this.patientDetails.patient.idNo

              this.getPatientDetails(this.patientDetails.patient.idNo)


            }else{

            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message =e.message
          });
    },
    generateVisitEntries(){
      this.message = null
      this.loading = true
      this.visitEntries.idNo = this.patientDetails.patient.idNo
      this.visitEntries.names = this.patientDetails.patient.names
      this.visitEntries.phoneNumber = this.patientDetails.patient.phoneNumber
      const data = new FormData();
      data.append("function", "generateVisitEntries");
      data.append("visitEntries", JSON.stringify(this.visitEntries));
      data.append("guarantor", JSON.stringify(this.patientDetails.guarantor));
      data.append("nhif", JSON.stringify(this.patientDetails.nhif));
      data.append("insurance", JSON.stringify(this.patientDetails.insurance));
      data.append("employer", JSON.stringify(this.patientDetails.employer));
      execute(data,patient)
          .then((res) =>{
            this.loading = false
            if (res.data.success) {

              this.visitEntries = res.data.data.visitEntries;

              this.addToBill()

            }else{

            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message =e.message
          });
    },
    getPatient(){
      this.message = null
      this.loading = true
      this.patients.splice(0)
      const data = new FormData();
      data.append("function", "getPatient");
      data.append("keyword", this.keyword);
      execute(data,patient)
          .then((res) =>{

            $('#subscribeModal').modal('hide');

            this.loading = false
            if (res.data.success) {
              this.patients = res.data.data.patients


              $('#searchResultList').modal('show');


            }else{
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message =e.message
          });
    },
    getSubCounties(){
      const data = new FormData();
      data.append("function", "getSubCounty");
      execute(data,biller)
          .then((res) =>{
            if (res.data.success) {
              this.subCounties =res.data.data.subCounties
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getWards(){
      this.wards.splice(0)
      const data = new FormData();
      data.append("function", "getWards");
      data.append("subCountyID", this.subCounty.subCountyID);
      execute(data,biller)
          .then((res) =>{
            if (res.data.success) {
              this.wards =res.data.data.wards

              this.ward.wardName = this.patientDetails.patient.wardName
              this.ward.wardID = this.patientDetails.patient.wardID

            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getPatientDetails(keyword){
      this.patientRecord = false
      const data = new FormData();
      data.append("function", "getPatientDetails");
      data.append("keyword", keyword);
      execute(data,patient)
          .then((res) =>{
            sessionStorage.setItem("patientIDNo","")

            if (res.data.success) {
              this.patientRecord = true
              this.patientDetails.patient = res.data.data.patient
              this.patientDetails.patient.languages = JSON.parse(this.patientDetails.patient.languages)
              this.subCounty.subCountyID = this.patientDetails.patient.subCountyID
              this.subCounty.subCountyName = this.patientDetails.patient.subCountyName

              if (res.data.data.kins !== null) {
                this.patientDetails.kins = res.data.data.kins
              }
              if (res.data.data.visitEntries !== null) {
                this.visitEntries.reasonForVisit = null
                this.visitEntries.description = null
                this.visitEntries.departmentVisiting = null
                this.visitEntries.doctorNurse = null
                this.visitEntries.triage = null
                this.visitEntries.meansOfArrival = null
                this.visitEntries.payment = null
              }
              if (res.data.data.guarantor !== null) {
                this.patientDetails.guarantor = res.data.data.guarantor;
              }
              if (res.data.data.nhif !== null) {
                this.patientDetails.nhif = res.data.data.nhif;
              }

              if (res.data.data.insurance !== null) {
                this.patientDetails.insurance = res.data.data.insurance;
              }

              if (res.data.data.employer !== null) {
                this.patientDetails.employer = res.data.data.employer;
              }

              this.getWards()

            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },

    addInvoiceItem() {
      // Add a new invoice item with its own feesAndCharges
      this.invoiceItem.push({
        incomeType: null,
        feesAndCharge: null,
        feeAmount: 0,
        quantity: 1,
        totalAmount: 0,
        feesAndCharges: [] // Initialize an empty array for feesAndCharges specific to this row
      });
    },
    removeInvoiceItem(position){
      this.invoiceItem.splice(position,1)
    },
    selectedIncomeType(event, index) {
      const selectedIncomeTypeId = event.target.value;
      const selectedIncomeType = this.incomeTypes.find(income => income.incomeTypeId === selectedIncomeTypeId);

      // Set the incomeType for the current invoiceItem
      this.invoiceItem[index].incomeType = selectedIncomeType;

      // Fetch and set feesAndCharges specific to this incomeType for this row
      this.getFeesAndCharges(selectedIncomeType.incomeTypeId, index);
    },
    selectedFeeAndCharge(event, index) {
      const selectedFeeId = event.target.value;
      const selectedFee = this.invoiceItem[index].feesAndCharges.find(fee => fee.feeId === selectedFeeId);

      // Set the feesAndCharge for the current invoiceItem
      this.invoiceItem[index].feesAndCharge = selectedFee;

      // Set the fee amount and calculate the total
      this.invoiceItem[index].feeAmount = selectedFee.unitFeeAmount;
      this.invoiceItem[index].totalAmount = selectedFee.unitFeeAmount * this.invoiceItem[index].quantity;
    },
    getIncomeTypes(){
      this.feesAndCharges.splice(0)
      const data = new FormData();
      data.append("function", "getIncomeTypes");
      execute(data,biller)
          .then((res) =>{
            if (res.data.success) {
              this.incomeTypes =res.data.data.incomeTypes
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getFeesAndCharges(incomeTypeId, index) {
      // Fetch fees and charges based on the selected incomeTypeId
      const data = new FormData();
      data.append("function", "getFeesAndCharges");
      data.append("incomeTypeId", incomeTypeId);

      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              // Assign the fetched feesAndCharges to the specific invoice item
              this.invoiceItem[index].feesAndCharges = res.data.data.feesAndCharges;
            } else {
              this.message = res.data.message;
            }
          })
          .catch((e) => {
            this.message = e.message;
          });
    },
    updateTotalAmount(index) {
      const item = this.invoiceItem[index];
      // Recalculate totalAmount based on the feeAmount and quantity
      item.totalAmount = item.feeAmount * item.quantity;
    },
    addToBill(revenueStreamItem) {

      this.billItem.splice(0)

      for (const item of this.invoiceItem) {
        const { feesAndCharge, quantity, customer, incomeTypeId } = item;

        this.billItem.push({
          fiscalYear: this.fiscalYear,
          typeDescription: feesAndCharge.typeDescription,
          feeDescription: feesAndCharge.feeDescription,
          accountDesc: feesAndCharge.accountDesc,
          quantity: quantity,
          unitFeeAmount: feesAndCharge.unitFeeAmount,
          accountNo: feesAndCharge.accountNo,
          costCenterNo: feesAndCharge.costCenterNo,
          incomeTypeId: incomeTypeId,
          revenueStreamItem: revenueStreamItem,
          feeId: feesAndCharge.feeId,
          amount: feesAndCharge.unitFeeAmount * quantity,
          customer: this.visitEntries.visitCode,
          subCountyID: this.subCounty.subCountyID,
          subCountyName: this.subCounty.subCountyName,
          wardID: this.ward.wardID,
          wardName: this.ward.wardName,
          idNo: sessionStorage.getItem("sessionIdNo"),
          phoneNumber: sessionStorage.getItem("sessionPhoneNumber"),
          names: sessionStorage.getItem("sessionNames"),
          zone: sessionStorage.getItem("zone"),
          customerPhoneNumber: this.phoneNumber,
          description: this.patientDetails.patient.names,
          patientID: this.patientDetails.patient.idNo,
        });
      }

      this.totalAmount = this.billItem.reduce((total, item) => total + (Number(item.unitFeeAmount) * Number(item.quantity)), 0);
    },
    generateInvoice(action){

      if(action === "print"){
        if(!this.invoiceGenerated){
          this.generateBill(action)
        }else {
          this.printBill()
        }
      }

    },
    generateBill(action){

      this.invoiceGenerated = false
      this.paymentMethod = false;
      this.paymentPanel = true;
      this.transactionSummary = false ;
      this.transactionCompleted = false
      this.message ="Generating Bill...please wait... "
      const data = new FormData();
      data.append("function", "generateBill3");
      data.append("billItem", JSON.stringify(this.billItem));
      execute(data,biller)
          .then((res) =>{
            this.message =res.data.message
            if (res.data.success) {

              this.invoiceGenerated = true
              this.billDetails = res.data.data.bill.billDetails
              this.billInfo = res.data.data.bill.billInfo
              this.paymentData.amount = res.data.data.bill.billDetails.billBalance
              this.paymentData.accNo = res.data.data.bill.billDetails.billNo
              this.paymentData.payBillNo = res.data.data.billGenerated.payBillNo
              this.paymentData.sessionPhoneNumber = sessionStorage.getItem("sessionPhoneNumber")
              this.paymentData.sessionNames = sessionStorage.getItem("sessionNames")
              this.paymentData.sessionIdNo = sessionStorage.getItem("sessionIdNo")

              if(action === "print"){
                this.printBill()
              }



            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
           // this.message = e.message
          });
    },

    printBill() {
      localStorage['params'] = JSON.stringify({
        billNo: this.billDetails.billNo
      })
      const routeData = this.$router.resolve({name: 'bill'});
      window.open(routeData.href, '_blank');
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
    clearForm(){
      this.invoiceGenerated = false;
      this.patientRecord = false;
      this.invoiceItem.splice(0);
      this.patientDetails = {
        patient: {
          patientID: null,
          title: null,
          names: null,
          gender: null,
          idNo: null,
          phoneNumber: null,
          email: null,
          physicalAddress: null,
          dateOfBirth: null,
          maritalStatus: null,
          levelOfEducation: null,
          occupation: null,
          religion: null,
          languages: null,
          countyID: null,
          countyName: null,
          bloodGroup: null,
          subCountyID: null,
          subCountyName: null,
          wardID: null,
          wardName: null,
          town: null
        },
        guarantor: {
          patientIDNo: null,
          idNo: null,
          names: null,
          phoneNumber: null,
          email: null,
          physicalAddress: null,
          town: null,
          relationship: null
        },
        kins: [{
          patientIDNo: null,
          idNo: null,
          names: null,
          phoneNumber: null,
          address: null,
          relationShip: null
        }],
        nhif: {
          visitCode: null,
          number: null,
          policyholder: null
        },
        insurance: {
          visitCode: null,
          provider: null,
          policyNumber: null,
          authorizationCode: null,
          policyholder: null
        },
        employer: {
          visitCode: null,
          companyName: null,
          companyID: null,
          authorizationCode: null
        }
      };
      this.visitEntries = {
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
        payment: null
      };
      this.message = null
    }
  },
  mounted() {
    this.getSubCounties();
    this.getIncomeTypes();

    const idNo = sessionStorage.getItem("patientIDNo");
    if (idNo) {
      this.getPatientDetails(idNo);
    }
    this.invoiceItem.splice(0)
  }

};

</script>

<style scoped>

</style>