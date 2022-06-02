const router = require('express').Router();

// Sets route connections to the api
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');
const loginRoutes = require('./login-routes')
const signupRoutes = require('./signup-routes')

// Sets the url layouts
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);
router.use('/login', loginRoutes)
router.use('/signup', signupRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;