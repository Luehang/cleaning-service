# Customer to Customer E-commerce's Source Code

  This repository holds the source code to **Customer to customer E-commerce** that is built with
  **NodeJS/Express/MongoDB**.

# Collaboration

  Navigate to the ``package.json`` file and input/create the following.

  ![](doc/source/images/collaboration-package.png)

## Before you Begin

  * You must have the following prerequisites installed:
    * [Node.js](https://nodejs.org/) runtime v7.7.4 or greater (including the npm package manager)
    * [MongoDB](https://docs.mongodb.com/v3.4/installation/) database

  * The following is not required to start up, but obiviously you should have these for production:
    * Have a [Google Analytic](https://analytics.google.com/analytics) account with a new tracking ID created for the site.  This will be use for analysis on the website.
    * Have a [SendGrid](https://sendgrid.com/) account with a secret API key and a receiving email address.  This will be use for receiving email messages from customers and sellers on the website.

## Steps to Run Locally

Perform steps 1-4:

  1. [Clone the Repo](#1-clone-the-repo)
  2. [Add Data to Database](#2-add-data-to-database)
  3. [Edit Files and Create .env File](#3-edit-files-and-create-env-file)
  4. [Run the Web Application](#4-run-the-web-application)

### 1. Clone the Repo

  **Clone** ``cleaning-service`` locally. In a terminal, run:

  `$ git clone https://github.com/Luehang/cleaning-service.git cleaning-service`

### 2. Edit Files and Create .env File

  * Find the main ``app.js`` file and skim through it to find the **development logger** for **debugging**.  Uncomment the highlighted code below for testing purposes.

    ![](doc/source/images/dev-logger.png)

  * Modify ``env.example``'s name to ``.env`` and populate the service
  credentials as you create/retrieve the credentials:

    ```
    # SendGrid Environments at https://www.sendgrid.com
    SENDGRID_API_KEY=<put Secret API Key here>
    SENDGRID_TO_EMAIL=<put receiving email here>

    # Google's Analytic tracking ID for the Global Site Tag (gtag.js) tracking code
    GOOGLE_TRACKING_ID=<put google tracking id here>
    ```

### 3. Run the Web Application

  Enter the following while in the ``cleaning-service/`` directory to run the app locally...

  ```
  $ npm install
  $ npm start
  ```

  Application will run default at **localhost:5000**...

  **Happy coding!**

# License

  [Apache 2.0](LICENSE)