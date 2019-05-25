console.log('es6-arrow-2')

const add = function (a,b){
    console.log(arguments)
return a+b;
}

console.log(add(5,6))

const user = {
    name : 'bhaskar sahni',
    cities:['patna','city','Gulzarbagh'],
    printPlacesLive(){
       return this.cities.map((city) => this.name + 'is in ' + city)
    }
}

console.log(user.printPlacesLive())

const multiplier = {
    number: [2,4],
    multiplyBy:2,
multiply(){
    return this.number.map((num) =>num *this.multiplyBy);
}

}

console.log(multiplier.multiply())