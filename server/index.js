//Import server
const app = require('./app');
//Define local host for API server
const port = 3000;
//Set up request listener
app.listen(port, () => console.log(`Visit http://localhost:${port} to see our content!`));