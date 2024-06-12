<?php
    $key = $_GET['bot'];

    $newKey = str_replace(' ', '%20', $key);

    

    $bid = "164893";
    $apiKey = "KE63H7eh8Ql2zkmD";
    $url = "http://api.brainshop.ai/get?bid=".$bid."&key=".$apiKey."&uid=164893&msg=".$newKey."&format=json" ;

    $response = @file_get_contents($url);

    $json_array = json_decode($response,true);
    // echo ($json_array['cnt']);
    // $msg = $json_array['cnt'];


    // Checks for if system is connected with Internet or not
    if(!empty($json_array)){
        echo ($json_array['cnt']);
    $msg = $json_array['cnt'];
    }else{
        echo ("<b class='no-data'>No Internet Connection!</b>");
    }

    
        

?>
