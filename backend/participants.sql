--this script creates a Participants Table
CREATE TABLE Participants(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	phone VARCHAR(10),
	registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	verification_code VARCHAR(6),
	participation_verified BOOLEAN DEFAULT FALSE,
	participation_time TIMESTAMP,
	code_expiry TIMESTAMP,
);
