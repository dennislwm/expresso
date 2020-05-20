const objBodyParser = require('body-parser');
const objDotenv = require('dotenv');
const objExpress = require('express');
const objPath = require('path');

//
// Load dot files
objDotenv.config({
  path: './config/config.env'
})

//
// Create node.js server
const objApp = objExpress();
const intPort = process.env.ENV_PORT || 8000; // if undefined

//
// Add middleware
objApp.use(objBodyParser.urlencoded({ extended: true }));

//
// Add static path
console.log(objPath.join(__dirname, 'www'));
objApp.use('/', objExpress.static(objPath.join(__dirname, 'www')));

//
// associate route path to file
objApp.use('/api/bitly', require('./routes/bitly.js'));
objApp.use('/api/cuttly', require('./routes/cuttly.js'));
objApp.use('/api/devto', require('./routes/devto.js'));
objApp.use('/api/dictionary', require('./routes/dictionary.js'));
objApp.use('/api/ghost', require('./routes/ghost.js'));
objApp.use('/api/mailchimp', require('./routes/mailchimp.js'))
objApp.use('/api/noip', require('./routes/noip.js'));

//
// Start listen on server
objApp.listen(
  intPort,
  console.log(`Server running in ${process.env.ENV_MODE} mode on port ${intPort}`)
);
