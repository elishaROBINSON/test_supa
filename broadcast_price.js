
var pg = require("pg");


var connectionString = "";
var pgClient = new pg.Client(connectionString);
    pgClient.connect();
    const query = " \
    INSERT INTO pricer (price) \
    VALUES ("+String(Math.random())+")";    
    pgClient.query(query) // your query string here
  .then(result => console.log(result)) // your callback here
  .catch(e => console.error(e.stack)) // your callback here
  .then(() => pgClient.end())
