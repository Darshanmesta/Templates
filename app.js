const express= require("express")
const app = express()
const ejs= require("ejs")

app.set("view engine", "ejs")

app.get("/",(req,res)=> {
  var date= new Date()
  var currentDaycode= date.getDay()
  var currentDate=date.getDate()
  var currentMonth= date.getMonth()
  var date=" "
  var month=" "
  // var currentMonth= date.getMonth()
  console.log("The current datecode is "+ currentDaycode + " And Date is "+ currentDate )

  switch(currentDaycode){
    case 0 :
    date="Sunday"
    res.render("list", {ThisDate:date})
    break;

    case 1 :
    date="Monday"
    res.render("list", {ThisDate:date})
    break;

    case 2 :
    date="Tuesday"
    res.render("list", {ThisDate:date})
    break;

    case 3 :
    date="Wednesday"
    res.render("list", {ThisDate:date})
    break;

    case 4 :
    date="Thursday"
    res.render("list", {ThisDate:date})
    break;

    case 5 :
    date="Friday"
    res.render("list", {ThisDate:date})
    break;

    case 6 :
    date="Saturday"
    res.render("list", {ThisDate:date})
    break;

    default:
    console.log("wrong choice")

  }



})



app.listen(3000,()=> {
  console.log("Server started on Port 3000")
})
