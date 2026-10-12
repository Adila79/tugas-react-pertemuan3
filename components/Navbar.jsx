import { NavLink } from "react-router";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active fw-bold text-warning" : "text-white"}`;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary px-3 px-md-5">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">BookSales</NavLink>
        <div className="navbar-nav ms-auto">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/book">Book</NavLink>
        </div>
      </div>
    </nav>
  );
}