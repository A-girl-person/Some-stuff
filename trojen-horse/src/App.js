import "./App.css";
import GiveLogin from "./jsx/GiveLogin";
import { useState } from "react";

function App() {
  const [theme, settheme] = useState("Light");
  return (
    <body className={theme ? "" : ""}>
      <container className="mid">
        <button onClick={() => settheme("Light")}>Light</button>
        <button onClick={() => settheme("Dark")}>Dark</button>
      </container>
      <GiveLogin theme={theme} />;
    </body>
  );
}

export default App;
