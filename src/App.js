import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
