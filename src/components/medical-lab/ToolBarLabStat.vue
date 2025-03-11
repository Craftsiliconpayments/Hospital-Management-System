
<template>
  <div class="row">
    <div class="col-12">
      <div class="card mb-0">
        <div class="card-body bg-soft bg-info border-1 pt-4 border border-primary">
          <div class="row">
            <!-- Lab Orders Overview Title -->
            <div class="col-lg-4">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <img :src="'./logos/county_logo.png'" alt="Your Logo" class="avatar-md rounded-circle img-thumbnail">
                </div>
                <div class="flex-grow-1 align-self-center">
                  <div class="text-muted">
                    <p class="mb-2">Lab Orders Overview - Homa Bay County Hospital</p>
                    <h5 class="mb-1">Quick Stats on Medical Lab Orders</h5>
                    <p class="mb-0">Summary of recent lab orders providing insight into the hospital’s medical testing activities.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="col-lg-8 align-self-center">
              <div class="text-lg-left mt-4 mt-lg-0">
                <div class="row">
                  <!-- New Orders -->
                  <div class="col-6 col-sm-4 col-md-2">
                    <div data-toggle="tooltip" title="Newly Created Lab Orders">
                      <div class="avatar-xs mb-3">
                                            <span class="avatar-title rounded-circle bg-info font-size-16">
                                                <i class="mdi mdi-playlist-plus text-white"></i>
                                            </span>
                      </div>
                      <p class="text-muted text-truncate mb-2">New Orders</p>
                      <h5 class="mb-0">480</h5>
                    </div>
                  </div>
                  <!-- Acknowledged Patients -->
                  <div class="col-6 col-sm-4 col-md-2">
                    <div data-toggle="tooltip" title="Patients whose Lab Orders were acknowledged">
                      <div class="avatar-xs mb-3">
                                            <span class="avatar-title rounded-circle bg-primary font-size-16">
                                                <i class="mdi mdi-account-multiple-outline text-white"></i>
                                            </span>
                      </div>
                      <p class="text-muted text-truncate mb-2">Acknowledged Patients</p>
                      <h5 class="mb-0">1,200</h5>
                    </div>
                  </div>
                  <!-- Collected Samples -->
                  <div class="col-6 col-sm-4 col-md-2">
                    <div data-toggle="tooltip" title="Samples collected from patients for lab analysis">
                      <div class="avatar-xs mb-3">
                                            <span class="avatar-title rounded-circle bg-danger font-size-16">
                                                <i class="mdi mdi-flask-outline text-white"></i>
                                            </span>
                      </div>
                      <p class="text-muted text-truncate mb-2">Collected Samples</p>
                      <h5 class="mb-0">850</h5>
                    </div>
                  </div>
                  <!-- Released Results -->
                  <div class="col-6 col-sm-4 col-md-2 d-none d-md-block">
                    <div data-toggle="tooltip" title="Results that have been processed and released">
                      <div class="avatar-xs mb-3">
                                            <span class="avatar-title rounded-circle bg-warning font-size-16">
                                                <i class="mdi mdi-check-all text-white"></i>
                                            </span>
                      </div>
                      <p class="text-muted text-truncate mb-2">Released Results</p>
                      <h5 class="mb-0">700</h5>
                    </div>
                  </div>
                  <!-- Tests Pending Review -->
                  <div class="col-6 col-sm-4 col-md-2">
                    <div data-toggle="tooltip" title="Samples that are pending review before final results are released">
                      <div class="avatar-xs mb-3">
                                            <span class="avatar-title rounded-circle bg-success font-size-16">
                                                <i class="mdi mdi-magnify text-white"></i>
                                            </span>
                      </div>
                      <p class="text-muted text-truncate mb-2">Tests Pending Review</p>
                      <h5 class="mb-0">950</h5>
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
</template>

<script setup>

</script>


<style scoped>

</style>