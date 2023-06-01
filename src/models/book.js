const mongoose =require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        title:{
            type: String,
            trim: true,
            required: true,
        },
        author:{
            type: String,
            trim: true,
            required: true,
        },
        description:{
            type: String,
            trim: true,
        },
        publishedYear:{
            type: Number,
            default: 0,
        }
    }, { timestamps: true,versionKey:false }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;