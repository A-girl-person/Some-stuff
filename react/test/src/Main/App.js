import UserCard from "./UserCard";
import "./App.css";
import { useState } from "react";
import UserDetail from "./UserDetail";

function App() {
  const [userId, setUserId] = useState("");
  return (
    <div>
      <UserCard setUserId={setUserId} />
      <UserDetail userId={userId} />
    </div>
  );
}

export default App;
