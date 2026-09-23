import { NavLink } from "react-router-dom";
import "./navbar.css";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/solutions", label: "Solutions" },
  { to: "/operations", label: "Operations" },
  { to: "/insights", label: "Insights" },
  { to: "/resources", label: "Resources" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="brand-block">
          <div className="brand-mark">N</div>
          <div className="brand-copy">
            <span className="brand-name">NaturaFlow</span>
            <small>AI supply chain OS</small>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="nav-ghost">
            Log in
          </button>
          <button type="button" className="nav-primary">
            Book demo
          </button>
        </div>
      </div>
    </header>
  );
}
