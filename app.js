const express = require("express");
const path=require("path");
const bodyParser = require("body-parser");

const app = express();

//defining template engines
// this lines tells express that if you will encounter any dynamic content
// you have to compile it by using ejs templating engines
app.set("view engine", "ejs");
//by default for dynamic contents views folder are registered for use
//first one is to tell express that you have to look for views
//views is global variable which express uses 2nd views is used to tell
//tell express that you have to look for views under the views folder
//2nd parameter could be any parameter of ur name 
app.set("views", "views");

const adminData=require("./routes/admin");
const shopRoutes=require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// only routes which have admin in there name with the following pattern will go
// in admin route
// localhost:3000/add-product->wrong
// localhost:3000/admin/add-product->right
app.use('/admin',adminData.routes);
app.use(shopRoutes);
//app.use always handles all requests no matter post,get,patch,delete
//and router always do exact match for the paths 

app.use((req,res,next)=>{
    //WE ARE ALREADY IN PROJECT FOLDER APP.JS SO WE DONT REQUIRE ../ HERE
    // res.status(404).sendFile(path.join(__dirname,'../','views','404.html'));
    res.status(404).render('404',{pageTitle:'page not found'});
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})