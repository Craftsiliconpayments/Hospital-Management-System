<template>
  <div class="row">
    <div class="col-12 active">
      <div class="card active">
        <div class="card-body mini-nav bg-primary pt-2 pb-3 active ">
          <nav class="navbar navbar-expand-md navbar navbar-dark bg-primary py-2 active">
            <button
                class="navbar-toggler btn btn-sm px-3 font-size-16 header-item waves-effect h-auto text-primary"
                type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
              <span class="mdi mdi-menu"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between active"
                 id="navbarNavAltMarkup">
              <div class="navbar-nav">

                <router-link v-if="getRight('DASHBOARD')" :to="{name: 'medical-dashboard'}" active-class="mm-active" class="nav-item nav-link">Quick Stats</router-link>
                <router-link v-if="getRight('DASHBOARD')" :to="{name: 'cert-medical-pending'}" active-class="mm-active" class="nav-item nav-link">Pending Invoices</router-link>
                <router-link v-if="getRight('DASHBOARD')" :to="{name: 'pending-approval-medical'}" active-class="mm-active" class="nav-item nav-link">Pending Approval</router-link>
                <router-link v-if="getRight('DASHBOARD')" :to="{name: 'active-medical-cert'}" active-class="mm-active" class="nav-item nav-link">Active Certificates</router-link>
                <router-link v-if="getRight('DASHBOARD')" :to="{name: 'expired-medical-cert'}" active-class="mm-active" class="nav-item nav-link">Expired Certificates</router-link>
                <router-link v-if="getRight('DASHBOARD')" :to="{name: 'medical-paid-bills'}" active-class="mm-active" class="nav-item nav-link">Medical Paid Bills</router-link>
<!--
                <router-link v-if="getRight('DASHBOARD')" :to="{name: 'cert-biz-stats'}" active-class="mm-active" class="nav-item nav-link">Map View</router-link>
-->

              </div>

<!--              <button class="btn btn-info waves-effect waves-light my-2 my-sm-0 text-uppercase"
                      data-bs-toggle="modal"
                      data-bs-target=".receipting-modal">Invoice A Business</button>-->


            </div>
          </nav>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {getRight} from "@/api";

export default {
  name: "ToolBarMedical",
  data() {
    return {
      dashboard: true,
      validation: true,
      inspection: true,
      approval: true,
      declined: true,
      approved: true,
      paidSbp: true,
      unpaidSbp: true,
      unpaidBills: true,
      sbpPaidBills: true,
      sbpMap: true,
      selectedSub: null,
    }
  },
  methods:{
    getRight(type){
      return getRight(type)
    },
    mounted() {

      this.selectedSub = sessionStorage.getItem("selectedSub")

    },
    gotTo(route){
      this.$router.push(route);
      sessionStorage.setItem("selectedSub",route)
      this.selectedSub = route
    }
  }
}
</script>

<style scoped>

</style>