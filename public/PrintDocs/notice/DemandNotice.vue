<template>


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

  <body @contextmenu.prevent style="padding: 0px; margin: 0px; font-family: 'Montserrat', sans-serif; background-color: #a2a2a21c;box-sizing: border-box;">

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
            County Government <br> {{county.countyName}}
          </h2>

          <h4 style="padding: 0px;
                    margin: 0px;
                    font-size: 18px;
                    font-weight: bold; text-transform: uppercase; margin-bottom: 0;">
            Demand Notice
          </h4>

          <h4 style="padding: 0px;
                    margin: 0px;
                    font-size: 13px;
                    font-weight: 400; font-style: italic; font-family: 'Times New Roman', Times, serif; margin-top: 0mm; margin-bottom: 4.5mm;">
            <span style="font-style: italic; font-family: 'Times New Roman', Times, serif; margin-right: 3mm;">The Rating Act (CAP 267)</span>

          </h4>

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
            <span style="font-style: italic; font-family: 'Times New Roman', Times, serif; margin-right: 3mm;">{{county.tagline}}</span>
            <span style="font-style: italic; font-family: 'Times New Roman', Times, serif;">#{{county.tagline2}}</span>
          </h4>

        </div>
        <div>
          <img :src="county.logo" style="height: 36mm; margin-right: 0mm;">
        </div>

      </header>
      <div>
        <img src="./assets/red-line.png" style="width: 100%;">
      </div>

      <!-- contact information and QR code -->

      <!-- the table -->
      <div style="display: flex; justify-content: space-between;">

        <!-- contact information -->
        <div style="font-size: 12px; margin-top: 1.5mm;">
          <p style="padding: 0px; margin: 0px; padding-top: 0mm; padding-bottom: 1.5mm; margin-top:0.05mm;">Printed By <strong style="text-transform:uppercase;">{{sessionNames}}</strong></p>

          <p style="padding: 0px; margin: 0px; padding-top: 0mm; padding-bottom: 1.5mm; margin-top:1.5mm;">Date Printed <strong style="text-transform:uppercase;">{{formatDate(showDate())}}</strong></p>
        </div>


      </div>
      <!-- the table contents -->
      <table style="margin-top:6.3mm; border-spacing: initial; width: 100%;">
        <thead class="" style="text-transform: uppercase;
                font-weight: 700;
                font-size: 12px;
                background: #9e9e9e2e;
                padding: 2.5mm;">
        <tr>
          <td colspan="3" style="padding: 2.5mm;">Issued On: {{formatDate(billDetails.dateCreated)}}</td>
        </tr>

        </thead>
        <tbody style="font-size: 12px; text-transform: uppercase; text-wrap: nowrap;">
        <tr>
          <td>
            <span>UPN NO.: </span>
            <strong>{{upn}}</strong>
          </td>


          <td>
            <span>Block No.: </span>
            <strong>{{blockNo}}</strong>
          </td>

          <td>
            <span>Plot No.: </span>
            <strong>{{plotNumber}}</strong>
          </td>

        </tr>

        <tr>
          <td>
            <span>Sub County: </span>
            <strong>{{billDetails.subCountyName}}</strong>
          </td>


          <td>
            <span>Ward: </span>
            <strong>{{billDetails.wardName}}</strong>
          </td>

          <td>
            <span>Zone/Market: </span>
            <strong>{{billDetails.zone}}</strong>
          </td>

        </tr>

        <tr>
          <td colspan="3">
            <span>Payer: </span>
            <strong>{{name}}</strong>
          </td>
        </tr>

        <tr>
          <td colspan="3">
            <span>Address: </span>
            <strong>{{address}}</strong>
          </td>
        </tr>

        </tbody>
      </table>

      <div>
        <img src="./assets/red-line.png" style="width: 100%; margin-bottom: 0mm;">
      </div>

      <!-- billing details and summary -->

      <div class="" style="display:flex; text-transform: uppercase; justify-content:space-between;">

        <div style="height: 25.3mm; margin-top: 3.3mm;; width: 25.3mm; display: flex; justify-content: center; align-items: center;">
          <img src="./assets/demand-notice-stamp.png" style="height: 36mm;
                    margin-left: 20mm;
                    transform: rotate(45deg);
                    opacity: 1.6;
                    margin-top: 20mm;">
        </div>


        <div>


          <table style=" margin-top:3.3mm; border-spacing: inherit; text-transform: capitalize; font-size: 14px;">
            <thead class="" style="text-transform: uppercase;
                            font-weight: 700;
                            font-size: 12px;
                            background: #9e9e9e2e;
                            padding: 2.5mm;">
            <tr>
              <td colspan="2" style="padding: 2.5mm;">Details Of Charges</td>
            </tr>

            </thead>
            <tbody>
            <tr>
              <td style="padding: 2.5mm; border-bottom: 1px solid #d9d9d9;">Last Billed For Year</td>
              <td style="text-align: right; padding: 2.5mm; border-bottom: 1px solid #d9d9d9;"><strong>{{getYear(billDetails.dateCreated)}}</strong></td>
            </tr>

            <tr>
              <td style="padding: 2.5mm; border-bottom: 1px solid #d9d9d9;">Annual Charges</td>
              <td style="text-align: right; padding: 2.5mm; border-bottom: 1px solid #d9d9d9;"><strong>KES {{billDetails.detailAmount}}</strong></td>
            </tr>

            <tr>
              <td style="padding: 2.5mm;">Current Balance:</td>
              <td style="text-align: right; padding: 2.5mm; color: #ff1414;"> <strong>KES {{billDetails.billBalance}}</strong></td>
            </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>

    <!-- the footer starts here -->
    <div style="padding: 8.5mm;width: 100%;background-color: #9e9e9e2e;flex-grow: 1;margin-top: 0mm;display: flex;flex-flow: column;align-items: baseline;justify-content: space-between;">
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
            Please note that the outstanding amount is
          </h2>
          <ol class="">
            <li style="margin-bottom: 2.5mm;">Payable at the county cash office or by other electronic means clearly outlined by the county</li>
            <li style="margin-bottom: 2.5mm;"> The total amount will continue to accrue a late payment penalty at the stipulated rate.</li>
          </ol>

          <p><strong>Please contact the customer service at county offices for any queries.</strong></p>

        </div>

        <!-- android logo -->
        <div style="padding-top:3.3mm;padding-left: 17.3mm;">
          <div style="display: flex; margin-bottom: 4mm; justify-content: flex-end; align-items: center;">
            <img src="assets/android-logo.svg" style="
                        margin-right: 3.3mm;
                        height: 11mm;
                        display: none;
                    ">
            <span style="font-family: 'Yellowtail', cursive;  color: #4ca82c; line-height: 0.9; font-size: 27px; text-align: right; transform: rotate(37deg);">Scan to Pay  <br>Instantly!</span>
          </div>

          <div style="position: relative; display: flex;">
            <img :src="link" style="height: 25.6mm; margin: 1.25mm;">
            <img src="assets/camera-frame.svg" style="
                        position: absolute;
                        left: 0;
                        height: 27.6mm;


                    ">

            <img src="assets/curved-arrow.svg" style="
                        height: 13mm;
                        margin-left: 0mm;
                        margin-top: 15px;
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
            <p style="padding-bottom: 10px;margin-bottom:0px;font-size: 12px;margin-top: 0mm;">Prepared By <strong>{{billDetails.names}}</strong></p>
            <p style="padding-bottom:10px; margin-bottom:0px;font-size: 12px;margin-top: 0mm; text-transform: uppercase;"><strong>Notice Ref NO. {{billDetails.billNo}}</strong></p>
            <div style="position: absolut; display: flex; align-items: center; justify-content: center; font-size: 12px; margin-left: 8.5mm;">
              <p style="font-weight: bold;">Powered By</p>
              <img :src="county.poweredByLogo" style="height: 10mm; padding-left: 2.5mm;">
            </div>

            <div style="display: flex; bottom: 18mm; right: 0px; position: absolute; display: Notice Ref Number; align-items: center; justify-content: center; font-size: 12px; margin-left: 8.5mm;">
              <img src="./assets/unpaid.svg" style="height: 18mm; padding-left: 2.5mm; display: none;">
            </div>
          </div>
        </div>
      </footer>



    </div>
  </page>
  </body>


</template>

<script>

import { execute,biller } from "@/api";
import dayjs from 'dayjs';

export default {
  name: "PrintBill",
  data() {
    return {
      sessionNames:"",
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
        QRLink:null,
        poweredByLogo:null,
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
      ],
      upn:'',
      blockNo:'',
      plotNumber:'',
      name:'',
      address:''
    };
  },
  mounted() {


    // Get the hash from the URL
    const hash = window.location.hash;

    const numberFromURL = hash.split('/')[3];


    // If number is passed in the URL
    if (numberFromURL) {
      console.log('Number from URL:', numberFromURL);
      this.getBill(numberFromURL);
    } else {
      // Number is not passed in the URL, check localStorage
      this.sessionNames =  sessionStorage.getItem("sessionNames")
      let params = {}
      try {
        params = JSON.parse(localStorage['params'])
        console.log('####'+ params.billNo)
        this.getBill(params.billNo);
      } catch (error) {
        // ignore
      }
    }





    this.menuAccess()

  },
  methods: {
    getYear(dateCreated) {
      const date = new Date(dateCreated);
      return date.getFullYear();
    },
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

              // eslint-disable-next-line
              const regex = /UPN NO\.\:\s*(.*?)\s*\|\s*Block No\.\s*:\s*(.*?)\s*\|\s*Plot No\.\:\s*(.*?)\s*\|\s*Address\.\:\s*(.*?)\s*\|\s*Name\.\:\s*(.*?)(?:\s*\|.*|$)/;

              const match = this.billDetails.description.match(regex);
              //UPN NO.: undefined | Block No. :  | Plot No.: KISUMU/MUNICIPALITY/BLOC 4/300 | Address.: BLOCK 4
              if (match) {
                this.upn = match[1].trim() !== 'undefined' && match[1].trim() !== '' ? match[1].trim() : 'Not Provided';
                this.blockNo = match[2].trim() || 'Not Provided';
                this.plotNumber = match[3].trim() || 'Not Provided';
                this.address = match[4].trim() || 'Not Provided';
                this.name = match[5].trim() || 'Not Provided';
              } else {
                // Handle the case where the string doesn't match the pattern
                this.upn = 'Not Provided';
                this.blockNo = 'Not Provided';
                this.plotNumber = 'Not Provided';
                this.address = 'Not Provided';
                this.name = 'Not Provided';
              }

              this.link = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=PaybillNo: ${this.bank.payBill} | AccNo: ${this.billDetails.billNo} | Amount: ${this.billDetails.billBalance} `;


              /*     this.link = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=BillNo: "+this.billDetails.billNo+" |\n "
                       +this.customer.names+" | Date: "+ this.billDetails.dateCreated+" | Amount:"+this.billDetails.detailAmount;
                   */

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

td{
  padding: 15px;
  border: 1px solid #00000014;
}
</style>
