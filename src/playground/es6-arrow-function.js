const square = function(x){
    return x * x;
};
// arrow function don't have a name, assgin a name to it.
// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x*x;

console.log(squareArrow(8));

const getFirstName = (x) => x.split(' ')[0];
const fullName = 'Zhaopeng Xu';
console.log(getFirstName(fullName));