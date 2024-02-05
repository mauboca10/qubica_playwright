
# Playwright Test Project

## Overview

This is a sample project for automated testing using Playwright. Playwright is a powerful end-to-end testing framework for web applications that supports multiple browsers.

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   git clone https://github.com/mauboca10/qubica_playwright.git

    Navigate to the project directory:

    cd your-playwright-project

    Install the required dependencies:
    
    npm install

2. Running Tests
    To run the tests in this project, you can use the following command:

    npx playwright test

    This command will execute all the test files in parallel using the default browser configurations defined in the playwright.config.js file.

    To run tests in a specific browser or configuration, you can use:

    npx playwright test --project=<project-name>
    Replace <project-name> with the name of the project configuration you want to use.

3. Report
    Before run the test an HTML Report is generating in: playwright-report folder.

## Configuration
The Playwright configuration is defined in the playwright.config.js file. You can customize the browsers, devices, and other settings for your tests in this file.

## Documentation
For more information on using Playwright and writing tests, you can refer to the official Playwright documentation.


Happy testing with Playwright!



