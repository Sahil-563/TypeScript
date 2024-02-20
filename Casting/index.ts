//Casting is the process of overriding a type

//Casting with as:-
let x: unknown = "hello";
console.log((x as string).length);

//Casting with <>:-
let y: unknown = "hello";
console.log((<string>y).length);

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let v = "hello";

console.log(typeof (v as unknown as number));
