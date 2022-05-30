const router = require('express').Router();

// Sets route connections to the api
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// Sets the url layouts
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;