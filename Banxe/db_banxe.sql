-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2022 at 09:07 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_banxe`
--

-- --------------------------------------------------------

--
-- Table structure for table `ct_dat_hang`
--

CREATE TABLE `ct_dat_hang` (
  `MaCTDH` int(11) NOT NULL,
  `Ma_DH` int(11) NOT NULL,
  `MaSP` int(11) NOT NULL,
  `So_Luong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `dat_hang`
--

CREATE TABLE `dat_hang` (
  `Ma_DH` int(11) NOT NULL,
  `MaKH` int(11) NOT NULL,
  `NgayDatHang` datetime NOT NULL,
  `NgayGiaoHang` datetime NOT NULL,
  `TinhTrang` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `khach_hang`
--

CREATE TABLE `khach_hang` (
  `MaKH` int(11) NOT NULL,
  `HoTen` varchar(255) NOT NULL,
  `DienThoai` int(10) NOT NULL,
  `DiaChi` varchar(255) NOT NULL,
  `TaiKhoan` varchar(255) NOT NULL,
  `MatKhau` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `loai_san_pham`
--

CREATE TABLE `loai_san_pham` (
  `MaLoai` int(11) NOT NULL,
  `TenLoai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loai_san_pham`
--

INSERT INTO `loai_san_pham` (`MaLoai`, `TenLoai`) VALUES
(1, 'HYUNDAI'),
(2, 'MERCEDES'),
(3, 'LAMBORGHINI');

-- --------------------------------------------------------

--
-- Table structure for table `san_pham`
--

CREATE TABLE `san_pham` (
  `MaSP` int(11) NOT NULL,
  `tenSP` varchar(255) NOT NULL,
  `DonGia` int(11) NOT NULL,
  `hinhAnh` varchar(255) NOT NULL,
  `MaLoai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `san_pham`
--

INSERT INTO `san_pham` (`MaSP`, `tenSP`, `DonGia`, `hinhAnh`, `MaLoai`) VALUES
(22, 'Grand i10 Hatchback', 466666666, 'xe1.jpg', 1),
(23, 'Accent', 470000000, 'xe2.jpg', 1),
(24, 'Elantra', 580000000, 'xe3.jpg', 1),
(25, 'Kona', 636000000, 'xe4.jpg', 1),
(26, 'Santafe', 10030000, 'xe5.jpg', 1),
(27, 'Solata', 100300000, 'xe6.jpg', 1),
(28, 'Huyndai Tucson', 1006000000, 'xe7.jpg', 1),
(29, 'Creta', 960000000, 'xe7.jpg', 1),
(30, 'Santa Fe', 960000000, 'xe1.jpg', 1),
(31, 'GLC Coupé', 300000000, 'xe13.jpg', 2),
(32, 'GLE', 440000000, 'xe14.jpg', 2),
(33, 'GLE Coupé', 540000000, 'xe15.jpg', 2),
(34, 'GLS', 540900000, 'xe16.jpg', 2),
(35, 'G-Class', 104050000, 'xe17.jpg', 2),
(36, 'Maybach GLS', 114090000, 'xe18.jpg', 2),
(37, 'aventador', 404000000, 'aventador.jpg', 3),
(38, 'huracanevo', 901002000, 'huracanevo.jpg', 3),
(39, 'veneno', 905785899, 'veneno.jpg', 3),
(40, 'Lamborghini Aventador S (LP740-4)', 900999999, 'lb2.jpg', 3),
(41, 'Lamborghini Aventador LP700-4', 688888888, 'lb3.jpg', 3),
(42, 'Lamborghini Aventador LP750-SV', 689999999, 'lb2.jpg', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ct_dat_hang`
--
ALTER TABLE `ct_dat_hang`
  ADD PRIMARY KEY (`MaCTDH`),
  ADD KEY `Ma_DH` (`Ma_DH`),
  ADD KEY `MaSP` (`MaSP`);

--
-- Indexes for table `dat_hang`
--
ALTER TABLE `dat_hang`
  ADD PRIMARY KEY (`Ma_DH`),
  ADD KEY `MaKH` (`MaKH`);

--
-- Indexes for table `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`MaKH`);

--
-- Indexes for table `loai_san_pham`
--
ALTER TABLE `loai_san_pham`
  ADD PRIMARY KEY (`MaLoai`);

--
-- Indexes for table `san_pham`
--
ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`MaSP`),
  ADD KEY `MaLoai` (`MaLoai`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `khach_hang`
--
ALTER TABLE `khach_hang`
  MODIFY `MaKH` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `san_pham`
--
ALTER TABLE `san_pham`
  MODIFY `MaSP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ct_dat_hang`
--
ALTER TABLE `ct_dat_hang`
  ADD CONSTRAINT `ct_dat_hang_ibfk_1` FOREIGN KEY (`Ma_DH`) REFERENCES `dat_hang` (`Ma_DH`),
  ADD CONSTRAINT `ct_dat_hang_ibfk_2` FOREIGN KEY (`MaSP`) REFERENCES `san_pham` (`MaSP`);

--
-- Constraints for table `dat_hang`
--
ALTER TABLE `dat_hang`
  ADD CONSTRAINT `dat_hang_ibfk_1` FOREIGN KEY (`MaKH`) REFERENCES `khach_hang` (`MaKH`);

--
-- Constraints for table `san_pham`
--
ALTER TABLE `san_pham`
  ADD CONSTRAINT `san_pham_ibfk_1` FOREIGN KEY (`MaLoai`) REFERENCES `loai_san_pham` (`MaLoai`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
