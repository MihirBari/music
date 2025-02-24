<?php
header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Origin: https://techsa.net');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type, Origin, ACCESS-TOKEN, cache-control');
    exit();
}

function formatPOSTData() {
    $title = $_POST['title'];
    $body = $_POST['body'];

    return json_encode(array(
        "type" => "note",
        "title" => $title,
        "body" => $body
    ));
}

function sendPushbulletNotification($bodyData) {
    try {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.pushbullet.com/v2/pushes",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $bodyData,
            CURLOPT_HTTPHEADER => array(
                "ACCESS-TOKEN: o.6Hu4LZjcwLAeZLkOou4LWmC3yBitUdDA",
                "Content-Type: application/json",
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        // Log cURL info
        $info = curl_getinfo($curl);
        curl_close($curl);
        if ($err) {
            throw new Exception("cURL Error: " . $err);
        }
        return $response;
    } catch (Exception $e) {
        error_log("Error in sendPushbulletNotification: " . $e->getMessage());
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_POST = json_decode(file_get_contents('php://input'), true);

    if (isset($_POST['title']) && isset($_POST['body'])) {
        $formattedData = formatPOSTData();
        $response = sendPushbulletNotification($formattedData);
        if ($response) {
            header('HTTP/1.1 200 OK');
            header('Content-Type: application/json');
            echo json_encode(array(
                "success" => true
            ));
        } else {
            header('HTTP/1.1 400 Bad Request');
            header('Content-Type: application/json');
            echo json_encode(array(
                "success" => false
            ));
        }
    } else {
        header('HTTP/1.1 400 Bad Request');
        header('Content-Type: application/json');
        echo json_encode(array(
            "success" => false
        ));
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Allow: POST');
    exit();
}
