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

INSERT INTO drivers (driver_name, car, rating, email_address, driver_password, profile_img) 
VALUES ('ali', 'camry', 4, 'asd@gmail.com', '12345678', 'img.jpg'),
('hamad', 'camry', 3, 'dsa@gmail.com', '12345678', 'img.jpg'),
('john', 'camry', 5, 'agth@gmail.com', '12345678', 'img.jpg');

INSERT INTO trips (driver_id, pickup_location, destination, trip_date, trip_time, price) 
VALUES (2, '100 City Centre Dr, Mississauga, ON L5B 2C9', '252 Bloor St', '2018-10-11', '08:00', 15),
(3, '941 Progress Ave, Scarborough, ON M1G 3T8', '252 Bloor St', '2018-10-11', '08:00', 20);

INSERT INTO riders (rider_name, rating, email_address, rider_password, profile_img) 
VALUES ('Sara', 4, 'sara@gmail.com', '12345678', 'img.jpg'),
('Ali', 4, 'ali@gmail.com', '12345678', 'img.jpg'); 

INSERT INTO history (trip_id, rider_id) 
VALUES (1, 1),
(2, 1); 