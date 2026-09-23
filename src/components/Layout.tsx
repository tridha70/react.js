import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/services", label: "Solutions" },
  { to: "/bookings", label: "Operations" },
  { to: "/about", label: "Insights" },
  { to: "/contact", label: "Resources" },
];

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate(`/search`);
    }
    setQuery("");
  };

  return (
    <div className={`app-shell ${theme}`}>
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">N</div>
          <div>
            <h1>NaturaFlow</h1>
            <small>AI supply chain OS</small>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="topbar-actions">
          <form className="search-form" onSubmit={handleSearchSubmit} role="search">
            <input
              aria-label="Search operations"
              placeholder="Search operations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="action-btn">Search</button>
          </form>

          <button type="button" className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>NaturaFlow © 2026 · Sustainable supply orchestration</p>
      </footer>
    </div>
  );
}
