const express = require('express');
const Handlebars = require("handlebars");
const sequelize = require('./config/connection')
const routes = require('./controllers')

// Middleware to connect to port
const app = express()
const PORT = process.env.PORT || 3001

// Connects express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up Handlebars
app.set("view engine", "handlebars");

// Connects to the routes
app.use(routes)

// Turns on the connection between the db and the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
})
