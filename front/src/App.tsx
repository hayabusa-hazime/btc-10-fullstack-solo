import { AutoScrollSlider } from "./components/AutoScrollSlider";
import { Hole } from "./components/Hole1.tsx";
import { MusicSelect } from "./components/MusicSelect.tsx";
import "./style.css";

import { useState } from "react";

function App() {
  const [musicId, setMusicId] = useState<number>(0);
  const [BPM, setBPM] = useState<number>(100);

  return (
    <div>
      <MusicSelect setMusicId={setMusicId} setBPM={setBPM} />
      <AutoScrollSlider musicId={musicId} BPM={BPM} />
    </div>
  );
}

export default App;
