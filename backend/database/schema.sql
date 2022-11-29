-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`blog` (
  `idblog` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`idblog`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comments` (
  `idcomments` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(255) NULL,
  `content` VARCHAR(255) NULL,
  `blog_idblog` INT NOT NULL,
  PRIMARY KEY (`idcomments`, `blog_idblog`),
  INDEX `fk_comments_blog_idx` (`blog_idblog` ASC) VISIBLE,
  CONSTRAINT `fk_comments_blog`
    FOREIGN KEY (`blog_idblog`)
    REFERENCES `mydb`.`blog` (`idblog`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
