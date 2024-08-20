--this script creates an events table

CREATE TABLE Events(
	id INT AUTO_INCREMENT PRIMARY KEY,
	eventname VARCHAR(100) NOT NULL,

	startdate DATE NOT NULL,
	enddate DATE NOT NULL,

	startime DATETIME NOT NULL,
    endtime DATETIME NOT NULL,

	location VARCHAR(256),
	description TEXT,
	maximum-participants INT,
);
