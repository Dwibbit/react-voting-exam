# Created with React

This project was created with with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
App is also deployed through AWS in a personal bucket [http://rrs.voting-test.s3-website-ap-southeast-2.amazonaws.com/](http://rrs.voting-test.s3-website-ap-southeast-2.amazonaws.com/)


## For Deployment

### `npm run build`

Run the build command to produce build files for uploading to AWS S3. Upload files to AWS S3 console under newly created bucket. Enable Static Website Hosting through S3 bucket properties. Enabled permissions script to allow all users get objects from resource link, including public access to the hosting site.

# Software Documentation

## Overview of Components

The software is a single session voting software for multiple Pokemon categories. All data for the categories and individual Pokemon are loaded in a JSON file in the /src folder under data.json with an array for categories with objects for all Pokemon choices for that category. Additional categories can be added through adding objects of the same template.

The components are separated into App, CategoryGrid, and VoteCells.
The App component contains all of the components, in which multiple CategoryGrids can be loaded depending on how many Categories are retrieved from the data category array, in which each category is mapped in the App for displaying each category. App also includes the button for submitting votes.
CategoryGrid shows multiple VoteCells, in which VoteCells show each option to vote in each given category.
VoteCells contain individual Pokemon data with name, picture, and vote button.

Votes submitted are stored in LocalStorage for allowing only one submission per unique user.

## React Hooks used

### useEffect, useState, useRef, useContext

#### useContext

CreateContext (DataContext) was used to create a context provider wrapper around the App and storing the values from the data.json file so they may be accessed anywhere among the child components (CategoryGrids and VoteCells)

#### useEffect

useEffect used in child components for detecting if data exists in LocalStorage to determine if a user has already voted

#### useState & useRef

useState and useRef were both used for state management across all components

Additional documentation found in software functions