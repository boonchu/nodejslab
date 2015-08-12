#! /usr/bin/env node

function aHero () {  // Establish dummy global scope functions to return some words so the function calls in local scopes work
    return "Gal";
}
function aFoil () {
    return "Cow";
}
function aDeed () {
    return "Taps";
}

var hero = aHero();
var newSaga = function() { // <-- scope1 starts here
    var foil = aFoil();
    var saga = function() { // <-- scope2 starts here 
        var deed = aDeed();
        console.log(hero+deed+foil);
    }; // <-- scope2 ends here 
    saga();
    // -> GalTapsCow
    saga();
    // -> GalTapsCow
}; // <-- scope1 ends here
newSaga();
// -> GalTapsCow
newSaga();
// -> GalTapsCow
