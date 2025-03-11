<template>
  <div class="card-body pb-0">
    <ul class="nav nav-tabs" role="tablist">

      <li class="nav-item d-none" role="presentation">
        <a
            @click="gotTo('medical_profile')"
            :class="['nav-link', selectedSub === 'medical_profile' ? 'active' : '']"
            href="javascript: void(0);"
            role="tab"
            aria-selected="true"
        >
          <span class="d-block"><i class="bx bxs-folder-open"></i></span>
          <span class="d-none d-sm-block">Medical Profile</span>
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a
            @click="gotTo('patient-history-triage')"
            :class="['nav-link', selectedSub === 'patient-history-triage' ? 'active' : '']"
            href="javascript: void(0);"
            role="tab"
            aria-selected="false"
            tabindex="-1"
        >
          <span class="d-block "><i class="fas fa-history"></i></span>
          <span class="d-none d-sm-block me-2">History</span>
          <span class="badge rounded-pill bg-warning text-dark float-end d-flex align-items-center justify-content-center">3</span>
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a
            @click="gotTo('vitals')"
            :class="['nav-link', selectedSub === 'vitals' ? 'active' : '']"
            href="javascript: void(0);"
            role="tab"
            aria-selected="false"
            tabindex="-1"
        >
          <span class="d-block"><i class="fas fa-heartbeat"></i></span>
          <span class="d-none d-sm-block">Vitals</span>
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a
            @click="gotTo('vitals-history')"
            :class="['nav-link', selectedSub === 'vitals-history' ? 'active' : '']"
            href="javascript: void(0);"
            role="tab"
            aria-selected="false"
            tabindex="-1"
        >
          <span class="d-block"><i class="fas fa-file-medical"></i></span>
          <span class="d-none d-sm-block me-2">Vitals History</span>
          <span class="badge rounded-pill bg-warning text-dark float-end d-flex align-items-center justify-content-center">3</span>
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a
            @click="gotTo('immunization')"
            :class="['nav-link', selectedSub === 'immunization' ? 'active' : '']"
            href="javascript: void(0);"
            role="tab"
            aria-selected="false"
            tabindex="-1"
        >
          <span class="d-block"><i class="fas fa-exclamation-triangle"></i></span>
          <span class="d-none d-sm-block me-2">Allergies/Immunization</span>
          <span class="badge rounded-pill bg-warning text-dark float-end d-flex align-items-center justify-content-center">2</span>
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a
            @click="gotTo('chronic-illnesses')"
            :class="['nav-link', selectedSub === 'chronic-illnesses' ? 'active' : '']"
            href="javascript: void(0);"
            role="tab"
            aria-selected="false"
            tabindex="-1"
        >
          <span class="d-block"><i class="fas fa-medkit"></i></span>
          <span class="d-none d-sm-block me-2">Chronic Illnesses</span>
          <span class="badge rounded-pill bg-warning text-dark float-end d-flex align-items-center justify-content-center">3</span>
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a
            @click="gotTo('vitals-consultation')"
            :class="['nav-link', selectedSub === 'vitals-consultation' ? 'active' : '']"
            href="javascript: void(0);"
            role="tab"
            aria-selected="false"
            tabindex="-1"
        >
          <span class="d-block"><i class="fas fa-stethoscope"></i></span>
          <span class="d-none d-sm-block">Consultation</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRight } from "@/api";

export default {
  name: "ToolBarPatientQue",
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
      sessionStorage.setItem("selectedSub", route);
      this.selectedSub = route;
    },
  },
  mounted() {
    // Set selectedSub from session storage or default it to the current route
    this.selectedSub = sessionStorage.getItem("selectedSub") || this.$route.name;
  },
  watch: {
    // Watch the route and update selectedSub when it changes
    $route(to) {
      this.selectedSub = to.name;
      sessionStorage.setItem("selectedSub", to.name);
    },
  },
};
</script>





<style scoped>

</style>