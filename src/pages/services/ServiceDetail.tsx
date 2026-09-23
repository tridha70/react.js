import { useParams } from "react-router-dom";
import { services } from "../../data/siteData";
import BookingForm from "../../components/BookingForm";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((item) => item.id === slug) ?? services[0];

  return (
    <div className="page">
      <section className="service-detail">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <ul>
          {service.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="hero-actions">
          <span className="primary-btn">{service.price}</span>
          <span className="secondary-btn">{service.duration}</span>
        </div>
      </section>

      <section className="booking-form-wrap">
        <BookingForm />
      </section>
    </div>
  );
}
