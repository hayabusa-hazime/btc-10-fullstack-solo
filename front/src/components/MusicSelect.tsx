import { useEffect, useState } from "react";

type Props = {
  setMusicId: (value: string) => void;
};

export function MusicSelect({ setMusicId }: Props) {
  const [musicData, setMusicData] = useState([{ id: 0, name: "曲名を選択" }]);

  useEffect(() => {
    fetch("/api/music")
      .then((res) => res.json())
      .then((json) => {
        setMusicData(json.data);
      });
  }, []);

  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        setMusicId(e.target.value);
      }}
    >
      {[{ id: 0, name: "" }, ...musicData].map((ele) => {
        return (
          <option key={ele.name} value={ele.id}>
            {ele.name}
          </option>
        );
      })}
    </select>
  );
}
