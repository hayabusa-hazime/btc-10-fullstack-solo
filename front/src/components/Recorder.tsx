import { Hole } from "./Hole1";
import { HalfHole } from "./HalfHole";

export function Recorder({ data }) {
  if (data.name === "四分休符") {
    return <p>休符</p>;
  } else {
    return (
      <>
        <Hole mode={1} hole={data.hole1 === 2} />
        <HalfHole />
        <Hole mode={1} hole={data.hole2} />
        <Hole mode={1} hole={data.hole3} />
        <Hole mode={1} hole={data.hole4} />
        <Hole mode={1} hole={data.hole5} />
        <Hole mode={1} hole={data.hole6} />
        <Hole mode={1} hole={data.hole7} />
        <Hole mode={1} hole={data.hole8} />
        <Hole mode={1} hole={data.hole9} />
        <Hole mode={1} hole={data.hole10} />
      </>
    );
  }
}
