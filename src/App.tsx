import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomPlayDance from "./pages/RandomPlayDance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/random-play-dance" element={<RandomPlayDance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
