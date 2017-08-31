
const fs = require("fs");


var test = ((req, res, next)=>{
  var now = new Date().toString();
  var log =`${now}: ${req.method} ${req.url}`
  console.log(log);
    fs.appendFile(`server.log`,log +'\n', (err)=>{
        if(err){console.log("unable to append server log")}
 });
    next();
})


module.exports = {
  test
}
