

const express = require('express');
const multer = require('multer');
const { fullAnalyze } = require('../controllers/analyseController');
const verifyToken = require('../middlewares/verifytoken');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// router.post('/full', upload.single('photo'), fullAnalyze);
router.post('/full', verifyToken, upload.single('photo'), fullAnalyze);

module.exports = router;
