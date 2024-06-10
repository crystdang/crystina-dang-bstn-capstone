
# Formula Zero

A gamified motorsport educational app, specifically for Formula 1. An event-released trivia to educate, encourage and support fans. The design will be framed around the upcoming circuit after the last event and leading up to the next, where general trivia is given to unlock information specific to the upcoming event.
## Author

- [@crystdang](https://www.github.com/crystdang)


## Acknowledgements

 - [Formula 1](https://www.formula1.com/en.html)

## Tech Stack

**Client:** React (libraries: react, react-router-dom, react-countdown, axios)

**Server:** MySQL, Knex, Node, Express


## Features

- Player selection
- Quiz
- Next Race countdown


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**Client:** 

`VITE_API_URL`=your_local_host

**Server:** 

`PORT`=your_port

`DB_HOST`=your_mysql_host

`DB_NAME`=your_database_name

`DB_USER`=your_mysql_username

`DB_PASSWORD`=your_mysql_password


## Run Locally

Make a directory to hold both client and server

```bash
mkdir crystina-dang-capstone

cd crystina-dang-capstone
```
Clone the both client and server

```bash
  git clone https://github.com/crystdang/crystina-dang-bstn-capstone.git

  git clone https://github.com/crystdang/crystina-dang-bstn-capstone-server.git
```

**Server:**

Go to the server directory

```bash
cd crystina-dang-bstn-capstone-server
```

Install dependencies

```bash
  npm install
```

Create a database:

1. Ensure that your MySQL server is running.

2. Create a new MySQL database for the project.

3. Create an .env file in the server using the .env.sample as an example. Update the database configuration in the .env file with your MySQL credentials and database name.

4. Run database migrations to create tables:

```bash
npm run migrate
```

5. Seed the database:

```base
npm run seed
```

Start the server

```bash
  npm start
```

**Client:**

Open another terminal and go into the client directory

```bash
  cd crystina-dang-capstone
  cd crystina-dang-bstn-capstone
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm run dev
```
## API Reference

#### Get all trivia

```http
  GET /trivia
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| null | `array` | all trivia questions and answers|


## Lessons Learned

- Emulating a brand is far more complicated then creating your own brand, allocating more time to scrap through the 200 page document is necessary
- Games are very layered and takes a lot of planning before execution
- Data from an API may not be in the format needed and scrapping through the data ahead of time would better support styling


## Next Steps

- Circuit imagery
- Quiz imagery
- Leaderboard animation
- Achievement indicator
- Final circuit info