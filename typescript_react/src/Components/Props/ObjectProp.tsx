import React from "react";
type data = {
  fullName: {
    firstName: string;
    lastName: string;
  };
};
function ObjectProp(prop: data) {
  return (
    <>
      <h1>My first name is {prop.fullName.firstName}</h1>
      <h1>My surname is {prop.fullName.lastName}</h1>
    </>
  );
}

export default ObjectProp;
