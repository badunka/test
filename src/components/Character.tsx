import type { CharacterProps } from "../types";

const Character = ({ x, y, name, color, size = 24 }: CharacterProps) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: "4px",
          color,
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default Character;
