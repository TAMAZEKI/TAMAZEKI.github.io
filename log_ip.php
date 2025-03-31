<?php
// ดึง IP ของผู้เข้าชม
$ip = $_SERVER['REMOTE_ADDR'];
$date = date("Y-m-d H:i:s");

// บันทึก IP ลงไฟล์ log.txt
$file = 'log.txt';
$data = "[$date] - IP: $ip\n";
file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

// แสดงข้อความยืนยัน (หรือเปลี่ยนเป็นหน้าเว็บอื่น)
echo "Your IP has been logged.";
?>
