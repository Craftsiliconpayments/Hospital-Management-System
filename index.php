<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: x-requested-with, content-type");
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
header("Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization");



header("Expires: Mon, 26 Jul 2030 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

ini_set("memory_limit", "-1");
set_time_limit(0);

/**
 * Created by PhpStorm.
 * User: AlexBoey
 * Date: 12/2/2022
 * Time: 8:55 PM
 */
require 'vendor/autoload.php';
use Dompdf\Dompdf;
include 'compute.php';


date_default_timezone_set("Africa/Nairobi");
header("Access-Control-Allow-Origin: *");

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;


$date = date('Y-m-d H:i:s');

if(empty($_REQUEST['function'])){

    $data = file_get_contents('php://input');
    $json = json_decode($data);
    $function = $json->function;

}else{

    $function = $_REQUEST['function'];
}

if($function=="getSubCounties"){

    $result = compute::instance()->getDemographic('43');
    compute::instance()->display(array("subCounties"=>$result));
}


if($function=="getWards"){
    $subCountyID = $_REQUEST['subCountyID'];
    $result = compute::instance()->getDemographicBySubCounty($subCountyID);
    compute::instance()->display(array("wards"=>$result));
}


if($function=="getCategories"){
    $sql ="SELECT * FROM `categories`";
    $result = compute::instance()->fetch($sql,true,true);

    compute::instance()->display(array("categories"=>$result));

}

if($function=="getUsers"){

    $sql ="SELECT * FROM `users`";
    $result = compute::instance()->fetch($sql,true,true);
    if(empty($result)){
        compute::instance()->display(null,false,"No users");
    }else{

        compute::instance()->display(array("users"=>$result));

    }

}if($function=="getRoles"){

    $sql ="SELECT * FROM `roles` ORDER BY role ASC";
    $result = compute::instance()->fetch($sql,true,true);
    if(empty($result)){
        compute::instance()->display(null,false,"No roles found. Please go to configuration and add roles");
    }else{

        compute::instance()->display(array("roles"=>$result));

    }

}

if($function=="getZones"){

    $sql ="SELECT * FROM `zones` ORDER BY zone ASC";
    $result = compute::instance()->fetch($sql,true,true);
    if(empty($result)){
        compute::instance()->display(null,false,"No zones found. Please go to configuration and add zones");
    }else{

        compute::instance()->display(array("zones"=>$result));

    }

}

if($function=="createZone"){

    $subCountyID = $_REQUEST['subCountyID'];
    $zone = ucfirst($_REQUEST['zone']);
    $lat = $_REQUEST['lat'];
    $lng = $_REQUEST['lng'];



    $sql ="SELECT * FROM `demographics` WHERE `subCountyID` ='$subCountyID' GROUP BY subCountyID";
    $result = compute::instance()->fetch($sql,false,true);

   if(empty($result)){

       compute::instance()->display(null,false,"Invalid SubCounty");

   }else{
       $subCountyName = $result['subCountyName'];
       $sql ="INSERT INTO `zones`(`subCountyID`, `subCountyName`, `zone`,`lat`,`lng`)
                         VALUES ('$subCountyID','$subCountyName','$zone','$lat','$lng')";

       $result = compute::instance()->execute($sql);
   }


}


if($function=="authentication"){

    if(empty($_REQUEST['function'])){

        $data = file_get_contents('php://input');
        $json = json_decode($data);
        $function = $json->function;
        $username = $json->username;
        $password = $json->password;

    }else{

        $username = $_REQUEST['username'];
        $password = $_REQUEST['password'];
    }



    $sql ="SELECT * FROM `users` WHERE `email`='$username'";
    $result = compute::instance()->fetch($sql,false,true);
    if(!empty($result)){
        $hash = $result['password'];
        if (password_verify($password, $hash)) {

            // Specify the length of the token in bytes
            $length =20;
            $bytes = random_bytes($length);
            $token = bin2hex($bytes);

            $date = date('Y-m-d H:i:s');
            $expiry = date('Y-m-d H:i:s', strtotime('+6 hours', strtotime($date)));

            saveGeneratedToken($username,$token,$expiry);
            $data = array("token"=>$token,"expiry"=>$expiry);
            compute::instance()->display($data);


        }else{
            compute::instance()->display(null,false,"Invalid credentials");
        }

    }
    else{

        compute::instance()->display(null,false,"$username not found");
    }

    exit();

}
function  saveGeneratedToken($username,$token,$expiry){

         $sql ="SELECT * FROM `systems`";
         $result = compute::instance()->fetch($sql,true,true);

         foreach ($result as $row){
             $host=$row['host'];
             $user=$row['user'];
             $password= $row['password'];
             $database= $row['database'];

             $conn = new mysqli($host, $user, $password, $database);
             if ($conn->connect_error) {
                 die("Connection failed: " . $conn->connect_error);
             }


             $sql ="INSERT INTO `token`(`username`, `token`, `expiry`)
                                VALUES ('$username','$token','$expiry')";

             // Execute the query
             if ($conn->query($sql) === TRUE) {
                 //echo "New record inserted successfully";
             } else {
                 // echo "Error: " . $sql . "<br>" . $conn->error;
             }
             // Close the connection
             $conn->close();
         }




}

if($function=="createUser"){

    $idNo = $_REQUEST['idNo'];
    $names = $_REQUEST['names'];
    $email = $_REQUEST['email'];
    $phoneNumber = compute::instance()->formatPhoneNumber($_REQUEST['phoneNumber']);
    $pin = rand(1000,9999);
    $password = password_hash($pin, PASSWORD_BCRYPT);
    $category = $_REQUEST['category'];
    $zone = $_REQUEST['zone'];
    $gender = $_REQUEST['gender'];

    $result = compute::instance()->getUser($idNo);
    if(!empty($result)){
        compute::instance()->display(null,false,"$idNo exists");
        exit();
    }


    $result = compute::instance()->getUser($phoneNumber);
    if(!empty($result)){
        compute::instance()->display(null,false,"$phoneNumber exists");
        exit();
    }

    $result = compute::instance()->getZoneByZone($zone);
    if(empty($result)){

        compute::instance()->display(null,false,"invalid $zone");
        exit();

    }else{
        $subCountyID = $result['subCountyID'];
        $subCountyName = $result['subCountyName'];
        $lat = $result['lat'];
        $lng = $result['lng'];


    }


    $sql ="INSERT INTO `users`(`names`, `email`, `phoneNumber`,`idNo`, `password`, `category`,`zone`,`subCountyID`,`subCountyName`,`lat`,`lng`,`gender`)
                       VALUES ('$names','$email','$phoneNumber','$idNo','$password','$category','$zone','$subCountyID','$subCountyName','$lat','$lng','$gender')";

    compute::instance()->execute($sql,true);

    $sql ="SELECT * FROM `users` WHERE `idNo`='$idNo'";
    $result = compute::instance()->fetch($sql,false,true);
    if(empty($result)){

        compute::instance()->display(null,"Failed to create user");
    }else{
        compute::instance()->display(array("user"=>$result));

        $text = "MOBILEAPP";
        if (strpos($category, $text) !== false) {
            $message ="Your have created as a system user. Your username: $idNo  and password: $pin. Download the app from here. https://shorturl.at/acvT3";
        } else {

            $message ="You have been created as a $category on Homa Bay County Revenue collection system. Your username is $idNo and password is $pin";
        }

        compute::instance()->sendMessage($_REQUEST['phoneNumber'],$message);
    }


}

if($function=="login"){
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];

    $sql ="SELECT * FROM `users` WHERE `email`='$email' OR `idNo`='$email'";

    $result = compute::instance()->fetch($sql,false,true);
    if(!empty($result)){
        $hash = $result['password'];
        if (password_verify($password, $hash)) {

            compute::instance()->display(array("user"=>$result));

        }else{
            compute::instance()->display(null,false,"Invalid password");
        }

    }
    else{

        compute::instance()->display(null,false,"$email not found");
    }

}


