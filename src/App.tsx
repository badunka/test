import { useState } from "react";
import Form from "./components/Form";
import Map from "./components/Map";

function App() {
  const [character, setCharacter] = useState({ name: "", color: "#ff0000" });

  return (
    <div
      style={{ display: "flex", gap: "2rem", height: "100vh", width: "100%" }}
    >
      <div
        style={{
          flex: 1,
          minWidth: "250px",
          padding: "1rem",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form onChange={setCharacter} />
      </div>

      <div
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Map
          width={600}
          height={400}
          name={character.name || "Unnamed"}
          color={character.color}
        />
      </div>
    </div>
  );
}

export default App;
