const express = require('express');
const router = require('express').Router();
const userController = require('../controller/user_controller');
const AdminController = require('../controller/admin_controller');

router.post('/user', userController.register);
router.post('/login', userController.login);
router.get('/getuser', userController.get)
router.get('/get', userController.getUser)
router.get('/getUserId', userController.getUserId);
router.put('/update', userController.Update);
router.delete('/delete', userController.delete);

router.post('/admin', AdminController.register);
router.post('/adminlogin', AdminController.login);
router.post('/checkuser', AdminController.checkUser);
router.get('/getadmin', AdminController.get)
router.get('/getadmin1', AdminController.getAdmin);
router.get('/getemail', AdminController.getEmail);
router.put('/updateadmin', AdminController.Update);
router.delete('/deleteadmin', AdminController.delete);
router.put('/updatePassword/:email', AdminController.UpdatePassword);

module.exports = router;