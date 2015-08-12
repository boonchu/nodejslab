#! /usr/bin/env node

function aHero () {  // Establish dummy global scope functions to return some words so the function calls in local scopes work
        return "Gal";
}
function aFoil () {
        return "Cow";
}
function aDeed () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ )
           text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
}


var sagas = []; // global array to store saga function objects, accessible outside of the newSaga function 
var hero = aHero();
var newSaga = function(){
    var foil = aFoil();
    //var saga = function(){   -> now need to push saga function objects into the sagas array 
    sagas.push(function(){  
        var deed = aDeed();
        console.log(hero+deed+foil);
    });
};
newSaga();
sagas[0](); // invokes the first function stored in sagas array
sagas[0]();

newSaga();
sagas[1]();

