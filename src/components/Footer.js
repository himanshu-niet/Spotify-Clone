import React, { useState,useContext, useEffect} from 'react'
import {SongContext} from '../context/songContex';
import Audio from './audio/Audio'

export const Footer = () => {

  const songContext = useContext(SongContext);
  const [song, setSong] = useState(
    "https://p.scdn.co/mp3-preview/61ebe19e466c5caa4c08bb9de193501cae48fab8?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
  );

    const [mutebtn, setMutebtn] = useState(false);
    const [valume,setValume]=useState(90);
 
  useEffect(() => {
    setSong(songContext.songId);
  
   
  }, [songContext.songId]);
  

   useEffect(()=>{

    if(valume==0){
      setMutebtn(true)
    }else{
      setMutebtn(false)
    }
  document.getElementById("audio").volume = (valume/100);
   },[valume])
  
  return (
    <div className="p-3 fixed bottom-0 left-0 bg-[#181818] w-full grid grid-cols-3 px-2 text-[#bababa]">
      <div className=""></div>

      <Audio song={song} mute={mutebtn} />

      <div className=" flex py-2 place-content-center">
        <div className="mx-2 ">
          {mutebtn ? (
            <i
              className="fa fa-volume-off cursor-pointer"
              onClick={() => setMutebtn(!mutebtn)}
            ></i>
          ) : (
            <i
              className="fa fa-volume-up cursor-pointer"
              onClick={() => setMutebtn(!mutebtn)}
            ></i>
          )}
        </div>
        <div className="mt-[2px] ">
          <input type="range" value={valume} onChange={(e)=>setValume(e.target.value)} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
