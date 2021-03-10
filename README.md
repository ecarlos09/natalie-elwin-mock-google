# Elwin and Natalie - Coding Challenge

Welcome to our coding challenge!  Please continue reading to see how we completed the task.

***

## Installation and Usage

### Installation

- Create new directory and fork/clone the repo into it
- `code .` to open all files in VS Code or similar
- `cd` into the server directory and `npm install` to install all dev dependencies
- Repeat for client directory

### Usage

- `npm run start` to launch the server
- `npm run dev` to launch the server with nodemon (automatically resets the server when changes are saved)

***

## Changelog

### Server side

#### app.js
- [x] Created file!

#### data.js
- [x] Created file!
- [x] Added JSON object containing list of intended search results
- [x] Changed "result" key to "subject"

#### index.js
- [x] Created file!
- [x] Import server information and create request listener

#### controller - results.js
- [x] Created file!
- [x] Create middleware instance
- [x] Export router method
- [x] Define method for retrieving all search results
- [x] Define method for retrieving a particular search result


#### model - result.js
- [x] Created file!
- [x] Constructed Result class and exported it
- [x] Add static resultByID method to Result class

### Client side
(full changelog to be added here)

- [x] Basic layout and styling has been applied
- [x] Header and footer links all work
- [x] Search bar reacts to mouseover
- [x] Buttons have been added (functionality still to be added)

***

## Bugs

### Server side

- [ ] Method for returning a particular search result returns all search results
- [ ] Every search returns same 10 results (update with classes later)

### Client side

- [ ] Add event listeners for:
    - [ ] Two buttons
    - [x] Hovering over the search bar

### Miscellaneous

- [ ] Refactor code as necessary

***

## Wins and challenges

### Wins

- Basic server is up and running
- Route for retrieving all search results is working
- Client side looks great!

### Challenges

- Struggling to retrieve a particular result
- Struggling to get the search results to display on submit
