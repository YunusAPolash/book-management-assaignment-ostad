
const Book = require('./../models/book');

// Get and retrive all books
exports.books = async (req, res) => {
    try {
        // Getting All Books
        const allbooks = await Book.find({});
        // sending Response with all books
        res.status(200).json({status:"success", books:allbooks});
    } catch (error) {
        console.log(error);
    }
}

// Get and retrive all books
exports.booksCreate = async (req, res) => {
    try {
        // Destructuring the data from reqest body
        const {title, author, description, publishedYear} = req.body;
        
        // Validation of data
        if (!title) {
            return res.json({ error: "Title is required" });
        }

        if (!author) {
            return res.json({ error: "Author is required" });
        }
        if(!Number.isFinite(publishedYear)){
            return res.json({ error: "publishedYear is must be a number" });
        }
        
        // Adding book data to database
        const book = await new Book({
            title,
            author,
            description,
            publishedYear
        }).save();

        // Sending Response
        res.status(200).json({message:"book added successfully.",data:book});
    } catch (error) {
        console.log(error);
    }
}



