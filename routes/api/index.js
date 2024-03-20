const express = require('express');
const router = express.Router();




const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtRoute');
const friendRoutes = require('./friendRoute');


router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/friend', friendRoutes);


module.exports = router;
