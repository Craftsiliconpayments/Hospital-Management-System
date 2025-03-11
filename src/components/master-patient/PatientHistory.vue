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
                <h4 class="mb-sm-0 font-size-18">Visitation History</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                    <li class="breadcrumb-item active"><a href="patients.html">MPI</a></li>
                    <li class="breadcrumb-item active">MPI</li>
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
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm ">
                            <p class="avatar-title rounded-circle text-uppercase">
                              {{ patientInitials }}
                            </p>
                          </div>
                        </div>
                        <div class="flex-grow-1 align-self-center">
                          <div class="text-muted">
                            <h5 class="mb-1">{{patientsDetails.patient.title}} {{patientsDetails.patient.names}}</h5>
                            <p class="text-muted mb-0 d-flex align-items-center">
                              <a :href="'tel:'+patientsDetails.patient.phoneNumber" class="d-flex align-items-center"><i class="mdi mdi-phone me-2 font-size-18"></i> {{patientsDetails.patient.phoneNumber}}</a> <span class="px-3 px-3">|</span>
                              <a class="d-flex align-items-center" :href="'mailto:'+patientsDetails.patient.email"><i class="mdi mdi-email-outline font-size-18 me-2"></i> {{patientsDetails.patient.email}}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-center">
                      <div class="text-lg-center mt-4 mt-lg-0">
                        <div class="row">
                          <div class="col-3">
                            <div>
                              <p class="text-muted text-truncate mb-2">Religion</p>
                              <h6 class="mb-0">{{patientsDetails.patient.religion}}</h6>
                            </div>
                          </div>
                          <div class="col-3">
                            <div>
                              <p class="text-muted text-truncate mb-2">Nationality</p>
                              <h6 class="mb-0">{{patientsDetails.patient.nationality}}</h6>
                            </div>
                          </div>
                          <div class="col-3">
                            <div>
                              <p class="text-muted text-truncate mb-2">Education Level</p>
                              <h6 class="mb-0">{{patientsDetails.patient.levelOfEducation}}</h6>

                            </div>
                          </div>

                          <div class="col-3">
                            <div>
                              <p class="text-muted text-truncate mb-2">Physical Address</p>
                              <h6 class="mb-0">{{patientsDetails.patient.physicalAddress}}</h6>

                            </div>
                          </div>


                        </div>
                      </div>
                    </div>


                  </div>
                  <!-- end row -->
                </div>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                  <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                    <h4 class="card-title mb-0 text-uppercase ">
                      Visitation history
                    </h4>

                    <div class="d-flex">
                      <a  href="patient-new.html" type="button" class="btn btn-primary dropdown-toggle option-selector me-3 text-uppercase d-none">
                        <i class="mdi mdi-plus-circle-outline  font-size-16"></i> <span class="pl-1 d-md-inline">Add A Patient</span>
                      </a>

                    </div>


                  </div>
                  <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                    <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive ">

                    <table class="table align-middle table-hover contacts-table table-striped">
                      <thead class="table-light">
                      <tr class="table-dark">
                        <th scope="col">SN</th>
                        <th scope="col">Visit No.</th>
                        <th scope="col" title="date they visited hospital">Visit Date</th>
                        <th scope="col">Patient</th>
                        <th scope="col">Clinic/Department(s)</th>
                        <th scope="col">Doctor/Nurse Name</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item, index) in visitEntries" :value="item" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.visitCode}}</td>
                        <td>{{item.dateCreated}}</td>
                        <td>{{item.names}}</td>
                        <td>{{item.departmentVisiting}}</td>
                        <td>{{item.doctorNurse}}</td>
                      </tr>
                      </tbody>
                      <tfoot class="table-dark">
                      <tr>
                        <th colspan="6">{{visitEntries.length}} Visits</th>
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
      <footer class="footer ">
        <div class="container-fluid ">
          <div class="row ">
            <div class="col-sm-6 ">

            </div>
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
import moment from 'moment'
import {biller, execute, executeDownload, getRight, patient} from "@/api";
import NavigationBar from "@/components/Navigation";
import router from "@/router";
import ToolBarPatient from "@/components/master-patient/ToolBar.vue";

export default {
  name: "PatientHistory",
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
          dateCreated: null
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
    getVisitEntries() {
      this.loading = true
      const data = new FormData();
      data.append("function", "getVisitEntries");
      data.append("dateFrom", this.dateFrom);
      data.append("dateTo", this.dateTo);
      data.append("page", this.currentPage);
      data.append("rows_per_page", this.pageSize);
      data.append("keyword", this.search);
      data.append("idNo", sessionStorage.getItem("patientIDNo"));
      execute(data, patient)
          .then((res) => {
            this.loading = false
            if (res.data.success) {
              this.visitEntries = res.data.data.visitEntries

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

  },
}
</script>



<style>

</style>