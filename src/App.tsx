import { BrowserRouter, Route, Routes } from "react-router-dom";
import KuotaKoreaKaja from "./pages/KuotaKoreaKaja";
import MerchUStore from "./pages/MerchUStore";
import RandomPlayDance from "./pages/RandomPlayDance";
import TukarUCoin from "./pages/TukarUCoin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/random-play-dance" element={<RandomPlayDance />} />
        <Route path="/kuota-korea-kaja" element={<KuotaKoreaKaja />} />
        <Route path="/merch-ustore" element={<MerchUStore />} />
        <Route path="/tukar-ucoin" element={<TukarUCoin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
