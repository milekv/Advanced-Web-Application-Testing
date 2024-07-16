# Bug Reports

## Bug 1: Task Not Adding to List
- **Description:** After clicking "Save", the task does not appear in the list.
- **Steps to Reproduce:** 
  1. Open the application.
  2. Click "Add Task".
  3. Enter the task title.
  4. Click "Save".
- **Expected Result:** The task should appear in the list.
- **Actual Result:** The task does not appear in the list.
- **Screenshot:** ![screenshot](screenshot.png)

## Bug 2: Application Crashes During Stress Test
- **Description:** The application crashes when simulating more than 500 concurrent users.
- **Steps to Reproduce:** 
  1. Use JMeter to simulate 500 concurrent users.
  2. Perform actions such as adding, editing, and deleting tasks.
- **Expected Result:** The application should handle the load.
- **Actual Result:** The application crashes.
- **Screenshot:** ![screenshot](screenshot.png)
