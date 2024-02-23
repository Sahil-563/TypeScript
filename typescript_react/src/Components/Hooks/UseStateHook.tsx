import { useState } from "react";
function UseEffectHook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Here we gave the initial value to our state of type boolean so TS itself infer the type of isLoggedIn now we cannot give other types to our setter funciton setIsLoggedIn because it will throw error
  //As we can do in js that we can give 0 to setIsLoggedIn(0) and js will consider it as false this can't be done in TS
  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <p>The user is {isLoggedIn ? "logged In" : "logged Out"}</p>
    </>
  );
}

export default UseEffectHook;
