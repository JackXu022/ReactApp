var nameVar = 'Zhaopeng Xu';
nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jan';
//let nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//const nameConst = 'Cunther';
//nameConst = 'Zhaopeng';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Zhaopeng Xu';
let firstName;
if(fullName){
    //var firstName = fullName.split(' ')[0];
    //const firstName = fullName.split(' ')[0];
    //let firstName = fullName.split(' ')[0];
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

// function getPetName(){
//     const petName = 'Mal';
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);