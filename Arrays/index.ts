// Declearation:-
const fruits: string[] = [];
fruits.push("Mango");
// fruits.push(1) //Error

let evenNumbers: readonly number[] = [2, 4, 6];
// evenNumbers.push(8, 10); //if there is readonly then only we can see the array but cannot change it
console.log(evenNumbers);
