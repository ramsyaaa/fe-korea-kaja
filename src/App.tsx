import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import FinalistPage from "./pages/FinalistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/finalist" element={<FinalistPage />} />
        {/* <Route path="/how-to" element={<HowToPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
