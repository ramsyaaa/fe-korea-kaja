import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import FontTest from "./components/FontTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/font-test" element={<FontTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
