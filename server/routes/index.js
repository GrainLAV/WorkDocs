const Router = require('express')
const router = new Router()
const approvalsRouter = require('./approvalsRouter')
const departmensRouter = require('./departmensRouter')
const documentsRouter = require('./documentsRouter')
const filesRouter = require('./filesRouter')
const historyRouter = require('./historyRouter')
const rolesRouter = require('./rolesRouter')
const typesRouter = require('./typesRouter')
const usersRouter = require('./usersRouter')

router.use('/users',usersRouter)
router.use('/roles',rolesRouter)
router.use('/departmens',departmensRouter)
router.use('/documents',documentsRouter)
router.use('/types',typesRouter)
router.use('/files',filesRouter)
router.use('/history',historyRouter)
router.use('/approvals',approvalsRouter)

module.exports = router