CREATE DATABASE  IF NOT EXISTS `e_learning`;
USE `e_learning`;


CREATE TABLE `professor` (
  `pid` int not null AUTO_INCREMENT,
  `pname` varchar(45) DEFAULT NULL unique,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `university` varchar(45) DEFAULT NULL,
  `material` text default NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT = 1;



CREATE TABLE `student` (
  `sid` int not null AUTO_INCREMENT,
  `sname` varchar(45) DEFAULT NULL unique,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `university` varchar(45) DEFAULT NULL,
  `message` text default NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

alter table professor add column(message text default NULL);
insert into professor values(1,'pranay','mintugarlapati@gmail.com','123456789P','Java','Vit','https://drive.google.com/file/d/1LIMfd5VgQ6KHYR8sYcsUiF3Q0kxufU99/view','all the best for exam for queries mail me');
insert into professor values(2,'mintu','pranaygarlapati@gmail.com','1234','python','srm','youtube.comstudent','Zoom class tmrw at 10:00am ist see the below link');
insert into professor values(3,'bittu','bittugarlapati@gmail.com','1234','python','cbit','https://www.youtube.com','come to class early tmrq' );
insert into student values(1,'pranay','pranaygarlapati@gmail.com','123','vit','');
insert into student values(2,'ritesh','riteshgarlapati@gmail.com','1234','cbit','');