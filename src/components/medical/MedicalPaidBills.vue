<template>
  <div>


    <head>

      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport">
      <meta content="Rental management system by Nouveta LTD" name="description"/>
      <meta content="Kelvin Njuguna" name="author"/>
      <!-- App favicon -->
      <link href="assets/images/favicon.png" rel="shortcut icon">
      <!-- droping file -->
      <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css"/>

      <!-- DataTables -->
      <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet"
            type="text/css"/>
      <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
            type="text/css"/>

      <!-- Bootstrap Css -->
      <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css"/>
      <!-- Bootstrap select styling -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css"
            rel="stylesheet">
      <!-- Icons Css -->
      <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css"/>
      <!-- App Css-->
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
      <div id="content" class="content-minimize">

        <div class="page-content">
          <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">UNPAID BILLS</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item"><a @click="gotTo('dashboard')">Dashboards</a>
                      </li>
                      <li class="breadcrumb-item active">unpaid bills</li>
                    </ol>
                  </div>

                </div>
              </div>
            </div>

            <ToolBarMedical/>
            <!-- end page title -->
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100"
                         role="toolbar">
                      <h4 class="card-title text-capitalize mb-0 ">
                        All Paid Bills
                      </h4>

                      <div class="d-flex">
                        <a  v-if="getRight('CREATE BILL')" @click="gotTo('new-bill')"
                            class="btn btn-primary dropdown-toggle option-selector me-3 text-capitalize"
                            type="button">
                          <i class="mdi mdi-plus-circle-outline  font-size-16"></i> <span
                            class="pl-1 d-md-inline">Create A Bill</span>
                        </a>

                      </div>


                    </div>
                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar"
                         role="toolbar">
                      <button class="btn btn-primary waves-effect btn-label waves-light me-3"
                              type="button"><i class="mdi mdi-printer label-icon"></i> Print
                        Selected Invoices
                      </button>
                    </div>
                  </div>

                  <div class="card-header bg-white pt-2">
                    <div class="row">
                      <div class="col-3">

                        <div class="d-flex flex-column">
                          <small class="text-uppercase fw-semibold mb-3">Search</small>
                          <div class="d-flex align-items-center">

                            <div class="search-box mb-0 me-4">
                              <div class="position-relative">
                                <input v-model="search" type="text" class="form-control bg-light border-light rounded" placeholder="Search..." fdprocessedid="husj3l">
                                <i class="bx bx-search-alt search-icon"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-3">
                        <div class="d-flex flex-column">
                          <small class="text-uppercase fw-semibold mb-3">Filter Dates:</small>
                          <div class="d-flex align-items-center">
                            <span class="pr-3 fw-semibold">From:</span>
                            <input class="form-control" placeholder="Start date" type="date"
                                   v-model="dateFrom">
                            <span class="px-3 fw-semibold">TO:</span>
                            <input class="form-control" placeholder="Start date" type="date"
                                   v-model="dateTo">
                          </div>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="d-flex flex-column">
                          <small class="text-uppercase fw-semibold mb-3">Filter By
                            Options</small>
                          <div class="d-flex align-items-center">
                            <span class="pr-3 fw-semibold text-nowrap d-none">Filter By:</span>
                            <select class="form-control form-select"
                                    tittle="Filter Transactions By" v-model="filter">
                              <option selected value="filter-all">All Transactions
                              </option>
                              <option value="filter-sub-county">Filter by Sub County
                              </option>
                              <option value="filter-wards">Filter by ward</option>
                              <option value="filer-zone">Filter by Zone/Collection Point
                              </option>
                              <option value="filter-officer">Filter by County
                                Agent/Officer
                              </option>
                              <!-- <option value="filter-department">Filter by Department</option>
                               <option value="filter-stream">Filter by Revenue Stream</option>-->
                            </select>

                            <select class="form-control bg-white" data-live-search="true"
                                    title="Select Sub County" v-model="selectedItem">
                              <option :key="index" :value="item.value"
                                      v-for="(item, index) in itemList">
                                {{ item.value }}
                              </option>
                            </select>

                            <!-- <select class="form-control selectpicker bg-white" title="Select Options" data-live-search="true">
                                 <option v-for="(item, index) in subCounties" :value="item" :key="index">
                                     {{ item.subCountyName }}
                                 </option>
                             </select>-->
                          </div>
                        </div>
                      </div>
                      <div class="col-3 d-flex justify-content-end align-items-end">
                        <div class="text-sm-end mt-4 mt-sm-0 justify-end d-flex text-right flex-column">
                          <p class="text-muted mb-2">Collected Revenue</p>
                          <h5>KES {{numberFormat(summary.total)}} <span
                              class="badge bg-success ms-1 align-bottom">{{numberFormat(summary.count)}} Transactions</span>
                          </h5>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">

                      <table class="table align-middle table-hover  contacts-table table-striped "
                             id="datatable-buttons">
                        <thead class="table-light">
                        <tr class="table-dark">
                          <th class="text-nowrap  " scope="col">NO.</th>
                          <th class="text-nowrap " scope="col">Bill No</th>
                          <th class="text-nowrap " scope="col">Description</th>
                          <th class="text-nowrap " scope="col">Sub County</th>
                          <th class="text-nowrap " scope="col">Ward</th>
                          <th class="text-nowrap " scope="col">Zone</th>
                          <th class="text-nowrap " scope="col">Attendant</th>
                          <th class="text-nowrap text-right " scope="col">Billed Amount</th>
                          <th class="text-nowrap text-right " scope="col">Amount Paid</th>
                          <th class="text-nowrap text-right " scope="col">Balance</th>
                          <th class="text-nowrap" scope="col">Status</th>
                          <th class="text-nowrap" scope="col">Date</th>
                          <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :key="index" :value="item" v-for="(item, index) in billDetails">
                          <td class="text-capitalize text-nowrap">{{index+1}}</td>
                          <td class="text-capitalize text-nowrap">{{item.billNo}}</td>
                          <td class="text-capitalize text-nowrap">
                            {{item.feeDescription}}
                          </td>
                          <td class="text-capitalize text-nowrap">{{item.subCountyName}}</td>
                          <td class="text-capitalize text-nowrap">{{item.wardName}}</td>
                          <td class="text-capitalize text-nowrap">{{item.zone}}</td>
                          <td class="text-capitalize text-nowrap">{{item.names}}</td>
                          <td class="text-nowrap text-right ">
                            <span class="fw-semibold ">{{formatPrice(item.detailAmount)}}</span>
                          </td>
                          <td class="text-nowrap text-right ">
                            <span class="fw-semibold ">{{formatPrice(item.receiptAmount)}}</span>
                          </td>
                          <td class="text-nowrap text-right ">
                            <span class="fw-semibold ">{{formatPrice(item.billBalance)}}</span>
                          </td>
                          <td>
                                                        <span class="badge badge-soft-success text-uppercase"
                                                              v-if="item.status==='PAID'">{{item.status}}</span>
                            <span class="badge badge-soft-danger text-uppercase"
                                  v-if="item.status !=='PAID'">UNPAID</span>
                          </td>

                          <td class="text-nowrap text-right ">
                            <span class="fw-semibold ">{{item.dateCreated}}</span>
                          </td>


                          <td>
                            <div class="d-flex justify-content-end">
                              <button @click="getBill(item.billNo)"
                                      class="btn btn-primary btn-sm waves-effect waves-light text-nowrap me-3"
                                      data-target="#billDetail" data-toggle="modal"
                                      type="button">View Details
                              </button>
                              <div class="dropdown">
                                <a aria-haspopup="true" class="text-muted font-size-16"
                                   data-bs-toggle="dropdown" role="button">
                                  <i class="bx bx-dots-vertical-rounded"></i>
                                </a>

                                <div class="dropdown-menu dropdown-menu-end ">
                                  <a class="dropdown-item "
                                     data-bs-target=".receipting-modal"
                                     data-bs-toggle="modal" href="# "><i
                                      class="font-size-15 mdi mdi-eye me-3 "></i>View</a>
                                  <a class="dropdown-item " href="# "><i
                                      class="font-size-15 mdi mdi-printer me-3 "></i>Print</a>
                                  <a class="dropdown-item " href="# "><i
                                      class="font-size-15 mdi mdi-email me-3 "></i>Send
                                    Email Reminder</a>
                                  <a class="dropdown-item " href="# "><i
                                      class="font-size-15 mdi mdi-chat me-3 "></i>Send
                                    SMS Reminder</a>

                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                        <tfoot class="table-dark">
                        <tr>
                          <th class="text-nowrap text-right ">
                            {{billDetails.length}} Bills
                          </th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <td class="text-nowrap text-right ">
                            <span class="fw-semibold "> {{totalDetailAmount}}</span>
                          </td>
                          <td class="text-nowrap text-right ">
                            <span class="fw-semibold ">{{totalReceiptAmount}}</span>
                          </td>
                          <td class="text-nowrap text-right ">
                            <span class="fw-semibold ">{{totalBillBalance}}</span>
                          </td>
                          <th></th>
                          <th></th>
                          <th></th>
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
                      <div v-if="billDetails.length<1 & loading===false" class="card-body d-sm-none d-md-block px-5 d-flex flex-column justify-items-center align-items-center text-center">
                        <div class="p-5 py-0 pt-3">
                          <img :src="'./assets/images/no-results.png'" class="img mb-4"  alt="No search results"/>
                        </div>
                        <h4>No Results To Show</h4>
                        <p>Sorry, we could not find any results that match your search or filter criteria. Please try using different keywords or filters.</p>
                      </div>

                    </div>
                  </div>
                  <div class="card-footer bg-white">
                    <nav aria-label="Page navigation example "
                         class="d-flex align-items-center justify-content-between">

                      <div class="d-flex align-items-center">
                                            <span class="pr-3 pb-0 mb-0 font-13px">
                                                <span>Rows Per Page</span>
                                            </span>
                        <select class="form-select w-auto font-13px " v-model="pageSize">
                          <option value="10">10 Rows</option>
                          <option value="25">25 Rows</option>
                          <option value="50">50 Rows</option>
                          <option value="100">100 Rows</option>
                          <option value="150">150 Rows</option>
                          <option value="200">200 Rows</option>
                          <option value="5000">5000 Rows</option>
                          <option value="10000">10000 Rows</option>
                          <option value="1000000000000">All Rows</option>
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

        <!-- receipting modal -->
        <div aria-hidden="true" aria-labelledby="myLargeModalLabel" class="modal fade receipting-modal"
             id="billDetail" role="dialog" tabindex="-1">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myLargeModalLabel">Bill details</h5>
                <button aria-label="Close" class="btn-close" data-dismiss="modal"
                        type="button"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-6">
                    <address>
                      <strong class="text-capitalize">Bill Prepared for:</strong><br>
                      {{billDetail.description}}<br>
                      <br>
                      On {{billDetail.dateCreated}}

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
                    <h3 class="font-size-15 fw-bold">{{billNo}}</h3>
                  </div>
                </div>

                <div class="py-2 mt-3 search-box mb-0 me-4">
                  <div class="position-relative">
                    <input v-model="keyword" type="text" class="form-control bg-light border-light rounded" placeholder="Search..." fdprocessedid="husj3l">
                    <i class="bx bx-search-alt search-icon"></i>
                  </div>
                </div>

                <div class="col-12">

                  <div class="table-responsive">
                    <table class="table table-nowrap vertical-align-middle">
                      <thead class="bg-light">
                      <tr>
                        <th style="width: 20px;"></th>
                        <th style="width: 70px;">Business ID</th>
                        <th>Business Name</th>
                        <th>Owner</th>
                        <th>Sub Category</th>
                        <th>SubCounty</th>
                        <th>ward</th>


                      </tr>
                      </thead>
                      <tfoot class="bg-light">
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                      </tr>
                      </tfoot>
                      <tbody>

                      <tr v-for="(item, index) in businesses" :key="index">
                        <td>
                          <input type="checkbox" :checked="selectedBusinessID === item.businessID" @change="toggleSelection(item.businessID)">
                        </td>
                        <td>{{ item.businessID }}</td>
                        <td>{{ item.businessName }}</td>
                        <td>{{ item.fullNames }} <a href="#"> {{item.ownerPhone}}</a></td>
                        <td>{{ item.businessSubCategory }}</td>
                        <td>{{ item.subCountyName }}</td>
                        <td>{{ item.wardName }}</td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="modal-footer">


                <button v-if="selectedBusinessID !=null" @click="generateEntryCert(billDetail.billNo)"
                        class="btn btn-danger btn-sm waves-effect waves-light text-nowrap me-3"
                        data-target="#billDetail" data-toggle="modal"
                        type="button">Initiate inspection
                </button>

                <a @click="printBill()" class="btn btn-primary waves-effect waves-light" type="button">
                  <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Bill
                </a>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- end of receipting modal -->


        <footer class="footer ">
          <div class="container-fluid ">
            <div class="row ">
              <div class="col-sm-6 ">
                <!--                                <script>-->
                <!--                                    document.write(new Date().getFullYear())-->
                <!--                                </script> © RevenueSure-->
              </div>
              <div class="col-sm-6 ">
                <div class="text-sm-end d-sm-block ">
                  Developed by County
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    </body>

  </div>
</template>

<script>
/* eslint-disable */
import {authUrl, biller, execute, fire, getRight} from "@/api";
import NavigationBar from "@/components/Navigation";
import router from "@/router";
import ToolBar from "@/components/sbp/ToolBar";
import ToolBarFire from "@/components/fire/ToolBarFire.vue";
import ToolBarHygiene from "@/components/hygiene/ToolBarHygiene.vue";
import ToolBarMedical from "@/components/medical/ToolBarMedical.vue";

export default {
  name: "LoginPage",
  components: {ToolBarMedical, ToolBarHygiene, ToolBarFire, ToolBar, NavigationBar},
  data() {
    return {
      keyword:'',
      selectedFeeID: null,
      selectedBusinessID: null,
      search:'',
      loading: false,
      // set the initial current page as 1
      currentPage: 1,
      // set the total number of pages as 10 (you can change this according to your data source)
      totalPages: 0,
      // set the number of items per page as 5 (you can change this according to your preference)
      pageSize: 10,
      summary: {
        count: 0,
        total: 0
      },


      totalAmount: null,
      selectedItem: null,
      valueItem: "",
      subCounty: "",
      itemList: [{
        id: null,
        value: null
      }],
      subCounties: [{
        subCountyID: "",
        subCountyName: ""
      }],
      wards: [{
        wardID: "",
        wardName: ""
      }],
      filter: '',
      dateFrom: '',
      dateTo: '',
      message: '',
      alert: {
        success: false,
        info: false,
        failed: false
      },
      billDetails: [
        {
          receiptAmount: "0",
        }

      ],
      billInfo: [],
      receiptInfos: [],
      billDetail: {
        id: "179",
        billNo: "BLL0411031700",
        incomeTypeID: "2,",
        incomeTypeDescription: "Informal Sector Fees,",
        costCenterNo: "",
        accountNo: ",",
        feeID: "18,",
        detailAmount: "1",
        receiptAmount: "1",
        billBalance: "0",
        wardID: "472751373",
        subCountyID: "47275",
        status: "PAID",
        dateCreated: "2023-04-11 12:17:00.192127"
      },
      billInfoTotal: 0,
      billNo: '',
      businesses: [{
        id: null,
        businessID: null,
        businessName: null,
        subCountyID: null,
        subCountyName: null,
        wardID: null,
        wardName: null,
        plotNumber: null,
        physicalAddress: null ,
        buildingName: null,
        buildingOccupancy:null ,
        floorNo:null ,
        roomNo: null,
        premiseSize: null,
        numberOfEmployees: null,
        tonnage: null,
        businessDes: null,
        businessCategory: null,
        businessSubCategory: null,
        incomeTypeID: null,
        feeID: null,
        businessEmail:null ,
        postalAddress: null,
        postalCode:null ,
        businessPhone: null,
        contactPersonNames:null,
        contactPersonIDNo: null,
        businessRole: null,
        contactPersonPhone: null,
        contactPersonEmail: null,
        fullNames:null ,
        ownerID:null ,
        ownerPhone: null,
        ownerEmail:null ,
        kraPin:null ,
        createdBy: null,
        createdByIDNo: null,
        dateCreated: null,
        lat: null,
        lng: null,
        fireLicence: null,
        liquorLicence: null,
        businessType: null,
        businessStatus: null
      }],
      business: {
        id: null,
        businessID: null,
        businessName: null,
        subCountyID: null,
        subCountyName: null,
        wardID: null,
        wardName: null,
        plotNumber: null,
        physicalAddress: null ,
        buildingName: null,
        buildingOccupancy:null ,
        floorNo:null ,
        roomNo: null,
        premiseSize: null,
        numberOfEmployees: null,
        tonnage: null,
        businessDes: null,
        businessCategory: null,
        businessSubCategory: null,
        incomeTypeID: null,
        feeID: null,
        businessEmail:null ,
        postalAddress: null,
        postalCode:null ,
        businessPhone: null,
        contactPersonNames:null,
        contactPersonIDNo: null,
        businessRole: null,
        contactPersonPhone: null,
        contactPersonEmail: null,
        fullNames:null ,
        ownerID:null ,
        ownerPhone: null,
        ownerEmail:null ,
        kraPin:null ,
        createdBy: null,
        createdByIDNo: null,
        dateCreated: null,
        lat: null,
        lng: null,
        fireLicence: null,
        liquorLicence: null,
        businessType: null
      },
    }


  },
  watch: {
    //pagination code
    // define a watcher for the pageSize property
    pageSize(newPageSize) {
      this.getBills("")
      // get the total number of items from your data source (you can change this according to your logic)
      const totalItems = this.summary.count;
      // calculate the new total pages by dividing the total items by the new page size and rounding up
      const newTotalPages = Math.ceil(totalItems / newPageSize);
      // update the totalPages data property with the new value
      this.totalPages = newTotalPages;
      // reset the current page to 1
      this.currentPage = 1;

    },

    search(){
      const keyword = this.search;
      this.getBills(keyword)
    } ,
    keyword(){
      this.getBusinesses(this.keyword)
    }

  },
  computed: {
    //pagination code
    // calculate the start index of the items for the current page
    startIndex() {
      return (this.currentPage - 1) * this.pageSize;
    },
    // calculate the end index of the items for the current page
    endIndex() {
      return this.currentPage * this.pageSize;
    },

    totalReceiptAmount() {
      return this.formatPrice(this.billDetails.reduce((sum, billDetail) => sum + parseInt(billDetail.receiptAmount), 0));
    }, totalBillBalance() {
      return this.formatPrice(this.billDetails.reduce((sum, billDetail) => sum + parseInt(billDetail.billBalance), 0));
    },
    totalDetailAmount() {
      return this.formatPrice(this.billDetails.reduce((sum, billDetail) => sum + parseInt(billDetail.detailAmount), 0));
    }

  },
  mounted() {

    this.menuAccess();
    this.businesses.splice(0)
    if (sessionStorage.getItem("keyword") === "") {
      this.getBills("SBP")
    } else {
      this.getBills(sessionStorage.getItem("keyword"))
    }


    this.$watch('selectedItem', function (newValue) {
      this.getBills(newValue)
    })

    this.$watch('dateFrom', function (newValue) {
      if (this.dateFrom === '' || this.dateTo === '') {

      } else {
        this.getBills("SBP")
      }

    })
    this.$watch('dateTo', function (newValue) {
      if (this.dateFrom === '' || this.dateTo === '') {

      } else {
        this.getBills("SBP")
      }
    })

    this.$watch('filter', function (newValue) {

      if (newValue === 'filter-all') {
        this.getBills("SBP")
      }

      if (newValue === 'filter-sub-county') {
        this.getSubCounties()
      }
      if (newValue === 'filter-wards') {
        this.getWards()
      }

      if (newValue === 'filer-zone') {
        this.getZones()
      }
      if (newValue === 'filter-officer') {
        this.getUsers()
      }


    })
  },
  methods: {
    menuAccess(){

      const data = new FormData();
      data.append("function", "menuAccess");
      data.append("menu", "Medical Paid Bills");
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
    toggleSelection(businessID) {
      this.selectedBusinessID = (this.selectedBusinessID === businessID) ? null : businessID;
    },

    deleteSelectedItems() {
      const itemsToDelete = [];
      this.selectedItems.forEach((isSelected, index) => {
        if (isSelected) {
          itemsToDelete.push(index);
        }
      });
      // Iterate in reverse order to safely remove items
      for (let i = itemsToDelete.length - 1; i >= 0; i--) {
        const index = itemsToDelete[i];
        this.billInfo.splice(index, 1);
        this.selectedItems.splice(index, 1);
      }
    },
    getRight(type){
      return getRight(type)
    },
    //pagination code
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
        this.getBills("SBP")
      }
    },
    // define a method to go to the next page
    nextPage() {
      // check if the current page is not the last page
      if (this.currentPage < this.totalPages) {
        // increment the current page by 1
        this.currentPage++;
        this.getBills("SBP")
      }
    },
    // define a method to go to a specific page
    goToPage(page) {
      // check if the page is valid and not equal to the current page
      if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
        // set the current page to the given page
        this.currentPage = page;
        this.getBills("SBP")
      }
    },

    //number format
    numberFormat(num) {
      const britishNumberFormatter = new Intl.NumberFormat("en-GB");
      return britishNumberFormatter.format(num)
    },
    formatPrice(value) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 2
      });
      return formatter.format(value);
    },
    gotTo(route) {
      router.push(route)
    },
    getBills(keyword) {
      this.billDetails.splice(0)
      this.loading = true
      const data = new FormData();
      data.append("function", "getBillsPaginate");
      data.append("page", this.currentPage);
      data.append("rows_per_page", this.pageSize);
      data.append("status", "PAID");
      data.append("dateFrom", this.dateFrom);
      data.append("dateTo", this.dateTo);
      data.append("keyword", "PUBLIC-HEALTH-MEDICAL")
      execute(data, biller)
          .then((res) => {
            this.loading = false
            this.summary.count =0
            this.summary.total =0

            this.totalAmount = null
            if (res.data.success) {
              this.billDetails = res.data.data.billDetails
              this.summary = res.data.data.summary
              this.totalPages =  Math.ceil(this.summary.count / this.pageSize);

              //Initialize the accumulator to 0
              this.totalAmount = this.billDetails.reduce((acc, cur) => {
                let receiptAmount = Number(cur.receiptAmount);
                return acc + receiptAmount;
              }, 0);

            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
    getBusinesses(keyword) {
      const data = new FormData();
      data.append("function", "getBusinesses");
      data.append("keyword", keyword)
      execute(data, fire)
          .then((res) => {
            if (res.data.success) {
              this.businesses = res.data.data.businesses
            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
    getBill(billNo) {
      this.billNo = billNo
      const data = new FormData();
      data.append("function", "getBill");
      data.append("billNo", billNo);
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              this.billInfo = res.data.data.billInfo
              this.billDetail = res.data.data.billDetails
            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
    generateEntryCert(billNo) {
      const data = new FormData();
      data.append("function", "generateFireEntryCert");
      data.append("billNo", billNo);
      data.append("businessID", this.selectedBusinessID);
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              alert( res.data.message)
            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
    printBill() {
      localStorage['params'] = JSON.stringify({
        billNo: this.billDetail.billNo
      })
      const routeData = this.$router.resolve({name: 'bill'});
      window.open(routeData.href, '_blank');
    },
    getSubCounties() {
      this.itemList.splice(0)
      const data = new FormData();
      data.append("function", "getSubCounty");
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {

              res.data.data

              //Assuming subCounties and itemList are arrays of objects
              for (let i = 0; i < res.data.data.length; i++) {
                let subCounty = res.data.data[i];
                let item = {
                  id: subCounty.subCountyID,
                  value: subCounty.subCountyName
                };

                this.itemList.push(item);
              }


            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            this.message = e.message
          });
    },
    getWards() {
      this.itemList.splice(0)
      const data = new FormData();
      data.append("function", "getWards");
      execute(data, biller)
          .then((res) => {
            if (res.data.success) {


              for (let i = 0; i < res.data.data.length; i++) {
                let ward = res.data.data[i];
                let item = {
                  id: ward.wardID,
                  value: ward.wardName
                };

                this.itemList.push(item);

              }


            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            this.message = e.message
          });
    },
    getZones() {
      this.itemList.splice(0)
      const data = new FormData();
      data.append("function", "getZones");
      execute(data, authUrl)
          .then((res) => {
            if (res.data.success) {

              for (let i = 0; i < res.data.data.zones.length; i++) {
                let zone = res.data.data.zones[i];
                let item = {
                  id: zone.id,
                  value: zone.zone
                };

                this.itemList.push(item);
              }

            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
    getUsers() {
      this.itemList.splice(0)
      const data = new FormData();
      data.append("function", "getUsers")
      execute(data, authUrl)
          .then((res) => {
            if (res.data.success) {
              for (let i = 0; i < res.data.data.users.length; i++) {
                let user = res.data.data.users[i];
                let item = {
                  id: user.id,
                  value: user.names
                };

                this.itemList.push(item);
              }


            } else {
              this.message = res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message
          });
    },
  }
}
</script>

