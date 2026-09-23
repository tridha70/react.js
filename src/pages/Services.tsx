import { NavLink, Outlet } from "react-router-dom";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <div className="page services-page">
      <section className="section-block">
        <h2>Signature Wellness Experiences</h2>
        <p>
          Choose a stay, spa ritual, or retreat designed to help you reset, recharge,
          and reconnect with your routine.
        </p>
      </section>

      <div className="services-layout">
        <aside className="service-panel side-nav">
          {services.map((service) => (
            <NavLink
              key={service.id}
              to={service.id}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {service.title}
            </NavLink>
          ))}
        </aside>

        <div className="service-panel">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
