
<template>
  <div class="kev-card-nav">
    <div class="card-body pb-0">
      <ul class="nav nav-tabs text-uppercase" role="tablist">
        <!-- Orders Pending Payment -->
        <li class="nav-item" role="presentation">

          <a
              @click="gotTo('lab-orders-pending-payment')"
              :class="['nav-link', selectedSub === 'lab-orders-pending-payment' ? 'active' : '']"
              href="javascript: void(0);"

             title="Lab test orders awaiting payment or waiver" role="tab"
             aria-selected="false" tabindex="-1">
            <span class="d-none d-sm-block me-2">Pending Payment</span>
          </a>


        </li>

        <!-- Scheduled Lab Tests -->
        <li class="nav-item" role="presentation">

          <a
              @click="gotTo('lab-orders')"
              :class="['nav-link', selectedSub === 'lab-orders' ? 'active' : '']"
              href="javascript: void(0);"
             title="Overview of scheduled lab activities" role="tab"
             aria-selected="true">
            <span class="d-none d-sm-block">Scheduled Tests</span>
          </a>


        </li>

        <!-- Acknowledged Lab Tests -->


        <li class="nav-item" role="presentation">
          <a
              @click="gotTo('lab-orders-acknowledged')"
              :class="['nav-link', selectedSub === 'lab-orders-acknowledged' ? 'active' : '']"
              href="javascript: void(0);"
             title="Lab tests received by the lab" role="tab"
             aria-selected="false" tabindex="-1">
            <span class="d-none d-sm-block me-2">Acknowledged Tests</span>
          </a>
        </li>

        <!-- Collected Samples -->
        <li class="nav-item" role="presentation">
          <a
              @click="gotTo('lab-orders-collected-sample')"
              :class="['nav-link', selectedSub === 'lab-orders-collected-sample' ? 'active' : '']"
              href="javascript: void(0);"
             title="Samples collected for lab tests" role="tab"
             aria-selected="false" tabindex="-1">
            <span class="d-none d-sm-block">Collected Samples</span>
          </a>
        </li>

        <!-- Results Released -->
        <li class="nav-item" role="presentation">
          <a
              @click="gotTo('lab-orders-released-tests')"
              :class="['nav-link', selectedSub === 'lab-orders-released-tests' ? 'active' : '']"
              href="javascript: void(0);"
             title="Finalized lab test results" role="tab" aria-selected="false"
             tabindex="-1">
            <span class="d-none d-sm-block me-2">Released Results</span>
          </a>
        </li>


        <!-- results pending doctor's review -->
        <li class="nav-item" role="presentation">
          <a
              @click="gotTo('lab-orders-pending-review')"
              :class="['nav-link', selectedSub === 'lab-orders-pending-review' ? 'active' : '']"
              href="javascript: void(0);"
             title="Finalized lab test results awaiting review by the doctor" role="tab" aria-selected="false"
             tabindex="-1">
            <span class="d-none d-sm-block me-2">Pending Review</span>
          </a>
        </li>


        <!-- Tests Action Center -->
        <li class="nav-item" role="presentation">

          <a
              @click="gotTo('lab-orders-acknowledged-patient')"
              :class="['nav-link', selectedSub === 'lab-orders-acknowledged-patient' ? 'active' : '']"

              title="Manage lab tests and actions" role="tab" aria-selected="false" tabindex="-1">


            <span class="d-block"><i class="bx bx-file fs-2"></i></span>
            <span class="d-none d-sm-block me-2">Test Actions</span>
          </a>
        </li>


      </ul>
    </div>
  </div>
</template>

<script>
import { getRight } from "@/api";

export default {
  name: "LabToolBarOrders",
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
