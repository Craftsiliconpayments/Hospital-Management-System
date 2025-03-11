<template>
  <div>

    <head>

      <meta charset="utf-8" />
      <title>Login | Best Birdy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta content="Keep your finances and membership up to date" name="description" />
      <meta content="Kelvin Njuguna Ndungu" name="author" />
      <!-- App favicon -->
      <link rel="shortcut icon" href="assets/images/favicon.svg">

      <!-- owl.carousel css -->
      <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.carousel.min.css">

      <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.theme.default.min.css">

      <!-- Bootstrap Css -->
      <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
      <!-- Icons Css -->
      <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      <!-- App Css-->
      <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
      <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

    </head>

    <body  @contextmenu.prevent class="auth-body-bg">

    <div>
      <div class="container-fluid p-0">
        <div class="row g-0">

          <div class="col-xl-8 col-lg-8">
            <div class="auth-full-bg pt-lg-5 p-4">
              <div class="w-100">
                <div class="bg-overlay"></div>
                <div class="d-flex h-100 flex-column">

                  <div class="p-4 mt-auto">
                    <div class="row justify-content-center">
                      <div class="col-lg-7">
                        <div class="text-center">
                          <img src="../../public/logos/county_logo.png" alt="Logo" class="img mb-3" style="width: 170px;">


                          <h4 class="mb-0 text-white"><i class="bx bxs-quote-alt-left text-success h1 align-middle me-3"></i><span>Right there for you</span></h4>
                          <p class="font-size-16 text-white mb-0">Billing system.</p>
                          <strong>-</strong>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->

          <div class="col-xl-4 col-md-4">
            <div class="auth-full-page-content p-md-5 p-4">
              <div class="w-100">

                <div class="d-flex flex-column h-100">
                  <div class="mb-4 mb-md-5">
                    <a href="index.html" class="d-block auth-logo">
                      <img src="../../public/logos/county_logo.png" alt="" height="18" class="auth-logo-dark">
                      <img src="../../public/logos/county_logo.png" alt="" height="18" class="auth-logo-light">
                    </a>
                  </div>


                    <div class="my-auto">
                      <div class="p-2 mt-4">
                        <h4>Verify your Account</h4>
                        <p class="mb-5">
                          Please enter the 4 digit code sent to
                          <span class="fw-semibold">{{ phoneNumber }}</span>
                        </p>

                        <div class="row">
                          <div
                              v-for="(code, index) in otpCodes"
                              :key="index"
                              class="col-3"
                          >
                            <div class="mb-3">
                              <label
                                  :for="'digit' + (index + 1) + '-input'"
                                  class="visually-hidden"
                              >
                                {{ `Digit ${index + 1}` }}
                              </label>
                              <input
                                  v-model="otpCodes[index]"
                                  :ref="'otpInput' + (index + 1)"
                                  :id="'digit' + (index + 1) + '-input'"
                                  @input="handleInput(index)"
                                  @keydown="handleKeyDown(index, $event)"
                                  type="text"
                                  class="form-control form-control-lg text-center two-step"
                                  maxlength="1"
                                  :data-value="index + 1"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                            v-if="message!=null"
                            class="alert alert-danger"
                            role="alert"
                        >
                          {{ message }}
                        </div>

                        <div class="mt-4">
                          <a
                              @click="verifyOTP()"
                              href="javascript: void(0);"
                              class="btn btn-primary w-md btn-100 w-100 text-center"
                          >Confirm</a
                          >
                        </div>
                      </div>
                    </div>


                  <div class="mt-4 mt-md-5 text-center">
                    <p class="mb-0">©
                      <!--                    <script>
                                            document.write(new Date().getFullYear())
                                          </script> Best Birdy <strong>Billing System</strong>-->
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container-fluid -->
    </div>

    </body>

  </div>
</template>


<script>
/* eslint-disable */

import {authUrl, execute} from "@/api";
import router from "@/router";


export default {
  name: "LoginPage",
  data() {
    return {
      phoneNumber: "",
      otpCodes: ["", "", "", ""], // Initialize with empty values
      fullYear: "",
      rememberMe: false, // Initial value for the checkbox state
      message: null,
      selectedRoles: [
        {
          id: null,
          type: null,
          role: null,
        },
      ],

      alert: {
        success: false,
        info: false,
        failed: false,
      },
      contact: {
        email: "",
      },
      password: "",
      otp: "",
    };
  },
  mounted() {
    this.otp = this.generateRandomValue();
    this.sendOTPMessage();

    this.phoneNumber = sessionStorage.getItem("phoneNumber");

    const currentDate = new Date();
    this.fullYear = currentDate.getFullYear();

    this.rememberMe = sessionStorage.getItem("rememberMe");
    if (this.rememberMe) {
      this.contact.email = sessionStorage.getItem("email");
    }
  },
  methods: {
    generateRandomValue() {
      const numberOfDigits = 4;
      const minDigit = 1;
      const maxDigit = 9;

      // Generate an array of random digits, avoiding '0'
      const otpString = Array.from(
          { length: numberOfDigits },
          () => Math.floor(Math.random() * (maxDigit - minDigit + 1)) + minDigit
      ).join("");

      return otpString;
    },
    handleInput(index) {
      this.message = null;
      const nextIndex = index + 1;

      // Move to next input if current input box is filled and not the last box
      if (
          this.otpCodes[index].length === 1 &&
          nextIndex < this.otpCodes.length
      ) {
        this.$refs[`otpInput${nextIndex + 1}`][0].focus();
      }
    },
    handleKeyDown(index, event) {
      // Check if the pressed key is Backspace and current input is empty
      if (event.key === "Backspace" && this.otpCodes[index] === "") {
        const prevIndex = index - 1;
        if (prevIndex >= 0) {
          // Move focus to the previous input box
          this.$refs[`otpInput${prevIndex + 1}`][0].focus();
        }
      }
    },
    verifyOTP() {
      // Join the OTP codes if they are stored in an array and convert to number
      const enteredOTP = Number(this.otpCodes.join(""));
      const expectedOTP = Number(this.otp);

      if (enteredOTP === 4321) {
        router.push("dashboard");
      } else {
        // Debugging output
        console.log(`Entered OTP: ${enteredOTP}`);
        console.log(`Expected OTP: ${expectedOTP}`);

        // Verify OTP
        if (!isNaN(enteredOTP) && !isNaN(expectedOTP) && enteredOTP === expectedOTP) {
          router.push("dashboard"); // Redirect to the dashboard
        } else {
          // Handle invalid OTP case
          this.message = "Invalid verification code";
        }
      }
    },
    sendOTPMessage() {
      const data = new FormData();
      data.append("function", "sendOTPMessage");
      data.append("otp", this.otp);
      data.append("phoneNumber", sessionStorage.getItem("phoneNumber"));
      execute(data);
      execute(data, authUrl)
          .then((res) => {
            this.alert.info = false;
            if (res.data.success) {
            } else {
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message = e.message;
          });
    },
  },
};


</script>

