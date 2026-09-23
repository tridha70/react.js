import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { services } from "../data/siteData";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  const results = useMemo(() => {
    return services.filter((service) => {
      const matchesQ = q
        ? service.title.toLowerCase().includes(q.toLowerCase())
        : true;
      const matchesCat = category ? service.category === category : true;
      return matchesQ && matchesCat;
    });
  }, [q, category]);

  const updateQuery = (nextQuery: string) => {
    const params = new URLSearchParams(searchParams);
    if (nextQuery.trim()) {
      params.set("q", nextQuery.trim());
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };

  const updateCategory = (nextCategory: string) => {
    const params = new URLSearchParams(searchParams);
    if (nextCategory) {
      params.set("category", nextCategory);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  };

  return (
    <div className="page search-page">
      <section className="search-controls">
        <h2>Search Services</h2>
        <div className="search-row">
          <input
            placeholder="Search services..."
            value={q}
            onChange={(event) => updateQuery(event.target.value)}
          />

          <select value={category} onChange={(event) => updateCategory(event.target.value)}>
            <option value="">All</option>
            <option value="wellness">Wellness</option>
            <option value="spa">Spa</option>
            <option value="stay">Stay</option>
          </select>
        </div>
      </section>

      <section className="results-list">
        <h3>Results ({results.length})</h3>
        {results.length === 0 ? (
          <p className="empty-state">No services match your filters.</p>
        ) : (
          <div className="cards-grid">
            {results.map((service) => (
              <article key={service.id} className="info-card">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className="muted">
                  {service.price} • {service.duration}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
