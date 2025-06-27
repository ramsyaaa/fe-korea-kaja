import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomPlayDance from "./pages/RandomPlayDance";
import KuotaKoreaKaja from "./pages/KuotaKoreaKaja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/random-play-dance" element={<RandomPlayDance />} />
        <Route path="/kuota-korea-kaja" element={<KuotaKoreaKaja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
