<template>

    <!-- Mirrored from html.physcode.com/travel/home-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 11 Feb 2020 16:05:20 GMT -->

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kitale Receipt</title>
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
                href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
                rel="stylesheet"
        />
    </head>

    <body @
            style="
        padding: 0px;
        margin: 0px;
        font-family: 'Montserrat', sans-serif;
        background-color: #a2a2a21c;
        box-sizing: border-box;
      "
    >
    <button class="print-btn" onclick="window.print()">
        <img :src="'./assets/printer.svg'" alt="Printer Icon" />
    </button>

    <button class="print-btn email-doc" title="send On Email"><img :src="'./assets/email-icon.png'" alt="Printer Icon "></button>

    <page
            class="page"
            style="
          width: 210mm;
          height: 297mm;
          display: flex;
          position: relative;
          flex-flow: column;
          background-color: white;
        "
    >
        <!-- main content -->
        <div style="padding: 8.5mm">
            <header
                    style="
              display: flex;
              height: 20mm;
              align-items: center;
              position: relative;
              width: 100%;
            "
            >
                <div>
                    <img
                            :src="'./logos/county_logo_plain.png'"
                            style="height: 20mm; margin-right: 5mm"
                    />
                </div>
                <div>
                    <h2
                            style="
                  margin-top: 0px;
                  font-size: 18px;
                  text-transform: uppercase;
                  color: #0045a1;
                  font-weight: 700;
                  margin-bottom: 1.2mm;
                  padding-bottom: 0px;
                "
                    >
                        County government of {{county.countyName}}
                    </h2>

                    <h4
                            style="
                  padding: 0px;
                  margin: 0px;
                  font-size: 18px;
                  font-weight: 400;
                "
                    >
                        {{county.tagline}}
                    </h4>
                </div>
                <div
                        style="
                position: absolute;
                right: 0mm;
                font-size: 10px;
                text-transform: uppercase;
                bottom: 4mm;
              "
                >
                    <p style="padding: 0px; margin: 0px; text-align: right">
                        Printed on {{ showDate() }}
                    </p>
                </div>
            </header>
            <div>
                <img :src="'./assets/blue-line.png'" style="width: 100%" />
            </div>

            <!-- contact information and QR code -->
            <div style="display: flex; justify-content: space-between">
                <!-- contact information -->
                <div style="font-size: 12px">
                    <h2
                            style="
                  margin-top: 0px;
                  font-size: 18px;
                  text-transform: uppercase;
                  color: #0045a1;
                  font-weight: 700;
                  margin-bottom: 3.3mm;
                  margin-top: 3.3mm;
                  padding-bottom: 0px;
                "
                    >
                        Bill For {{ billDetails.incomeTypeDescription }}
                    </h2>

                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        Support Tel No: 0800 721 643
                    </p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        {{county.email}}
                    </p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        Office Line (Business Hours {{county.contact}}
                    </p>

                    <p
                            style="
                  padding: 0px;
                  margin: 0px;
                  padding-top: 4.3mm;
                  padding-bottom: 1.5mm;
                "
                    >
                        Bill No:
                        <strong>{{ billDetails.billNo }}</strong>
                    </p>
                </div>

                <!-- the qr code -->
                <div
                        style="
                height: 25.3mm;
                margin-top: 3.3mm;
                width: 25.3mm;
                border: 2px solid #0045a1;
                display: flex;
                justify-content: center;
                align-items: center;
              "
                >
                    <img :src="link" style="height: 25mm" />
                </div>
            </div>

            <!-- the table -->

            <!-- the table contents -->
            <table
                    style="
              margin-top: 9.3mm;
              border-spacing: initial;
              display: block;
              min-height: 70mm;
            "
            >
                <thead
                        class=""
                        style="
                text-transform: uppercase;
                font-weight: 700;
                font-size: 12px;
                background: #e2f2fd;
                padding: 2.5mm;
              "
                >
                <tr>
                    <td style="padding: 2.5mm">Fee description</td>
                    <td style="padding: 2.5mm">For</td>
                    <td style="text-align: right; padding: 2.5mm; width: 50mm">
                        Amount Due
                    </td>
                </tr>
                </thead>
                <tbody v-for="(item, index) in billInfo" :key="`item-${index}`" style="font-size: 12px">
                <tr>
                    <td style="padding: 2.5mm">
                        {{ index + 1 }}. {{ billDetails.incomeTypeDescription }}
                    </td>
                    <td style="padding: 2.5mm">
                        {{ item.description }}
                    </td>
                    <td style="text-align: right; padding: 2.5mm">
                        <strong>KES {{ item.billTotal }}</strong>
                    </td>
                </tr>
                </tbody>
            </table>

            <div>
                <img
                        :src="'./assets/blue-line.png'"
                        style="width: 100%; margin-bottom: 4mm"
                />
            </div>

            <!-- billing details and summary -->

            <div
                    class=""
                    style="
              display: flex;
              text-transform: uppercase;
              justify-content: space-between;
            "
            >
                <div style="font-size: 12px">
                    <h2
                            style="
                  margin-top: 0px;
                  font-size: 18px;
                  text-transform: uppercase;
                  color: #0045a1;
                  font-weight: 700;
                  margin-bottom: 3.3mm;
                  margin-top: 3.3mm;
                  padding-bottom: 0px;
                  text-transform: uppercase;
                "
                    >
                        Billing & Payment Info
                    </h2>

                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        PAYBILL <strong>0434343</strong>
                    </p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        Bill NO. <strong>{{ billDetails.billNo }}</strong>
                    </p>

                    <p
                            style="
                  padding: 0px;
                  margin: 0px;
                  padding-top: 4.3mm;
                  padding-bottom: 1.5mm;
                "
                    >
                        Billing Date:
                        <strong>{{ billDetails.dateCreated }}</strong>
                    </p>
                </div>

                <div>
                    <table
                            style="
                  margin-top: 3.3mm;
                  border-spacing: inherit;
                  text-transform: capitalize;
                  font-size: 14px;
                "
                    >
                        <tbody>
                        <tr>
                            <td
                                    style="padding: 2.5mm; border-bottom: 1px solid #d9d9d9"
                            >
                                Amount Billed:
                            </td>
                            <td
                                    style="
                        text-align: right;
                        padding: 2.5mm;
                        border-bottom: 1px solid #d9d9d9;
                      "
                            >
                                <strong>KES {{ billDetails.detailAmount }}</strong>
                            </td>
                        </tr>

                        <tr>
                            <td
                                    style="padding: 2.5mm; border-bottom: 1px solid #d9d9d9"
                            >
                                Amount Paid:
                            </td>
                            <td
                                    style="
                        text-align: right;
                        padding: 2.5mm;
                        border-bottom: 1px solid #d9d9d9;
                      "
                            >
                                <strong>KES {{ billDetails.receiptAmount }}</strong>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 2.5mm">Balance:</td>
                            <td style="text-align: right; padding: 2.5mm">
                                <strong>KES {{ billDetails.billBalance }}</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- the footer starts here -->
        <div
                style="
            padding: 8.5mm;
            width: 100%;
            background-color: #e2f2fd;
            flex-grow: 1;
            margin-top: 9mm;
            display: flex;
            flex-flow: column;
            align-items: baseline;
            justify-content: space-between;
          "
        >
            <div
                    style="display: flex; justify-content: space-between; width: 100%"
            >
                <div style="font-size: 12px; padding-top: 3.3mm">
                    <h2
                            style="
                  margin-top: 0px;
                  font-size: 18px;
                  text-transform: uppercase;
                  color: #0045a1;
                  font-weight: 700;
                  margin-bottom: 3.3mm;
                  padding-bottom: 0px;
                  text-transform: uppercase;
                "
                    >
                        Digital county services platforms
                    </h2>

                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        USSD Code:<strong>*843#</strong>
                    </p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        Self service portal: <strong>www.county.co.ke</strong>
                    </p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
                        Mobile App: <strong>https://shorturl.at/ktyJN</strong>
                    </p>
                </div>

                <div style="padding-top: 3.3mm; padding-left: 17.3mm">
                    <div
                            style="
                  display: flex;
                  margin-bottom: 4mm;
                  justify-content: center;
                  align-items: center;
                "
                    >
                        <img
                                :src="'./assets/android-logo.svg'"
                                style="margin-right: 3.3mm; height: 12mm"
                        />
                        <span
                                style="
                    font-family: 'Yellowtail', cursive;
                    color: #0045a1;
                    line-height: 0.9;
                    font-size: 20px;
                  ">Scan to download the <br />Android App.</span>
                    </div>

                    <div style="position: relative; display: flex">
                        <img
                                :src="'./assets/code-demo.png'"
                                style="height: 16.6mm; margin: 1.25mm"
                        />
                        <img
                                :src="'./assets/camera-frame.svg'"
                                style="position: absolute; left: 0; height: 18.6mm"
                        />

                        <img
                                :src="'./assets/curved-arrow.svg'"
                                style="height: 13mm; margin-left: 4mm"
                        />
                    </div>
                </div>
            </div>

            <footer style="position: relative; width: 100%">
                <div style="position: absolute; bottom: 0mm">
                    <div>
                <span
                        style="
                    font-family: 'Yellowtail', cursive;
                    color: #0045a1;
                    line-height: 0.9;
                    font-size: 20px;
                  "
                >Thank You!</span
                >
                        <img :src="'./assets/blue-line.png'" style="width: 100%" />
                    </div>
                    <div
                            style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin-top: 2mm;
                "
                    >
                        <p
                                style="
                    padding-bottom: 10px;
                    margin-bottom: 0px;
                    font-size: 12px;
                    margin-top: 0mm;
                  "
                        >
                            Served By <strong>Self Service Portal</strong>
                        </p>
                        <div
                                style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    margin-left: 8.5mm;
                  "
                        >
                            <p style="padding-bottom:10px; margin-bottom:0px;font-size: 12px;margin-top: 0mm;"><strong>ENDLESS POTENTIAL</strong></p>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </page>
    </body>


</template>
<style scoped>
    * {
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        -webkit-print-color-adjust: exact !important;
        /* Chrome, Safari */
        color-adjust: exact !important;
        /*Firefox*/
    }
    .print-btn {
        display: flex;
        z-index: 1000000000;
        position: fixed;
        background: #4aaa23;
        color: white;
        top: 30px;
        right: 30px;
        border-radius: 50%;
        padding: 1rem;
        margin: 0px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 0px 20px 4px rgb(136 136 136 / 65%);
        cursor: pointer;
        transition: 0.4s;
    }

    .email-doc {
        top: 130px;
        background: #0063c0;
    }
    .print-btn img {
        height: 35px;
    }
    @media print {
        .print-btn {
            display: none;
        }
        body {
            margin: 0px !important;
            padding: 0px !important;
        }
        @page {
            /* size: auto; */
            /* auto is the initial value */
            /* this affects the margin in the printer settings */
            /* width: 210mm;*/
            /* height: 297mm; */
            size: A4 portrait;
            margin: 0px;
            margin-bottom: 0px;
            margin: 0px;
        }
    }
    @page {
        /* size: auto; */
        /* auto is the initial value */
        /* this affects the margin in the printer settings */
        /* width: 210mm;
          height: 297mm; */
        size: A4 portrait;
        margin: 0px;
        margin-bottom: 0px;
        margin: 0px;
    }
</style>

<script>
    import { execute, parking, trade,rent,biller } from "@/api";

    export default {
        name: "PrintBill",
        data() {
            return {
               link:'',
                date: null,
                county: {
                    id: null,
                    countyID: null,
                    countyName: null,
                    tagline: null,
                    smsusername: null,
                    smspassword:null,
                    contact: null,
                    center: null,
                    address: null,
                    email: null,
                    headline: null,
                    tagline2: null,
                    ussd: null,
                    logo: null,
                    bank: null,
                    powered: null,
                    stateLogo: null,
                    QRLink:null
                },
                billDetails: {
                    id: null,
                    billNo: null,
                    incomeTypeID: null,
                    incomeTypeDescription: null,
                    costCenterNo: null,
                    accountNo: null,
                    feeID: null,
                    detailAmount: null,
                    amountPaid: null,
                    balance: null,
                    status: null,
                    dateCreated: null,
                },
                billInfo: [],
                customer: {
                id:null,
                names: null,
                phoneNumber: null,
                email:null,
                createdBy: null,
                dateCreated: null,
              }
            };
        },
        mounted() {
            let params = {}
            try {
                params = JSON.parse(localStorage['params'])
                console.log('####'+ params.billNo)
                this.getBill(params.billNo);
            } catch (error) {
                // ignore
            }
        },
        methods: {
            showDate() {
                const dateObj = new Date();
                const currentDate =
                    dateObj.getDate() +
                    "/" +
                    dateObj.getMonth() +
                    "/" +
                    dateObj.getFullYear();
                return currentDate;
            },
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace(".", ",");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            getBill(billNo) {
                const data = new FormData();
                data.append("function", "getBill");
                data.append("billNo", billNo);
                let stream = null;
                if (billNo.startsWith("SBP")) {
                    stream = trade;
                }
                if (billNo.startsWith("PKN")) {
                    stream = parking;
                }
                if (billNo.startsWith("RNT")) {
                    stream = rent;
                }
                if (billNo.startsWith("BLL")) {
                    stream = biller;
                }
                execute(data, stream)
                    .then((res) => {
                        if (res.data.success) {
                            this.billDetails = res.data.data.billDetails;
                            this.billInfo = res.data.data.billInfo;
                            this.county = res.data.data.county;
                            this.customer = res.data.data.customer;
                           // this.link = this.county.QRLink+"BillNo: "
                          this.link = this.county.QRLink+"BillNo: "+this.billDetails.billNo+" |\n" +this.customer.names+" | Amount: "+this.billDetails.detailAmount+" | Date:"+this.billDetails.dateCreated;

                        } else {
                            alert(res.data.data.message);
                        }
                    })
                    .catch((e) => {
                        alert(e.message);
                    });
            },
        },
    };
</script>
