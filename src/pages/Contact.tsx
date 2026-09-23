import { useState } from "react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("Reservations");

  return (
    <div className="page contact-wrap">
      <section className="contact-card">
        <h2>Contact GlowCare</h2>
        <p>
          Connect with our concierge team to arrange wellness retreats, spa packages, and private stays tailored to your needs.
        </p>

        <div className="contact-menu">
          {['Reservations', 'Spa', 'Travel Desk'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "primary-btn" : "secondary-btn"}
            >
              {tab}
            </button>
          ))}
        </div>

        <ul className="contact-details">
          <li><strong>{activeTab}:</strong> concierge@glowcare.com</li>
          <li><strong>Phone:</strong> +1 (800) 555-0188</li>
          <li><strong>Location:</strong> Oceanfront Avenue, Bali</li>
        </ul>
      </section>

      <aside className="booking-summary">
        <h2>Booking Support</h2>
        <p>We respond within 30 minutes during resort hours.</p>
        <p>• Customized spa itineraries</p>
        <p>• Private villa selections</p>
        <p>• Group retreat planning</p>
      </aside>
    </div>
  );
}
