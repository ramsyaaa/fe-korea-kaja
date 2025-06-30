import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomPlayDance from "./pages/RandomPlayDance";
import KuotaKoreaKaja from "./pages/KuotaKoreaKaja";
import MerchUStore from "./pages/MerchUStore";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/random-play-dance" element={<RandomPlayDance />} />
        <Route path="/kuota-korea-kaja" element={<KuotaKoreaKaja />} />
        <Route path="/merch-ustore" element={<MerchUStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
