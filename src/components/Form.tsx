import { useEffect, useState, type ChangeEvent } from "react";
import type { FormProps } from "../types";
import useDebounce from "../hooks/useDebounce";
import { fetchColorName } from "../api/colorApi";

const Form = ({ onChange }: FormProps) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ff0000");
  const [colorName, setColorName] = useState<string>("");

  const debouncedColor = useDebounce(color, 300);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    onChange({ name: newName, color });
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange({ name, color: newColor });
  };

  useEffect(() => {
    if (!debouncedColor) return;
    fetchColorName(debouncedColor.slice(1)).then(setColorName);
  }, [debouncedColor]);

  return (
    <div
      style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label style={{  color: "#fff" }}>
          Character name
        </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter character name"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "1px solid #e3e3e3",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label style={{  color: "#fff" }}>
          Character color
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            style={{
              width: "50px",
              height: "40px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          />
          <span style={{  color: "#fff" }}>
            {colorName || "…"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
