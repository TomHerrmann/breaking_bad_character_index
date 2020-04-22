# Northwestern Mutual Takehome

###### Author: Tom Herrmann

## Mission

> Create a responsive (phone, tablet, desktop) web application that allows the user to quick filter a list of things. The top of the page will have a search input field and then below that a list of things in response to the filter. The things should be sorted alphabetically. The things could be anything, but should be AJAX pulled from a backend service that you write and should ultimately be pulled from an open public API.

## Product

I created a responsive web application that allows a user to quickly filter through the entire list of **Breaking Bad** characters by name. As one the of the greatest television shows of all time, the characters of **Breaking Bad** and it's spin-off **Better Call Saul** were an obvious choice for a list of things to quick filter.

The search results are displayed alphabetically by name, with the exception of the default results, which are organized by importance.

This data is populated in a PostgreSQL database hosted through ElephantSQL, and the information was populated from the characters endpoint on the [Breaking Bad API](https://breakingbadapi.com/).

## Features

- Generates alphabetized character cards based on search input
- Responsive design for desktop, mobile, tablet, etc
- Dynamically rendered loading spinner component
- Queries SQL database for character list
- Testing suite in Jest and Enzyme (partial coverage)

## Usage

1. Clone this repository

2. Run the following terminal command in the project's root directory

NPM:

```
npm i
```

Yarn:

```
yarn
```

3. Run the following to build your bundle file

NPM:

```
npm run build
```

Yarn:

```
yarn run build
```

4. Run the following to start your server

NPM:

```
npm start
```

Yarn:

```
yarn start
```

5. Proceed to [localhost:3000](http://localhost:3000/)

6. Search for your favorite **Breaking Bad** characters by name

## Testing

1. Run the following command in the root directory

NPM:

```
npm run test
```

Yarn:

```
yarn run test
```

## Contribute

1. Clone this repository

2. Run the following terminal command in the project's root directory

NPM:

```
npm i
```

Yarn:

```
yarn
```

3. Run the following to start your dev server

NPM:

```
npm run dev
```

Yarn:

```
yarn run dev
```
