const express = require ('express');
const catMe = require ('cat-me');
const expressLayouts = require('express-ejs-layouts');
const request = require ('request');
const async = require ('async');

const app = express();




// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');









app.get("/",function(req,res){    
    
    // home route     // API data and key below
    var data ={};
    var api_key = 'RGAPI-12612efa-a665-48c8-9cd3-ae2ea050b69a';
    var searchTerm = 'Some CookieMoney';
    var URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ searchTerm +'?api_key=' + api_key;

   
    request(URL, function(error,response,body){

        if(error){
            console.log(error);
        }else{
            res.render("home.ejs");   // res.send(JSON.parse(body));
        }

     ////////// Attempting to save information from Riot API as Json and render in Home view
     ///// Successfull connection with API key above.  

    })



});





app.get("/hello", function(req, res){   //test route 
res.send("Link start....");  

});


console.log(catMe());






app.listen(3000,() => console.log("Link Start...")); // port select for init



