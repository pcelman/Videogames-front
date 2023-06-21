SPA created with the API https://rawg.io/

[Visit the webpage](https://my-videogame.vercel.app/)
<br>
Homepage:<br>

<img width="1349" alt="Screenshot 2023-06-21 at 18 57 16" src="https://github.com/pcelman/Videogames/assets/100241036/59f08ebe-115d-4819-9396-9aff9c3a8157">






<br>
Detail of a card:<br>
<img width="1048" alt="Screenshot 2023-06-21 at 18 57 37" src="https://github.com/pcelman/Videogames/assets/100241036/5da9d05d-23f0-407e-975a-8bd5b655ace1">

Form for the creation of a new videogame with the state of genres and platforms ordered alphabetically for ease of use:

<img width="939" alt="Screenshot 2023-06-21 at 18 58 19" src="https://github.com/pcelman/Videogames/assets/100241036/5a63ed3a-e26a-4c4e-8583-8ed4e6072060">

If you´d like to run this project on your computer you´d need to create a DB with posgresSQl named videogames. You´d also need to download the zip of this repository and create an .env file inside the "api" folder with the following information:
<br>
<br>
DB_USER=[your postgres user name]
DB_PASSWORD=[your postgres password]
DB_HOST=localhost
<br>
<br>
Afterwards you´ll need to open a terminal inside the api folder and run npm install and npm start once the installation is completed. Repeat these two steps on the client folder aswell. If everything works properly, the API should load on your internet browser.