import React from "react";

type data = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};
function BasicProp(prop: data) {
  return (
    <>
      <h1>
        Hello My name is {prop.name} and my age is {prop.age}
      </h1>
    </>
  );
}

export default BasicProp;
