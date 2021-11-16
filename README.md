# MyReads Project

This is My Reads application for the final assessment of Udacity's React Fundamentals course. 
I've used Udacity starter code then I've added the React code to achieve the application interactivity with the end-user.


## Table of Contents

- [Project Title](#my-reads-application)
- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Backend Server](#backend-server)
- [License](#license)
- [Used Technologies](#used-technologies)
- [Developer](#developer)
- [Footer](#footer)

## Project Description

MyReads Application is a simple library organizer that you can arrange your readings on shelves. You can dynamically move
your book from want to read to currently reading to read shelves and so on.

## Installation

To get started you have to do the following steps:

* colne my application to your local machine using the GitHub instructions.
* install all project dependencies with `npm install`
* start the development server with `npm start`

[(Back to home)](#table-of-contents)
## Project Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # Application components.
    │   └── Book.js #The Book main components.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── pages # Application Main pages.
    │   ├── HomePage.js # Application Main screen.
    │   └── SearchPage # New Books search page.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
[(Back to home)](#table-of-contents)
## Backend Server

I've used the Udacity given backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the following API functions:

* [`getAll`](#getall) # Read all books from backend Database.
* [`update`](#update) # Update a selected book.
* [`search`](#search) # Search database for books with the search criteria.

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

[(Back to home)](#table-of-contents)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## License

This is a free application

## Used Technologies

This project had been developed using HTML, CSS, and React.js.

## Developer

This Project had been developed By: Ashraf Kamel.

## Footer

It is my pleasure to thank Udacity and Egypt FWD teams for their usual technical support.

[(Back to home)](#table-of-contents)