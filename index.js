const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;
const pg = require("pg");
const ServicesFactory = require("./servicesFactory")
const Pool = pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/db';
const session = require("express-session");
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

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

let servicesFactory = ServicesFactory(pool)


// app.get("/login",(req,res)=>{
// 	if(!req.body.username){
// 		req.session.username = req.body.username
// 		res.redirect("/")
// 	}else {
// 		res.redirect("/login")
// 	}
// })
// app.get("/login",(req,res)=>{
// 	res.render("index")
// 	req.session.username = req.body.username
// 	if(!req.session.username){
		
// 		res.redirect("/login")
// 	}else {
// 		res.redirect("/")
// 	}
// })

app.get('/', function(req, res) {
	
	// req.session.username = req.body.username
	// if(!req.body.username){
	// 	req.session.username = req.body.username
	// 	res.redirect("/login")
	// }else {
	// 			res.redirect("/")
	// 		}
			res.render('index', {
				small:servicesFactory.getSmallPizza(),
				medium:servicesFactory.getMediumPizza(),
				large:servicesFactory.getLargePizza(),
				total:servicesFactory.getTotal(),
				smallPrice:servicesFactory.getPizzaPriceSmall(),
				mediumPrice:servicesFactory.getPizzaPriceMedium(),
				largePrice:servicesFactory.getPizzaPriceLarge()
				// user: servicesFactory.getUserName(req.session.username)
				
			});
		});
		// app.get("/login",(req,res)=>{
		// 	res.render("index")
		// 	req.session.username = req.body.username
		// 	if(!req.session.username){
				
		// 		res.redirect("/login")
		// 	}else {
		// 		res.redirect("/")
		// 	}
		// })
		
		
		
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

app.get('/order',(req,res)=>{
	servicesFactory.orderFun()
	let orderObj = servicesFactory.getOrder()
	
	res.render("order",{orderID:orderObj["ID"],orderPay:orderObj["amount"]})
})





	


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});