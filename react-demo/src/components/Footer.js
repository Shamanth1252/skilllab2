import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Travel Website &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
