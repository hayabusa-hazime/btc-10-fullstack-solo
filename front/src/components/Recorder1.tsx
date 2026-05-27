import { Hole } from "./Hole1";
import { HalfHole } from "./HalfHole";
import { useEffect, useState } from "react";

export function Recorder({ data }) {
  const [noteData, setNoteData] = useState([]);
  useEffect(() => {
    fetch(`/api/fingering`)
      .then((res) => res.json())
      .then((json) => {
        setNoteData(
          json.data.find((obj) => {
            return obj.note === data.note && obj.octave === data.octave;
          }),
        );
        console.log(
          data.note,
          json.data.find((obj) => {
            return obj.note === data.note && obj.octave === data.octave;
          }),
        );
      });
  }, []);
  if (data.note === "四分休符") {
    return <p>休符</p>;
  } else {
    return (
      <>
        <p>{data.note}</p>
        <div className="finger">
          <p>左親指</p>
          {noteData.hole1 === 1 ? (
            <HalfHole />
          ) : (
            <Hole mode={1} hole={noteData.hole1 === 2} />
          )}
        </div>
        <div className="finger">
          <p>左人差し指</p>
          <Hole mode={1} hole={noteData.hole2} />
        </div>
        <div className="finger">
          <p>左中指</p>
          <Hole mode={1} hole={noteData.hole3} />
        </div>
        <div className="finger">
          <p>左薬指</p>
          <Hole mode={1} hole={noteData.hole4} />
        </div>
        <div className="finger">
          <p>右人差し指</p>
          <Hole mode={1} hole={noteData.hole5} />
        </div>
        <div className="finger">
          <p>右中指</p>
          <Hole mode={1} hole={noteData.hole6} />
        </div>
        <div className="finger">
          <p>右薬指</p>
          <Hole mode={1} hole={noteData.hole7} />
          <Hole mode={1} hole={noteData.hole8} />
        </div>
        <div className="finger">
          <p>右小指</p>
          <Hole mode={1} hole={noteData.hole9} />
          <Hole mode={1} hole={noteData.hole10} />
        </div>
      </>
    );
  }
}
