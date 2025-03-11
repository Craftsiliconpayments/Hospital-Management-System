import {createWebHashHistory, createRouter} from "vue-router";
import Login from "@/components/Login.vue";
import Dashboard from "@/components/Dashboard.vue";
import OutpatientCheckin from "@/components/patient-checking/OutpatientCheckin";
import Patients from "@/components/master-patient/Patients";
import PatientDetails from "@/components/master-patient/PatientDetails";
import PatientPayments from "@/components/master-patient/PatientPayments";
import PatientHistory from "@/components/master-patient/PatientHistory";
import QueueTriage from "@/components/patient-queue/triage/triage.vue";
import Vitals from "@/components/patient-queue/triage/vitals/Vitals.vue";
import VitalsHistory from "@/components/patient-queue/triage/vitals/VitalsHistory.vue";
import Immunization from "@/components/patient-queue/triage/Immunization.vue";
import ChronicIllnesses from "@/components/patient-queue/triage/ChronicIllnesses.vue";
import VitalsConsultation from "@/components/patient-queue/consultation/Vitals.vue";
import ImmunizationConsultation from "@/components/patient-queue/consultation/Immunization.vue";
import CurrentMedications from "@/components/patient-queue/consultation/CurrentMedications.vue";
import ConsultationComplaint from "@/components/patient-queue/consultation/ConsultationComplaint";
import Diagnosis from "@/components/patient-queue/consultation/Diagnosis.vue";
import ProcedureInvestigation from "@/components/patient-queue/consultation/ProcedureInvestigation.vue";
import InvestigationResults from "@/components/patient-queue/consultation/InvestigationResults.vue";
import Prescription from "@/components/patient-queue/consultation/Prescription.vue";
import otp from "@/components/otp.vue";
import PatientHistoryTriage from "@/components/patient-queue/triage/PatientHistoryTriage.vue";
import LabStats from "@/components/medical-lab/LabStats.vue";
import LabOrdersPendingPayment from "@/components/medical-lab/LabOrdersPendingPayment.vue";
import LabOrders from "@/components/medical-lab/LabOrders.vue";
import LabOrdersAcknowledged from "@/components/medical-lab/LabOrdersAcknowledged.vue";
import LabOrdersCollectedSample from "@/components/medical-lab/LabOrdersCollectedSample.vue";
import LabOrdersReleasedTests from "@/components/medical-lab/LabOrdersReleasedTests.vue";
import LabOrdersPendingReview from "@/components/medical-lab/LabOrdersPendingReview.vue";
import LabOrdersAcknowledgedPatient from "@/components/medical-lab/test-actions/LabOrdersAcknowledgedPatient.vue";
import LabOrdersAcknowledgedPatientSampledOrders from "@/components/medical-lab/test-actions/LabOrdersAcknowledgedPatientSampledOrders.vue";
import LabOrdersAcknowledgedPatientLabResultsEntry from "@/components/medical-lab/test-actions/LabOrdersAcknowledgedPatientLabResultsEntry.vue";
import LabOrdersAcknowledgedPatientPrevTest from "@/components/medical-lab/test-actions/LabOrdersAcknowledgedPatientPrevTest.vue";
import LabOrdersAcknowledgedPatientLabResultsPendingReview from "@/components/medical-lab/test-actions/LabOrdersAcknowledgedPatientLabResultsPendingReview.vue";
import Bill from "../../public/PrintDocs/Bill/Bill.vue";
import PrintReceipt from "../../public/PrintDocs/Receipts/PrintReceipt.vue";

//lab-orders-collected-sample

import {biller, execute} from "@/api";




const routes =[

    {
        path: '/bill',
        name: 'bill',
        component: Bill,
        meta:{public: false}
    },
    {
        path: "/receipt",
        name: "receipt",
        component: PrintReceipt,
        meta: {public: true}
    },

    {
        path:"/lab-orders-acknowledged-patient-lab-results-pending-review",
        name:"lab-orders-acknowledged-patient-lab-results-pending-review",
        component: LabOrdersAcknowledgedPatientLabResultsPendingReview,
        meta:{public: false}
    },
    {
        path:"/lab-orders-acknowledged-patient-lab-results-entry",
        name:"lab-orders-acknowledged-patient-lab-results-entry",
        component: LabOrdersAcknowledgedPatientLabResultsEntry,
        meta:{public: false}
    }, {
        path:"/lab-orders-acknowledged-patient-prev-test",
        name:"lab-orders-acknowledged-patient-prev-test",
        component: LabOrdersAcknowledgedPatientPrevTest,
        meta:{public: false}
    },
    {
        path:"/lab-orders-acknowledged-patient-sampled-orders",
        name:"lab-orders-acknowledged-patient-sampled-orders",
        component: LabOrdersAcknowledgedPatientSampledOrders,
        meta:{public: false}
    },
  {
        path:"/lab-orders-acknowledged-patient",
        name:"lab-orders-acknowledged-patient",
        component: LabOrdersAcknowledgedPatient,
        meta:{public: false}
    },

    {
        path:"/lab-orders-pending-review",
        name:"lab-orders-pending-review",
        component: LabOrdersPendingReview,
        meta:{public: false}
    },
    {
        path:"/lab-orders-released-tests",
        name:"lab-orders-released-tests",
        component: LabOrdersReleasedTests,
        meta:{public: false}
    },

    {
        path:"/lab-orders-collected-sample",
        name:"lab-orders-collected-sample",
        component: LabOrdersCollectedSample,
        meta:{public: false}
    },
    {
        path:"/lab-orders-acknowledged",
        name:"lab-orders-acknowledged",
        component: LabOrdersAcknowledged,
        meta:{public: false}
    },

    {
        path:"/",
        name:"",
        component: Login,
        meta:{public: true}
    },
    {
        path:"/lab-stats",
        name:"lab-stats",
        component: LabStats,
        meta:{public: false}
    },
    {
        path:"/lab-orders",
        name:"lab-orders",
        component: LabOrders,
        meta:{public: false}
    },
    {
        path:"/lab-orders-pending-payment",
        name:"lab-orders-pending-payment",
        component: LabOrdersPendingPayment,
        meta:{public: false}
    },
    {
        path:"/dashboard",
        name:"dashboard",
        component: Dashboard,
        meta:{public: false}
    },
    {
        path:"/patient-history-triage",
        name:"patient-history-triage",
        component: PatientHistoryTriage,
        meta:{public: false}
    },
    {
        path:"/otp",
        name:"otp",
        component: otp,
        meta:{public: false}
    },
    {
        path:"/prescription-consultation",
        name:"prescription-consultation",
        component: Prescription,
        meta:{public: false}
    },
    {
        path:"/investigation-results-consultation",
        name:"investigation-results-consultation",
        component: InvestigationResults,
        meta:{public: false}
    },
    {
        path:"/investigation",
        name:"investigation",
        component: ProcedureInvestigation,
        meta:{public: false}
    },

    {
        path:"/diagnosis-consultation",
        name:"diagnosis-consultation",
        component: Diagnosis,
        meta:{public: false}
    },

    {
        path:"/complaint-consultation",
        name:"complaint-consultation",
        component: ConsultationComplaint,
        meta:{public: false}
    },
    {
        path:"/prev-med-consultation",
        name:"prev-med-consultation",
        component: CurrentMedications,
        meta:{public: false}
    },

    {
        path:"/allergy-consultation",
        name:"allergy-consultation",
        component: ImmunizationConsultation,
        meta:{public: false}
    },
    {
        path:"/vitals-consultation",
        name:"vitals-consultation",
        component: VitalsConsultation,
        meta:{public: false}
    },

    {
        path:"/chronic-illnesses",
        name:"chronic-illnesses",
        component: ChronicIllnesses,
        meta:{public: false}
    },
    {
        path:"/immunization",
        name:"immunization",
        component: Immunization,
        meta:{public: false}
    },
    {
        path:"/vitals-history",
        name:"vitals-history",
        component: VitalsHistory,
        meta:{public: false}
    },
    {
        path:"/vitals",
        name:"vitals",
        component: Vitals,
        meta:{public: false}
    },
    {
        path:"/queue-triage",
        name:"queue-triage",
        component: QueueTriage,
        meta:{public: false}
    },
    {
        path:"/patient-history",
        name:"patient-history",
        component: PatientHistory,
        meta:{public: false}
    },
    {
        path:"/patient-payments",
        name:"patient-payments",
        component: PatientPayments,
        meta:{public: false}
    },
    {
        path:"/out-patient-checkin",
        name:"out-patient-checkin",
        component: OutpatientCheckin,
        meta:{public: false}
    },
    {
        path:"/patients",
        name:"patients",
        component: Patients,
        meta:{public: false}
    },
    {
        path:"/patients",
        name:"patients",
        component: Patients,
        meta:{public: false}
    },
    {
        path:"/patient-details",
        name:"patient-details",
        component: PatientDetails,
        meta:{public: false}
    },


]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});


let userActivityTimer;

router.beforeEach((to, from, next) => {
    // Reset the user activity timer on each navigation
    clearTimeout(userActivityTimer);

    // Check if the target route requires authentication
    if (!to.meta.public && !to.hash.includes('/trade/')) {
        // Check if the user is logged in or not
        if (sessionStorage.getItem("isLoggedIn")) {
            // If yes, allow the navigation
            next();

            // Set up the user activity timer
            userActivityTimer = setTimeout(() => {
                // Log out the user after 5 minutes of inactivity
                sessionStorage.removeItem("isLoggedIn");
                next("/");
            }, 5 * 60 * 1000); // 5 minutes in milliseconds
        } else {
            // If no, redirect the user to the login page
            next("/");
        }
    } else {
        // If the target route does not require authentication or has parameters, allow the navigation
        next();
    }
});

// Optionally, you may want to handle user activity within the application
// to reset the timer. Here's an example assuming you have a user activity event.

// Example: Reset timer on user activity
function handleUserActivity() {
    clearTimeout(userActivityTimer);
    userActivityTimer = setTimeout(() => {
        // Log out the user after 5 minutes of inactivity

        const data = new FormData();
        data.append("function", "timeout");
        data.append("sessionNames", sessionStorage.getItem("sessionNames"));
        data.append("sessionIdNo",  sessionStorage.getItem("sessionIdNo"));
        execute(data,biller)
            .then(() => {

                sessionStorage.removeItem("isLoggedIn");
                router.push("/");

            })
            .catch(() => {
                // alert(e.message);
            });



    }, 10 * 60 * 1000); // 5 minutes in milliseconds
}

// Attach an event listener for user activity (e.g., mousemove, keypress, etc.)
document.addEventListener("mousemove", handleUserActivity);
document.addEventListener("keypress", handleUserActivity);

// Remember to remove event listeners when they are no longer needed (e.g., when user logs out)
// document.removeEventListener("mousemove", handleUserActivity);
// document.removeEventListener("keypress", handleUserActivity);

export default router;



