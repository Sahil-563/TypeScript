import React from "react";
//The child prop it is accepting is a child component and the type of a react component is:-
type OscarProps = {
  children: React.ReactNode;
};
function OscarProp(props: OscarProps) {
  return (
    <>
      <h1>Oscars goes to {props.children}</h1>
    </>
  );
}

export default OscarProp;
