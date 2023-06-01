const app = require('./app');


require('dotenv').config({path: './.env'})
// Applicaiton PORT 
const PORT = process.env.RUNNING_PORT || 5050;


app.listen(PORT,function(){
    console.log(`application is runned successfully at http://localhost:${PORT}`);
})