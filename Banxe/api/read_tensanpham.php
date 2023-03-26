<?php
include 'database.php';
$san_pham = [];
$sql = "SELECT * FROM san_pham where MaSP = "";
if($result = $db->query($sql))
{
$i = 0;
while($row = $result->fetch_assoc())
{
$san_pham[$i]['MaSP'] = $row['MaSP'];
$san_pham[$i]['tenSP'] = $row['tenSP'];
$san_pham[$i]['DonGia'] = $row['DonGia'];
$san_pham[$i]['hinhAnh'] = $row['hinhAnh'];
$san_pham[$i]['MaLoai'] = $row['MaLoai'];
$i++;
}
echo json_encode($san_pham);
}
else
{
http_response_code(404);
}
?>