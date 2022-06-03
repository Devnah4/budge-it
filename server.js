const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const sequelize = require('./config/connection')
const routes = require('./controllers')
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Middleware to connect to port
const app = express()
const PORT = process.env.PORT || 3001

// Connects express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess))

// Sets up Handlebars
app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

// Connects to the routes
app.use(routes)

// Turns on the connection between the db and the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
})
