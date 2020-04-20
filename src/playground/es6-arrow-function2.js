// arguments object - no longer bound with arrow functions

const add = (x,y) => {
    //console.log(arguments);
    return x+y;
};
console.log(add(55,1));

const user = {
    name: 'zhaopeng',
    cities: ['china', "New York", "SF"],
    printPlacesLived(){
        const cityMessages = this.cities.map((city) => {
            //thransform each item in place
            return this.name + ' has lived in '+ city;
        });
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+ city);
        // });
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [2,3,4,5,6,7,8,9],
    multiplyBy: 3,
    multiply(){
        const arrMultiply = this.numbers.map((number) => {
            return this.multiplyBy*number;
        });
        return arrMultiply;
    }
}

console.log(multiplier.multiply());