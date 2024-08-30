# News Aggregator

## Overview

This is a front-end project built using React that functions as a news aggregator website. Users can search for articles and filter results by date, category, and source, accessing news from various APIs. The application is designed to be mobile-responsive and containerized using Docker for streamlined deployment.

## Features

* **Article Search and Filtering:** Search for articles by keyword and refine results using filters for date, category, and source.
* **Personalized News Feed:** Curate your news feed by selecting preferred sources, categories, and authors (planned feature).
* **Mobile-Responsive Design:** The application seamlessly adapts to various screen sizes, ensuring optimal viewing on mobile devices.

## Data Sources

Currently, the project integrates with the following news API:

* **NewsAPI:** Provides access to articles from a wide range of sources.
* **The Guardian:** Access articles from The Guardian newspaper.
* **New York Times:** Access articles from The New York Times.

## Installation and Running

**1. Clone the Repository:**

git clone [https://github.com/Syam7093/Frontend-Take-Home-Challenge.git]

**2. Install Dependencies:**
npm install

**3. Start the Development Server:**
npm start


## Docker Containerization
**1. Build the Docker Image:**
docker build -t news-aggregator.

**2. Run the Docker Container:**
docker run -p 3000:3000 news-aggregator

## Project Structure
The project is organized into the following directories:

src/
components/: Contains reusable React components that build the user interface.   
services/: Houses functions for interacting with APIs and fetching data.
App.js: The main application component that coordinates other components and renders the user interface.
Dockerfile: Defines the instructions for building the Docker image.





