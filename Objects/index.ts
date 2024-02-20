// Declearing Explicitly:-
const payload: { id: number; name: string; key: number } = {
  id: 1,
  name: "Sahil",
  key: 12.12,
};
console.log(payload);

// Declearing but inplicitly
const data = {
  id: 1,
  name: "sahil",
};
// data.name=1 //error

//Optional Properties:-
//if I donot have know that second type will have value in the function defination so i have to use ?
const car: { type: string; mileage?: number } = {
  type: "cedan",
};
car.type = "SUV";

//Index Signatures
//Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: number]: number } = {};
nameAgeMap[1] = 25; // no error
// nameAgeMap.Mark = "Fifty"; //error
console.log(nameAgeMap);
