<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata,true);
// Validate.
if(trim($request['tenSP']) === '' || (float)$request['DonGia'] < 0)
{
return http_response_code(400);
}
$MaSP = mysqli_real_escape_string($db, (int)$request['MaSP']);
$tenSP = mysqli_real_escape_string($db, trim($request['tenSP']));
$DonGia = mysqli_real_escape_string($db, (int)$request['DonGia']);
$hinhAnh = mysqli_real_escape_string($db, trim($request['hinhAnh']));
$MaLoai = mysqli_real_escape_string($db, (int)$request['MaLoai']);
$sql = "INSERT INTO san_pham (MaSP,tenSP,DonGia,hinhAnh,MaLoai) VALUES ($MaSP,'$tenSP',$DonGia,'$hinhAnh',$MaLoai)";
if($db->query($sql))
{
http_response_code(201);
$sanpham = [
'MaSP' => $MaSP,
'tenSP' => $tenSP,
'DonGia' => $DonGia,
'hinhAnh' => $hinhAnh,
'MaLoai' => $MaLoai];
echo json_encode($sanpham);
}
else
{
http_response_code(422);
}
}
?>