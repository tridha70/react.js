import { services, testimonials } from "../data/siteData";

export default function About() {
  return (
    <div className="page about-page">
      <section className="about-section">
        <h2>About GlowCare</h2>
        <p>
          GlowCare is a luxury wellness resort designed for guests who want purposeful calm, tailored experiences, and memorable stays in beautifully restored surroundings.
        </p>

        <div className="about-points">
          <div className="stat-card">
            <strong>12+</strong>
            <p>Years of guest-first hospitality and wellness excellence.</p>
          </div>
          <div className="stat-card">
            <strong>26</strong>
            <p>Wellness treatment rooms across our signature spa and retreat spaces.</p>
          </div>
          <div className="stat-card">
            <strong>4.9/5</strong>
            <p>Guest satisfaction score based on recent stays and wellness journeys.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3>Guest Testimonials</h3>
        <div className="cards-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="info-card">
              <h4>{item.name}</h4>
              <p>“{item.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h3>What Makes Us Different</h3>
        <div className="cards-grid">
          {services.map((service) => (
            <article key={service.id} className="info-card">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
