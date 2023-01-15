import React from "react";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <div className="px-4 py-2" onClick={() => handleClick()}>
      <i className="fa fa-play text-black"></i>
    </div>
  );
}
