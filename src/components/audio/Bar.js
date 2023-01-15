import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

export default function Bar(props) {
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="bar select-none w-full flex items-center">
      <span className="text-white text-base">{formatDuration(curTime)}</span>
      <div
        className="bar__progress rounded h-2 flex items-center cursor-pointer mx-10 w-full"
        style={{
          background: `linear-gradient(to right, #1c7fa3 ${curPercentage}%, white 0)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span
          className="bar__progress__knob relative h-4 w-4 bg-[#033a4e] rounded-full border border-white"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="text-white text-base">{formatDuration(duration)}</span>
    </div>
  );
}
