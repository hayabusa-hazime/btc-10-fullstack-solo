import { useEffect, useRef } from "react";
export function Hole({ mode, hole }: { mode: number; hole: boolean }) {
  // harf 0
  // dual 1
  // solo 2
  const canvasRef = useRef<HTMLCanvasElement>(null);
  mode;
  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const size = 40;
    const center = size / 2;
    const radius = 16;

    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    // 半欠けも追加したいかも？別でもいい
    ctx.fillStyle = hole ? "black" : "white";
    ctx.fill();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }, [hole]);

  return <canvas ref={canvasRef} width={40} height={40} />;
}
