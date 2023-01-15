import React, { useContext } from 'react'
import { SongContext } from '../context/songContex';


export const TableTr = (props) => {
const songContext = useContext(SongContext);

  return (
    <tr
      className="hover:bg-[#273338] duration-500 cursor-pointer"
      onClick={() => songContext.updateSongId(props.id)}
    >
      <td className=" rounded-l-lg pl-3">
        <i className="fa fa-play text-white"></i>
      </td>
      <td className="flex text-white overflow-hidden">
        <div className="py-2">
          <img src={props.img} height="40px" width="40px" alt="" />
        </div>
        <div className="mx-4 -mt-1 py-2">
          <p className="">{props.name}</p>
        
        </div>
      </td>
      <td className="text-gray-300">{props.album}</td>
      <td className="rounded-r-lg pr-3 text-gray-300">{props.time}</td>
    </tr>
  );
}
