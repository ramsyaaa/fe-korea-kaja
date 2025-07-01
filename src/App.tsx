import { BrowserRouter, Route, Routes } from "react-router-dom";
import KuotaKoreaKaja from "./pages/KuotaKoreaKaja";
import MerchUStore from "./pages/MerchUStore";
import RandomPlayDance from "./pages/RandomPlayDance";
import TukarUCoin from "./pages/TukarUCoin";

import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/random-play-dance" element={<RandomPlayDance />} />
        <Route path="/kuota-korea-kaja" element={<KuotaKoreaKaja />} />
        <Route path="/merch-ustore" element={<MerchUStore />} />
        <Route path="/tukar-ucoin" element={<TukarUCoin />} />

        {/* Catch-all route for 404 - must be last */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
