import { useState, useEffect } from "react";
import type { Position } from "../types";

const useCharacter = (
  mapWidth: number,
  mapHeight: number,
  stepX = 60,
  stepY = 40,
) => {
  const [position, setPosition] = useState<Position>({
    x: Math.floor(mapWidth / 2 / stepX) * stepX,
    y: Math.floor(mapHeight / 2 / stepY) * stepY,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPosition((prev) => {
        let { x, y } = prev;

        switch (e.key) {
          case "ArrowUp":
            y = Math.max(0, y - stepY);
            break;
          case "ArrowDown":
            y = Math.min(mapHeight, y + stepY);
            break;
          case "ArrowLeft":
            x = Math.max(0, x - stepX);
            break;
          case "ArrowRight":
            x = Math.min(mapWidth, x + stepX);
            break;
          default:
            return prev;
        }

        return { x, y };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mapWidth, mapHeight, stepX, stepY]);

  return position;
};

export default useCharacter;
