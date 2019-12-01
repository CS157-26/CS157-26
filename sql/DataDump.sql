-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pim
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'magni'),(2,'eligendi'),(3,'dolore'),(4,'sit'),(5,'a'),(6,'ipsam'),(7,'vitae'),(8,'est'),(9,'quos'),(10,'sit'),(11,'dolorem'),(12,'dolor'),(13,'enim'),(14,'reprehenderit'),(15,'veritatis');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `content_text` text,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime DEFAULT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,1,'Consequatur ut quaerat sed eum voluptates. Molestiae est soluta maiores enim vel. Ratione rem aut corporis necessitatibus. Eligendi hic incidunt omnis voluptatem enim ducimus.','1990-10-23 20:27:55','1993-10-02 00:26:02'),(2,2,2,'Cum cum deserunt in distinctio et vero sit. Aliquam nulla dignissimos expedita non. Suscipit minima similique voluptate ad minima est.','1977-02-07 07:18:49','1984-07-17 06:31:16'),(3,3,3,'Ex dignissimos corporis reprehenderit eligendi nihil. Consequatur delectus nemo ea qui maiores veniam. Dolorem harum assumenda temporibus animi sed sapiente tenetur esse. Non non consequuntur ut aut.','1991-06-12 18:58:09','1992-11-14 03:57:41'),(4,4,4,'Suscipit dolor dolor delectus sit sed maiores. Vitae natus rem quasi illum autem aliquam ea animi. Ratione qui similique at sed.','1992-12-21 09:05:19','2013-07-06 20:34:15'),(5,5,5,'Sit doloribus aut optio vero omnis sint. Itaque tempora veritatis inventore molestias. Aut numquam voluptatum velit.','1999-05-13 06:14:20','1974-03-05 08:49:43'),(6,6,6,'Sequi doloribus distinctio enim aperiam. Nihil beatae in cumque ex ut sequi quos. Ut sed ipsa temporibus provident labore voluptatem.','2018-09-26 22:36:09','1999-03-10 10:31:33'),(7,7,7,'Asperiores sed et expedita sit sapiente ut. Hic aperiam qui amet quis id. Cumque sint deleniti numquam repellat. Voluptas enim assumenda voluptas voluptatem est quas ducimus eveniet.','2001-06-08 05:36:48','1989-04-03 07:29:38'),(8,8,8,'Dolores qui ullam ut et sit fugit. Ut explicabo soluta eveniet qui. Laudantium consequuntur repellendus occaecati perspiciatis laborum. Nihil rerum aliquid deleniti ipsa dignissimos. Id sunt dolores sint aut et molestias ut.','1983-04-22 11:52:02','2004-10-20 21:28:39'),(9,9,9,'Ut officiis dolorum beatae. Fuga quisquam sunt suscipit eveniet est. Tenetur nihil veniam id iusto cum. Ab exercitationem architecto voluptate eaque.','1975-07-06 12:13:49','1998-12-09 13:39:28'),(10,10,10,'Corporis qui dolor sit accusantium tenetur quas perspiciatis. Et eum ea necessitatibus. Magni aliquam eius inventore recusandae dolor sit id. Et sed ut ipsum voluptatibus quo ipsum natus.','2011-02-24 09:49:33','2002-09-09 21:28:01'),(11,11,11,'Ducimus quis ipsa cumque. Molestiae expedita et consequuntur quibusdam quisquam molestiae laborum. Ex consectetur odio est laudantium porro. Quis aliquid facere libero odit deserunt. Quas veniam nulla odio unde est.','1981-07-27 10:32:32','2007-03-16 17:39:15'),(12,12,12,'Voluptatem tenetur saepe consequatur autem consequatur consequatur neque. Nemo corrupti voluptate voluptas natus. Accusamus quidem itaque sunt animi. Impedit facere eius tempora qui.','2016-12-27 19:31:13','1981-10-05 04:52:14'),(13,13,13,'Inventore magnam aliquid et quos. Blanditiis ipsum totam aut praesentium. Nam distinctio est sit magnam aut ipsum. Commodi cumque labore doloribus.','1973-03-30 12:58:34','1980-01-02 22:22:16'),(14,14,14,'Ipsa dolores at et nihil. Ab quis dolorem magni totam molestias. Expedita nemo et omnis sed id. Et officiis eum blanditiis et quis.','2017-01-21 20:28:01','1991-11-28 11:02:40'),(15,15,15,'Dolorum excepturi et consequuntur minus necessitatibus rerum. Iure modi consequatur quisquam voluptas. Fugit molestias et dolor magnam alias qui distinctio. Dignissimos voluptas veniam dolorum quo.','2010-12-16 15:43:57','2010-07-24 00:18:54'),(16,16,16,'I just updated this shit, dawg.','2019-11-20 00:00:00','2019-11-21 22:44:08');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,1,'sed'),(2,2,'nobis'),(3,3,'commodi'),(4,4,'corporis'),(5,5,'similique'),(6,6,'numquam'),(7,7,'aut'),(8,8,'dolore'),(9,9,'laborum'),(10,10,'distinctio'),(11,11,'ut'),(12,12,'qui'),(13,13,'dolorem'),(14,14,'sed'),(15,15,'possimus');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempts`
--

DROP TABLE IF EXISTS `login_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_attempts` (
  `attempt_id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(64) NOT NULL,
  `is_successful` tinyint(1) DEFAULT NULL,
  `time_stamp` datetime NOT NULL,
  PRIMARY KEY (`attempt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempts`
--

LOCK TABLES `login_attempts` WRITE;
/*!40000 ALTER TABLE `login_attempts` DISABLE KEYS */;
INSERT INTO `login_attempts` VALUES (1,'135.83.5.127',0,'1975-07-07 09:16:51'),(2,'220.51.252.97',1,'2000-05-19 01:38:31'),(3,'39.241.151.218',1,'1980-09-02 10:29:34'),(4,'106.171.81.61',1,'2017-05-11 08:07:37'),(5,'63.177.27.58',1,'1988-11-04 14:06:12'),(6,'236.164.151.240',0,'1973-10-02 01:41:05'),(7,'81.108.150.89',1,'1976-07-25 00:30:59'),(8,'14.84.14.125',1,'2008-08-05 01:23:20'),(9,'30.196.56.197',0,'1970-05-11 04:36:34'),(10,'200.129.163.115',0,'2016-04-10 08:27:58'),(11,'138.12.36.23',1,'1993-11-07 17:59:01'),(12,'144.157.107.239',1,'2010-03-26 00:40:31'),(13,'35.27.143.44',0,'2016-03-03 14:26:55'),(14,'84.156.176.68',0,'1972-09-05 03:20:34'),(15,'16.123.48.68',0,'2011-05-10 17:24:09');
/*!40000 ALTER TABLE `login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teammembers`
--

DROP TABLE IF EXISTS `teammembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teammembers` (
  `user_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teammembers`
--

LOCK TABLES `teammembers` WRITE;
/*!40000 ALTER TABLE `teammembers` DISABLE KEYS */;
INSERT INTO `teammembers` VALUES (1,1),(1,2),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15),(16,1),(16,2),(20,8);
/*!40000 ALTER TABLE `teammembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `team_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'et'),(2,'est'),(3,'dicta'),(4,'est'),(5,'ut'),(6,'adipisci'),(7,'minima'),(8,'quia'),(9,'nihil'),(10,'veniam'),(11,'ut'),(12,'rem'),(13,'distinctio'),(14,'ab'),(15,'aut'),(16,'PoopSquad');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `content_text` text,
  `current_status` enum('PENDING','ASSIGNED','WIP','RESOLVED','CLOSED') NOT NULL,
  `priority` tinyint(4) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime DEFAULT NULL,
  `protected_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`ticket_id`),
  CONSTRAINT `tickets_chk_1` CHECK (((`priority` >= 1) and (`priority` <= 5)))
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,8,1,'Aut nemo et culpa non illum assumenda dicta ipsum.','Nihil occaecati eligendi ex accusamus accusamus.','CLOSED',4,'2019-01-01 00:00:00','2019-05-12 23:08:29',0),(2,8,2,'Hic est ipsam explicabo cumque.','Quos quas itaque quas non et quo voluptas.','RESOLVED',3,'2019-01-01 00:00:00','2019-10-03 17:11:26',0),(3,8,3,'Necessitatibus deserunt qui numquam et numquam.','Praesentium voluptatibus rem a et.','ASSIGNED',4,'2019-01-01 00:00:00','2019-09-10 16:31:49',1),(4,8,4,'Est hic modi error aut minima porro velit.','Eum suscipit et facilis officia omnis dolore adipisci nihil.','ASSIGNED',4,'2019-01-01 00:00:00','2019-03-13 07:04:48',0),(5,8,5,'Eligendi sapiente nam distinctio officiis.','Blanditiis accusantium est ut exercitationem atque qui officiis.','ASSIGNED',2,'2019-01-01 00:00:00','2019-11-25 09:48:32',1),(6,8,6,'Ad ducimus maiores ad et rerum repellat deserunt.','Corrupti accusamus quibusdam et laudantium earum cupiditate quia.','WIP',2,'2019-01-01 00:00:00','2019-11-30 03:48:19',1),(7,8,7,'Vel quibusdam autem eius et doloremque tenetur.','Quas veritatis itaque consequatur nemo sit ut fugiat numquam.','RESOLVED',1,'2019-01-01 00:00:00','2019-11-12 13:36:03',1),(8,8,8,'Quisquam possimus voluptas exercitationem adipisci sunt id.','Omnis unde sit nemo.','CLOSED',4,'2019-01-01 00:00:00','2019-08-02 08:35:21',1),(9,8,9,'Laborum voluptatem sit recusandae aut dolorum nemo modi.','Qui deserunt perspiciatis enim beatae corporis animi eos.','WIP',3,'2019-01-01 00:00:00','2019-05-01 02:08:37',0),(10,8,10,'Explicabo non quisquam ex nam.','Voluptates earum ducimus non explicabo voluptas ex quis.','WIP',1,'2019-01-01 00:00:00','2019-11-22 08:57:03',0),(11,8,11,'Molestiae aliquid harum ea repudiandae voluptatem odio ut.','Eveniet fugiat eligendi aut unde.','PENDING',4,'2019-01-01 00:00:00','2019-06-21 14:19:28',1),(12,8,12,'Debitis est non excepturi ut ducimus sed.','Nisi voluptatem labore rerum deleniti consequatur qui.','RESOLVED',1,'2019-01-01 00:00:00','2019-09-04 20:46:12',1),(13,8,13,'Et ducimus dolor rerum fugit aliquid culpa doloremque non.','Accusamus et qui voluptatem tempora.','WIP',3,'2019-01-01 00:00:00','2019-12-21 12:52:40',1),(14,8,14,'Ea et sit ut accusamus necessitatibus quas aperiam natus.','Culpa nobis a dolorem provident velit sed et.','PENDING',3,'2019-01-01 00:00:00','2019-10-30 02:04:45',1),(15,8,15,'Tempore voluptates recusandae perferendis voluptatibus.','Dolor quia laudantium voluptatem consequatur.','CLOSED',1,'2019-01-01 00:00:00','2019-03-23 19:45:48',0),(16,1,1,'Ticket Title','Content Text','PENDING',2,'2019-01-01 00:00:00','2019-08-21 20:34:43',0),(17,2,2,'\"Ticket Title\"','\"Content Text\"','WIP',1,'2019-01-01 00:00:00','2019-07-08 19:36:14',0),(18,2,2,'\"Ticket Title\"','\"Content Text\"','WIP',1,'2019-01-01 00:00:00','2019-09-03 12:17:04',1),(19,1,1,'test_title_ticket','stuf stufdaskl fdasjfk ldsajf kldsajfkldsa; fjdksalf ;jdsaklf ;jdsaklf ;das','WIP',1,'2019-01-01 00:00:00','2019-10-24 02:36:42',0),(20,4,1,'My test title','My content for ths ticket','PENDING',3,'2019-01-01 00:00:00','2019-01-15 00:12:19',0),(27,10,1,'Voluptatem repudiandae ipsa accusantium quidem dolorem aut.','Ipsam eius vero et excepturi voluptate aut. Officiis consequuntur voluptatem quasi veritatis nihil debitis provident. Reprehenderit et reprehenderit veritatis dolores itaque soluta et. Ratione provident facilis ipsam sed odio vero pariatur.','ASSIGNED',2,'2019-01-01 00:00:00','2019-10-04 17:11:28',1),(28,11,1,'Aut maxime ut at numquam odio ut voluptas.','Nihil et dolore cum. Asperiores repellendus vitae velit eveniet est qui reprehenderit. Sunt est eius excepturi fuga consequatur. Aspernatur quo quibusdam tenetur recusandae tempora.','RESOLVED',2,'2019-01-01 00:00:00','2019-09-04 13:20:28',1),(29,8,14,'Dolor sapiente atque ab animi est amet dolores.','Quas autem quibusdam vero iusto. Suscipit sit eum praesentium et tempora est. Ad sit nisi suscipit quia quisquam iure magnam. Dolorem enim veniam quia.','PENDING',3,'2019-01-01 00:00:00','2019-02-07 15:07:56',1),(30,15,7,'Rerum aut nisi eveniet.','Quidem itaque voluptatum aliquam. Molestiae quia ab culpa. Nihil sint voluptatem accusantium. Eos ipsa expedita eligendi eius.','ASSIGNED',3,'2019-01-01 00:00:00','2019-06-28 11:38:18',1),(31,7,5,'Aliquid voluptas rerum magnam libero tempore.','Voluptatibus possimus est sed aperiam cupiditate. Tempore autem et id nihil. Sed voluptate quidem dolores pariatur porro error ut.','CLOSED',4,'2019-01-01 00:00:00','2019-02-19 12:47:46',1),(32,15,10,'Corporis omnis quidem at dolores nihil cum.','Assumenda id debitis totam laborum et porro error. Ipsum aut illum quae qui magni a et beatae. Quo sequi nobis molestias molestiae necessitatibus quas sapiente voluptatem.','WIP',1,'2019-01-01 00:00:00','2019-03-19 05:03:54',0),(33,5,5,'Et maxime sapiente vitae rerum deserunt dolores iure.','Voluptatibus eos est et totam est dicta. Repellat sit sed animi quis quo nulla qui qui. Molestias tempora vitae aut amet. Qui laborum molestiae dolore ut suscipit. Fuga porro ea iste dolorum.','WIP',5,'2019-01-01 00:00:00','2019-08-26 10:56:14',0),(34,11,5,'Ipsa sit laudantium voluptatem sit.','Magnam mollitia eum perspiciatis natus ducimus qui nisi. Quos velit illum et velit. Possimus dignissimos dolore et quis voluptate.','PENDING',5,'2019-01-01 00:00:00','2019-08-14 15:29:31',1),(35,4,1,'Et eum enim facere doloremque.','Quos reprehenderit facilis alias officia. Ut labore natus voluptas libero molestiae. Sint mollitia cum qui. Tenetur dolorum illum vel similique beatae. Quisquam blanditiis commodi deserunt.','RESOLVED',1,'2019-01-01 00:00:00','2019-02-20 20:38:57',1),(36,14,9,'Rem autem voluptate repellendus excepturi ad.','Voluptas quia quos ipsam. Qui dignissimos delectus qui odit explicabo sunt soluta nihil. Sit qui rem dolore sint et dolores.','WIP',5,'2019-01-01 00:00:00','2019-11-04 08:46:10',1),(37,2,9,'Minima earum inventore ut deleniti.','Necessitatibus beatae aut rerum et molestiae. Impedit totam itaque est. Cumque omnis reprehenderit fugit ut laborum. Voluptatum ducimus ipsa omnis dicta alias et.','ASSIGNED',3,'2019-01-01 00:00:00','2019-10-17 05:54:06',0),(38,11,8,'Dolore aut consequuntur ad impedit necessitatibus.','Aut nostrum rem eveniet esse vel asperiores. Iure architecto labore temporibus officiis. Dolor quo repellendus deserunt et saepe rerum sapiente non.','WIP',5,'2019-01-01 00:00:00','2019-06-09 03:12:00',0),(39,11,7,'Repellendus in ea consectetur fugit mollitia consequatur amet.','Velit vitae ut vel non. Et perspiciatis et fugiat aut qui. Consequatur hic porro inventore voluptatibus.','PENDING',1,'2019-01-01 00:00:00','2019-10-20 22:17:43',1),(40,10,11,'Quam iusto rerum harum qui sint quia sed.','Expedita magni illo porro optio officia. Impedit inventore quas adipisci voluptates.','PENDING',5,'2019-01-01 00:00:00','2019-09-15 05:52:38',0),(41,3,2,'Voluptatem rerum ea ex ea velit quia.','Est sit atque consequatur sit amet eos. Occaecati ut repellendus eum optio ad occaecati. Aut repellat dolor unde officiis odit.','RESOLVED',1,'2019-01-01 00:00:00','2019-02-12 10:30:02',1),(42,15,6,'Non iste ab maxime fugit eius sunt.','In inventore recusandae voluptatem blanditiis molestias qui quaerat. Iste consequatur praesentium architecto doloribus voluptatibus at. Laborum debitis quisquam sint veritatis id optio.','RESOLVED',3,'2019-01-01 00:00:00','2019-06-20 10:52:16',0),(43,1,13,'Corrupti commodi repudiandae reiciendis at officiis placeat.','Asperiores est quo eum tenetur et consequuntur distinctio. Maiores dolores ipsa enim cum dolores aut quia. Quia ex qui inventore voluptas consequatur aut eius.','WIP',1,'2019-01-01 00:00:00','2019-12-26 22:51:18',0),(44,2,2,'Minus ut sapiente ut veniam.','Voluptas ipsa voluptatem distinctio quia rerum accusantium ullam vero. Ipsum veritatis ut quas expedita. Rem nostrum similique reprehenderit et et dicta. Qui sint ut non.','RESOLVED',1,'2019-01-01 00:00:00','2019-07-13 09:39:47',1),(45,6,7,'Nihil dolores aliquid tenetur nihil magni voluptatibus.','Distinctio ut voluptas pariatur dolorem. Eveniet vel voluptas sed alias officiis aut assumenda.','WIP',1,'2019-01-01 00:00:00','2019-09-10 03:45:01',1),(46,5,9,'Reprehenderit temporibus odio ut.','Qui quas deserunt quas voluptas. Natus autem velit maxime aut sunt dolorum quo. Dignissimos quisquam iusto necessitatibus iste est voluptatem esse. Sint sequi aut praesentium qui debitis sed.','RESOLVED',2,'2019-01-01 00:00:00','2019-11-12 13:45:48',1),(47,6,12,'Soluta sit sed vitae doloribus.','Dolorum et possimus nemo quo repellendus ea vel. Consequuntur quasi consequatur architecto a. Fugit ut reprehenderit nemo id minima perspiciatis rerum. Atque a error voluptatem ut et fugiat aut esse.','PENDING',3,'2019-01-01 00:00:00','2019-04-02 09:33:58',1),(48,4,5,'Soluta repellat iusto eos delectus dolorem rerum occaecati.','Veniam excepturi eveniet repudiandae ut aut. Amet nulla eos voluptatem quia nostrum natus. Inventore aliquam aut praesentium sed.','WIP',5,'2019-01-01 00:00:00','2019-08-29 06:32:27',0),(49,8,12,'Voluptatem temporibus itaque perspiciatis et commodi quia repudiandae.','Quam aut ratione placeat culpa eveniet ipsa deserunt. Sequi nam ut reiciendis consequuntur. Aliquam vel velit et accusantium.','RESOLVED',4,'2019-01-01 00:00:00','2019-07-17 04:00:22',0),(50,15,4,'Nesciunt aperiam eum architecto hic ullam sunt.','Dolore sunt blanditiis est provident sit. Aut illum fugit est et. Sequi fugit sit ipsum quia.','ASSIGNED',2,'2019-01-01 00:00:00','2019-09-23 00:24:32',0),(51,2,10,'Quasi deleniti voluptates laborum dolorum corrupti omnis.','Numquam tempore magnam ex voluptate. Hic libero laudantium aut. Architecto qui officia blanditiis.','CLOSED',4,'2019-01-01 00:00:00','2019-01-04 14:01:38',0),(52,14,9,'Quisquam error ducimus minus doloribus laborum ad.','Eum repellat et sit provident ipsa. Quibusdam ut quasi molestias possimus. Sed ut nam quibusdam dolor quo libero animi. Aut ut id et consequatur mollitia. Sint architecto laborum ipsum repellat accusamus placeat facilis.','CLOSED',4,'2019-01-01 00:00:00','2019-11-14 20:54:31',0),(53,12,11,'Cumque consequatur sed sequi voluptas.','Rem optio voluptas ipsum aliquam. Labore nam sed illum cupiditate ut cum qui. Exercitationem et commodi corporis autem a ab. Architecto blanditiis ut consequuntur facere rem odio.','CLOSED',2,'2019-01-01 00:00:00','2019-04-29 14:27:48',1),(54,1,6,'Temporibus ut explicabo aut libero.','Reprehenderit sit voluptatem similique rerum mollitia quo. Illum provident possimus nemo rerum aspernatur nam voluptatibus. Possimus rerum placeat harum voluptatibus. Laborum ab voluptas dignissimos nostrum voluptatem id cumque.','CLOSED',2,'2019-01-01 00:00:00','2019-01-05 09:35:26',1),(55,7,14,'Id est et odio ut facilis iste.','Rerum aut ut veniam sint ducimus delectus fugit. Fugiat et praesentium distinctio non placeat iste nihil a. Accusamus nesciunt enim ipsum omnis consequatur blanditiis.','CLOSED',4,'2019-01-01 00:00:00','2019-02-01 04:33:47',0),(56,15,7,'Molestiae illo dolorem deserunt perspiciatis nostrum qui.','Praesentium autem est sit molestias molestias qui. Nihil dolores expedita id. Cumque alias quos minima sunt.','PENDING',3,'2019-01-01 00:00:00','2019-05-23 18:02:38',1),(57,1,12,'Quibusdam quo molestiae et numquam dolorem.','Delectus voluptatum molestiae explicabo blanditiis voluptatum ut officiis laborum. Quia quae officiis nesciunt necessitatibus nisi velit. Id est et quia deleniti odit.','RESOLVED',1,'2019-01-01 00:00:00','2019-09-13 04:31:52',0),(58,13,12,'Molestias quia unde ea atque.','Qui aut nemo cum velit ea ullam. Quis repellendus ea quasi voluptatibus quis ea sapiente. Ratione consequatur magnam delectus sint. Ea tempora qui et in non.','PENDING',1,'2019-01-01 00:00:00','2019-04-28 16:31:28',1),(59,9,12,'Optio ipsa incidunt rerum quia aliquid.','Aut qui ad saepe consectetur. Commodi a illo sint. Nam corrupti dignissimos ex asperiores distinctio. Est modi necessitatibus corrupti commodi neque in.','WIP',4,'2019-01-01 00:00:00','2019-07-07 21:01:45',1),(60,13,2,'Velit similique inventore veniam eveniet atque.','Natus eum consequuntur nemo quia nulla voluptatum eum. Culpa ea odit voluptatum eos provident. Aut sunt blanditiis dignissimos est. Fugiat iure qui omnis eaque qui quisquam dolorem.','RESOLVED',4,'2019-01-01 00:00:00','2019-08-10 07:34:25',1),(61,13,7,'Quo ipsum ut voluptas molestiae aut reiciendis.','Cumque hic quaerat distinctio tempora et. Recusandae voluptatem neque voluptatum ex quisquam cupiditate dolores. Aut hic dolor laudantium non harum qui corrupti. Eaque dolore vel sed accusantium in totam.','ASSIGNED',3,'2019-01-01 00:00:00','2019-06-27 22:46:54',1),(62,11,11,'Doloremque cumque sunt est corporis tempora sapiente.','In velit porro natus et ut. Quia est nihil dolor voluptas. A commodi voluptatem sequi illum sed odio quia. Et reprehenderit consequatur itaque laudantium.','CLOSED',2,'2019-01-01 00:00:00','2019-08-14 19:11:13',1),(63,8,3,'In dignissimos facilis sed pariatur.','Autem quod rerum voluptatem nostrum temporibus. Quis ipsa quas velit ea. Aperiam repellat perferendis sit et accusamus adipisci doloremque. Doloremque itaque sapiente possimus iste ex. Adipisci explicabo eveniet repellendus qui ex.','WIP',1,'2019-01-01 00:00:00','2019-08-19 03:35:26',1),(64,10,9,'Eveniet minima tempora ea vitae alias iusto.','Labore quis quo cum alias deserunt aut. Porro voluptate dolor repellat qui suscipit nostrum.','PENDING',3,'2019-01-01 00:00:00','2019-04-19 08:23:35',1),(65,1,8,'Laborum sit unde omnis dignissimos et nesciunt.','Modi et quidem autem dolorem nobis occaecati. Quod impedit eveniet asperiores voluptas natus qui. Dolores omnis et nobis sit quis tenetur.','ASSIGNED',3,'2019-01-01 00:00:00','2019-08-05 07:11:37',1),(66,14,9,'Consequatur aut iure quis magni.','Dicta qui sunt ea molestiae. Perferendis incidunt tenetur et porro ad non. Deserunt praesentium quidem minima officiis sit suscipit. Qui commodi explicabo voluptatem magnam aut sunt.','CLOSED',1,'2019-01-01 00:00:00','2019-01-27 10:47:22',1),(67,7,11,'Quia recusandae quis asperiores perferendis officiis deserunt voluptas non.','Totam est quidem ipsa cumque quisquam fugit. A ratione nobis consequatur. Eum pariatur quia consequatur consequatur voluptatem. Unde dolorum sit perspiciatis accusamus ab laborum.','WIP',4,'2019-01-01 00:00:00','2019-08-02 08:21:59',1),(68,10,2,'Quisquam facilis dolorum reiciendis illum eos consequatur occaecati.','Quisquam quia a culpa sequi. Incidunt ea ratione ea quibusdam iure voluptates amet non. Et est dolores et modi.','CLOSED',1,'2019-01-01 00:00:00','2019-09-15 09:27:52',1),(69,15,6,'Porro quasi non qui quas accusantium id.','Repellendus esse quia velit sed ea ut est. Incidunt reiciendis aut qui quia beatae. Temporibus reiciendis aperiam quia aperiam similique alias. Dolores aspernatur atque commodi quisquam adipisci.','WIP',5,'2019-01-01 00:00:00','2019-10-09 22:13:27',1),(70,4,2,'Consequuntur labore quae illum esse reprehenderit ea doloribus.','Nihil sed corrupti eius numquam. Ullam voluptatem sunt magni non architecto. Dignissimos debitis laborum quos suscipit sed accusamus. Sunt hic architecto eos similique ducimus.','WIP',3,'2019-01-01 00:00:00','2019-09-30 10:43:41',0),(71,15,6,'Corrupti ex dolore quod.','Placeat perferendis voluptas exercitationem fuga. Consequatur distinctio voluptatem minima qui libero excepturi qui est.','RESOLVED',2,'2019-01-01 00:00:00','2019-06-01 10:58:06',0),(72,2,1,'Maxime sed rem expedita fugiat nisi.','Illo perspiciatis at qui. Repellat doloremque nulla dolor cumque. Aut molestias ad reprehenderit dicta. Quibusdam et voluptas exercitationem dolores maxime natus eaque.','ASSIGNED',3,'2019-01-01 00:00:00','2019-11-01 22:39:27',1),(73,10,4,'Vel velit doloribus non sint.','Reiciendis repellendus ipsa sit eveniet earum maxime doloremque aut. Maxime sed ut sit fugit numquam voluptatum porro. Deserunt ipsam ipsum architecto aut dolorem nihil.','CLOSED',3,'2019-01-01 00:00:00','2019-12-07 08:23:02',0),(74,4,14,'Accusantium iusto voluptatem animi saepe.','Veniam eum voluptas laborum itaque voluptas. Laudantium rerum soluta iure natus et et. Ipsum aut asperiores dolor quisquam ad. Magnam adipisci aut reprehenderit consequatur.','ASSIGNED',1,'2019-01-01 00:00:00','2019-02-26 21:56:51',0),(75,14,6,'Quis maiores voluptas quibusdam facere molestiae repellat vel.','Nesciunt sapiente dolorem illo distinctio porro excepturi. Delectus quis esse et asperiores. Sint consequuntur quaerat qui numquam rem esse. Voluptate nulla amet architecto laborum veniam. Iusto dolor laudantium perspiciatis quia omnis ipsum.','WIP',5,'2019-01-01 00:00:00','2019-12-25 12:35:06',1),(76,10,6,'Aut culpa quidem deserunt ex et eos.','Nihil ullam quas tempora dolores aut. Iusto ut dolorem minus vero enim delectus in. Omnis consequatur quae reiciendis qui quaerat ipsum.','WIP',1,'2019-01-01 00:00:00','2019-06-11 21:05:05',0),(77,4,2,'Dolore est unde esse nostrum quibusdam pariatur reiciendis qui.','Velit autem suscipit non itaque voluptas magnam explicabo ut. Debitis occaecati nihil ipsam esse magni sunt nesciunt.','PENDING',2,'2019-01-01 00:00:00','2019-04-09 19:40:07',0),(78,14,7,'Non dolorem hic odio voluptatum et maxime.','Blanditiis magnam asperiores quas asperiores et error officiis. Numquam consequuntur dolor ad officiis quo commodi tempora.','PENDING',4,'2019-01-01 00:00:00','2019-01-09 11:05:19',0),(79,9,1,'Aut dolorem voluptatibus aspernatur consequatur et aliquid dignissimos mollitia.','Tempora molestiae laboriosam quis id. Repellat voluptas quas soluta ut id est. Nesciunt occaecati fuga vero voluptas.','ASSIGNED',2,'2019-01-01 00:00:00','2019-04-21 20:26:17',0),(80,6,8,'Aut dolores at reprehenderit alias reiciendis et.','Error sed repellat minima necessitatibus voluptatem. Quidem libero in sit doloribus consequatur. Voluptates fuga tenetur tempora ea et et ut ad. Ipsa sapiente earum qui laborum porro natus.','RESOLVED',4,'2019-01-01 00:00:00','2019-06-13 20:55:31',1),(81,5,11,'Nostrum fugit iste pariatur nulla.','Aut et dolorem ut et est atque. Voluptatem itaque consequatur nihil quia labore inventore. Optio cupiditate similique maiores et possimus architecto. Id delectus a facere aspernatur perferendis.','ASSIGNED',5,'2019-01-01 00:00:00','2019-05-02 19:18:47',1),(82,2,11,'Numquam corrupti explicabo tempora quia quibusdam non consequatur.','Architecto vel laborum repellendus in ducimus. Quisquam corporis maxime vitae aut voluptatem voluptates. Voluptate nulla aut ut dolor recusandae animi. Voluptatem asperiores error adipisci earum ipsum voluptatum vero exercitationem.','WIP',1,'2019-01-01 00:00:00','2019-04-28 09:47:23',0),(83,9,3,'Ipsam consequatur temporibus et suscipit nihil soluta.','Illum ipsam nihil et tempore. Aut sunt sed totam non. Sapiente consequatur quo reiciendis quam corrupti et vitae.','RESOLVED',4,'2019-01-01 00:00:00','2019-08-10 15:00:35',0),(84,8,14,'Illum aliquam sit eos numquam id numquam.','Explicabo ut nemo reiciendis reiciendis doloribus ut atque. Impedit ut explicabo ut sed eveniet voluptatem quaerat. Praesentium aut molestias nihil dolorem id ut. Recusandae sit magni animi nesciunt soluta pariatur. Reiciendis omnis incidunt rem animi sunt aliquam.','PENDING',3,'2019-01-01 00:00:00','2019-01-26 21:40:49',1),(85,1,4,'Est non voluptate nihil qui aliquam at nostrum.','Architecto velit non ut harum. Asperiores maxime occaecati et dolorem molestiae molestiae. Rerum ut dolor non et et.','WIP',5,'2019-01-01 00:00:00','2019-07-14 15:22:22',0),(86,15,1,'Laudantium et suscipit et itaque et omnis.','Nobis et eaque voluptatum libero odio. Quis ea sunt minima nobis ipsum repudiandae doloribus. Beatae ex corporis dolorem consequatur et. Est consequatur autem velit accusamus vero.','RESOLVED',1,'2019-01-01 00:00:00','2019-06-15 11:49:24',0),(87,1,4,'At dolor minima possimus nihil pariatur ut.','Eligendi amet beatae ipsa dolorem cupiditate magnam. Suscipit assumenda et aut. Perspiciatis occaecati ut et maxime.','CLOSED',4,'2019-01-01 00:00:00','2019-09-01 12:59:55',1),(88,10,9,'Delectus corporis earum fugiat itaque.','Voluptatem mollitia dignissimos amet autem. Saepe assumenda similique dolorem sapiente et minus optio et. Sit inventore ut aut quod ullam sit.','CLOSED',1,'2019-01-01 00:00:00','2019-12-23 05:31:26',0),(89,10,8,'In sunt velit quibusdam quo minima nobis.','Excepturi enim autem ipsa quibusdam ut aliquam beatae. Aliquid quia eaque assumenda molestiae laborum sed vel in. Iste facilis odit voluptatem. Quae rerum est reiciendis eveniet qui voluptates provident harum.','CLOSED',3,'2019-01-01 00:00:00','2019-11-17 12:37:27',1),(90,7,5,'Ab dolorem eum aut ut et error sapiente nesciunt.','Nulla et nobis libero cumque. Culpa provident velit eaque culpa harum fuga. Harum necessitatibus omnis inventore impedit. Aut mollitia occaecati velit optio.','RESOLVED',5,'2019-01-01 00:00:00','2019-06-18 22:33:01',0),(91,12,2,'In dignissimos velit numquam deserunt fuga quos natus voluptatum.','Saepe tenetur odit vel itaque dolorem quam. Debitis optio nemo rerum enim culpa. Est illo placeat est ut sint. Iste rerum qui rerum quasi molestiae.','ASSIGNED',1,'2019-01-01 00:00:00','2019-09-06 02:52:46',0),(92,8,5,'Autem maiores vero ipsa consequatur.','Ratione possimus veritatis iste nulla quibusdam voluptatem labore. Sint et magni fugiat ut eius. Ipsa ea doloremque qui hic.','PENDING',3,'2019-01-01 00:00:00','2019-01-04 18:44:50',1),(93,6,6,'Quibusdam et neque hic.','Fugit dolores est sit animi voluptas. Voluptatem omnis pariatur veniam.','RESOLVED',2,'2019-01-01 00:00:00','2019-01-05 13:05:51',1),(94,6,4,'Iusto fugit cum et consectetur sint tempora magnam.','Voluptatibus vero sequi et ducimus dignissimos expedita ea. Voluptatem odit quas veniam et perspiciatis sit nihil. Eius eveniet voluptatem deleniti consequatur soluta eum temporibus. Et rerum omnis doloribus perspiciatis nihil voluptas eos.','ASSIGNED',2,'2019-01-01 00:00:00','2019-01-12 09:14:46',0),(95,2,1,'Ut repellat commodi debitis qui.','Ut quod libero necessitatibus exercitationem laborum et voluptatem eaque. Aperiam architecto consectetur quia. Perspiciatis repellat asperiores eveniet. Tempore consequatur repellendus possimus dolores quisquam consequatur.','CLOSED',4,'2019-01-01 00:00:00','2019-02-13 06:56:17',0),(96,6,10,'Voluptatem illum ipsam non repudiandae.','At id quae autem et autem dolores. Pariatur dignissimos quo quae accusantium temporibus. Sed est ea et voluptatum voluptas laboriosam.','ASSIGNED',2,'2019-01-01 00:00:00','2019-07-02 06:57:10',0),(97,5,13,'In exercitationem molestias et velit.','Magni omnis minus sit. Officiis et molestias quasi necessitatibus nihil quas. Non odit aut enim facilis est dolorum reiciendis. Accusantium culpa accusamus voluptatem voluptatem.','CLOSED',5,'2019-01-01 00:00:00','2019-02-21 13:57:01',1),(98,8,10,'Facilis dolore vel eos.','Asperiores quis ut eius. Eos et et ratione saepe quo et. Vitae quia voluptas illum voluptatum excepturi unde labore.','PENDING',4,'2019-01-01 00:00:00','2019-03-18 00:53:38',1),(99,1,3,'Eius est provident dolor quia tenetur sit perspiciatis.','Culpa omnis dolorem reprehenderit sequi animi. Ut expedita eos aliquam maxime. Odio similique odio doloremque voluptates non cupiditate ab.','ASSIGNED',2,'2019-01-01 00:00:00','2019-08-14 10:37:07',1),(100,7,3,'Temporibus labore animi voluptas dignissimos.','Nihil aut velit voluptas quia. Sunt et architecto nam facere nihil voluptatum culpa quo. Deleniti consequatur ut itaque et rerum.','CLOSED',3,'2019-01-01 00:00:00','2019-06-19 02:24:45',1),(101,15,12,'Omnis possimus quisquam facere et commodi.','Sit autem corrupti sit recusandae aperiam aut. Sed nostrum neque voluptates cumque. Nisi dolores est voluptatibus velit nostrum nemo ut.','ASSIGNED',2,'2019-01-01 00:00:00','2019-06-19 04:12:25',1),(102,3,2,'Perspiciatis rerum quia quo qui.','Eos est qui maiores non nemo exercitationem. Id at voluptatem qui laborum debitis. Veniam excepturi qui quae. Error quisquam consequatur fugiat et quaerat ratione temporibus.','WIP',3,'2019-01-01 00:00:00','2019-12-05 13:47:53',1),(103,12,1,'Iusto ut ut ea.','Ullam libero dolores sed est quo alias voluptas est. Nihil commodi quidem alias omnis. Quasi iusto ut molestias consequatur incidunt. Eaque illo enim aut est numquam sit eum. Animi sit debitis inventore eos ipsa quas.','RESOLVED',2,'2019-01-01 00:00:00','2019-04-01 08:22:16',0),(104,8,3,'Illum animi adipisci rem rerum ipsa occaecati.','Maiores provident et aut quis. Nostrum nemo eum voluptate et et sint. Nemo beatae reiciendis et dolores saepe vel.','CLOSED',5,'2019-01-01 00:00:00','2019-06-16 00:27:37',1),(105,12,14,'Aut velit quis doloremque.','Culpa non quia soluta debitis quia veritatis amet. Nihil ipsum tenetur labore. Nihil consequatur et consequatur adipisci quibusdam harum adipisci modi.','RESOLVED',5,'2019-01-01 00:00:00','2019-07-14 01:11:20',0),(106,9,6,'Sit ea mollitia quo vitae.','Praesentium ad voluptas quia cupiditate soluta. Eius sit molestiae inventore nihil. Neque aliquam ad in aperiam ut dolorem.','PENDING',3,'2019-01-01 00:00:00','2019-04-18 04:33:51',0),(107,11,7,'Amet earum minima deleniti sunt.','Dignissimos qui ipsam occaecati quaerat excepturi. Ut et repudiandae vel inventore soluta architecto consequatur. Odio et aliquam debitis autem aut. Ad inventore saepe eligendi animi blanditiis adipisci vel.','PENDING',3,'2019-01-01 00:00:00','2019-11-15 19:15:15',1),(108,4,5,'Ipsum doloribus assumenda iste voluptatem molestiae sequi officiis impedit.','Rerum laudantium natus aut quis sit occaecati. Impedit cupiditate maxime beatae voluptatem corrupti. Nemo praesentium labore at voluptatem.','PENDING',3,'2019-01-01 00:00:00','2019-06-27 10:34:45',1),(109,11,13,'Similique ut qui sunt enim expedita et repudiandae.','Et nihil ut natus odit. Dicta exercitationem adipisci ab illum sed occaecati dolor autem. Deserunt laborum et maxime minus enim aut. Animi asperiores aut aut porro. Qui dolor perferendis ad.','PENDING',3,'2019-01-01 00:00:00','2019-10-23 19:08:03',1),(110,8,3,'Ut nesciunt aut quia omnis nisi.','Est omnis ut at ut. Debitis quos et voluptatem. Libero explicabo unde qui nulla sed.','WIP',4,'2019-01-01 00:00:00','2019-08-05 15:56:03',1),(111,8,3,'In incidunt sunt eaque enim voluptates expedita.','Velit et facilis maiores beatae quis possimus. Fuga officia qui placeat quis.','PENDING',1,'2019-01-01 00:00:00','2019-07-15 22:16:06',0),(112,4,13,'Minus dolores sint distinctio omnis.','Perspiciatis recusandae nobis ea expedita corporis enim. Perspiciatis quo est autem esse aspernatur beatae facilis atque. Et sunt voluptatibus in et iusto. Mollitia illum qui eum.','CLOSED',4,'2019-01-01 00:00:00','2019-11-26 15:32:22',0),(113,12,10,'Asperiores asperiores sed asperiores dignissimos quis eius voluptates.','Nulla itaque consequatur soluta cumque assumenda. Omnis dolores autem sint placeat accusamus cupiditate libero. Quis recusandae ratione perspiciatis voluptas voluptatem.','RESOLVED',5,'2019-01-01 00:00:00','2019-11-27 10:53:35',0),(114,10,4,'Eum sunt ut blanditiis.','Dolorem optio ipsam incidunt ducimus. Voluptatem quis enim aliquam. Officia nobis magnam et.','ASSIGNED',4,'2019-01-01 00:00:00','2019-10-26 07:50:53',1),(115,3,13,'Autem atque eum itaque ex sit explicabo porro.','Vel soluta distinctio voluptas consequatur. Tenetur cupiditate minus consequatur enim aut iusto. Enim aut dolor eum magnam.','CLOSED',4,'2019-01-01 00:00:00','2019-05-16 06:33:43',0);
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,1,1,'ipsam'),(2,2,2,'excepturi'),(3,3,3,'iste'),(4,4,4,'et'),(5,5,5,'iusto'),(6,6,6,'neque'),(7,7,7,'voluptate'),(8,8,8,'sed'),(9,9,9,'voluptatem'),(10,10,10,'et'),(11,11,11,'modi'),(12,12,12,'excepturi'),(13,13,13,'facilis'),(14,14,14,'dolor'),(15,15,15,'et'),(16,4,7,'Shetland'),(17,7,16,'nut');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userassignment`
--

DROP TABLE IF EXISTS `userassignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userassignment` (
  `user_id` int(11) NOT NULL,
  `ticket_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userassignment`
--

LOCK TABLES `userassignment` WRITE;
/*!40000 ALTER TABLE `userassignment` DISABLE KEYS */;
INSERT INTO `userassignment` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15),(16,1),(16,16);
/*!40000 ALTER TABLE `userassignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password` varchar(128) NOT NULL,
  `email` varchar(64) NOT NULL,
  `creation_date` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'valentine34','e8b4e0fda88fa18df554ce562842fd0dd6896f44','giovanni.abbott@example.com','1991-02-23 00:04:05'),(2,'ppowlowski','094721e1b7991e3d37833aca28e62df7a3d22eea','ehoeger@example.net','2011-12-09 08:12:44'),(3,'lhilll','53056556fee3818d832fcc70ca81291b65ca1733','monroe.white@example.org','1985-11-10 21:41:55'),(4,'gwalter','8de72eb31dc903d5ba09d96c29cc4b4e12716a30','rogers65@example.org','1970-07-20 20:04:08'),(5,'xo\'keefe','9b6759b5389ca568196815e76146c134ec806997','hbins@example.net','1972-10-30 09:10:07'),(6,'oran.heaney','213d7da89341359e1b366d4b0a718befce78a366','colin.schimmel@example.org','1977-10-05 12:05:12'),(7,'kyler12','985b28461386aa3b102726768696f5a93366a3ae','ewilderman@example.org','2002-12-09 14:51:54'),(8,'rose.lueilwitz','0a0239770b3fdc1cb95711b20c2b7f7fff810837','zaria.gleason@example.com','1998-06-06 03:47:10'),(9,'rickey.jones','8f635b6284dcdf7d64c7c6fccbd6db7e29ae6a5d','bhermiston@example.org','2004-01-08 21:03:18'),(10,'epowlowski','c384c3aed948ebc9e3084bcbb8056eb5b17c193a','mikayla93@example.com','2018-05-31 17:38:42'),(11,'lilyan43','febfcfb334d0e9874e632dd28eb511c2583abbcf','cremin.aliya@example.com','1981-01-08 03:54:29'),(12,'littel.yoshiko','bbbc6d9b10dd8c558ebc9622e37ef17bd44b2e42','sheila65@example.org','2009-07-13 10:56:46'),(13,'karli.schmeler','9b51c41895a5b70502291d2085fedabd90bdc049','hrowe@example.net','1999-05-12 04:01:58'),(14,'katheryn72','33c151cebd09e94100384f5a2cb22a8d62bf22e7','fkeeling@example.net','1996-10-21 05:36:21'),(15,'lemke.brielle','ed2673997cae4269d4e0ad7aaa8ad426139c52a4','lstark@example.net','2013-09-11 14:49:43'),(16,'DaleCS123','$2a$10$h22AgTkml8JAaI9w9EedjOZgmO0mNWfMiguIAXd8pRmVyJKxWA2h2','Dale.Seen@gmail.com','2019-11-14 22:08:07'),(17,'DaleCS123','$2a$10$RrdcKkK72oXPmi2MHuquYuBaXxmOWOf/z2WmRMJNWYSGKyekOGTqq','my.Email@gmail.com','2019-11-14 22:10:24'),(18,'SomeGuy123','$2a$10$3BwyQlT.VMl4wvcWCEswku1kZ7y.DeejGxUWyCx07uzRPfIQ8owQS','Some.Email@email.com','2019-11-20 23:12:15'),(19,'Username2','$2a$10$fMUQgEFMwMc6BfxPw3poGu8N19u3axU9eY49wkoFND8yGK9YWchYS','some1.email@email.com','2019-11-24 22:31:25'),(20,'Username3','$2a$10$Hcp1W8bto8iD0.eyCTyqquOPFScXhaINE2uU/5daPhb1EwWbgqO3O','zfiner@att.net','2019-11-25 17:43:34');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-26 22:03:05
