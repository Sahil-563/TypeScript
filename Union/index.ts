//Union types are used when a value can be more than a single type.
//Such as when a property would be string or number

type modak = string;
type navya = any;
type sahil = number;
type vishakha = boolean;
function interns(modak: modak | navya) {
  console.log(modak);
}
interns("Bhai");
interns(true);

function stringConversion(str: string | number) {
  //   console.log(str.toUpperCase()); // Error
}
