-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 24, 2018 at 12:02 PM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(9) NOT NULL AUTO_INCREMENT,
  `status` int(1) NOT NULL DEFAULT '1',
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdby` int(9) NOT NULL DEFAULT '0',
  `adminname` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `password_token` varchar(500) NOT NULL,
  `token_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `admin_ip` varchar(255) NOT NULL,
  `mydp` varchar(250) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `admin_fk0` (`createdby`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `status`, `full_name`, `email`, `date_time`, `createdby`, `adminname`, `password`, `password_token`, `token_time`, `admin_ip`, `mydp`) VALUES
(1, 1, '', '', '2018-09-04 13:35:26', 0, 'parag', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(2, 0, 'paragdineshgupta', '', '2018-09-21 12:24:36', 0, 'gupta', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', 'parag.jpg'),
(3, 1, 'parag', '', '2018-09-22 15:30:13', 2, 'divana', '85b2ab7fc2fa0ab39c66c05eadffbad5cd3d47a6cdc761ad41b7cb84b9a4b251', '', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `amc`
--

CREATE TABLE IF NOT EXISTS `amc` (
  `amc_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`amc_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `amc`
--

INSERT INTO `amc` (`amc_id`, `dummy`, `status`) VALUES
(1, 'amctest2', 0),
(2, 'amctest2new', 1);

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE IF NOT EXISTS `complaint` (
  `complaint_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`complaint_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`complaint_id`, `dummy`, `status`) VALUES
(1, 'test2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `spoc` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `address` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `name`, `spoc`, `email`, `mobile`, `address`, `status`) VALUES
(1, 'test2', 'alpha', '2001@gmi.in', '1234567890', 'hello', 0);

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE IF NOT EXISTS `employe` (
  `employe_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `position` int(1) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`employe_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`employe_id`, `name`, `mobile`, `position`, `status`) VALUES
(1, 'test2', '1234567890', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE IF NOT EXISTS `equipment` (
  `equipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`equipment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `equipment`
--


-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE IF NOT EXISTS `invoice` (
  `invoice_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`invoice_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `invoice`
--


-- --------------------------------------------------------

--
-- Table structure for table `myequipment`
--

CREATE TABLE IF NOT EXISTS `myequipment` (
  `myequipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` varchar(4) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `dummy1` varchar(255) NOT NULL,
  `dummy2` varchar(255) NOT NULL,
  `dummy3` varchar(255) NOT NULL,
  PRIMARY KEY (`myequipment_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `myequipment`
--

INSERT INTO `myequipment` (`myequipment_id`, `category`, `capacity`, `brand`, `model`, `year`, `status`, `dummy1`, `dummy2`, `dummy3`) VALUES
(1, 'test2', '200 L', 'test1', 'test1', '2001', 0, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE IF NOT EXISTS `profile` (
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `profile`
--


-- --------------------------------------------------------

--
-- Table structure for table `proposal`
--

CREATE TABLE IF NOT EXISTS `proposal` (
  `proposal_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`proposal_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `proposal`
--


-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`schedule_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`schedule_id`, `dummy`, `status`) VALUES
(1, 'scheduletest2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `site`
--

CREATE TABLE IF NOT EXISTS `site` (
  `site_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`site_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`site_id`, `customer_id`, `dummy`, `status`) VALUES
(1, 0, 'site test2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE IF NOT EXISTS `zone` (
  `zone_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pin` int(6) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`zone_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `name`, `pin`, `status`) VALUES
(1, 'test1', 466787, 0),
(2, 'test3', 461112, 1);
