import { useState } from "react";
type userDetails = {
  name: string;
  status: string;
};
function FutureValuesUseStateHook() {
  const [user, setUser] = useState<userDetails | null>(null); //Here initailly the type of user is null but it can be object so we have used <>
  const handleLogIn = () => {
    setUser({
      name: "Sahil",
      status: "true",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <p>{user?.name}</p>
      <p>{user?.status}</p>
    </>
  );
}

export default FutureValuesUseStateHook;
