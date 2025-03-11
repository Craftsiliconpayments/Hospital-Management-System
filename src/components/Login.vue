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

                                        <div>
                                            <h5 class="text-success">Welcome Back !</h5>
                                            <p class="text-muted">Sign in to continue Using the <strong>Billing system. </strong>
                                            </p>
                                        </div>

                                        <div class="mt-4">
                                            <div class="mb-3">
                                                <label for="username" class="form-label">Username/Id Number</label>
                                                <input v-model="contact.email" type="text" class="form-control" id="username" placeholder="Enter your username">
                                            </div>

                                            <div class="mb-3">
                                                <div class="float-end">
                                                    <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
                                                </div>
                                                <label class="form-label">Password</label>
                                                <div class="input-group auth-pass-inputgroup">
                                                    <input v-model="password" type="password" class="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon">
                                                    <button class="btn btn-light " type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                                                </div>
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="remember-check">
                                                <label class="form-check-label" for="remember-check">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div v-if="alert.success" class="alert alert-success" role="alert">
                                                {{message}}
                                            </div>

                                            <div v-if="alert.info" class="alert alert-primary" role="alert">
                                                {{message}}
                                            </div>

                                            <div v-if="alert.failed" class="alert alert-danger" role="alert">
                                                {{message}}
                                            </div>

                                            <div class="mt-3 d-grid">
                                                <button @click="login" class="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
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

    import {authUrl, execute, getRight} from "@/api";
    import router from "@/router";

    export default {
        name: "LoginPage",
        data() {
            return{
              deviceDetials:'',
              os: '',
              browser: '',
              screenResolution: '',
              cpuCores: '',
              memory: '',

              message:'',
                selectedRoles: [
                    {
                        id:null,
                        type:null,
                        role:null
                    }
                ],
                alert:{
                    success: false,
                    info: false,
                    failed:false
                },
                contact: {
                    email: ''
                },
                password:''
            }
        },
        mounted() {

          this.getDeviceDetails()

        },
        methods: {
           getDeviceDetails() {
            // Operating System
            if (navigator.userAgent.indexOf('Win') !== -1) this.os = 'Windows';
            else if (navigator.userAgent.indexOf('Mac') !== -1) this.os = 'MacOS';
            else if (navigator.userAgent.indexOf('Linux') !== -1) this.os = 'Linux';
            else this.os = 'Unknown';

            // Browser
            if (navigator.userAgent.indexOf('Chrome') !== -1) this.browser = 'Chrome';
            else if (navigator.userAgent.indexOf('Firefox') !== -1) this.browser = 'Firefox';
            else if (navigator.userAgent.indexOf('Safari') !== -1) this.browser = 'Safari';
            else if (navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode) this.browser = 'Internet Explorer';
            else this.browser = 'Unknown';

            // Screen Resolution
            this.screenResolution = `${window.screen.width} x ${window.screen.height}`;

            // CPU Cores
            this.cpuCores = navigator.hardwareConcurrency || 'Unknown';

            // Memory
            this.memory = (navigator.deviceMemory || 'Unknown');

            this.deviceDetials = `os: ${this.os} | browser: ${this.browser} | screenResolution: ${this.screenResolution} | cpuCores: ${this.cpuCores} | memory: ${this.memory}`

          },
            login(){

                this.message ="Authorizing..."
                this.alert.failed = false
                this.alert.info = true

                const data = new FormData();
                data.append("function", "loginPortal");
                data.append("email", this.contact.email);
                data.append("password", this.password);
                data.append("version", "1");
                data.append("deviceDetails", this.deviceDetials);
                execute(data,)

                execute(data,authUrl)
                    .then((res) =>{
                        this.alert.info = false

                        if (res.data.success) {

                          sessionStorage.setItem("isLoggedIn",true)
                          sessionStorage.setItem("names",res.data.data.user.names)
                          sessionStorage.setItem("idNo",res.data.data.user.idNo)
                          sessionStorage.setItem("phoneNumber",res.data.data.user.phoneNumber)
                          sessionStorage.setItem("subCountyName",res.data.data.user.subCountyName)
                          sessionStorage.setItem("subCountyID",res.data.data.user.subCountyID)
                          sessionStorage.setItem("zone",res.data.data.user.zone)
                          sessionStorage.setItem("category",res.data.data.user.category)
                          sessionStorage.setItem("permission",res.data.data.user.permission)
                          sessionStorage.setItem("sessionNames",res.data.data.user.names)
                          sessionStorage.setItem("sessionIdNo",res.data.data.user.idNo)
                          sessionStorage.setItem("sessionPhoneNumber",res.data.data.user.phoneNumber)
                          sessionStorage.setItem("statusCode",res.data.data.user.statusCode)

                            this.message =res.data.message
                            this.alert.success = true
                            sessionStorage.setItem("selectedRoles", res.data.data.category.selectedRoles)


                            if(getRight("DASHBOARD")){
                                router.push('otp')
                            }else {
                                sessionStorage.setItem("isLoggedIn",false)
                                this.alert.success = false
                                this.alert.failed = true
                                this.message ="You don't have permission"
                            }
                        }else{
                            sessionStorage.setItem("isLoggedIn",false)
                            this.alert.failed = true
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
        }
    }

</script>

