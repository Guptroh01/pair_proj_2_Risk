const express = require('express');
const router = express.Router();

const userController = require('../controllers/controller')

router.post('/', userController.createRisk);
router.put('/:id', userController.updateRisk);
router.delete('/:id', userController.deleteRisk);

module.exports = router;