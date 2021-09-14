module.exports = function servicesFactory(pool){

let smallPizza = 31.99;
let mediumPizza = 58.99;
let largePizza = 87.99;

let smallPizzaTotal = 0;
let totalPizza  = 0;
let mediumPizzaTotal = 0;
let largePizzaTotal = 0


const order = {}

// var username ='';
function addSmallPizza(){
      smallPizzaTotal += smallPizza
}

function addMediumPizza(){
      mediumPizzaTotal += mediumPizza

}

function addLargePizza(){
    largePizzaTotal += largePizza
    
}

function subSmallPizza(){
    if(smallPizzaTotal !== 0.00){
         smallPizzaTotal -= smallPizza
    }else{
        smallPizzaTotal = 0.00
    }
   
    

}
function subMediumPizza(){
    if(mediumPizzaTotal !== 0.00){
         mediumPizzaTotal -= mediumPizza
    }else{
        mediumPizzaTotal = 0.00
    }
    

}

function subLargePizza(){
    if(largePizzaTotal !== 0.00 ){
         largePizzaTotal -= largePizza
    }else{
        largePizzaTotal = 0.00
    }
    
}


function getSmallPizza(){
    
   
    return smallPizzaTotal.toFixed(2);
}
function getMediumPizza(){
    
    return  mediumPizzaTotal.toFixed(2);
}

function getLargePizza(){
    
    return largePizzaTotal.toFixed(2)
}


function getTotal(){
    totalPizza = smallPizzaTotal + mediumPizzaTotal + largePizzaTotal
    return totalPizza.toFixed(2);
}


function getPizzaPriceSmall(){
    return smallPizza

}
function getPizzaPriceMedium(){
    return mediumPizza
}
function getPizzaPriceLarge(){
    return largePizza

}

function getUserName(par){
    return par
}

function orderFun(){
    order["ID"] =Math.floor(Math.random() * 10).toFixed()
    order["amount"] = totalPizza;
    
    // order["status"] = 
    

}
function getOrder(){
    return order
}

    return{
        orderFun,
        getSmallPizza,
        getMediumPizza,
        getLargePizza,
        getTotal,
        addSmallPizza,
        addMediumPizza,
        addLargePizza,
        getPizzaPriceSmall,
        getPizzaPriceMedium,
        getPizzaPriceLarge,
        subSmallPizza,
        subMediumPizza,
        subLargePizza,
        getUserName,
        getOrder


    }
}

