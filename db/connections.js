const monk = require('monk');
const connectionString = 'localhost:27017/test';
const db = monk(connectionString);
 
module.exports = db;