const statHighlights = [
  { value: "38%", label: "lower forecast error" },
  { value: "3.2x", label: "faster issue resolution" },
  { value: "99.6%", label: "network visibility" },
];

const partners = ["Nordic Retail", "Terra Foods", "NorthPeak", "AsterWorks", "Harbor Logistics"];

const capabilities = [
  {
    title: "Predictive demand planning",
    text: "Blend sales history, supplier risk, and weather signals to plan with greater accuracy across every warehouse.",
  },
  {
    title: "Supplier intelligence",
    text: "Monitor lead times, ESG scorecards, and shipment reliability in one living view before disruptions spread.",
  },
  {
    title: "Autonomous orchestration",
    text: "Trigger replenishment, rerouting, and exception handling automatically when service thresholds are crossed.",
  },
];

const workflowSteps = [
  { step: "01", label: "Connect your network" },
  { step: "02", label: "Model risk & demand" },
  { step: "03", label: "Automate actions" },
];

export default function Home() {
  return (
    <div className="page landing-page">
      <section className="hero-shell">
        <div className="hero-copy">
          <span className="eyebrow">AI supply chain intelligence</span>
          <h1>Turn volatility into a resilient, carbon-aware supply network.</h1>
          <p>
            NaturaFlow helps teams see risk early, respond faster, and keep critical inventory moving from supplier to shelf.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-btn">Book a demo</button>
            <button type="button" className="secondary-btn">View platform</button>
          </div>

          <div className="mini-metrics">
            {statHighlights.map((stat) => (
              <div key={stat.label} className="mini-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-header">
            <div className="dashboard-title">
              <span className="status-dot" />
              Live network
            </div>
            <span className="trend-pill">+18.4%</span>
          </div>

          <div className="chart-panel" aria-label="Supply trend chart">
            <div className="bars" aria-hidden="true">
              <span style={{ height: "38%" }} />
              <span style={{ height: "51%" }} />
              <span style={{ height: "67%" }} />
              <span style={{ height: "45%" }} />
              <span style={{ height: "76%" }} />
              <span style={{ height: "94%" }} />
              <span style={{ height: "83%" }} />
            </div>
          </div>

          <div className="node-list">
            <div className="node-item">
              <div>
                <span className="node-label">Inbound</span>
                <strong>1,284 pallets</strong>
              </div>
              <span className="good">On track</span>
            </div>
            <div className="node-item">
              <div>
                <span className="node-label">Risk exposure</span>
                <strong>8 suppliers</strong>
              </div>
              <span className="warn">Monitor</span>
            </div>
            <div className="node-item">
              <div>
                <span className="node-label">CO₂ intensity</span>
                <strong>12.4 t</strong>
              </div>
              <span className="neutral">-9.2%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Trusted by operations teams">
        {partners.map((partner) => (
          <span key={partner}>{partner}</span>
        ))}
      </section>

      <section className="section-block feature-section">
        <div className="section-heading">
          <span className="eyebrow dark">Why teams switch</span>
          <h2>One operating system for every moving part.</h2>
        </div>

        <div className="feature-grid">
          {capabilities.map((item) => (
            <article key={item.title} className="info-card feature-card">
              <div className="mini-icon" aria-hidden="true">✦</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-panel">
        <div className="story-copy">
          <span className="eyebrow dark">Operational clarity</span>
          <h2>Bring shipment health, inventory flows, and supplier performance into a single view.</h2>
          <p>
            From demand spikes to geopolitical disruption, your team gets proactive insight and guided actions before delays hit margin.
          </p>
        </div>

        <div className="workflow-panel">
          {workflowSteps.map((item) => (
            <div key={item.step} className="workflow-step">
              <span>{item.step}</span>
              <strong>{item.label}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
