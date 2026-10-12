import { useState } from "react";
import { booksData } from "../Utils/books.js";
import BookCard from "../components/BookCard.jsx";

export default function Book() {
  const [books, setBooks] = useState(booksData);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Umum");
  const [message, setMessage] = useState("");

  function handleAddBook(event) {
    event.preventDefault();
    const numericPrice = Number(price);

    if (!title.trim() || !author.trim() || !Number.isFinite(numericPrice) || numericPrice <= 0) {
      setMessage("Isi judul, penulis, dan harga dengan benar.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      price: numericPrice,
      category,
      stock: 1,
    };

    setBooks((previousBooks) => [...previousBooks, newBook]);
    setTitle("");
    setAuthor("");
    setPrice("");
    setCategory("Umum");
    setMessage("Buku berhasil ditambahkan.");
  }

  return (
    <section className="container py-5">
      <div className="mb-4">
        <p className="text-primary fw-semibold mb-1">KATALOG</p>
        <h1 className="fw-bold">Daftar Buku</h1>
        <p className="text-secondary">Lihat koleksi buku atau tambahkan buku baru.</p>
      </div>

      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body p-4">
          <h2 className="h4 fw-bold mb-3">Tambah Buku Baru</h2>
          <form onSubmit={handleAddBook}>
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="title" className="form-label">Judul buku</label>
                <input id="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan judul" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="author" className="form-label">Penulis</label>
                <input id="author" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Nama penulis" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="price" className="form-label">Harga (Rp)</label>
                <input id="price" type="number" min="1" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="85000" required />
              </div>
              <div className="col-md-2">
                <label htmlFor="category" className="form-label">Kategori</label>
                <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>Umum</option>
                  <option>Novel</option>
                  <option>Fantasi</option>
                  <option>Keuangan</option>
                  <option>Pengembangan Diri</option>
                  <option>Filsafat</option>
                  <option>Romansa</option>
                </select>
              </div>
            </div>
            <button className="btn btn-primary mt-3" type="submit">+ Tambah Buku</button>
            {message && <p className="small mt-3 mb-0" role="status">{message}</p>}
          </form>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-end mb-3">
        <h2 className="h3 fw-bold mb-0">Semua Buku</h2>
        <span className="text-secondary">{books.length} buku</span>
      </div>
      <div className="row g-4">
        {books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </section>
  );
}