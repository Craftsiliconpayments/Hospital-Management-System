<template>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Parking Sticker</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet">

</head>

<body @contextmenu.prevent style="padding: 0px; margin: 0px; font-family: 'Montserrat', sans-serif; background-color: white;box-sizing: border-box; display: flex; flex-wrap: wrap" >

    <button class="print-btn" onclick="window.print()"><img src="assets/printer.svg" alt="Printer Icon"></button>
    <button class="print-btn email-doc" title="send On Email"><img src="assets/email-icon.png" alt="Printer Icon "></button>


    <div :key="index" :value="item" v-for="(item, index) in stickers" class="page" style="width: 80mm; min-height:80mm; margin-bottom: 7mm; display: flex; position: relative; flex-flow: column; background-color: white;background-image: url('assets/backgroundPtn.png');display: flex; flex-wrap: wrap">

        <div style="padding: 4.5mm; margin:2mm; display: flex; flex-flow: column; background-color: rgb(119 191 90 /13%);">

            <header style="display: flex;position: relative; width: 100%; justify-content: space-between;">
                <div>
                    <img :src="county.stateLogo" style="height: 11mm; margin-right: 0mm;">
                </div>

                <div style="text-align: center; margin-right: 2.5mm; margin-left: 2.5mm;">
                    <h2 style="
                        margin-top: 0px;
                        font-size: 10px;
                        text-transform: uppercase;
                        color: #4ca82c;
                        font-weight: 700;
                        margin-bottom: 1.2mm;
                        padding-bottom: 0px;

                    ">
                       {{county.countyName}} {{county.center}}
                    </h2>

                    <h4 style="padding: 0px;
                    margin: 0px;
                    font-size: 8px;
                    display: non;
                    font-weight: bold; text-transform: uppercase; margin-bottom: 2mm;">
                        {{item.duration}}
                    </h4>

                    <h4 style="padding: 0px;
                    margin: 0px;
                    font-size: 8px;
                    font-weight: 400;">
                       {{item.saccoName}}<br>
                       Valid Till {{item.endDate}}
                    </h4>

                    <h4 style="padding: 0px;
                    margin: 0px;
                    font-size: 8px;
                    font-weight: 400; font-style: italic; font-family: 'Times New Roman', Times, serif; margin-top: 2mm;">
                       <span style="font-style: italic; font-family: 'Times New Roman', Times, serif; margin-right: 3mm;">Processed On {{item.startDate}}</span>
                    </h4>

                </div>
                <div>
                    <img :src="county.logo" style="height: 11mm; margin-right: 0mm;">
                </div>

            </header>

            <div>
                <img src="assets/green-line.png" style="width: 100%; display: none;">
            </div>

          <div style="display: flex; justify-content: center;">


                <div style="font-size: 12px;align-items: center; justify-content: center; padding: 2.5mm; flex-flow: column; display: flex;">
                    <p style="padding: 0px; margin: 0px; padding-bottom: 2.5mm; text-align: center; text-transform: capitalize; font-weight: bold;">{{item.numberPlate}} ({{item.category}})</p>

                    <div style="position: relative; display: flex; ">
                      <!--  <img :src="'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=NumberPlate:${item.numberPlate}'" style="height: 22.6mm; margin: 1.25mm;">
-->
                        <img
                                :src="getLink(item)"
                                style="height: 22.6mm; margin: 1.25mm;"
                        />

                        <img src="assets/camera-frame.svg" style="
                        position: absolute;
                        left: 0;
                        height: 24.6mm;
                    ">

                    </div>

                </div>


            </div>


           <div>
                <img src="assets/green-line.png" style="width: 100%; margin-bottom: 2mm; margin-top: 2mm;">
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2mm;">
                <span style="font-family: 'Yellowtail', cursive;  color: #4ca82c; line-height: 0.9; font-size: 20px;">Thank You!</span>
                <div style="display: flex; display: non; align-items: center; justify-content: center; font-size: 7px; margin-left: 2.5mm; text-transform: uppercase;">
                    <p style="text-transform: capitalize; font-family: 'Times New Roman', Times, serif; font-style:italic;">{{county.powered}} </p>

                    <div>
                        <img style="
                        height: 8mm;
                        margin-left: 3mm;" :src="county.poweredByLogo" alt="">
                    </div>


                </div>
            </div>


        </div>

    </div>


</body>

</template>

<script>
    import numWords from "num-words";
    import {biller, execute, parking} from "@/api";
    import moment from "moment";

    export default {
        name: "ParkingSticker",
        data() {
            return {
                link:'',
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
                    stateLogo:null,
                    seal: null,
                    signature: null,
                    lat: null,
                    lng:null,
                    link: null,
                    paysol: null,
                    poweredByLogo: null,
                    QRlink:null
                },
                stickers: [
                    {
                        id:null,
                        parkingCode:null,
                        numberPlate:null,
                        duration: null,
                        category: null,
                        zone: null,
                        billTotal: null,
                        receiptAmount: null,
                        billBalance: null,
                        startDate: null,
                        endDate: null,
                        status: null,
                        transactionCode: null,
                        paymentMode: null,
                        street: null,
                        paidBy: null,
                        saccoID: null,
                        saccoName:null,
                        feeID: null
                    }],
                sticker:
                    {
                        id: null,
                        parkingCode: null,
                        numberPlate: null,
                        duration: null,
                        category: null,
                        zone: null,
                        billTotal: null,
                        receiptAmount: null,
                        billBalance: null,
                        startDate: null,
                        endDate: null,
                        status: null,
                        transactionCode: null,
                        paymentMode: null,
                        street: null,
                        paidBy: null,
                        saccoID: null,
                        saccoName: null,
                        feeID: null
                    }
            };
        },
        computed: {
            year() {
                let date = new Date(this.permit.startDate);
                let year = date.getFullYear();
                return year;
            }},
        mounted() {
            let params = {}
            try {

                params = JSON.parse(localStorage['params'])
                console.log('####'+ params.saccoID)
                this.getStickers(params.saccoID);
            } catch (error) {
                // ignore
            }


            this.menuAccess()

        },
        methods: {

          menuAccess(){

            const data = new FormData();
            data.append("function", "menuAccess");
            data.append("menu", "Parking Sticker");
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

            getLink(sticker){
                return 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='+`${sticker.numberPlate} ~ Expiry:${sticker.endDate} ~ ${sticker.category} Sticker`;
             // return this.county.QRlink+`id-${sticker.id}`;

            },
            getStickers(saccoID) {
                this.stickers.splice(0)
                const data = new FormData();
                data.append("function", "getStickers");
                data.append("saccoID", saccoID);

                execute(data,parking)
                    .then((res) => {
                        if (res.data.success) {
                           this.county = res.data.data.county
                          this.stickers = res.data.data.stickers


                        } else {
                            alert(res.data.data.message);
                        }
                    })
                    .catch((e) => {
                        alert(e.message);
                    });
            },
            currentDate(){
                let date = new Date();
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();
                let hour = date.getHours();
                let minute = date.getMinutes();
                let suffix = hour >= 12 ? "PM" : "AM";
                hour = hour % 12 || 12;
                day = day < 10 ? "0" + day : day;
                month = month < 10 ? "0" + (month + 1) : month + 1;
                minute = minute < 10 ? "0" + minute : minute;
                let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let monthName = months[month - 1];
                let formattedDate = `${day} ${monthName} ${year} ${hour}:${minute} ${suffix}`;
                return formattedDate;
            },
            formattedDate(date2) {
                let date = new Date(date2);
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();
                let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let monthName = months[month];
                return `${day} ${monthName} ${year}`;
            },

            numberWords(num){
                return numWords(num)
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
            formattedTime(time) {
                return moment(time).format('hh:mm A')
            },
            numberFormat(num) {
                const britishNumberFormatter = new Intl.NumberFormat("en-GB");
                return britishNumberFormatter.format(num)
            },
        },
    }
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
</style>

