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
<!--                <a class="nav-item nav-link" href="javascript: void(0);">Quick
                  Stats</a>
                -->
                <router-link  :to="{name: 'patient-details'}" active-class="mm-active" class="nav-item nav-link">Patients Details</router-link>
                <router-link  :to="{name: 'patient-history'}" active-class="mm-active" class="nav-item nav-link">Patient History</router-link>
                <router-link  :to="{name: 'patient-payments'}" active-class="mm-active" class="nav-item nav-link">Payment History</router-link>

              </div>


            </div>

          </nav>
        </div>

      </div>

    </div>
  </div>

</template>



<script>
import {getRight} from "@/api";

export default {
  name: "ToolBarPatient",
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