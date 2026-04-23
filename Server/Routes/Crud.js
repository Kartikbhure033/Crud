const {Router} = require('express');
const {Adduser, getAllUsers, getUserById,updateuser,deleteuser} = require('../controller/Crud');

const router = Router();   

router.post('/add', Adduser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateuser);
router.delete('/user/:id', deleteuser);

module.exports = router;