<template>

  <!-- Mirrored from html.physcode.com/travel/home-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 11 Feb 2020 16:05:20 GMT -->

<!-- Mirrored from html.physcode.com/travel/home-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 11 Feb 2020 16:05:20 GMT -->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>County Bill</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet">


</head>

<body  style="padding: 0px; margin: 0px; font-family: 'Montserrat', sans-serif; background-color: #a2a2a21c;box-sizing: border-box;">

    <button class="print-btn" onclick="window.print()"><img src="assets/printer.svg" alt="Printer Icon"></button>
    <button class="print-btn email-doc" title="send On Email"><img src="assets/email-icon.png" alt="Printer Icon "></button>

    <page class="page" style="width: 210mm; height:297mm; display: flex; position: relative; flex-flow: column; background-color: white;">
        <!-- main content -->
        <div style="padding: 8.5mm;">

            <header style="display: flex; height: 47mm; align-items: center; position: relative; width: 100%; justify-content: space-between;">
                <div>
                    <img :src="county.stateLogo" style="height: 36mm; margin-right: 0mm;">
                </div>
                <div style="text-align: center; margin-right: 8.5mm; margin-left: 8.5mm;">
                    <h2 style="
                        margin-top: 0px;
                        font-size: 26px;
                        text-transform: uppercase;
                        color: #4ca82c;
                        font-weight: 700;
                        margin-bottom: 1.2mm;
                        padding-bottom: 0px;

                    ">
                       County Government <br> Of {{county.countyName}}
                    </h2>

                    <h5 style="padding: 0px;
                    margin: 0px;
                    font-size: 18px;
                    font-weight: bold; text-transform: uppercase; margin-bottom: 4.5mm;">
                        ({{billDetails.subCountyName}} {{billDetails.wardName}} {{billDetails.zone}})
                    </h5>

                    <h4 style="padding: 0px;
                    margin: 0px;
                    font-size: 14px;
                    font-weight: 400;">
                       {{county.address}} <br>
                       Email: {{county.email}}
                    </h4>

                    <h4 style="padding: 0px;
                    margin: 0px;
                    font-size: 13px;
                    font-weight: 400; font-style: italic; font-family: 'Times New Roman', Times, serif; margin-top: 2mm;">
                       <span style="font-style: italic; font-family: 'Times New Roman', Times, serif; margin-right: 3mm;">{{county.headline}}</span>
                       <span style="font-style: italic; font-family: 'Times New Roman', Times, serif;">{{county.tagline2}}</span>
                    </h4>

                </div>
                <div>
                    <img :src="county.logo" style="height: 36mm; margin-right: 0mm;">
                </div>

            </header>
            <div>
                <img src="assets/blue-line.png" style="width: 100%;">
            </div>

            <!-- contact information and QR code -->
            <div style="display: flex; justify-content: space-between;">

                <!-- contact information -->
                <div style="font-size: 12px;">

                    <p style="padding: 0px; margin: 0px; padding-top: 4.3mm; padding-bottom: 1.5mm;">Issued To: <strong>{{customer.names}}</strong></p>
                    <p style="padding: 0px; margin: 0px; padding-top: 0mm; padding-bottom: 1.5mm;">Date of Creation: <strong style="text-transform:uppercase;">{{formatDate(billDetails.dateCreated)}}</strong></p>
                    <p style="padding: 0px; margin: 0px; padding-top: 0mm; padding-bottom: 1.5mm;">Invoice No. <strong style="text-transform:uppercase;">{{billDetails.billNo}}</strong></p>
                    <p style="padding: 0px; margin: 0px; padding-top: 0mm; padding-bottom: 1.5mm; margin-top:1.5mm;">Printed On. <strong style="text-transform:uppercase;">{{getCurrentDateTime()}}</strong></p>

                </div>

                <!-- the qr code -->
                <div style="height: 25.3mm; margin-top: 3.3mm;; width: 25.3mm; border: 2px solid #0045a1; display: flex; justify-content: center; align-items: center;">
                    <img :src="link" style="height: 25mm;">

                </div>

            </div>

            <!-- the table -->

            <!-- the table contents -->
            <table style="margin-top:6.3mm; border-spacing: initial; min-height: 70mm; width: 100%;">
                <thead class="" style="text-transform: uppercase;
                font-weight: 700;
                font-size: 12px;
                background: #e2f2fd;
                padding: 2.5mm;">
                    <tr>
                        <td style="padding: 2.5mm;">No.</td>
                        <td style="padding: 2.5mm;">Fee Description</td>
                        <td style="text-align: right; padding: 2.5mm; width: 50mm;">Amount</td>
                    </tr>

                </thead>
                <tbody style="font-size: 12px;">
                    <tr v-for="(item, index) in billInfo" :key="`item-${index}`">
                        <td style="padding: 2.5mm; border-bottom: 1px solid #80808029;">{{index+1}}.</td>
                        <td style="padding: 2.5mm; border-bottom: 1px solid #80808029;">

                            <p style="margin: 0px;padding: 0px;">{{item.feeDescription}}</p>
                            <strong style="">{{item.customer}}</strong>  <small><strong style="">{{item.description}}</strong></small>
                        </td>
                        <td style="text-align: right; padding: 2.5mm; border-bottom: 1px solid #80808029; padding-top: 0px;">
                            <strong>KES {{numberFormat(item.billTotal)}}</strong>
                        </td>
                    </tr>

                </tbody>
            </table>

            <div>
                <img src="assets/blue-line.png" style="width: 100%; margin-bottom: 0mm;">
            </div>

            <!-- billing details and summary -->

            <div class="" style="display:flex; text-transform: uppercase; justify-content:flex-end;">


                <div>
                    <table style=" margin-top:3.3mm; border-spacing: inherit; text-transform: capitalize; font-size: 14px;">
                        <tbody>
                            <tr>
                                <td style="padding: 2.5mm; border-bottom: 1px solid #d9d9d9;">Amount Billed:</td>
                                <td style="text-align: right; padding: 2.5mm; border-bottom: 1px solid #d9d9d9;"><strong>KES {{numberFormat(billDetails.detailAmount)}}</strong></td>
                            </tr>

                            <tr>
                                <td style="padding: 2.5mm; border-bottom: 1px solid #d9d9d9;">Amount Paid</td>
                                <td style="text-align: right; padding: 2.5mm; border-bottom: 1px solid #d9d9d9;"><strong>KES {{numberFormat(billDetails.receiptAmount)}}</strong></td>
                            </tr>

                            <tr>
                                <td style="padding: 2.5mm;">Payable Balance:</td>
                                <td style="text-align: right; padding: 2.5mm;"> <strong>KES {{numberFormat(billDetails.billBalance)}}</strong></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </div>

        <!-- the footer starts here -->
        <div style="padding: 8.5mm;width: 100%;background-color: #e2f2fd;flex-grow: 1;margin-top: 0mm;display: flex;flex-flow: column;align-items: baseline;justify-content: space-between;">
            <div style="display: flex;justify-content: space-between;width: 100%;">

                <div style="font-size: 12px;padding-top:3.3mm;">
                    <h2 style="
                        margin-top: 0px;
                        font-size: 18px;
                        text-transform: uppercase;
                        color: #0045a1;
                        font-weight: 700;
                        margin-bottom: 3.3mm;
                        padding-bottom: 0px;
                        text-transform: uppercase;

                    ">
                        Payment Options
                    </h2>
                    <p><strong>MPESA</strong> </p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1mm;">Pay Bill  No. <strong>{{bank.payBill}}</strong></p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1mm;">Account Name <strong>{{billDetails.billNo}}</strong></p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1mm;">Amount <strong>KES {{numberFormat(billDetails.billBalance)}}</strong></p>

                    <p style="padding-top:1mm"><strong>BANK</strong> </p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm;">Bank <strong>{{bank.bank }}</strong></p>
                    <p style="padding: 0px; margin: 0px; padding-bottom: 1mm;">Amount <strong>KES {{numberFormat(billDetails.billBalance)}}</strong></p>

                </div>

                <!-- android logo -->

                <div style="padding-top:3.3mm;padding-left: 17.3mm; display: none;">
                    <div style="display: flex; margin-bottom: 4mm; justify-content: center; align-items: center; ">
                        <img src="assets/android-logo.svg" style="
                        margin-right: 3.3mm;
                        height: 12mm;
                    ">
                        <span style="font-family: 'Yellowtail', cursive;  color: #0045a1; line-height: 0.9; font-size: 20px;">Scan to download the  <br>Android App.</span>
                    </div>

                    <div style="position: relative; display: flex; display: none;">
                        <img src="assets/code-demo.png" style="height: 16.6mm; margin: 1.25mm;">
                        <img src="assets/camera-frame.svg" style="
                        position: absolute;
                        left: 0;
                        height: 18.6mm;

                    ">

                        <img src="assets/curved-arrow.svg" style="
                        height: 13mm;
                        margin-left: 4mm;
                        display: none;
                    ">
                    </div>




                </div>

            </div>

            <footer style="position: relative; width: 100%;">
                <div style="position: absolute; bottom: 0mm;">

                    <div style="display: flex; flex-flow: column;">
                        <span style="font-family: 'Yellowtail', cursive;  color: #0045a1; line-height: 0.9; font-size: 20px; text-align: right;">Thank You!</span>
                        <img src="assets/blue-line.png" style="width: 100%;">
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2mm;">
                        <p style="padding-bottom: 10px;margin-bottom:0px;font-size: 12px;margin-top: 0mm;">Served By <strong>{{billDetails.names}}</strong> {{county.powered}}</p>
                        <p style="padding-bottom:10px; margin-bottom:0px;font-size: 12px;margin-top: 0mm;"><strong>INVOICE NO. {{billDetails.billNo}}</strong></p>

                        <div style="display:none; position: absolute; display: non; align-items: center; justify-content: center; font-size: 12px; margin-left: 8.5mm;">
                           <!-- <p>{{county.powered}}</p>-->
                          <!--  <img v-if="billDetails.status === 'PAID'" src="assets/paid.svg" style="height: 10mm; padding-left: 2.5mm;">
                            <img v-if="billDetails.status === 'UNPAID'" src="assets/unpaid.svg" style="height: 10mm; padding-left: 2.5mm;">-->
                        </div>
                    </div>{{county.tagline2}}
                </div>
            </footer>



        </div>
    </page>
</body>


</template>

<style scoped>
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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
  .email-doc{
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
      background-color: white;
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
import { execute,biller } from "@/api";
import dayjs from 'dayjs';

export default {
  name: "PrintBill",
  data() {
    return {
      date: null,
        link:'',
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
        customer: {
            id: 1,
            names: null,
            phoneNumber: null,
            email: null,
            createdBy: null,
            dateCreated: null
        },
        bank: {
        id: null,
        bankID:  null,
        bank:  null,
        payBill:  null
      },
        payBill: {
            id: null,
            stream: null,
            shortCode: null
        },
        billDetails: {
            id: null,
            billNo: null,
            incomeTypeID: null,
            incomeTypeDescription:null,
            costCenterNo: null,
            accountNo:null ,
            description: null,
            feeID: null,
            feeDescription: null,
            detailAmount: null,
            receiptAmount: null,
            billBalance: null,
            wardID: null,
            subCountyID: null,
            subCountyName: null,
            wardName: null,
            status: null,
            dateCreated: null,
            zone: null,
            departmentID: null,
            department: null,
            idNo: null,
            phoneNumber: null,
            names: null,
            customerPhoneNumber: null,
            category:null,
            incomeTypePrefix: null
        },
        billInfo: [
            {
                id: null,
                billNo: null,
                feeID: null,
                feeDescription: null,
                fiscalYear: null,
                paymentCode: null,
                customer: null,
                description: null,
                periodID: null,
                wardID: null,
                subCountyID: null,
                subCountyName: null,
                wardName: null,
                createdBy: null,
                billTotal: null,
                receiptAmount: null,
                billBalance: null,
                status: null,
                dateCreated:null,
                zone: null,
                departmentID: null,
                department: null,
                idNo: null,
                phoneNumber: null,
                names: null,
                customerPhoneNumber: null,
                category: null,
                incomeTypePrefix: null
            }
        ]
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

    this.menuAccess()
  },
  methods: {
    menuAccess(){

      const data = new FormData();
      data.append("function", "menuAccess");
      data.append("menu", "Bills");
      data.append("sessionNames", sessionStorage.getItem("sessionNames"));
      data.append("sessionIdNo",  sessionStorage.getItem("sessionIdNo"));
      execute(data,biller)
          .then(() => {
            // alert(res.data.message);
          })
          .catch(() => {
            // alert(e.message);
          });

    },
      getCurrentDateTime() {
// Create a new Date object with the current date and time
          const now = new Date();
// Format the date and time as DD MMM YYYY hh:mm:ss
          const formattedDateTime = now.toLocaleString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: false
          });
// Return the formatted date and time
          return formattedDateTime;
      },
      numberFormat(num) {
          const britishNumberFormatter = new Intl.NumberFormat("en-GB");
          return britishNumberFormatter.format(num)
      },
      formatDate(dateString) {
// Parse the date string with the original format
          const date = dayjs(dateString, 'YYYY-MM-DD HH:mm:ss');
// Format the date with the desired format
          return date.format('DD MMM YYYY [AT] hh:mm A');
      },
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

      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
                this.county = res.data.data.county
                this.payBill = res.data.data.payBill
                if(res.data.data.customer!==null)
                this.customer = res.data.data.customer
               this.billDetails = res.data.data.billDetails;
               this.billInfo = res.data.data.billInfo;
                this.bank = res.data.data.bank

           /*     this.link = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=BillNo: "+this.billDetails.billNo+" |\n "
                    +this.customer.names+" | Date: "+ this.billDetails.dateCreated+" | Amount:"+this.billDetails.detailAmount;
                */
                this.link = this.county.QRLink+"BillNo: "+this.billDetails.billNo+" |\n "
                    +this.customer.names+" | Date: "+ this.billDetails.dateCreated+" | Amount:"+this.billDetails.detailAmount;

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
