const express=require("express");
const bodyParser=require("body-parser");
const date = require(__dirname + "/date.js");


const app=express();

const items=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req, res){

//  let day=date.getDay();
let day=date.getDate();
 
 res.render("list", {listTitle: day,newlistItem: items});
});

app.post("/", function(req, res){
    var item =req.body.newItem;
    
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})