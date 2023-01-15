import React, { useContext, useEffect, useState } from "react";
import { AlbumHeader } from "./AlbumHeader";
import { TableTr } from "./TableTr";
import { AlbumContext } from "../context/albumContext";
import { Circles } from "react-loader-spinner";

export const Album = (props) => {
  const albumContext = useContext(AlbumContext);

  const [album, setAlbum] = useState([]);
  const [track, setTrack] = useState([]);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    getAlbum();
  }, [, albumContext]);

  function getAlbum() {
    const id = albumContext.albumId;
    const mainUrl = "https://spotify23.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0788351d07mshb5de9744a99d6edp1dde21jsnec47bf428cea",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };
    const url = mainUrl + "albums/?ids=" + id;
    try {
      console.log("call/////");
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.albums[0].images[0].url);
          setAlbum(data.albums[0]);
          setTrack(data.albums[0].tracks.items);
       setLoad(true)
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  function time(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      {isLoad ? (
        <div>
          <AlbumHeader
            img={album.images[0].url}
            name={album.name}
            details={album.label}
            songs={album.tracks.total}
            time="about 3 hr 15 min"
          />

          <div className="px-10 py-5 bg-gradient-to-t from-[#0e1f25] to-[#033a4e] ">
            <table className="table-auto w-full text-left text mb-10">
              <thead className=" text-gray-300 sticky top-0 bg-[#033a4e] ">
                <tr className="border-b-[1px] border-gray-500">
                  <td className=" pl-3 rounded-l-lg py-2">#</td>
                  <td>TITLE</td>
                  <td>ALBUM</td>
                  <td className="rounded-r-lg pr-3">
                    <i className="fa fa-clock-o"></i>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr className="h-5" colSpan="2"></tr>

                {track.map((item, id) => {
                  return (
                    <TableTr
                      key={id}
                      img={album.images[0].url}
                      name={item.name}
                      details={album.name}
                      album={item.artists[0].name}
                      time={time(item.duration_ms)}
                      id={item.preview_url}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center">
          <Circles
            height="130"
            width="130"
            color="#ffffff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};
