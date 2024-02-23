import "./App.css";
import { useState } from "react";
import BasicProp from "./Components/Props/BasicProp";
import ObjectProp from "./Components/Props/ObjectProp";
import AdvanceProps from "./Components/Props/AdvanceProps";
import Heading from "./Components/Props/HeadingProps";
import Oscar from "./Components/Props/OscarProp";
import Events from "./Components/Props/EventsProps";
import Input from "./Components/Props/InputProps";
import StylesProps from "./Components/Props/StylesProps";
import IsLoggedIn from "./Components/Hooks/UseStateHook";
import LogIn from "./Components/Hooks/FutureValuesUseStateHook";
function App() {
  const fullName = {
    firstName: "Sahil",
    lastName: "Bhardwaj",
  };
  const [value, setValue] = useState("");
  return (
    <>
      <BasicProp name="sahil" age={20} isLoggedIn={true} />
      <ObjectProp fullName={fullName} />
      <AdvanceProps status="success" />
      {/* The above prop is the example of union */}
      <Heading>What's your opinon</Heading>
      {/* The above prop is the example of prop inside component */}
      <Oscar>
        <Heading>Zinta bhai</Heading>
      </Oscar>
      {/* Passing compoent inside the component now this componenet is child of oscar component but what should be the type of react child component for that we should go to Oscar Component */}
      <Events
        handleClick={() => {
          console.log("clicked");
        }}
      ></Events>
      {/* In this we are passing a onclick function as a prop so we have to define its type in the event component */}
      <Input
        value={value}
        handleChange={(event) => {
          setValue(event.target.value);
        }}
      ></Input>
      {/* In this we are passing a onchange function (handleChange) as a prop so we have to define its type in the InpurProps component */}
      <StylesProps
        styles={{
          backgroundColor: "red",
          textAlign: "center",
          marginTop: "20px",
        }}
      ></StylesProps>

      {/* HOOKS */}
      {/* infering the type in hook :-*/}
      <IsLoggedIn />
      {/* Explicitly defining the type for future states */}
      <LogIn />
    </>
  );
}

export default App;
