function zeroFuel(distanceToPump, mpg, fuelLeft){
    if(distanceToPump<=mpg*fuelLeft){
        return true
    }else{
        return false
    }
}

console.log(zeroFuel(100,50,2))
console.log(zeroFuel(75,25,2))