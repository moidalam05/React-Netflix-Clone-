# Netflix Clone Project

### Live link [click here](https://thenetflix-clone.netlify.app/)

## Description
The Netflix Clone is a web application designed and developed to mimic the popular streaming service, Netflix. This project leverages React.js for the frontend, CSS3 for styling, and Firebase for authentication and authorization. It also integrates the TMDb (The Movie Database) API to fetch a comprehensive list of movies and TV shows. The website is fully responsive, providing a clean and easy-to-use interface that closely resembles Netflix.

## Features
- **User Authentication and Authorization:** Secure user sign-up, sign-in, and sign-out functionality using Firebase Authentication.
- **Extensive Movie and TV Show Database:** Integration with TMDb API to provide a wide array of movie and TV show options.
- **Dynamic Content Rendering:** Categories like trending, top-rated, and upcoming movies and TV shows are dynamically displayed.
- **Responsive Design:** Ensures an optimal viewing experience across various devices including desktops, tablets, and smartphones.
- **User Interface:** Clean and intuitive UI/UX design inspired by Netflix.

## Tech Stack
- **Frontend:** React.js
- **Styling:** CSS3
- **Authentication & Authorization:** Firebase Authentication
- **API:** The Movie Database (TMDb) API

## Installation and Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/moidalam05/netflix-clone.git
    cd netflix-clone
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Setup Firebase:**
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Authentication and add your web app to get the Firebase configuration.
    - Create a `.env` file in the root directory and add your Firebase configuration:
        ```plaintext
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```

4. **Setup TMDb API:**
    - Create an account and get your API key from [TMDb](https://www.themoviedb.org/).
    - Add the API key to your `.env` file:
        ```plaintext
        REACT_APP_TMDB_API_KEY=your_tmdb_api_key
        ```

5. **Run the application:**
    ```bash
    npm start
    ```

## Usage
Once the application is running, users can:
- Sign up and log in using Firebase Authentication.
- Browse through various categories of movies and TV shows.
- Use the search bar to find specific titles.
- Enjoy a responsive, Netflix-like user interface across all devices.

## Screenshots
![Home Page](path-to-screenshot-home-page)
![Movie Details](path-to-screenshot-movie-details)

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## License
This project is licensed under the Moid Alam.

---

Feel free to clone, modify, and contribute to this project to learn and improve your skills in React.js, CSS3, and Firebase. Enjoy building your own Netflix Clone!

