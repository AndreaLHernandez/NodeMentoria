const {Router} = require('express');//con {} los desestructuro para solo importar el router de express
const router = Router();

const usersRouter = require('./users');

router.use('/users', usersRouter);//
module.exports = router;//con module ya se puede expostar el router a cualquier clase de lo contrario no estara disponible