import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route} from "react-router-dom";
import {SongState} from './context/songContex'
import { AlbumState } from "./context/albumContext";
function App() {

  return (
    <AlbumState>
      <SongState>
        <div className="grid md:grid-cols-5   font-[Manrope] ">
          <div className="md:col-span-1  w-full ">
            <Sidebar />
          </div>
          <div className="md:col-span-4">
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </SongState>
    </AlbumState>
  );
}

export default App;
