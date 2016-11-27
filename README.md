# practiceRoomMate
GUI Project for CS 338 at Drexel University
Kevin Garrone (kfg28@drexel.edu)

REQUIREMENTS to run this program locally:
- npm v3.x.x
- Node.js v4.x.x 
(Either use sudo apt install, or get both from: https://nodejs.org/en/download/)

PURPOSE:
This program is designed for students to be able to sign in and out of the practice rooms in a music department. The student must provide his or her name and email. The students for each room are stored in a table for the music department's records.

Currently, the project only has functionality for checking in and out of rooms. Further updates would add admin controls (allowing non-admins to access the program remotely just to see if a room is available. Only users logged in as admin will have the capability to sign in and out). Admin controls will also allow for room management (adding/renaming rooms, save logs, etc.).

SETUP:
1. Navigate to the root directory of the project.
2. Run "npm install" to install the required node_modules
3. Run "npm install bootstrap" to get the required bootstrap templates

RUNNING THE PROJECT:
1. Navigate to the root directory of the project.
2. Run "npm start"
3. A browser will pop up with the program running.
4. Terminate the npm server in order to stop the program.
