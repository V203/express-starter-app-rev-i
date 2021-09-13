module.exports = function servicesFactory(pool){

let smallPizza = 31.99;
let mediumPizza = 58.99;
let largePizza = 87.99;

let smallPizzaTotal = 0;
let totalPizza  = 0;
let mediumPizzaTotal = 0;
let largePizzaTotal = 0


// function addTotals(par){

//     if(par === "large"){
//         totalPizza += largePizza
//     }else if(par=== "medium"){
//         totalPizza += mediumPizza

//     }else if(par === "small"){
//         totalPizza += smallPizza
//     }
    
// }

function addSmallPizza(){
    return  smallPizzaTotal += smallPizza
}

function addMediumPizza(){
    return  mediumPizzaTotal += mediumPizza

}

function addLargePizza(){
 return   largePizzaTotal += largePizza
    
}

function subSmallPizza(){
    if(smallPizzaTotal !== 0){
        return smallPizzaTotal -= smallPizza
    }
    

}
function subMediumPizza(){
    if(mediumPizzaTotal !== 0){
        return mediumPizzaTotal -= mediumPizza
    }
    

}

function subLargePizza(){
    if(largePizzaTotal !== 0 ){
        return largePizzaTotal -= largePizza
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

    return{
        
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
        subLargePizza

    }
}

