let pets = [
  { name: `max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 },
];
let getAge = () => new Date().getFullYear() - pet.bornOn;

let petsWithAge = [];
pets.forEach((elt) => {
  let pet = elt;
  pet.age = getAge(elt);

  petsWithAge.push(elt);
});
console.log(petsWithAge);

let dogs =pets.filter((elt)=>elt.type==`dog`);

console.log(dogs);

let jasper=pets.((elt)=>elt.name=`Jasper`);

console.log(`Jasper is ` + jasper.age + ` years old`);
