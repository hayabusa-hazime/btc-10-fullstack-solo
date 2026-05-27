import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Recorder } from "./Recorder1";
import { useEffect, useState, useRef } from "react";
import { ContoButton } from "./ContollButton.tsx";
import "@splidejs/react-splide/css";

export const AutoScrollSlider = ({ musicId, BPM }) => {
  const splideRef = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/sheet_music/${musicId}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      });
  }, [musicId]);

  return (
    <>
      <div style={{ padding: "40px" }}>
        <Splide
          options={{
            // type: "loop",
            type: "slide",
            rewind: false,

            perPage: 4,
            gap: "1rem",

            arrows: false,
            pagination: false,

            pauseOnHover: false,
            pauseOnFocus: false,
            resetProgress: false,

            autoScroll: {
              speed: BPM * 0.01, //取得データのBPMにしたい
            },
          }}
          onMounted={(splide) => {
            splideRef.current = splide;
          }}
          extensions={{ AutoScroll }}
        >
          {data.map((ele, ind) => (
            <SplideSlide
              key={ind}
              className="slide"
              style={{
                width: (4 / ele.dilay) * 150,
                // height: `${(4 / ele.dilay) * 150}mm`,
              }}
            >
              <Recorder data={ele} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <ContoButton splideRef={splideRef} />
    </>
  );
};
