import { useState,createContext } from "react";

export const SongContext=createContext();


export const SongState=(props)=>{

    const [songId, setSongId] = useState(
      "https://p.scdn.co/mp3-preview/61ebe19e466c5caa4c08bb9de193501cae48fab8?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
    );

    const updateSongId=(id)=>{
        setSongId(id)
    
    }
    return(
        <SongContext.Provider value={{songId,updateSongId}}>
{props.children}
        </SongContext.Provider>   
        
)
}