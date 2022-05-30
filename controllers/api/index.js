const router = require('express').Router();

const userRoutes = require('./user-routes');
const incomeRoutes = require('./income');
const monthlyRoutes = require('./monthly');
const yearlyRoutes = require('./yearly');
const singleRoutes = require('./single');

router.use('/users', userRoutes)
router.use('/income', incomeRoutes)
router.use('/monthly', monthlyRoutes)
router.use('/yearly', yearlyRoutes)
router.use('/single', singleRoutes)

module.exports = router