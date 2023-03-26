<?php
require 'database.php';
$MaSP = ($_GET['MaSP'] !== null && (int)$_GET['MaSP'] > 0)? mysqli_real_escape_string($db, 
(int)$_GET['MaSP']) : false;
if(!$MaSP) {
return http_response_code(400);
}
$sql = "DELETE FROM san_pham WHERE  MaSP=$MaSP";
if($db->query($sql)) {
http_response_code(204);
}
else
{
return http_response_code(422);
}
?>