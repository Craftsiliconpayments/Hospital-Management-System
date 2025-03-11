<template>

  <div class="side-nav-kev-cont">

    <div class="nav flex-column nav-pills text-uppercase" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a
          @click="gotTo('lab-orders-acknowledged-patient')"
          :class="['nav-link', { active: selectedSub === 'lab-orders-acknowledged-patient' }]"
          href="javascript:void(0);"
         tabindex="-1" title="View tests awaiting sample collection">Pending Sample Collection</a>


      <a
          @click="gotTo('lab-orders-acknowledged-patient-sampled-orders')"
          :class="['nav-link', { active: selectedSub === 'lab-orders-acknowledged-patient-sampled-orders' }]"
          href="javascript:void(0);"
         tabindex="-1" title="View tests with samples collected">Sampled Orders (1)</a>

      <a

          @click="gotTo('lab-orders-acknowledged-patient-lab-results-entry')"
          :class="['nav-link', { active: selectedSub === 'lab-orders-acknowledged-patient-lab-results-entry' }]"
          href="javascript:void(0);"

         title="Enter and review lab test results">Lab Results Entry</a>


      <a
          @click="gotTo('lab-orders-acknowledged-patient-prev-test')"
          :class="['nav-link', { active: selectedSub === 'lab-orders-acknowledged-patient-prev-test' }]"
          href="javascript:void(0);"

         tabindex="-1" title="View previously performed tests and their results">Previous Test Results</a>

      <a
          @click="gotTo('lab-orders-acknowledged-patient-lab-results-pending-review')"
          :class="['nav-link', { active: selectedSub === 'lab-orders-acknowledged-patient-lab-results-pending-review' }]"
          href="javascript:void(0);"

         title="Lab tests that have been completed and are waiting for the doctor's review">Pending Review</a>

    </div>

  </div>

</template>

<script>
import { getRight } from "@/api";

export default {
  name: "TestActionSideBar",
  data() {
    return {
      selectedSub: null,
    };
  },
  methods: {
    getRight(type) {
      return getRight(type);
    },
    gotTo(route) {
      this.$router.push(route);
      sessionStorage.setItem("selectedSub1", route);
      this.selectedSub = route;
    },
  },
  mounted() {
    this.selectedSub = sessionStorage.getItem("selectedSub1") || this.$route.name;
  },
  watch: {
    $route(to) {
      this.selectedSub = to.name;
      sessionStorage.setItem("selectedSub1", to.name);
    },
  },
};
</script>

<style scoped>

</style>