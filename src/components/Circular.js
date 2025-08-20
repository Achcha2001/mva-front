import React, { useState } from 'react';
import './Circular.css';
import welcomeImage from './images/h2.jpg';
import { FaFilePdf, FaEye } from 'react-icons/fa';

const circulars = [
  {
    title: "Member Registration Form",
    filename: "Member Registration Form of Mercantile Volleyball Association of Sri Lanka.pdf",
    category: "Application",
    description: "Register your company as a new member or renew for 2025.",
  },
  {
    title: "Team Application - A Division",
    filename: "MVA Team Application - A-Division.pdf",
    category: "Application",
    description: "Apply under the A Division category for 2025.",
  },
  {
    title: "Team Application - Championship",
    filename: "MVA Team Application - Championship.pdf",
    category: "Application",
    description: "For teams participating in the Championship category.",
  },
  {
    title: "Team Application - Masters",
    filename: "MVA Team Application - Masters.pdf",
    category: "Application",
    description: "Players aged 40+ can apply for the Masters category.",
  },
  {
    title: "Team Application - Super League",
    filename: "MVA Team Application - Super League.pdf",
    category: "Application",
    description: "Elite teams apply here. External players allowed.",
  },
  {
    title: "Invitation Letter 2025",
    filename: "Mercantile Volleyball Tournament 2025 Invitation Letter.pdf",
    category: "Invitation",
    description: "Official invitation and details for 2025 tournament.",
  },
  {
    title: "Rules and Regulations for 2025",
    filename: "MVA Rules and Regulations 2025- Amended.pdf",
    category: "Rules",
    description: "All tournament guidelines and eligibility criteria.",
  }
];

function Circulars() {
  const [viewingPdf, setViewingPdf] = useState(null);

  const handleView = (pdfPath) => setViewingPdf(pdfPath);
  const closeModal = () => setViewingPdf(null);

  return (
    <div className="circular-container">
      <div className="circular-hero-section">
        <img src={welcomeImage} alt="Welcome" className="circular-hero-image" />
        <div className="circular-hero-text">
          <h1>Welcome to the MVA Circulars Hub</h1>
          <p>Stay updated with the latest documents, applications, and rules for the Mercantile Volleyball Tournament.</p>
        </div>
      </div>

      <div className="circular-grid">
        {circulars.map((doc, idx) => (
          <div key={idx} className="circular-card">
            <div className="circular-header">
              <FaFilePdf className="circular-pdf-icon" />
              <div className="circular-title-block">
                <h2 className="circular-title">{doc.title}</h2>
                <span className={`circular-badge circular-badge-${doc.category.toLowerCase()}`}>{doc.category}</span>
              </div>
            </div>
            <p className="circular-desc">{doc.description}</p>
            <div className="circular-buttons">
              <button className="circular-view-btn" onClick={() => handleView(`/pdfs/${doc.filename}`)}>
                <FaEye style={{ marginRight: '6px' }} />
                View
              </button>
              <a
                href={`/pdfs/${doc.filename}`}
                download
                className="circular-download-btn"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      {viewingPdf && (
        <div className="circular-modal-overlay" onClick={closeModal}>
          <div className="circular-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="circular-close-btn" onClick={closeModal}>×</button>
            <iframe src={viewingPdf} title="PDF Viewer" frameBorder="0"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Circulars;
