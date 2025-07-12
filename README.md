
# PopCorn Picks (Movie Search Application)
🌐 **Live Demo**: [PopCorn Picks](https://astounding-douhua-40fea8.netlify.app/)


## Overview

This project is a simple movie search web application built using React.js. It allows users to search for movies by title and view details about each movie. The application fetches movie data from the OMDB API and displays it in a user-friendly interface.

## Features

- *Homepage*: Displays a search bar and a list of popular movies by default in a grid format.
- *Search Functionality*: Allows users to search for movies by title and view results including movie titles and release years.
- *Movie Details*: Displays additional details about a selected movie, such as plot summary, genre, and ratings, in a modal.
- *Error Handling*: Shows a "No Data Found" message if the search query does not match any movies and "API error" handles API request errors.
- *Infinite Scroll*: Implements infinite scrolling to automatically load more movies as the user scrolls down the page.
- *Filter Capabilities*:Includes filtering functionality to refine movie results by release year and IMDb rating.
- *Toggle Mode*:Supports dark and light mode toggling for an enhanced viewing experience.
- *Repsonsive* :Fully responsive design that adapts seamlessly to various screen sizes, including mobiles, tablets, and desktops.
## Screenshots
<img width="1917" height="892" alt="Screenshot (54)" src="https://github.com/user-attachments/assets/cd8dea28-5804-4283-953e-6518925c64a0" />
<img width="1911" height="904" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/4930bcb5-ecef-4dc0-9874-a6bad4fcb0d7" />
<img width="1917" height="907" alt="Screenshot (51)" src="https://github.com/user-attachments/assets/4319ec3d-d5d5-4918-80a5-d671a8110b24" />
<img width="450" height="907" alt="Screenshot (51)"  src="https://github.com/user-attachments/assets/eb3ed42f-81a3-4ed4-a4b1-4d7d9ae52280"/>

## Getting an API Key

To use this application, you need an API key from OMDB. Follow these steps to obtain an API key:

1. Visit [OMDB API](https://www.omdbapi.com/).
2. Click on the "API Key" tab in the navbar.
3. Select the free account type, enter your details, and submit the form.
4. You will receive your API key via email.

## Installation

To run this project locally, follow these steps:

1. *Clone the repository*:
    git clone https://github.com/theanandtripathi/PopCorn-Picks
    cd your-repo-name
    
2. *Install dependencies*:
    npm install
    
3. *Create a .env file* in the root directory and add your OMDB API key:
    REACT_APP_OMDB_API_KEY=your_api_key_here
    
4. *Run the application*:
    npm start
    
5. *Open your browser* and navigate to http://localhost:3000 to view the application.

   ## Usage

- *Search for a movie*: Enter the movie title in the search bar and press Enter.
- *View movie details*: Click on a movie title from the search results to open the modal with additional details.

## Dependencies

- React.js
- Tailwind css
- OMDB API
 
 ## Future Prospects:
 
- Integrate AI-based movie recommendations using user preferences and viewing history.

- Add user authentication to allow saving favorite movies and watchlists.

- Expand filtering with genre, language, and streaming platform availability.


*Developer*: Anand Tripathi

*Contact*: [teslaorbital@gmail.com](mailto:teslaorbital@gmail.com)

