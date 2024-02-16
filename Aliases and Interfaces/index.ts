//TypeScript allows types to be defined separately from the variables that use them.

//Type Aliases allow defining types with a custom name (an Alias).:-
type weight = string;
type capacity = number;
type company = string;
type bottle = {
  weight: weight;
  capacity: capacity;
  company: company;
};

const Bottle: bottle = {
  weight: "20kg",
  capacity: 200,
  company: "milton",
};

console.log(Bottle);

//Interfaces are same as aliases but only applied to objects:-
interface rectangle {
  length: number;
  breadth: number;
}
const Rectangle: rectangle = {
  length: 20,
  breadth: 30,
};
console.log("Reactangle:- ", Rectangle);

//We can extends our interface as:-
interface ColoredRectangle extends rectangle {
  color: string;
}
const ColoredRectangle: ColoredRectangle = {
  length: 20,
  breadth: 30,
  color: "red",
};
console.log("ColoredRectangle:- ", ColoredRectangle);
