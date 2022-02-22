const {Router} = require('express');
const router = Router();

const {getUser, postUser, putUser, deleteUser} = require('../controllers/users');

router.get('/get', getUser);
router.post('/post', postUser);
router.put('/put', putUser);
router.delete('/delete', deleteUser);

module.exports = router;