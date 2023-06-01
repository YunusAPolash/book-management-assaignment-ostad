const app = require('./app');
const mongoose = require("mongoose");

require('dotenv').config({path: './.env'})
// Applicaiton PORT 
const PORT = process.env.PORT || 5050;


// Connect to DB and start server
mongoose.connect(process.env.DATABASE)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
