import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Book from "./pages/Book.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
        <footer className="bg-dark text-light text-center py-3 mt-5">
          <small>© 2026 BookSales — Temukan buku favoritmu.</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}