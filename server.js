const express = require('express');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(require('./_middleware/error-handler'));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
