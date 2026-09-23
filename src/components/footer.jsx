import "./footer.css";

const footerLinks = {
  Company: ["About", "Careers", "Partners"],
  Solutions: ["Demand planning", "Logistics", "Supplier risk"],
  Resources: ["Blog", "Case studies", "Documentation"],
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>NaturaFlow</h3>
          <p>
            AI-powered supply orchestration for resilient, sustainable, and high-performing operations.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer-group">
            <h4>{heading}</h4>
            <div className="footer-links">
              {links.map((link) => (
                <a key={link} href="#" aria-label={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 NaturaFlow</span>
        <span className="footer-meta">Built for modern supply networks</span>
      </div>
    </footer>
  );
}
