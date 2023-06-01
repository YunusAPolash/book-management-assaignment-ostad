
const { json } = require('body-parser');
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

// Get Book By Specific ID
exports.bookSearch = async (req, res) =>{
    try{
        const id = req.params['id'];
        const getBookData = await Book.findById(id);

        if(!getBookData){
            return res.json({ error: "Book not found" });
        }
        
        res.status(200).json({status: "success",data:getBookData});
    }catch(error){
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


// Book Update
exports.bookUpdate = async (req, res) => {
    try {

        // The ID for Update
        const id = req.params['id'];


       
        // Destructuring the data from reqest body
         const {title, author, description, publishedYear} = req.body;
        
         if(!Number.isFinite(publishedYear)){
             return res.json({ error: "publishedYear is must be a number" });
         }

        //  Updated values
        const update = {
            title,
            author,
            description,
            publishedYear
        }

        const getRightBook = await Book.findByIdAndUpdate(id,update,{ new: true } )

        if(!getRightBook){
            return res.json({ error: "Somethings is wrong" });
        }
        res.status(200).json({message:"book updated successfully.",data:getRightBook});

    } catch (error) {
        console.log(error)
    }
}

// Book Delete
exports.bookDelete = async (req, res) => {
    try {

        // The ID for Delete
        const id = req.params['id'];

        const deletingBook = await Book.findByIdAndDelete(id);

        if(!deletingBook){
            return res.json({ error: "Invalid Id" });
        }
        res.status(200).json({message:"book Deleted successfully."});

    } catch (error) {
        console.log(error)
    }
}




