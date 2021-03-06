const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const serverFunctions = require("./middleware/middleware.js");
// process.env is anobject whic stores all environment variables as key value pairs
const port = process.env.PORT || 3000;

var app = express();


hbs.registerPartials(__dirname +`/views/partials`)
//set express config
app.set(`view engine`,`hbs`);
//__dirname = path to project directory
// app.use register midddleware

//next - when midddleware function is done
// serverFunctions.test();


// app.use((req, res, next)=>{
//
//   res.render(`maintenance.hbs`)
//
// })

app.use(express.static(__dirname+`/public`));



hbs.registerHelper(`getCurrentYear`, ()=>{
return new Date().getFullYear()
});



hbs.registerHelper(`screamIt`, (text)=>{
  return text.toUpperCase();
})

app.get("/",serverFunctions.test, (req, res)=>{
  res.render(`home.hbs`,{
    pageTitle: `Home Page`,
    welcomeMessage : `welcome everyone!`
  })
});


app.get("/about", (req, res)=>{
  res.render(`about.hbs`, {
    pageTitle: `About Page`,
  })
})



app.get("/bad", (req, res)=>{

res.send({
  errorMesssage:"bad request"
})

})


app.get("/project", (req, res)=>{
res.render(`projects.hbs`,{
  pageTitle: `Project Page`
});

})



//Binds application to port on machine
app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});
