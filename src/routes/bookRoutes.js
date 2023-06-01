const express = require('express');
const router = express.Router();
const BookManagmentController = require('../controller/BookManagmentController');


router.get('/books', BookManagmentController.books);
router.post('/books', BookManagmentController.booksCreate);

module.exports = router;