# ParkSmart — Smart Parking Website

A responsive front-end prototype using plain HTML, CSS and JavaScript.

## Files

- `index.html` — webpage structure
- `css/styles.css` — layout, colours, responsive styling
- `js/script.js` — parking location data, search, filters and demo booking interactions

## Run locally

**Quick method**
1. Download and extract `parksmart_source_code.zip`.
2. Open the `parksmart_project` folder.
3. Double-click `index.html` to open it in Chrome, Edge or Firefox.

**Using Visual Studio Code**
1. Open the `parksmart_project` folder in VS Code.
2. Open `index.html`.
3. If you have the Live Server extension, right-click `index.html` and choose **Open with Live Server**.

No package installation or build command is required.

## Edit the parking locations

Open `js/script.js` and edit the `lots` array near the top. Each entry contains:
- `name`: parking location name
- `place`: location description
- `price`: hourly fee in rupees
- `free`: number of available spaces
- `total`: total number of spaces

## Important

This is a front-end demo using sample data. A confirmed booking only changes the displayed availability in the current browser session. Real sensor updates, shared reservations, user accounts, maps and payments require a backend and external integrations.
