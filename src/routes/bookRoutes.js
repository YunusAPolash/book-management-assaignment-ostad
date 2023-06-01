const express = require('express');
const router = express.Router();
const BookManagmentController = require('../controller/BookManagmentController');


router.get('/books', BookManagmentController.books);
router.get('/books/:id', BookManagmentController.bookSearch);
router.post('/books', BookManagmentController.booksCreate);
router.put('/books/:id', BookManagmentController.bookUpdate);

module.exports = router;