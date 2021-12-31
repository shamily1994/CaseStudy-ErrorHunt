const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
// const bodyParser = require('body-parser')  // bodyParser is imported. which is not previously used

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"books/addbook",
        title:"Add Book"
    },
    {
        link:"authors/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
// const homeRouter = require('./src/routes/homeroute');  
const homeRouter = require('./src/routes/homerouter'); // changed homeroute to homerouter
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


// app.set('views','./src/views'); 
app.set('view engine','ejs'); 
app.set('views','./src/views'); 


// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});




//part#1 point5
app.listen(3000,()=>{
    console.log("Server Ready on 3000");
});