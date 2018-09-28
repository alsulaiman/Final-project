-- not compleated yet

### Schema

CREATE DATABASE carpool_db;
USE carpool_db;

CREATE TABLE drivers (
    driver_id INT AUTO_INCREMENT NOT NULL,
    driver_name VARCHAR(255), 
    car VARCHAR(255), 
    rating 
    email_address VARCHAR(255), 
    driver_password VARCHAR(255), 
    profile_img VARCHAR(255)
);

CREATE TABLE trips (
    trip_id 
    driver_id 
    pickup_location 
    destination 
    trip_date DATE(), 
    trip_time TIME(), 
    price SMALLMONEY
);

CREATE TABLE riders (
    rider_id 
    rider_name 
    rating 
    email_address 
    rider_password 
    profile_img 
);

CREATE TABLE history (
    history_id 
    trip_id 
    rider_id 
);

CREATE TABLE trips
(
    id INT AUTO_INCREMENT NOT NULL, 
	driver_id varchar(255) NOT NULL,
	rider_id varchar(255) NOT NULL,
	pickup_location varchar(255) NOT NULL,
	destination varchar(255) NOT NULL,
	trip_DATE(),DATETIME,
	trip_DATE(),varchar(255) NOT NULL,
	pickup_time varchar(255) NOT NULL,
	car_model varchar(255) NOT NULL,
	price varchar(255) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (driver_id) REFERENCES Persons(driver_id),
	FOREIGN KEY (rider_id) REFERENCES Persons(rider_id)
);

