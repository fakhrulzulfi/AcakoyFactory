-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 28, 2022 at 04:48 PM
-- Server version: 8.0.26-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_toko_kue`
--

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Bahan Kue Kering', '2022-01-27 08:56:47', '2022-01-27 08:56:47'),
(2, 'Bahan Kue Basah', '2022-01-27 08:56:47', '2022-01-27 08:56:47'),
(3, 'Bungkus Kue', '2022-01-28 13:33:45', '2022-01-28 13:33:45');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `stock`, `price`, `image`, `category_id`, `supplier_id`, `createdAt`, `updatedAt`) VALUES
(9, 'Tepung', 10, 10000, '3f6b28e3bf61271a773b9d7219bef30b.jpeg', 1, 6, '2022-01-28 06:43:04', '2022-01-28 06:43:04'),
(10, 'Gula Pasir', 5, 50000, '8d70fb677a4e83f47a97f959923a7509.jpeg', 1, 7, '2022-01-28 06:43:26', '2022-01-28 06:43:26'),
(11, 'Telur', 8, 30000, 'ad1bd3ce2c0f1468e01cb11429f17531.jpeg', 1, 8, '2022-01-28 06:43:48', '2022-01-28 06:43:48'),
(12, 'Selai Roti', 50, 15000, '271b2dc9cae27c5dba9e05f6ae49975b.jpeg', 2, 9, '2022-01-28 06:44:22', '2022-01-28 06:44:22'),
(13, 'Santan Instan', 20, 7000, 'cff57d2e34b20c0499325248375f820c.jpeg', 2, 10, '2022-01-28 06:44:50', '2022-01-28 06:44:50'),
(14, 'Mentega', 9, 13000, '6f32dfcea92d946be36828e714da5980.jpeg', 2, 11, '2022-01-28 06:45:12', '2022-01-28 06:45:12'),
(15, 'Kardus Kue', 30, 2500, '6d8e78ea0aa936e39b5c19b648b4ddee.jpeg', 3, 12, '2022-01-28 06:45:38', '2022-01-28 06:45:38'),
(16, 'Mika Kue', 40, 3000, '00199cb0b71d41bec15d925036026569.jpeg', 3, 13, '2022-01-28 06:46:10', '2022-01-28 06:46:10'),
(17, 'Styrofoam', 200, 5000, '91862738f373edc98a397daa953f5244.jpeg', 3, 14, '2022-01-28 06:46:37', '2022-01-28 06:46:37');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20220124125906-create-user.js'),
('20220124130146-create-product.js'),
('20220124130303-create-category.js'),
('20220124130729-create-transaction.js'),
('20220125230422-create-supplier.js'),
('20220126115728-add username.js'),
('20220127001852-addQTY.js');

-- --------------------------------------------------------

--
-- Table structure for table `Suppliers`
--

CREATE TABLE `Suppliers` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Suppliers`
--

INSERT INTO `Suppliers` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(6, 'PT Bogasari', 'Jakarta', '2022-01-28 06:34:39', '2022-01-28 06:34:39'),
(7, 'PT Core Plus', 'Jakarta', '2022-01-28 06:34:48', '2022-01-28 06:34:48'),
(8, 'Barokah Telur', 'Bogor', '2022-01-28 06:35:00', '2022-01-28 06:35:00'),
(9, 'Java Choco', 'Surabaya', '2022-01-28 06:35:12', '2022-01-28 06:35:12'),
(10, 'PT Kara Indonesia', 'Surabaya', '2022-01-28 06:35:24', '2022-01-28 06:35:24'),
(11, 'PT Blue Band Indonesia', 'Sidoarjo', '2022-01-28 06:35:37', '2022-01-28 06:35:37'),
(12, 'CV Kurnia Jaya', 'Sidoarjo', '2022-01-28 06:35:51', '2022-01-28 06:35:51'),
(13, 'CV Karunia Makmur', 'Jombang', '2022-01-28 06:36:01', '2022-01-28 06:36:01'),
(14, 'PT Plastindo Cemerlang', 'Sidoarjo', '2022-01-28 06:36:10', '2022-01-28 06:36:10');

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `customer_name` varchar(256) NOT NULL,
  `total_price` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `qty` int DEFAULT NULL,
  `status` enum('Pending','Success','Failed') NOT NULL DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Transactions`
--

INSERT INTO `Transactions` (`id`, `product_id`, `customer_name`, `total_price`, `createdAt`, `updatedAt`, `qty`, `status`) VALUES
(6, 16, 'Budi', 12000, '2022-01-28 06:48:02', '2022-01-28 06:48:27', 4, 'Success'),
(7, 11, 'Ggg', 60000, '2022-01-28 07:11:23', '2022-01-28 07:11:23', 2, 'Pending'),
(8, 10, 'Jo', 250000, '2022-01-28 08:00:12', '2022-01-28 08:00:12', 5, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `jk` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`,`supplier_id`),
  ADD KEY `supplier_id` (`supplier_id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Suppliers`
--
ALTER TABLE `Suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Suppliers`
--
ALTER TABLE `Suppliers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Products_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `Suppliers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD CONSTRAINT `Transactions_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
