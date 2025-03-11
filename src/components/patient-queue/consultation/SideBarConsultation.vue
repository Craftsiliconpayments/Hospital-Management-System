<template>
  <div class="side-nav-kev-cont">
    <div class="nav flex-column nav-pills text-uppercase" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a @click="gotTo('vitals-consultation')"
         :class="['nav-link', { active: selectedSub === 'vitals-consultation' }]"
         href="javascript:void(0);"
         tabindex="-1"
         title="View and update patient vital signs">
        Vital Signs
      </a>
      <a @click="gotTo('allergy-consultation')"
         :class="['nav-link', { active: selectedSub === 'allergy-consultation' }]"
         href="javascript:void(0);"
         tabindex="-1"
         title="Record allergies and immunization details">
        Allergies & Immunization
      </a>
      <a @click="gotTo('prev-med-consultation')"
         :class="['nav-link', { active: selectedSub === 'prev-med-consultation' }]"
         href="javascript:void(0);"
         title="Review current medications of the patient">
        Current Medication
      </a>
      <a @click="gotTo('complaint-consultation')"
         :class="['nav-link', { active: selectedSub === 'complaint-consultation' }]"
         href="javascript:void(0);"
         title="Record the patient's main complaint">
        Presenting Complaint
      </a>

<!--      <a @click="gotTo('examination-consultation')"
         :class="['nav-link', { active: selectedSub === 'examination-consultation' }]"
         href="javascript:void(0);"
         tabindex="-1"
         title="Enter patient's medical history and examination details">
        History & Examination
      </a>-->

      <a @click="gotTo('diagnosis-consultation')"
         :class="['nav-link', { active: selectedSub === 'diagnosis-consultation' }]"
         href="javascript:void(0);"
         tabindex="-1"
         title="Review and update patient diagnosis">
        Diagnosis
      </a>

      <a @click="gotTo('investigation')"
         :class="['nav-link', { active: selectedSub === 'investigation' }]"
         href="javascript:void(0);"
         tabindex="-1"
         title="Review and update patient diagnosis">
        Investigation/Procedure
      </a>

      <a @click="gotTo('investigation-results-consultation')"
         :class="['nav-link', { active: selectedSub === 'investigation-results-consultation' }]"
         href="javascript:void(0);"
         title="View investigations and test results">
        View Test Results
      </a>
      <a @click="gotTo('prescription-consultation')"
         :class="['nav-link', { active: selectedSub === 'prescription-consultation' }]"
         href="javascript:void(0);"
         title="Prescribe medication during patient consultation">
        Write Prescription
      </a>
<!--      <a @click="gotTo('plan-consultation')"
         :class="['nav-link', { active: selectedSub === 'plan-consultation' }]"
         href="javascript:void(0);"
         title="View and update treatment plans, referrals, or surgery recommendations">
        Treatment Plan & Recommendations
      </a>-->

<!--      <a @click="gotTo('doctor-referral-consultation')"
         :class="['nav-link', { active: selectedSub === 'doctor-referral-consultation' }]"
         href="javascript:void(0);"
         title="Refer the patient to another doctor or facility">
        Refer to Doctor
      </a>-->

<!--      <a @click="gotTo('doc-assessment-consultation')"
         :class="['nav-link', { active: selectedSub === 'doc-assessment-consultation' }]"
         href="javascript:void(0);"
         title="Doctor's detailed assessment of the patient">
        Doctor Assessment
      </a>-->

    </div>
  </div>
</template>

<script>
import { getRight } from "@/api";

export default {
  name: "SideBarConsultation",
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