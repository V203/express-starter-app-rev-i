const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;
const pg = require("pg");
const ServicesFactory = require("./servicesFactory")
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

let servicesFactory = ServicesFactory(pool)


let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		small:servicesFactory.getSmallPizza(),
		medium:servicesFactory.getMediumPizza(),
		large:servicesFactory.getLargePizza(),
		total:servicesFactory.getTotal(),
		smallPrice:servicesFactory.getPizzaPriceSmall(),
		mediumPrice:servicesFactory.getPizzaPriceMedium(),
		largePrice:servicesFactory.getPizzaPriceLarge()
	});
});

app.get("/addSmall",(req,res)=>{
	servicesFactory.addSmallPizza();
	res.redirect("/")
	
})

app.get("/addMedium",(req,res)=>{
	servicesFactory.addMediumPizza();
	res.redirect("/")

})

app.get("/addLarge",(req,res)=>{
	servicesFactory.addLargePizza();
	res.redirect("/")
})


app.get("/subSmall",(req,res)=>{
	servicesFactory.subSmallPizza()
	res.redirect("/")

})

app.get("/subMedium",(req,res)=>{
	servicesFactory.subMediumPizza()
	res.redirect("/")

})

app.get("/subLarge",(req,res)=>{
	servicesFactory.subLargePizza()
	res.redirect("/")

})

// app.get("/subLarge",(req,res)=>{})
app.post('/count', function(req, res) {

});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});