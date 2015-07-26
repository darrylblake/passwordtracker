var Sequelize = require('sequelize');

// Create an instance of Sequelize to connect to database
var sequelize = new Sequelize('PasswordTracker', 'root', '');

sequelize.authenticate().then(function(err) {
  if (err) {
    console.log('Unable to connect to database:', err);
  } else {
    console.log('Established connection to database. Woo!');
  }
});

// Defining a model
var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

// Syncing the model to the database
// Passing force true drops existing tables and recreates them
sequelize.sync({ force: true }).then(function(err) {
  User.create({
    username: "Darryl",
    password: "password..."
  }).then(function(user) {
    User.find({
      where: { username: 'Darryl'}
    }).then(function(user) {
      console.log('Hello', user, '!');
      console.log(user.values);
    });
  });
})

// Connecting without an ORM
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host:     'localhost',
//   user:     'root',
//   password: '',
//   database: 'PasswordTracker'
// });

// connection.connect(function(err) {
//   if (!err) {
//     console.info('Connected to database: ', connection.database);
//   } else {
//     console.error('Error connecting to database:', connection.database);
//   }
// });

// module.exports = connection;