//TypeScript Functions:-
// Return Type
// The type of the value returned by the function can be explicitly defined.

const callDate = (): number => {
  return new Date().getTime();
};
const date: number = callDate();
console.log(date);

//If no return type then you can give type void
function getTime(): void {
  console.log(new Date().getTime());
}
getTime();

// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
const sub = (a: number, b: number, c?: number): number => {
  return a - b - (c || 0);
};
console.log(sub(20, 10, 5));
