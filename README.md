# Advanced Web Application Testing

## Description
This project involves comprehensive testing of a web application for task management (ToDo), including functional, performance, security, and automated UI tests.

## Project Structure
- `Test-Plan/`: Contains the test plan.
- `Test-Scenarios/`: Contains the test scenarios for functional, performance, and security tests.
- `Bug-Reports/`: Contains the bug reports.
- `Automated-Tests/`: Contains automated UI tests using Playwright.

## How to Use
1. Review the `Test-Plan` for the overall testing strategy.
2. Follow the `Test-Scenarios` to execute the respective tests.
3. Check the `Bug-Reports` for any issues found during testing.
4. Run the automated tests in `Automated-Tests` using Playwright.

## Running Automated Tests
1. Install Playwright:
   ```bash
   npm install -D @playwright/test
   npx playwright test
