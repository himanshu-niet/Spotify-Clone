import React from "react";
import { Album } from "./Album";


export const Home = (props) => {
  return (
    <div className=" h-screen bg-gradient-to-t from-[#02394d] to-[#0399d0]">
      <div className="grid  grid-cols-3 mb-10 px-8 py-8">
        <div className="bg-white rounded-full p-0 flex overflow-hidden">
          <i className="fa fa-search my-3 ml-3"></i>

          <div className="w-full ">
            <input
              type="text"
              className="h-full w-full focus:outline-0 pl-3"
              placeholder="Artists, songs or podcasts"
            />
          </div>
        </div>

        <div className=" col-end-4 text-white ">
          <span className="bg-[#012c3c] rounded-full py-1 px-3 float-right cursor-not-allowed">
            <i className="fa fa-user mr-2"></i>Himanshu
          </span>
        </div>
      </div>

      <Album/>
    </div>


  );
};
