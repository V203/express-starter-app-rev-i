const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;
const pg = require("pg");
const ServicesFactoy = require("./servicesFactory")
const Pool = pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/db';
// const session = require("express-session");
const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});
// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let servicesFactoy = ServicesFactoy(pool)


let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		small:servicesFactoy.getSmallPizza(),
		medium:servicesFactoy.getMediumPizza(),
		large:servicesFactoy.getLargePizza(),
		total:servicesFactoy.getTotal(),
		smallPrice:servicesFactoy.getPizzaPriceSmall(),
		mediumPrice:servicesFactoy.getPizaaPriceMedium(),
		largePrice:servicesFactoy.getPizzaPriceLarge()
	});
});

app.get("/addSmall",(req,res)=>{
	servicesFactoy.addSmallPizza();
	res.redirect("/")
	
})

app.get("/addMedium",(req,res)=>{
	servicesFactoy.addMediumPizza();
	res.redirect("/")

})

app.get("/addLarge",(req,res)=>{
	servicesFactoy.addLargePizza();
	res.redirect("/")
})


app.get("/subSmall",(req,res)=>{
	servicesFactoy.subSmallPizza()
	res.redirect("/")

})

app.get("/subMedium",(req,res)=>{
	servicesFactoy.subMediumPizza()
	res.redirect("/")

})

app.get("/subLarge",(req,res)=>{
	servicesFactoy.subLargePizza()
	res.redirect("/")

})

// app.get("/subLarge",(req,res)=>{})
app.post('/count', function(req, res) {

});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});