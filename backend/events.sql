--this script creates an events table

CREATE TABLE Events(
	id INT AUTO_INCREMENT PRIMARY KEY,
	event_name VARCHAR(100) NOT NULL,
	start_time DATETIME NOT NULL,
        end_time DATETIME NOT NULL,
	location VARCHAR(256),
	decscription TEXT,
	maximum-participants INT,
);
