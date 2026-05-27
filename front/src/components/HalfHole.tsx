import { useEffect, useRef } from "react";

export const HalfHole = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const radius = 17;
  const color = "black";
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const width = radius * 2;
    const height = radius;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    ctx.arc(radius, 0, radius, 0, Math.PI, false);

    ctx.fillStyle = color;
    ctx.fill();
  }, [radius, color]);

  return <canvas ref={canvasRef} width={radius * 2} height={radius} />;
};
