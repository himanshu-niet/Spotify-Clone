import React from 'react'

export const AlbumHeader = (props) => {
  return (
    <div className="w-full grid grid-cols-4 text-white m-8">
      <div className="col-span-1">
        <img src={props.img} alt="" />
      </div>
      <div className="col-span-3 px-10">
        <span className="text-sm font-semibold">ALBUM</span>
        <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold">
          {props.name}
        </h1>
        <div className="lg:mt-10 mt-3">
          <p className="text-gray-400 font-medium my-3">{props.details}</p>

          <div className="">
            <i className="fa fa-spotify text-green-500 translate-y-[2px] mr-2 text-2xl"></i>
            <span className="font-bold">Spotify</span>
            <i className="fa fa-circle text-[5px] -translate-y-[2px] mx-1"></i>
            <span>{props.songs} songs,</span>
            <span className="text-sm font-medium  text-gray-400 ml-1 mt-1">
              {props.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
