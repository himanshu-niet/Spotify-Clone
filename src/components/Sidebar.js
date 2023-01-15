import React,{useContext, useEffect} from 'react'
import { AlbumContext } from '../context/albumContext';

export const Sidebar = () => {

  const albumContext=useContext(AlbumContext);

  return (
    <div className="text-white py-5 overflow-hidden md:fixed top-0 left-0">
      <div className="w-full  my-3 ">
        <span className="fa fa-spotify text-5xl mx-3"></span>
        <span className="text-4xl ml-2 font-bold">Spotify </span>
      </div>

      <ul className="mt-10 text-gray-300 cursor-wait">
        <li className="my-3">
          <i className="fa fa-home mx-3"></i>Home
        </li>
        <li className="my-3">
          <i className="fa fa-search mx-3"></i>Search
        </li>
        <li className="my-3">
          <i className="fa fa-bar-chart mx-3"></i>Library
        </li>
      </ul>

      <ul className="mt-9 pl-4 text-gray-300">
        <li className="text-xl font-bold">Album</li>
        <li
          className="my-4"
          onClick={() => albumContext.updateAlbumId("0mNU7NPXsBH6NiWilJOz3c")}
        >
          Best Of Arijit Singh
        </li>
        <li
          className="my-4"
          onClick={() => albumContext.updateAlbumId("71O60S5gIJSIAhdnrDIh3N")}
        >
          The Album
        </li>
        <li
          className="my-4"
          onClick={() => albumContext.updateAlbumId("4hpRbxQk65dMezDhRjN9T5")}
        >
          By Jubin Nautiyal
        </li>
       
      </ul>
    </div>
  );
}
