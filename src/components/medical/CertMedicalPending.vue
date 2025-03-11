<template>


  <head>

    <meta charset="utf-8"/>
    <title>Desk Birdy | Business Permits</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Rental management system by Nouveta LTD" name="description"/>
    <meta content="Kelvin Njuguna" name="author"/>
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">
    <!-- droping file -->
    <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css"/>

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
          type="text/css"/>

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css"/>
    <!-- Bootstrap select styling -->
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css"/>
    <!-- App Css-->

    <!-- owl.carousel css -->
    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.carousel.min.css">

    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.theme.default.min.css">

    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css"/>
    <!-- custom Css-->
    <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css"/>

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
                <h4 class="mb-sm-0 font-size-18">Unpaid Medical Invoices</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item"><a href="#">Certificates & Licenses</a></li>
                    <li class="breadcrumb-item"><a href="cert-biz-stats.html">Business Permits</a></li>
                    <li class="breadcrumb-item active">Pending Validation</li>
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
            <div class="col-12">
              <div class="card">
                <div
                    class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                  <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center"
                       role="toolbar">
                    <h4 class="card-title mb-0 text-uppercase ">
                      Unpaid Hygiene Permit Invoices
                    </h4>
                  </div>
<!--                  <div class="d-flex align-items-center justify-content-center p-3" role="toolbar">
                    <label class="text-nowrap mb-0">Permit Type:</label>
                    <select class="form-select mx-2" title="Select Subcounty">
                      <option>All Permit types</option>
                      <option>Homabay Town</option>
                      <option>Ndhiwa</option>
                      <option>...</option>
                    </select>

                    <label class="text-nowrap mb-0 mx-2">Sub County:</label>
                    <select class="form-select" title="Select Subcounty">
                      <option>All Sub Categories</option>
                      <option>Homabay Town</option>
                      <option>Ndhiwa</option>
                      <option>...</option>
                    </select>

                    <select class="form-select mx-3" title="Select Subcounty ">
                      <option>All Wards</option>
                      <option>Ward 1</option>
                      <option>Ward 2</option>
                      <option>...</option>
                    </select>
                  </div>-->
                </div>

                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom d-flex">
                  <div class="d-flex align-items-center justify-content-center p-3 flex-grow-1"  role="toolbar">
                    <form class="app-search p-0 m-0 w-100">
                      <div class="position-relative">
                        <input v-model="search" type="text" class="form-control w-100" placeholder="Search... eg Business Name, ID Number, Bill Number, etc" spellcheck="false" data-ms-editor="true">
                        <span class="bx bx-search-alt"></span>
                      </div>
                    </form>
                  </div>
<!--                  <div class="pr-3">
                    <button v-if="getRight('DOWNLOAD REPORTS')" @click="downloadApplicationsPaginated()" class="btn btn-primary">Download  </button>
                  </div>-->
                </div>


                <div class="card-body">
                  <div class="table-responsive ">

                    <table class="table align-middle table-hover  contacts-table table-striped "
                           id="datatable-buttons">
                      <thead class="table-light">
                      <tr class="table-dark">
                        <th scope="col">Invoice No.</th>
                        <th scope="col">ID No</th>
                        <th scope="col">Names</th>
                        <th scope="col">Date Invoiced</th>
                        <th scope="col">Certificate Category</th>
                        <th>Invoiced By</th>
                        <th class="text-right">Amount Invoiced</th>
                        <th scope="col" class="text-right"></th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item, index) in pendingInvoicing" :value="item" :key="index">
                        <td class="text-capitalize text-nowrap">{{ item.billNo }}</td>
                        <td class="text-capitalize text-nowrap">{{ item.idNo }}</td>
                        <td class="text-capitalize text-nowrap">
                          <a href="">{{ item.name }}</a>
                        </td>
                        <td class="text-capitalize text-nowrap">{{ formatDate(item.dateCreated) }} <span
                            class="text-muted">{{ formattedTime(item.dateCreated) }}</span>
                          ({{ formatTimeAgo(item.dateCreated) }})
                        </td>
                        <td>Industry</td>

                        <td>
                          {{ item.names }}
                        </td>
                        <td class="text-nowrap text-right ">
                          <span class="fw-semibold ">Sh {{ numberFormat(item.billTotal) }}</span>
                        </td>

                        <td>
                          <div class="d-flex justify-content-end align-items-center">
                            <button @click="getBusiness(item.billNo,item.businessID)" type="button"
                                    class="btn btn-primary btn-sm waves-effect waves-light text-nowrap"
                                    data-bs-toggle="modal"
                                    data-bs-target=".receipting-modal"><i
                                class="bx bx-show font-size-16 align-middle me-2"></i>
                              Details
                            </button>

                            <a @click="printBill(item.billNo)"
                               class="btn btn-success btn-sm waves-effect waves-light mx-3">
                              <i
                                  class="bx bx-printer font-size-16 align-middle me-2"></i>
                              Print Invoice
                            </a>


                            <button @click="getBusiness(item.billNo,item.businessID)" type="button"
                                    class="btn btn-primary btn-sm waves-effect waves-light text-nowrap me-3"
                                    data-bs-toggle="modal"
                                    data-bs-target=".SMS-modal"><i
                                class="bx bx-chat font-size-16 align-middle me-2"></i>
                              Resend Invoice SMS
                            </button>

                          </div>
                        </td>
                      </tr>


                      </tbody>
                      <tfoot class="table-dark">
                      <tr>

                        <th>
                          23 Certs
                        </th>


                        <th class="text-nowrap" colspan="4">{{numberFormat(totalBusiness)}} Businesses</th>

                        <td class="text-nowrap text-right " colspan="2">
                          <span class="fw-semibold ">Sh {{numberFormat(totalAmount)}}</span>
                        </td>
                        <td></td>


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

                    <div v-if="pendingInvoicing.length<1 & loading === false" class="card-body d-sm-none d-md-block px-5 d-flex flex-column justify-items-center align-items-center text-center">
                      <div class="p-5 py-0 pt-3">
                        <img :src="'./assets/images/no-results.png'" class="img mb-4"  alt="No search results"/>
                      </div>
                      <h4>No Results To Show</h4>
                      <p>Sorry, we could not find any results that match your search or filter criteria. Please try using different keywords or filters.</p>
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

      <!-- receipting modal -->
      <div class="modal fade receipting-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-full">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Business Details</h5>
              <span
                  class="badge rounded-pill bg-warning text-uppercase font-12px text-uppercase mx-3">Ongoing Applications</span>
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
                            <h5 class="mb-4">Invoicing</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">Kelvin Omondi</a></p>
                            <p class="text-muted text-capitalize mb-1"><a
                                href="PrintDocs/Receipts/receipts-HOMabay county.html"><i class="bx bx-receipt"></i>
                              View Invoice</a></p>
                          </div>
                        </div>
                      </div>

                      <div class="item event-list active">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">-</div>
                            <h5 class="mb-4">Payment</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                          </div>

                          <div class="mt-3 px-3">
                            <p class="text-muted text-capitalize"><a
                                href="user-details.html">-</a></p>
                          </div>
                        </div>
                      </div>


                      <div class="item event-list">
                        <div>
                          <div class="event-date">
                            <div class="text-primary mb-1">-</div>
                            <h5 class="mb-4">Permit Approval</h5>
                          </div>
                          <div class="event-down-icon">
                            <i
                                class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
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

<!--                <div class="col-sm-12 col-md-12">
                  <div class="row">
                    <div class="col-12 mt-4">
                      <div class="bg-dark border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bx-map font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Map View</p>

                      </div>
                    </div>
                    <div class="col-12">
                      <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46449.71551863634!2d36.67523836781685!3d-1.3353441122372378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0cb9ff59a4a3%3A0x4073419e11826405!2sOrbital%20Africa%20%7C%20Land%20%26%20Topo%20Survey%2C%20GPS%2C%20GPR%2C%20GIS%2C%20Mapping%2C%20Drones%2C%20Training%20%26%20Geospatial%20Solutions!5e0!3m2!1sen!2ske!4v1691859398886!5m2!1sen!2ske"
                            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>


                </div>-->


                <div class="col-sm-12 col-md-12">
                  <div class="row">
                    <div class="col-12 mt-4">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="dripicons-user font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Business Owner </p>

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
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Owner's Name</p>
                            </td>
                            <td class="">{{business.fullNames}}</td>


                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                ID No.</p>
                            </td>
                            <td class="">{{business.ownerID}}</td>


                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Phone</p>

                            </td>
                            <td class="">{{business.ownerPhone}}</td>

                          </tr>
                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Email
                              </p>

                            </td>
                            <td class="">{{business.ownerEmail}}</td>


                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                KRA PIN</p>

                            </td>
                            <td class="">{{business.kraPin}}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="col-12 mt-4">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bx-briefcase-alt-2 font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Business Details </p>

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
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Business/ Company name</p>
                            </td>
                            <td class="">{{business.businessName}}</td>


                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Business Category</p>
                            </td>
                            <td class="">{{business.businessCategory}}</td>


                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Business Sub Category</p>

                            </td>
                            <td class="">{{business.businessSubCategory}}</td>

                          </tr>


                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Sub County</p>

                            </td>
                            <td class="">{{business.subCountyName}}</td>
                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Ward</p>

                            </td>
                            <td class="">{{business.wardName}}</td>
                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Physical Address</p>

                            </td>
                            <td class="">{{business.physicalAddress}}</td>
                          </tr>

                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Plot Number</p>

                            </td>
                            <td class="">{{business.plotNumber}}</td>
                          </tr>


                          <tr>
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                Business ID</p>

                            </td>
                            <td class="">{{business.businessID}}</td>
                          </tr>


                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="col-12 mt-4">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="bx bx-receipt font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Hygiene Permit Invoicing Details</p>

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
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Date Invoiced</p>
                            </td>
                            <td class="">{{formatDate(billDetail.dateCreated)}} {{formattedTime(billDetail.dateCreated)}} ({{formatTimeAgo(billDetail.dateCreated)}})</td>


                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Invoiced By</p>
                            </td>
                            <td class="">{{billDetail.names}}</td>


                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Invoice Payment Status</p>
                            </td>
                            <td class="text-danger fw-bold">{{billDetail.status}}</td>


                          </tr>

                          <tr
                              title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                            <td>
                              <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Invoiced Amount</p>
                            </td>
                            <td class="">Sh {{billDetail.detailAmount}}</td>

                          </tr>



                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="col-12 mt-4">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="mdi mdi-fire-extinguisher font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Description</p>

                      </div>
                    </div>

                    <div class="col-12">
                      <div>
                        <ol style="margin-top: 0px;" type="1">
                          <li type="1">{{billDetail.description}}</li>
<!--                          <li type="1">General House Keeping is good</li>
                          <li type="1">Electrical installations done to acceptable standards</li>
                          <li type="1">Provided three gas cylinders</li>-->
                        </ol>
                      </div>
                    </div>

<!--                    <div class="col-12 mt-4">
                      <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                        <i class="mdi mdi mdi-flag-remove font-28 mr-15px"></i>
                        <p class="fw-semibold mb-0 pb-0">Recomendations to be resolved</p>

                      </div>
                    </div>

                    <div class="col-12">
                      <div>
                        <ol style="margin-top: 0px;" type="1">
                          <li type="1">Provided an escape route at the rear.</li>
                          <li type="1">General House Keeping is good</li>
                          <li type="1">Electrical installations done to acceptable standards</li>
                          <li type="1">Provided three gas cylinders</li>
                        </ol>
                      </div>
                    </div>-->

                  </div>
                </div>

              </div>

            </div>
            <div class="modal-footer d-none">

              <a href="PrintDocs/Receipts/receipts-HOMabay county.html" target="_blank" type="button"
                 class="btn btn-primary waves-effect waves-light">
                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Receipt
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- end of receipting modal -->

      <!-- invoice details -->
      <div class="modal fade SMS-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">Resend Invoice SMS</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="col-12">
                <address>
                  <strong>Invoiced To:</strong><br>
                  {{business.ownerPhone}}<br>
                  {{business.ownerEmail}}, {{business.ownerPhone}}<br>

                  <br><br>
                  Date invoiced {{formatDate(billDetail.dateCreated)}}, {{formattedTime(billDetail.dateCreated)}}
                </address>
              </div>

              <div class="col-12">
                <p>
                  A notification will be sent to the client via SMS containing payment details. Kindly remind the client
                  to check their phone and make the payment promptly. The client's invoice number is <span
                    class="fw-bold">{{billDetail.billNo}}</span>.
                </p>
              </div>
              <div class="col-12">
                <button @click="resendMessage()" data-bs-dismiss="modal" class="btn btn-primary text-uppercase w-100 btn-block text-center">Resend</button>
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

import {defineComponent} from "vue";
import NavigationBar from "@/components/Navigation.vue";
import ToolBarFire from "@/components/fire/ToolBarFire.vue";
import {execute, fire, biller, health} from "@/api";
import bill from "../../../public/PrintDocs/Bill/Bill.vue";
import ToolBarHygiene from "@/components/hygiene/ToolBarHygiene.vue";
import ToolBarMedical from "@/components/medical/ToolBarMedical.vue";


export default {
  name: "cert-medical-pending",
  components: {ToolBarMedical, ToolBarHygiene, ToolBarFire, NavigationBar},

  data() {
    return {
      loading: false,
      search:'',
      paymentMode: '',
      pendingInvoicing: [{
        idNo: null,
        name: null,
        billNo: null,
        billTotal: null,
        dateCreated: null,
        feeDescription: null,
        names: null,
      }],
      totalBusiness: 0,
      totalAmount: 0,
      business: {
        id: null,
        businessID: null,
        businessName: null,
        subCountyID: null,
        subCountyName: null,
        wardID: null,
        wardName: null,
        plotNumber: null,
        physicalAddress: null,
        buildingName: null,
        buildingOccupancy: null,
        floorNo: null,
        roomNo: null,
        premiseSize: null,
        numberOfEmployees: null,
        tonnage: null,
        businessDes: null,
        businessCategory: null,
        businessSubCategory: null,
        incomeTypeID: null,
        feeID: null,
        businessEmail: null,
        postalAddress: null,
        postalCode: null,
        businessPhone: null,
        contactPersonNames: null,
        contactPersonIDNo: null,
        businessRole: null,
        contactPersonPhone: null,
        contactPersonEmail: null,
        fullNames: null,
        ownerID: null,
        ownerPhone: null,
        ownerEmail: null,
        kraPin: null,
        createdBy: null,
        createdByIDNo: null,
        dateCreated: null,
        lat: 0.0,
        lng: 0.0
      },
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
        category: null
      },
    }
  },

  mounted() {

    this.getPendingInvoicesMedical()
    this.menuAccess();

  },
  watch:{
    search(){
      this.getPendingInvoicesMedical()
    }
  },
  methods: {
    menuAccess(){

      const data = new FormData();
      data.append("function", "menuAccess");
      data.append("menu", "Cert Medical Pending");
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
    formatTimeAgo(dateString) {
      const currentDate = new Date();
      const date = new Date(dateString);
      const timeDifference = currentDate - date;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (daysDifference === 0) {
        return 'Today';
      } else if (daysDifference === 1) {
        return 'Yesterday';
      } else {
        return `${daysDifference} Days Ago`;
      }
    }
    ,
    formattedTime(originalTime) {
      // Parse the original time string
      const parsedTime = new Date(originalTime);

      // Format time to HH:MM AM/PM
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      };

      return parsedTime.toLocaleTimeString([], options);
    },
    formatDate(dateString) {
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

      const date = new Date(dateString);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${day} ${month} ${year}`;
    },

    numberFormat(num) {
      const britishNumberFormatter = new Intl.NumberFormat("en-GB");
      return britishNumberFormatter.format(num)
    },
    getPendingInvoicesMedical() {
      this.loading = true
      this.pendingInvoicing.splice(0)
      const data = new FormData();
      data.append("function", "getPendingInvoicesMedical");
      data.append("keyword", this.search);
      execute(data, health)
          .then((res) => {
            this.loading = false
            if (res.data.success) {

              this.pendingInvoicing = res.data.data.pendingInvoicing

              this.totalBusiness = this.pendingInvoicing.length
              this.totalAmount = this.pendingInvoicing.reduce((acc, cur) => {
                let amount = Number(cur.billTotal);
                if (!isNaN(amount)) {
                  return acc + amount;
                } else {
                  return acc;
                }
              }, 0);


            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            this.message = e.message
          });
    },
    getBusiness(billNo,businessID) {

      const data = new FormData();
      data.append("function", "getBusiness");
      data.append("businessID",businessID);
      data.append("billNo",billNo);
      execute(data, health)
          .then((res) => {
            this.loading = false
            if (res.data.success) {

              this.business = res.data.data.business
              this.billDetail = res.data.data.bill.billDetails


            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            this.message = e.message
          });
    },
    resendMessage() {
      const data = new FormData();
      data.append("function", "resendMessage");
      data.append("customerPhoneNumber",this.business.ownerPhone);
      data.append("incomeTypePrefix",this.billDetail.incomeTypePrefix);
      data.append("billNo",this.billDetail.billNo);
      data.append("name",this.business.businessName);
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              alert(res.data.message)

            } else {
              alert(res.data.message)
            }
          })
          .catch((e) => {
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

  }
}
</script>


<style scoped>

</style>