import { AutoScrollSlider } from "./components/AutoScrollSlider";
import { Hole } from "./components/Hole1.tsx";
import { MusicSelect } from "./components/MusicSelect.tsx";
import "./style.css";
import { useState } from "react";

function App() {
  const [musicId, setMusicId] = useState<number>(0);
  return (
    <div>
      <MusicSelect setMusicId={setMusicId} />
      <AutoScrollSlider musicId={musicId} />
      <Hole mode={1} hole={true} />
      <Hole mode={1} hole={false} />
    </div>
  );
}

export default App;
