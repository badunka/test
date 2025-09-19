import useCharacter from "../hooks/useCharacter";
import type { MapProps } from "../types";
import map from "../assets/map.svg?url";
import Character from "./Character";

const Map = ({ width, height, name, color }: MapProps) => {
  const scaleX = width / 300;
  const scaleY = height / 200;
  const position = useCharacter(width, height, 60 * scaleX, 40 * scaleY);
  return (
    <div
      style={{
        position: "relative",
        width: 600,
        height: 400,
        backgroundImage: `url("${map}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        border: "2px solid #ccc",
      }}
    >
      <Character x={position.x} y={position.y} name={name} color={color} />
    </div>
  );
};
export default Map;
