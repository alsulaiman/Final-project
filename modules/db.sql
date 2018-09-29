-- Schema
DROP DATABASE carpool_db;

CREATE DATABASE carpool_db;
USE carpool_db;

CREATE TABLE drivers (
    driver_id INT AUTO_INCREMENT NOT NULL,
    driver_name VARCHAR(255), 
    car VARCHAR(255), 
    rating INT, 
    email_address VARCHAR(255), 
    driver_password VARCHAR(255), 
    profile_img VARCHAR(255),
    PRIMARY KEY (driver_id)
);

CREATE TABLE trips (
    trip_id INT AUTO_INCREMENT NOT NULL,
    driver_id INT NOT NULL,
    pickup_location VARCHAR(255),
    destination VARCHAR(255), 
    trip_date DATE, 
    trip_time TIME, 
    price FLOAT, 
    PRIMARY KEY (trip_id),
    FOREIGN KEY (driver_id) REFERENCES drivers(driver_id)
);

CREATE TABLE riders (
    rider_id INT AUTO_INCREMENT NOT NULL,
    rider_name VARCHAR(255), 
    rating INT, 
    email_address VARCHAR(255), 
    rider_password VARCHAR(255), 
    profile_img VARCHAR(255), 
    PRIMARY KEY (rider_id)
);

CREATE TABLE history (
    history_id INT AUTO_INCREMENT NOT NULL,
    trip_id INT NOT NULL, 
    rider_id INT NOT NULL, 
    PRIMARY KEY (history_id),
    FOREIGN KEY (trip_id) REFERENCES trips(trip_id),
    FOREIGN KEY (rider_id) REFERENCES riders(rider_id)
);