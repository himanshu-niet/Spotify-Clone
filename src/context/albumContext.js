import { createContext, useState } from "react";

export const AlbumContext=createContext();


export const AlbumState=(props)=>{
    
    const [albumId, setAlbumId] = useState("3IBcauSj5M2A6lTeffJzdv");
    const updateAlbumId=(id)=>{
        setAlbumId(id)
    }
    return(
        <AlbumContext.Provider value={{albumId,updateAlbumId}}>
            {props.children}
        </AlbumContext.Provider>
    )
}