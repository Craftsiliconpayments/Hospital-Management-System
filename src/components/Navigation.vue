<template>

  <header id="page-topbar">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a class="logo logo-dark" >
                            <span class="logo-sm">
                                    <img alt="" height="22" :src="'./assets/images/logo.svg'">
                                </span>

            <span class="logo-lg">
<!--                                    <img alt="" height="17" src="/assets/images/logo-dark.png">-->
                                </span>
          </a>

          <a class="logo logo-light d-flex">
            <span class="logo-sm">
                <img alt="" height="50" :src="'./logos/county_logo.png'">
            </span>
            <span class="logo-lg">
                <img alt="" height="45" :src="'./logos/county_logo.png'">
            </span>

            <div class="portal-title">
              <h6 class="text-white">Hospital Management</h6>
              <h6 class="text-muted mb-0 text-white opacity-75">Information System</h6>
            </div>


          </a>
        </div>

        <button onclick="toggleVerticalMenu()" id="vertical-menu-btn" class="btn btn-sm px-3 font-size-16 header-item waves-effect" type="button">
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <!-- logo small -->
        <div class="phone-logo d-md-none d-sm-flex"><img alt="" class="img" :src="'./logos/county_logo.png'"></div>


        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input class="form-control" placeholder="Search..." type="text">
            <span class="bx bx-search-alt"></span>
          </div>
        </form>

      </div>

      <div class="d-flex">
        <!-- small search -->
        <div class="dropdown d-inline-block d-lg-none ms-2">
          <button id="page-header-search-dropdown" aria-expanded="false" aria-haspopup="true"
                  class="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown" type="button">
            <i class="mdi mdi-magnify"></i>
          </button>
          <div aria-labelledby="page-header-search-dropdown"
               class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">

            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input aria-label="Recipient's username" class="form-control" placeholder="Search ..." type="text">
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="dropdown d-none d-lg-inline-block ms-1">
          <button class="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen" type="button">
            <i class="bx bx-fullscreen"></i>
          </button>
        </div>

        <div class="dropdown d-inline-block d-none">

          <!-- notifications, i will come to this later -->
          <button id="page-header-notifications-dropdown" aria-expanded="false" aria-haspopup="true"
                  class="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown" type="button">
            <i class="bx bx-bell bx-tada"></i>
            <span class="badge bg-danger rounded-pill">3</span>
          </button>
          <div aria-labelledby="page-header-notifications-dropdown"
               class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h6 key="t-notifications" class="m-0"> Notifications </h6>
                </div>
                <div class="col-auto">
                  <a key="t-view-all" class="small" href="#!"> View All</a>
                </div>
              </div>
            </div>
            <div data-simplebar style="max-height: 230px;">
              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i class="bx bx-cart"></i>
                                                </span>
                  </div>
                  <div class="flex-grow-1">
                    <h6 key="t-your-order" class="mb-1">Your order is placed</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-grammer" class="mb-1">If several languages coalesce the grammar</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                    </div>
                  </div>
                </div>
              </a>
              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <img alt="user-pic" class="me-3 rounded-circle avatar-xs" :src="'./assets/images/users/avatar-3.jpg'">
                  <div class="flex-grow-1">
                    <h6 class="mb-1">James Lemire</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-simplified" class="mb-1">It will seem like simplified English.</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-success rounded-circle font-size-16">
                                                    <i class="bx bx-badge-check"></i>
                                                </span>
                  </div>
                  <div class="flex-grow-1">
                    <h6 key="t-shipped" class="mb-1">Your item is shipped</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-grammer" class="mb-1">If several languages coalesce the grammar</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <img alt="user-pic" class="me-3 rounded-circle avatar-xs" :src="'./assets/images/users/avatar-4.jpg'">
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Salena Layfield</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-occidental" class="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="p-2 border-top d-grid">
              <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
              </a>
            </div>
          </div>
        </div>


        <div class="dropdown d-inline-block">
          <button id="page-header-user-dropdown" aria-expanded="false" aria-haspopup="true"
                  class="btn header-item waves-effect" data-bs-toggle="dropdown" type="button">
            <img alt="Header Avatar" class="rounded-circle header-profile-user"
                 :src="'./logos/county_logo.png'">
            <span @click="logout('/')" key="t-henry" class="d-none d-xl-inline-block ms-1">Logout</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <!--      <a class="dropdown-item" href="myprofile.html"><i class="bx bx-user font-size-16 align-middle me-1"></i>
                    <span key="t-profile">My Profile</span></a>
                  <a class="dropdown-item" href="my-logs.html"><i class="bx bx-time font-size-16 align-middle me-1"></i>
                    <span key="t-profile">My Logs</span></a>
                  <a class="dropdown-item" href="auth-lock-screen.html"><i
                          class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span
                          key="t-lock-screen">Lock screen</span></a>-->
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" @click="logout('/')"><i
                    class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span
                    key="t-logout">Logout</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div id="vertical-menu" class="vertical-menu" >

    <div class="h-100" data-simplebar>

      <!--- Sidemenu -->
      <div id="sidebar-menu" >
        <!-- Left Menu Start -->
        <ul id="side-menu" class="metismenu list-unstyled text-capitalize">
          <li key="t-pages" class="menu-title d-none">Best Birdy Billing system.</li>

          <li v-if="getRight('BILLS')"  class="side-bar-button" >
            <a @click="gotToSelected('out-patient-checkin')" class="waves-effect btn btn-light btn-rounded text-left write-msg-btn">
              <i class=""><img src="assets/images/plus-icon.svg" alt=""></i>
              <span class="text-capitalize">Patient Checkin</span>
            </a>
          </li>

          <li  v-if="getRight('DASHBOARD')" :class="{ 'mm-active': selected === 'dashboard' }">
            <a @click="gotToSelected('dashboard')" class="waves-effect">
              <i class="bx bx-home-circle"></i><span>Home</span>
            </a>
          </li>


          <li  :class="{ 'mm-active': selected === 'master_patient' }">

            <a @click="selectedMenu('master_patient')" class="waves-effect has-arrow">
              <i class="bx bxs-user-detail"></i>
              <span>Master Patient Index</span>
            </a>
            <ul :class="{ 'mm-active': selected === 'master_patient' }" class="sub-menu" aria-expanded="false">

              <li :class="{ 'mm-active': selectedSub === 'patients' }" ><a href="javascript: void(0);" @click="gotTo('patients')">MPI Register</a></li>

            </ul>
          </li>


          <li  :class="{ 'mm-active': selected === 'queue' }">

            <a @click="selectedMenu('queue')" class="waves-effect has-arrow">
              <i class="mdi-human-queue mdi"></i>
              <span>Patient's Queue</span>
            </a>

            <ul :class="{ 'mm-active': selected === 'queue' }" class="sub-menu" aria-expanded="false">

              <li  :class="{ 'mm-active': selectedSub === 'queue-triage' }" ><a href="javascript: void(0);" @click="gotTo('queue-triage')"> Triage</a></li>

            </ul>

          </li>

          <li  :class="{ 'mm-active': selected === 'medical_lab' }">

            <a @click="selectedMenu('medical_lab')" class="waves-effect has-arrow">
              <i class="fas fa-flask"></i>
              <span>Medical Lab</span>
            </a>

            <ul :class="{ 'mm-active': selected === 'medical_lab' }" class="sub-menu" aria-expanded="false">

              <li  :class="{ 'mm-active': selectedSub === 'lab-stats' }" ><a href="javascript: void(0);" @click="gotTo('lab-stats')">Lab Quick Stats</a></li>
              <li  :class="{ 'mm-active': selectedSub === 'lab-orders-pending-payment' }" ><a href="javascript: void(0);" @click="gotTo('lab-orders-pending-payment')">Tests Pending Payment</a></li>
              <li  :class="{ 'mm-active': selectedSub === 'lab-orders' }" ><a href="javascript: void(0);" @click="gotTo('lab-orders')">Scheduled lab Tests</a></li>
              <li  :class="{ 'mm-active': selectedSub === 'lab-orders-acknowledged' }" ><a href="javascript: void(0);" @click="gotTo('lab-orders-acknowledged')">Acknowledged Lab Tests</a></li>
              <li  :class="{ 'mm-active': selectedSub === 'lab-orders-collected-sample' }" ><a href="javascript: void(0);" @click="gotTo('lab-orders-collected-sample')">Collected Samples</a></li>
              <li  :class="{ 'mm-active': selectedSub === 'lab-orders-released-tests' }" ><a href="javascript: void(0);" @click="gotTo('lab-orders-released-tests')">Result Released</a></li>
              <li  :class="{ 'mm-active': selectedSub === 'lab-orders-pending-review' }" ><a href="javascript: void(0);" @click="gotTo('lab-orders-pending-review')">Pending Review</a></li>
            </ul>

          </li>


        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import { MetisMenu } from 'metismenujs';
  import {authUrl, biller, execute, getRight} from "@/api";
  export default {
    name: 'NavigationBar',

    data() {
      return {
        isVerticalMenuHidden: false,
        permission:"",
        category:"",
        newBill: true,
        dashboard: true,
        paymentsReceipting:true,
        financeAct:true,
        tenantAreas: true,
        bills:true,
        trade: true,
        parking: true,
        reports: true,
        settings: true,
        zones: true,
        users: true,
        liveMonitoring:true,
        transactions: true,
        businessMapping: true,

        selectedSub: null,
        selected: null,
        helmet: {
          names:''
        },
      };
    },
    components: {

    },

    methods:{

      getRight(type){
       return getRight(type)
      },
      selectedMenu(selected){
        sessionStorage.setItem("selected",selected)
      },
      gotToSelected(selected){
        sessionStorage.setItem("selected",selected)
        this.$router.push(selected);
      },
      gotTo(route){
        sessionStorage.setItem("selectedSub",route)
        sessionStorage.setItem("currentPage",route)
        this.$router.push(route);

      },

      logout(route){

        const data = new FormData();
        data.append("function", "logout");
        data.append("sessionNames",  sessionStorage.getItem("sessionNames"));
        data.append("sessionIdNo",  sessionStorage.getItem("sessionIdNo"));
        execute(data,authUrl)
            .then((res) =>{

              sessionStorage.clear()
              this.$router.push(route);

              if (res.data.success) {

              }else{
                this.message =res.data.message
              }
            })
            .catch((e) => {
              //alert(e.message);
              this.message =e.message
            });
      }
    },
    mounted() {



      this.names = sessionStorage.getItem("names")
      new MetisMenu('#side-menu');
      this.selected = sessionStorage.getItem("selected")
      this.selectedSub = sessionStorage.getItem("selectedSub")
      this.category = sessionStorage.getItem("category")
      this.permission = sessionStorage.getItem("permission")



      if(this.category === "EXECUTIVE"){
        this.newBill= false
        this.dashboard = true
        this.paymentsReceipting= false
        this.financeAct=false
        this.tenantAreas= false
        this.bills=false
        this.trade=false
        this.parking=false
        this.reports= true
        this.settings=false
        this.zones= false
        this.users= false
        this.liveMonitoring=false
        this.transactions = false
        this.businessMapping = false

      }
      else if(this.category ==="CASHIER"){

        this.newBill= true
        this.dashboard = false
        this.paymentsReceipting= true
        this.financeAct=false
        this.tenantAreas= true
        this.bills=true
        this.trade=true
        this.parking=true
        this.reports= false
        this.settings=false
        this.zones= false
        this.users= false
        this.liveMonitoring=false
        this.transactions = true
        this.businessMapping = false
      }
      else {
        this.newBill= true
        this.dashboard = true
        this.paymentsReceipting= true
        this.financeAct=true
        this.tenantAreas= true
        this.bills=true
        this.trade=true
        this.parking=true
        this.reports= true
        this.settings=true
        this.zones= true
        this.users= true
        this.liveMonitoring=true
        this.transactions = true
        this.businessMapping = true
      }

    }
  };

</script>

<style>


  .page-topbar {
    transition: margin-left 0.3s ease; /* Add a smooth transition for the top bar */
  }

  .page-topbar-minimize {
    margin-left: 80px; /* Adjust the width as needed for the minimized top bar */
  }

  .hide-vertical-menu {
    display: none; /* Hide the vertical menu when the class is present */
  }

  .content-minimize {
    transition: margin-left 0.3s ease; /* Add a smooth transition for the content */
    margin-left: 80px; /* Adjust the width as needed for the minimized content */
  }

  @media (max-width: 768px) {
    #vertical-menu {
      display: none; /* hide by default on mobile view */
    }

    .hide-vertical-menu #vertical-menu {
      display: block; /* show when the hide-vertical-menu class is present */
    }
    #vertical-menu.show-mobile-verticle{
      display: block !important;
    }
  }


  @media print {
    .footer,
    .navbar-header,
    .page-title-box,
    .right-bar,
    .vertical-menu {
      display: none!important
    }
    .card-body,
    .content-minimize,
    .page-content,
    .right-bar,
    body {
      padding: 0;
      margin: 0
    }
    .card {
      border: 0
    }
  }

  .content-minimize {
    margin-left: 250px;
    overflow: hidden
  }

  .content-minimize .content {
    padding: 0 15px 10px 15px;
    margin-top: 70px
  }

  @media (max-width:992px) {
    .vertical-menu {
      display: none
    }
    .content-minimize {
      margin-left: 0!important
    }
    body.sidebar-enable .vertical-menu {
      display: block
    }

    #vertical-menu.show-mobile-verticle{
      display: block !important;
    }
  }

  .vertical-collpsed .content-minimize {
    margin-left: 70px
  }

  body[data-layout=horizontal] .content-minimize {
    margin-left: 0!important
  }


  body[data-sidebar-size=small] .content-minimize {
    margin-left: 160px
  }

  body[data-sidebar-size=small].vertical-collpsed .content-minimize {
    margin-left: 70px
  }



</style>


