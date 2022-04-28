import { Route, Routes } from "react-router";
import Container from "./components/layout/Container";
import Sidebar from "./components/layout/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={<p>There's nothing here!</p>}
          />
        </Route>
      </Routes>
    </div>
  );
}
