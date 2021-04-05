const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
var reload = require('reload');

//setting the path

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

//middleware

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

//set hbs engine

app.use(express.static(staticPath));

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

//routing
app.get("/",(req,res)=>{
    res.render("index");
})



//listen
app.listen(port,()=>{
    console.log(`Server is running on the port no ${port}`);
})

reload(app);