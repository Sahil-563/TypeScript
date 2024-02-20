// const firstName: string = "Sahil";
// console.log(firstName);

// let secondName: string = "Bhardwaj";
// console.log(secondName);

// firstName = 33; //Error because firstName is of string type
// secondName = "Choudhary";
// console.log("Changed FirstName = ", firstName);
// console.log("Changed secondName = ", secondName);

//Any type is a special type:- it disables the type checking
var anyType: any = 20.3;
console.log(anyType);

anyType = "Sahil";
console.log(anyType);

//Type: unknown:-TypeScript will prevent unknown types from being used
//unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.Casting is when we use the "as" keyword to say property or variable is of the casted type.

// never:
// let y: never = "Sahil";  //Error
// console.log(y);
