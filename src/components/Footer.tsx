import  { useState } from "react";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  return (
    <footer style={footerStyle}>
      {/* Newsletter Section */}
      <div className="newsletter" style={newsletterStyle}>
        <p style={{ marginBottom: "10px" }}>
          <strong>Sign up for our newsletter</strong>
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={emailInputStyle}
          />
          <button type="submit" style={subscribeButtonStyle}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Social Media Section */}
      <div style={socialIconsStyle}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconLinkStyle,
            color: hoveredIcon === "facebook" ? "#1877F2" : "black",
          }}
          onMouseEnter={() => handleMouseEnter("facebook")}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconLinkStyle,
            color: hoveredIcon === "twitter" ? "#1DA1F2" : "black",
          }}
          onMouseEnter={() => handleMouseEnter("twitter")}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconLinkStyle,
            color: hoveredIcon === "instagram" ? "red" : "#E1306C",
          }}
          onMouseEnter={() => handleMouseEnter("instagram")}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconLinkStyle,
            color: hoveredIcon === "linkedin" ? "blueviolet" : "black",
          }}
          onMouseEnter={() => handleMouseEnter("linkedin")}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Copyright Section */}
      <p style={copyrightStyle}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

// Styling for the footer
const footerStyle = {
  backgroundColor: "pink", 
  color: "black",
  padding: "30px 20px",
  textAlign: "center",
  marginTop: "20px",
};

const newsletterStyle = {
  marginBottom: "20px",
};

const emailInputStyle = {
  padding: "10px",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "300px",
};

const subscribeButtonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 15px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const socialIconsStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "20px",
};

const iconLinkStyle = {
  fontSize: "1.5rem",
  transition: "color 0.3s ease-in-out", // Smooth color transition
  textDecoration: "none",
};

const copyrightStyle = {
  marginTop: "10px",
  fontSize: "0.9rem",
  color: "#6c757d", // Muted text color
};

export default Footer;
