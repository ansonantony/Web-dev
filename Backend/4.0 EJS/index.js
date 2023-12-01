import express from "express";


const app = express();
const port = 3000;
const theDate = new Date("2008-12-14");
const day = theDate.getDay();
var WeekEnd = false;
var daynames = ["Monday","Tuesday","Wedsnesday","Thursday","Friday","Saturday","Sunday"]
var dayType = "Weekday";
var Advice = "Stay Hard.";


function weekend(req, res, next){
    if(day>4){
         WeekEnd=true
          dayType="Weekend" 
          Advice = "Have Fun";
    }
    next();
}



app.use(weekend);


app.get("/", (req,res) =>{
    // if(WeekEnd){
        // res.send("<h1>It's a WeekEnd!! Have Fun.</h1>");
        res.render("index.ejs",{daytype:dayType,advice:Advice});
    // }else{
        // res.send("<h1>It's a WeekDay!! Stay Hard.</h1>");
    // }
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});