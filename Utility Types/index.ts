// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// Partial:-
// Partial changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}
const point: Partial<Point> = {
  x: 1,
  //In this we made hre second parameter optional
};
console.log(point);

// Required
// Required changes all the properties in an object to be required.
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` forces mileage to be defined
};
console.log(myCar);

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
const data: Record<number, string> = {
  1: "sahil",
  2: "vishal",
};
console.log(data);

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}

function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;

  if (yardSize === undefined) {
    console.log("No yard");
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}
//Here yard have some value
let home: House = {
  sqft: 500,
  yard: {
    sqft: 400,
  },
};
//Here yard have some value
let home1: House = {
  sqft: 500,
};

printYardSize(home);
printYardSize(home1);
