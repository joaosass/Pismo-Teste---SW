# Pismo Test - SW

This project can be accessed [here](https://pismo-test-sw.surge.sh/).

## Installing

In the project directory, you can run the following commands:

### `yarn install` or `npm install`

This will install all necessary dependencies for the project.

### `yarn start` or `npm start`

This will runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Testing

To start all test suites you can run the following command abd then press `A`:

### `yarn test` or `npm run test`


## Features

- At home you can view a list of some Star Wars movies and click at one of then to see more details.

- When the movie page open you will see a opening crawl of the chosen movie.

- In case of mistype a url it will redirect to a 404 page.


## Components

### `Header`

This component render a header with the website logo.

### `Loading`

This component render a loading message until his param turn to false.

**Params:**
- isLoading: boolean

### `MovieCover`

This component render a card with the movie name and his chronological order in roman numerals.

**Params:**
- data: IMovie
- id: number

## Utils

### convertToRoman

This function transform a number into a roman numeral string.

**Params:**
Number

**Response:**
String

### getMovies

This function will access the [SWAPI](https://swapi.dev/) and return a movie collection or one chosen movie. If it fail the function will return a false boolean.

**Params:**
Number *Optional*

**Response:**
IMovie[] | IMovie | false


## Types

### `IMovie`

{\
  characters: string[];\
  created: Date;\
  director: string;\
  edited: Date;\
  episode_id: number;\
  opening_crawl: string;\
  planets: string[];\
  producer: string;\
  release_date: string;\
  species: string[];\
  starships: string[];\
  title: string;\
  url: string;\
  vehicles: string[];\
}


#### May the force be with you.