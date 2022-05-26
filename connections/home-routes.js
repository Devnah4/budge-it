const router = require('express').Router();
const sequelize = require('../config/connection')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router