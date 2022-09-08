import { Route, Routes } from "react-router";
import Container from "./components/layout/Container";
import Sidebar from "./components/layout/Sidebar";
import TopBar from "./components/layout/TopBar";
import About from "./pages/About";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Notes from "./pages/Notes";
import NotesRedux from "./pages/NotesRedux";
import Private from "./pages/Private";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/private" element={<Private />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes-redux" element={<NotesRedux />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="*"
            element={<p>There's nothing here!</p>}
          />
        </Route>
      </Routes>
    </div>
  );
}
