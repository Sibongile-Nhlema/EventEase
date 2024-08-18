🎉 EventEase
🚀 Project Overview
EventEase is an innovative web application designed to revolutionize the way events are managed and organized. By streamlining the event registration process and eliminating tedious manual data entry, EventEase empowers organizers to focus on what truly matters—creating unforgettable experiences. The platform provides real-time access to participant data, automates communication for reminders, updates, and confirmations, and offers insightful data visualizations. Whether you're organizing a small community gathering or a large corporate event, EventEase is your ultimate tool for ensuring a seamless and efficient event management process.

🌍 Real-World Problem Solved
In today's fast-paced world, event organizers face numerous challenges, from managing participant data to ensuring timely communication and analyzing event success. Manual data entry is time-consuming, prone to errors, and can lead to significant delays. EventEase addresses these issues by automating the entire registration and communication process, reducing the risk of errors, and providing organizers with the tools they need to make data-driven decisions. With EventEase, event management becomes more efficient, accurate, and user-friendly, ultimately leading to higher participant satisfaction and successful events.

✨ Features
🔄 Automated Event Registration: Say goodbye to manual data entry. EventEase automates the registration process, saving time and reducing errors.
📊 Real-Time Data Access: Gain instant access to participant data and event analytics, enabling informed decision-making.
📧 Automated Communication: Keep participants informed with automated email and SMS reminders, updates, and confirmations.
📈 Data Visualization: Leverage Power BI for detailed and insightful visualizations, helping you understand your event's impact.
👌 User-Friendly Interface: Experience a smooth and intuitive user interface designed with React, making event management easier than ever.
📝 Registration Requests: Participants can request to register for events, and admins can approve or reject these requests. Admins can also store or delete requests as needed.
🛠️ Technologies Used
Backend:
 
Python (Flask)
Database:
 
MySQL with SQLAlchemy
Frontend:
   
HTML, CSS, JavaScript, React
Data Visualization:

Power BI
Task Queue:

Bull (for job queues)
Other Libraries:
 
WTForms, Flask-WTF (for form handling), Email and SMS libraries
Testing:
 
pytest, unittest
📋 Endpoints
Event Management
GET /api/events: Retrieve all events.
GET /api/events/<id>: Retrieve a single event by ID.
POST /api/events: Create a new event.
PUT /api/events/<id>: Update an event by ID.
DELETE /api/events/<id>: Delete an event by ID.
Participant Management
GET /api/participants: Retrieve all participants.
GET /api/participants/<id>: Retrieve a single participant by ID.
POST /api/participants: Create a new participant.
PUT /api/participants/<id>: Update a participant by ID.
DELETE /api/participants/<id>: Delete a participant by ID.
Admin/Organizer Management
GET /api/admins: Retrieve all admins.
GET /api/admins/<id>: Retrieve a single admin by ID.
POST /api/admins: Create a new admin.
PUT /api/admins/<id>: Update an admin by ID.
DELETE /api/admins/<id>: Delete an admin by ID.
Company Management
GET /api/companies: Retrieve all companies.
GET /api/companies/<id>: Retrieve a single company by ID.
POST /api/companies: Create a new company.
PUT /api/companies/<id>: Update a company by ID.
DELETE /api/companies/<id>: Delete a company by ID.
Registration Requests
POST /api/registrations: Request to register for an event/service.
GET /api/registrations: Retrieve all registration requests.
GET /api/registrations/<id>: Retrieve a single registration request by ID.
PUT /api/registrations/<id>: Update a registration request (e.g., approve/reject).
DELETE /api/registrations/<id>: Delete a registration request by ID.
🔧 Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Sibongile-Nhlema/EventEase.git
Navigate to the project directory:

bash
Copy code
cd EventEase
Create a virtual environment and activate it:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install the required dependencies:

bash
Copy code
pip install -r requirements.txt
Set up the database and run the application:

bash
Copy code
# Start the backend server
flask run
Run frontend application:

bash
Copy code
cd frontend
npm install
npm start
💻 Usage
To interact with the API: Use tools like Postman or curl to test the endpoints listed above.
🤝 Contributing
How to contribute: Fork the repository, create a new branch, make your changes, and submit a pull request. Ensure that you follow the coding standards and write tests for your changes.
📜 License
License details: This project is licensed under the MIT License. See the LICENSE file for details.
✉️ Contact
Project maintainers: For any questions or suggestions, please reach out to the project maintainers through the repository issues or directly via email.