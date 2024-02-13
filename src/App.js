import { Route, Routes } from "react-router-dom";
import "./index.css";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Allbums from "./pages/Albums";
import Allsong from "./pages/Allsong";
import AboutUs from "./pages/AboutUs";
import MusicAllbums from "./pages/MusicAllbums";
import Artistaccount from "./pages/Artistaccount";
import { QueryClient, QueryClientProvider } from "react-query";




export default function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route index element={<Home />}></Route>
            <Route path="Artist" element={<Artist />}></Route>
            <Route path="Allbums" element={<Allbums />}></Route>
            <Route path="MusicAllbums" element={<MusicAllbums />}></Route>
            <Route path="Allsong" element={<Allsong />}></Route>
            <Route path="AboutUs" element={<AboutUs />}></Route>
            <Route path="Artist-account" element={<Artistaccount />}></Route>
          </Route>
        </Routes>
      </div>
    </QueryClientProvider >

  );
}
