import { useState } from "react";

import Login from "./Pages/Login";

function App() {
  // *state to see if the user has successfully logedin
  const [isLogin, setIsLogin] = useState(false);
  return <>{isLogin ? "hey User" : <Login setIsLogin={setIsLogin} />}</>;
}

export default App;
