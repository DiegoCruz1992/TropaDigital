import { useState } from "react";
import Routes from "./routes";
export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <Routes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
}
