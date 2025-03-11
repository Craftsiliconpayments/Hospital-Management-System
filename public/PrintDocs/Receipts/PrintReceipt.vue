<template>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Receipt</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link
        href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
        rel="stylesheet"
    />
  </head>

  <!--@contextmenu.prevent-->
  <body @contextmenu.prevent
      style="
        padding: 0px;
        margin: 0px;
        font-family: 'Montserrat', sans-serif;
        background-color: #a2a2a21c;
        box-sizing: border-box;">


  <button class="print-btn" onclick="window.print()">
    <img :src="'./assets/printer.svg'" alt="Printer Icon"/>
  </button>

  <button class="print-btn email-doc" title="send On Email"><img :src="'./assets/email-icon.png'" alt="Printer Icon ">
  </button>

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
              :src="county.logo"
              style="height: 20mm; margin-right: 5mm"
          />
        </div>
        <div>
          <h2
              style="
                  margin-top: 0px;
                  font-size: 18px;
                  text-transform: uppercase;
                  color: #146fc5;
                  font-weight: 700;
                  margin-bottom: 1.2mm;
                  padding-bottom: 0px;
                "
          >
            COUNTY GOVERNMENT OF {{county.countyName}}
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
            Printed on {{showDate() }}
          </p>
        </div>
      </header>
      <div>
        <img :src="'./assets/blue-line.png'" style="width: 100%"/>
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
                  color: #146fc5;
                  font-weight: 700;
                  margin-bottom: 3.3mm;
                  margin-top: 3.3mm;
                  padding-bottom: 0px;
                "
          >
            Receipt For {{ receiptDetails.incomeTypeDescription }}
          </h2>

          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Support Tel No: {{county.contact}}
          </p>
          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Email:{{county.email}}
          </p>
          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Office Line (Business Hours) {{county.contact}}
          </p>

          <p
              style="
                  padding: 0px;
                  margin: 0px;
                  padding-top: 4.3mm;
                  padding-bottom: 1.5mm;
                "
          >
            Payment Received From:
            <strong>{{ receiptDetails.paidBy }}</strong>
          </p>
          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Receipt No. <strong>{{ receiptDetails.receiptNo }}</strong>

          </p>
            <p>
              <strong>{{receiptDetails.subCountyName}}, {{receiptDetails.wardName}}, {{receiptDetails.zone}}</strong>
            </p>

        </div>

        <!-- the qr code -->
        <div
            style="
                height: 25.3mm;
                margin-top: 3.3mm;
                width: 25.3mm;
                border: 2px solid #146fc5;
                display: flex;
                justify-content: center;
                align-items: center;
              "
        >
          <img :src="link" style="height: 25mm"/>
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
            Amount Paid
          </td>
        </tr>
        </thead>
        <tbody v-for="(item, index) in receiptInfos" :key="`item-${index}`" style="font-size: 12px">
        <tr>
          <td style="padding: 2.5mm">
            {{ index + 1 }}. {{ receiptDetails.incomeTypeDescription }}
          </td>
          <td style="padding: 2.5mm">
            {{ item.feeDescription}}
            <p>{{item.description}}</p>
          </td>
          <td style="text-align: right; padding: 2.5mm">
            <strong>KES {{item.receiptAmount}}</strong>
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
                  color: #146fc5;
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
            Paid via <strong>{{ receiptDetails.source }} #{{receiptDetails.transactionCode}}</strong>
          </p>
          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Bill NO. <strong>{{receiptDetails.billNo}}</strong>
          </p>

          <p
              style="
                  padding: 0px;
                  margin: 0px;
                  padding-top: 4.3mm;
                  padding-bottom: 1.5mm;
                "
          >
            Billing Date: <strong>{{ receiptDetails.dateCreated }}</strong>
          </p>
          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Payment date <strong>{{ receiptDetails.dateCreated }}</strong>
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
                <strong>KES {{receiptDetails.detailAmount}}</strong>
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
                <strong>KES {{receiptDetails.receiptAmount}}</strong>
              </td>
            </tr>

            <tr>
              <td style="padding: 2.5mm">Balance:</td>
              <td style="text-align: right; padding: 2.5mm">
                <strong>KES {{receiptDetails.billBalance}}</strong>
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
                  color: #146fc5;
                  font-weight: 700;
                  margin-bottom: 3.3mm;
                  padding-bottom: 0px;
                  text-transform: uppercase;
                "
          >
            County channels platforms
          </h2>

          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            USSD Code:<strong>{{county.ussd}}</strong>
          </p>
          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Self service portal: <strong>{{county.selfService}}</strong>
          </p>
          <p style="padding: 0px; margin: 0px; padding-bottom: 1.5mm">
            Mobile App: <strong>{{county.mobileApp}}</strong>
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
                    color: #146fc5;
                    line-height: 0.9;
                    font-size: 20px;
                  "
            >Scan to download the <br/>Android App.</span
            >
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
                    color: #146fc5;
                    line-height: 0.9;
                    font-size: 20px;
                  "
                >Thank You!</span
                >
            <img :src="'./assets/blue-line.png'" style="width: 100%"/>
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
              Served <strong>{{receiptDetails.names}}</strong>
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
              <p>{{county.powered}}</p>
              <img
                  :src="county.poweredByLogo"
                  style="height: 10mm; padding-left: 2.5mm"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  </page>
  </body>

</template>

<script>
import {execute, biller} from "@/api";

export default {
  name: "printReceipt",
  data() {
    return {
      date: null,
      receiptDetails: {
        id: null,
        receiptNo: null,
        billNo: null,
        detailAmount: null,
        receiptAmount: null,
        billBalance: null,
        costCenterNo: null,
        accountNo: null,
        incomeTypeDescription: null,
        feeID: null,
        wardID: null,
        subCountyID: null,
        currency: null,
        source: null,
        transactionCode: null,
        paidBy: null,
        dateCreated: null,
        dateModified: null,
        createdBy: null,
        modifiedBy: null,
        isActive: null,
        status: null,
      },
      link: '',
      receiptInfos: [],
      county: {
        id: null,
        countyID: null,
        countyName: null,
        tagline: null,
        smsusername: null,
        smspassword: null,
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
        seal: null,
        signature: null,
        lat: null,
        lng: null,
        link: null,
        paysol: null,
        poweredByLogo: null,
        mobileApp: null,
        selfService: null,
        QRlink:null
      },
    };
  },
  mounted() {
    let params = {}
    try {
      params = JSON.parse(localStorage['params'])
      console.log('####' + params.receiptNo)
      this.getReceipt(params.receiptNo);
    } catch (error) {
      // ignore
    }

    this.menuAccess()

  },
  methods: {

    menuAccess(){

      const data = new FormData();
      data.append("function", "menuAccess");
      data.append("menu", "Print Receipt");
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

     showDate() {
  const dateObj = new Date();
  const currentDate =
      dateObj.getDate() +
      "/" +
      (dateObj.getMonth() + 1) +
      "/" +
      dateObj.getFullYear();
  return currentDate;
},
formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    getReceipt(receiptNo) {
      const data = new FormData();
      data.append("function", "getReceipt");
      data.append("receiptNo", receiptNo);


      execute(data, biller)
          .then((res) => {
            if (res.data.success) {
              this.receiptDetails = res.data.data.receiptDetails;
              this.receiptInfos = res.data.data.receiptInfos;
              this.county = res.data.data.county;
              this.link = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='+this.receiptDetails.receiptNo


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

.print-btn img {
  height: 35px;
}

.email-doc {
  top: 130px;
  background: #146fc5;
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
