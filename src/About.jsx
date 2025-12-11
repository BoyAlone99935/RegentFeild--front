import React from 'react';


const About = () => {
  return (
    <div className="about-card">
      <div className="about-header">
        <h2>About RegentFeild</h2>
        <span className="version">v1.0.0</span>
      </div>

      <p>
        RegentFeild is a secure and modern financial platform empowering users to manage investments, 
        monitor portfolio growth, and make informed trading decisions. Built for both beginners and 
        professional traders, our platform combines real-time market data with intuitive dashboards.
      </p>

      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          To simplify investing and make financial growth accessible, reliable, and transparent for everyone.
        </p>
      </div>

      <div className="about-section">
        <h3>Contact</h3>
        <p>Email: support@regentfeild.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      <div className="about-section">
        <h3>Security</h3>
        <p>
          We prioritize your security. All transactions are encrypted, and user data is protected 
          with industry-standard protocols.
        </p>
      </div>
    </div>
  );
};

export default About;
