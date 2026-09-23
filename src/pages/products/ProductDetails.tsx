import { useParams, Link } from "react-router-dom";

const details: Record<string, { name: string; price: string; desc: string }> = {
  "1": {
    name: "Nimbus UI Kit",
    price: "$29",
    desc: "A modern UI kit for building dashboards and apps.",
  },
  "2": {
    name: "Photon Analytics",
    price: "$59",
    desc: "Lightweight analytics and reporting tools.",
  },
  "3": {
    name: "Atlas CMS",
    price: "$99",
    desc: "Content management with a developer-friendly API.",
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = id ? details[id] : undefined;

  if (!product) {
    return (
      <div className="panel">
        <header className="panel-header">
          <h2>Product Not Found</h2>
        </header>
        <p style={{ marginTop: 12 }}>We couldn't find that product.</p>
        <Link to="/products" className="nav-link" style={{ marginTop: 12 }}>
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="panel">
      <header className="panel-header">
        <h2>{product.name}</h2>
      </header>
      <p style={{ marginTop: 12 }}>{product.desc}</p>
      <div style={{ marginTop: 12, fontWeight: 700 }}>{product.price}</div>
      <div style={{ marginTop: 14 }}>
        <Link to="/products/offers" className="nav-link">
          View Offers
        </Link>
      </div>
    </div>
  );
}
