import { useState } from 'react';
import { FaEye, FaFilePdf } from 'react-icons/fa';
import './Circular.css';
import welcomeImage from './images/h2.jpg';

const circulars = [
  {
    title: "Member Registration Form",
    filename: "Member Registration Form of Mercantile Volleyball Association of Sri Lanka.pdf",
    category: "Application",
    description: "Register your company as a new member or renew membership.",
  },
  {
    title: "Team Application - A Division",
    filename: "MVA Team Application - A-Division.pdf",
    category: "Application",
    description: "Apply under the A Division category.",
  },
  {
    title: "Team Application - Championship",
    filename: "MVA Team Application - Championship.pdf",
    category: "Application",
    description: "For teams participating in the Championship category.",
  },
  {
    title: "Team Application - Super League",
    filename: "MVA-Team-Application-Super-League.pdf",
    category: "Application",
    description: "Elite teams can apply under the Super League category.",
  },
  {
    title: "Team Application - Youth",
    filename: "MVA Team Application - Youth.pdf",
    category: "Application",
    description: "Application form for Youth category teams.",
  },
  {
    title: "MVA Tournament Invite",
    filename: "MVA Tournament Invite.pdf",
    category: "Invitation",
    description: "Official invitation and details for the MVA Tournament.",
  }
];

function Circulars() {
  const [viewingPdf, setViewingPdf] = useState(null);

  const getPdfPath = (filename) => `/pdfs/${encodeURIComponent(filename)}`;

  const handleView = (filename) => {
    setViewingPdf(getPdfPath(filename));
  };

  const closeModal = () => setViewingPdf(null);

  return (
    <div className="circular-container">
      <div className="circular-hero-section">
        <img src={welcomeImage} alt="Welcome" className="circular-hero-image" />
        <div className="circular-hero-text">
          <h1>Welcome to the MVA Circulars Hub</h1>
          <p>
            Stay updated with the latest documents, applications, and rules for the Mercantile Volleyball Tournament.
          </p>
        </div>
      </div>

      <div className="circular-grid">
        {circulars.map((doc, idx) => (
          <div key={idx} className="circular-card">
            <div className="circular-header">
              <FaFilePdf className="circular-pdf-icon" />
              <div className="circular-title-block">
                <h2 className="circular-title">{doc.title}</h2>
                <span className={`circular-badge circular-badge-${doc.category.toLowerCase()}`}>
                  {doc.category}
                </span>
              </div>
            </div>

            <p className="circular-desc">{doc.description}</p>

            <div className="circular-buttons">
              <button
                className="circular-view-btn"
                onClick={() => handleView(doc.filename)}
              >
                <FaEye style={{ marginRight: '6px' }} />
                View
              </button>

              <a
                href={getPdfPath(doc.filename)}
                download={doc.filename}
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