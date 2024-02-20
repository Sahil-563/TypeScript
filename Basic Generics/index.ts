// Functions
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.
// When we use a fucntion in TS so in argument we have to pass the type which it will use but if we want that fucntion again to use with different type of arguments then we can't do that so in that case we can use generics

function user(data: object): object {
  return data;
}
console.log(user({ name: "Sahil", age: 21 }));
console.log(typeof user);

//Now if I want to use this user again with different parameters like string or number I cannot do that so we can make this function a generic as:-
function user1<T>(data: T): T {
  return data;
}
console.log(user1<string>("Sahil")); //Now I can send any parameter ,it can be number, object or string

type Wrapped<T, S> = { value: T };
const wrappedValue: Wrapped<number, string> = { value: 10 };
console.log(wrappedValue);

interface sunoJi<T> {
  whatJi: T;
}
const sunoJi: sunoJi<string> = {
  whatJi: "Love you ji",
};
const sunoJiPlease: sunoJi<string> = {
  whatJi: "Love you ji",
};
