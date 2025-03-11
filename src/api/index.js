/* eslint-disable */
import axios from "axios";



export const base ="https://REPLACE_WITH_URL_co.ke/hmis";
export const paysol =  "https://REPLACE_WITH_URL_/hmis/paysol/index.php";


export const patient = base+"/patient/index.php";
export const biller =  base+"/biller/index.php";


export const parking =  base+"/parking/index.php";
export const trade =  base+"/trade/index.php";

export const authUrl =  base+"/authentication/";

export const plotRent =  base+"/plotrent/index.php";
export const plotRentUploads =  base+"/plotrent/uploads/";

export const landRate =  base+"/landrate/index.php";

export const fire =  base+"/fire/index.php";
export const health =  base+"/health/index.php";
export const housing =  base+"/housing/index.php";

export const liquor =  base+"/liquor/index.php";

export const uploadsLiqour = base+"/liquor/uploads/";




let tokenStr = 'MTVlNmJkNDE1NWZiNDBiZTZlZTVmNjMwZDg5ZmNkMTU1NTRiOTM2MDBlY2U2ZmI2YjUwNGE4MWRmOWJjYTFkZA==';
export const execute = (params, url) => {
    return axios.post(url,params,{headers: {"Authorization": `Bearer ${tokenStr}`}})
}

export const executeJson = (params, url) => {
    return axios.post(url, params, {
        headers: {
            "Authorization": `Bearer ${tokenStr}`,
            "Content-Type": "application/json" // Specify JSON content type
        }
    });
}


export const executeDownload = (params, url) => {
    return axios.post(url,params,{headers: {"Authorization": `Bearer ${tokenStr}`}, responseType: 'blob'})
}
export const execute2 = (params, url) => {
    return axios.post(url,params)
}
export const getRight = (accessRole) => {
    // Get the string from sessionStorage and parse it into an array
    const selectedRolesString = sessionStorage.getItem("selectedRoles");

    if (!selectedRolesString) {
        //  console.error("selectedRoles is not available in sessionStorage");
        return false;  // or handle the absence of selectedRoles in sessionStorage
    }

    try {
        const selectedRoles = JSON.parse(selectedRolesString);

        if (!Array.isArray(selectedRoles)) {
            //  console.error("selectedRoles is not an array");
            return false;  // or handle the case where selectedRoles is not an array
        }

        let accessRight = false;

        for (const role of selectedRoles) {
            //  console.log(`${accessRole} role: ${role.role}`);
            if (role.role === accessRole) {
                accessRight = true;
                break;  // no need to continue checking once a match is found
            }
        }

        return accessRight;
    } catch (error) {
        //  console.error("Error parsing selectedRoles:", error);
        return false;  // or handle the error appropriately
    }
};

