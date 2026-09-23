import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 18 }}>
      <aside>
        <div className="panel">
          <header className="panel-header">
            <h3>Products</h3>
          </header>
          <nav
            style={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <NavLink
              to="list"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Product List
            </NavLink>
            <NavLink
              to="offers"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Offers
            </NavLink>
          </nav>
        </div>
      </aside>

      <section>
        <Outlet />
      </section>
    </div>
  );
}
