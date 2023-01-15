import React, { useEffect, useState, useReducer } from "react";

import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import useAudioPlayer from './useAudioPlayer';

function Audio(props) {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
const [song,setSong]=useState(props.song);


useEffect(() => {
  document.getElementById("audio").src = props.song;
}, [props.song]);

  return (
    <div className="">
      <audio id="audio" muted={props.mute}>
        <source src={song} />
        Your browser does not support the <code>audio</code> element.
      </audio>

      <div className="bg-white mx-auto m rounded-full  content-center cursor-pointer w-[45px]">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
      </div>

      <div className="flex justify-between items-center player">
        <div className="bar select-none w-full flex items-center">
          <Bar
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
        </div>
      </div>
    </div>
  );
}

export default Audio;
