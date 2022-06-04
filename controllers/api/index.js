const router = require('express').Router();

const userRoutes = require('./user-routes');
const incomeRoutes = require('./income');
const expenseRoutes = require('./expense-routes')

router.use('/users', userRoutes)
router.use('/income', incomeRoutes)
router.use('/expense', expenseRoutes)

module.exports = router