import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = `${firstName} ${middleName} ${lastName}`;

  const message = `Welcome to React ${fullName}!`;
  return (
    <div>
      <h1>{message}</h1>;
      <form>
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="middle name"
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
