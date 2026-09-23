import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Organic Rice",
      supplier: "Green Farms",
      quantity: 1200,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Wheat",
      supplier: "Nature Foods",
      quantity: 650,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Organic Sugar",
      supplier: "Fresh Suppliers",
      quantity: 120,
      status: "Low Stock",
    },
    {
      id: 4,
      name: "Cooking Oil",
      supplier: "Pure Foods",
      quantity: 80,
      status: "Low Stock",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🌱 NatureAI</h2>

        <nav>
          <a className="active">Dashboard</a>
          <a>Inventory</a>
          <a>Suppliers</a>
          <a>Orders</a>
          <a>Analytics</a>
          <a>AI Insights</a>
        </nav>

        <div className="user">
          <div className="avatar">S</div>
          <div>
            <b>Srinivas</b>
            <p>Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">

        {/* Header */}
        <header className="header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Srinivas 👋</p>
          </div>

          <button className="notification">🔔</button>
        </header>

        {/* Cards */}
        <section className="cards">

          <div className="card">
            <span>📦</span>
            <p>Total Products</p>
            <h2>1,250</h2>
            <small>+12% this month</small>
          </div>

          <div className="card">
            <span>🛒</span>
            <p>Total Orders</p>
            <h2>450</h2>
            <small>+8% this month</small>
          </div>

          <div className="card">
            <span>🚚</span>
            <p>Suppliers</p>
            <h2>120</h2>
            <small>+5 new suppliers</small>
          </div>

          <div className="card">
            <span>⚠️</span>
            <p>Low Stock</p>
            <h2>24</h2>
            <small>Needs attention</small>
          </div>

        </section>

        {/* AI Insight */}
        <section className="ai-box">
          <div>
            <h2>🤖 AI Supply Chain Insight</h2>
            <p>
              Organic Sugar inventory may run low within the next 7 days.
              Consider placing a new order.
            </p>
          </div>

          <button>View Insight</button>
        </section>

        {/* Inventory */}
        <section className="inventory">

          <div className="section-header">
            <div>
              <h2>Inventory</h2>
              <p>Manage your current inventory</p>
            </div>

            <input
              type="text"
              placeholder="🔍 Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Supplier</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>#{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.supplier}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <span
                      className={
                        product.status === "In Stock"
                          ? "status green"
                          : "status orange"
                      }
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </section>

      </main>
    </div>
  );
}

export default App;