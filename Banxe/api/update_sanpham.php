<?php
require 'database.php';
$postdata = file_get_contents('php://input');
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata,true);
if (trim($request['tenSP']) == '' || (float)$request['DonGia'] < 0) {
return http_response_code(400);
}
$MaSP = mysqli_real_escape_string($db, (int)$request['MaSP']);
$tenSP = mysqli_real_escape_string($db, trim($request['tenSP']));
$DonGia = mysqli_real_escape_string($db, (float)$request['DonGia']);
$hinhAnh = mysqli_real_escape_string($db, trim($request['hinhAnh']));
$MaLoai = mysqli_real_escape_string($db, (int)$request['MaLoai']);
$sql = "UPDATE san_pham SET MaSP=$MaSP,tenSP='$tenSP',DonGia=$DonGia, hinhAnh = '$hinhAnh', MaLoai=$MaLoai WHERE MaSP = $MaSP";
if($db->query($sql))
{
http_response_code(204);
}
else
{
return http_response_code(422);
}
}
?>
