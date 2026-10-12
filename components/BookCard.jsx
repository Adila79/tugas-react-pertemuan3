export default function BookCard({ book }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <article className="card h-100 border-0 shadow-sm book-card">
        <div className="book-cover d-flex align-items-center justify-content-center">
          <span className="cover-mark">B</span>
        </div>
        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-primary align-self-start mb-2">{book.category}</span>
          <h2 className="h5 card-title">{book.title}</h2>
          <p className="text-secondary mb-2">oleh {book.author}</p>
          <div className="mt-auto">
            <p className="fs-5 fw-bold text-primary mb-1">{book.price.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</p>
            <small className="text-secondary">Stok: {book.stock}</small>
          </div>
        </div>
      </article>
    </div>
  );
}