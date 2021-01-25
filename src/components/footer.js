import React, { useState } from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ width: "45%" }}>
        <ul style={{ padding: "10px" }} className="footer-ul">
          <li>About Us</li>
          <li>Our Products</li>
          <li>Our Service</li>
          <li>Our Team</li>
          <li>Career</li>
          <li>Legal</li>
        </ul>
      </div>
    </footer>
  );
}
