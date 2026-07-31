import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

function Home() {
  // State to manage showing more images
  const [showMore, setShowMore] = useState(false);

  // Toggle function to show or hide extra images
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Carousel for slideshow */}
      <Carousel fade interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/wm5.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Mercantile Volleyball Association</h3>
            <p>Your one-stop destination for volleyball news and events.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/wm3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Upcoming Tournaments</h3>
            <p>Stay tuned for upcoming volleyball tournaments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/wm1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Team Standings</h3>
            <p>Check out the latest standings of your favorite teams.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Announcement Banner */}
<div className="circular-banner">
  <h2>📢 MVA Tournament 2026 has begun</h2>

  <p className='tt'>
   It is with great pleasure that we would like to announce to you that the preliminary matches of the Mercantile Volleyball Tournament 2026 <br></br>will be happening on the 1st & 2nd of August <br></br> At <b>Nattandiya Dhammissara College Premises.</b>
  </p>

  {/* <p className='tt' style={{ marginTop: '10px', fontWeight: '500' }}>
    <strong>Deadline:</strong> Friday, 31st of July 2026
  </p> */}

  <a href="/circulars" className="circular-banner-btn">
    View Circulars & Regulations
  </a>
</div>

      {/* Our Sponsors Section */}
      <div className="sponsors-section">
        <div className="sponsors-container">
          <div className="sponsor-category">
            <h3>Platinum Sponsor</h3>
            <div className="sponsor-logos">
              <img src="/images/avant-logo.png" alt="Platinum Sponsor" />
              <img src="/images/maliban.png" alt="Platinum Sponsor" />
            </div>
          </div>
          <div className="sponsor-category">
            <h3>Gold Sponsor</h3>
            <div className="sponsor-logos">
              <img src="/images/link-new.png" alt="Gold Sponsor" />
              <img src="/images/slt-new.png" alt="Gold Sponsor" />
              <img src="/images/omega-new.png" alt="Gold Sponsor" />
            </div>
          </div>
          {/* <div className="sponsor-category">
            <h3>Silver Sponsor</h3>
            <div className="sponsor-logos">
              <img href="/images/lanka-tiles.jpg" alt="Silver Sponsor" />
              <img src="/images/Aburnet.jpg" alt="Silver Sponsor" />
              <img src="/images/best-pacific.jpeg" alt="Silver Sponsor" />
              <img src="/images/davidp.png" alt="Silver Sponsor" />
            </div>
          </div> */}
          <div className="sponsor-category">
            <h3>Bronze Sponsor</h3>
            <div className="sponsor-logos">
              {/* <img src="/images/omegaline.jpg" alt="Bronze Sponsor" />
              <img src="/images/slt.png" alt="Bronze Sponsor" />
              <img src="/images/brandix.png" alt="Bronze Sponsor" /> */}
              <img src="/images/lanka-tiles-new.jpg" alt="Bronze Sponsor" />
              <img src="/images/cdb.jpg" alt="Bronze Sponsor" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <h2>Highlights</h2>
        <p>Relive the best moments from our tournaments and events.</p>

        {/* Collage Section */}
        <div className="collage-container">
          {/* First 6 images */}
          <img src="/images/wm6.jpg" alt="Highlight 1" className="collage-item collage-item-large" />
          <img src="/images/wm7.jpg" alt="Highlight 2" className="collage-item collage-item-medium" />
          <img src="/images/wm9.jpg" alt="Highlight 3" className="collage-item collage-item-small" />
          <img src="/images/wm2.jpg" alt="Highlight 4" className="collage-item collage-item-medium" />
          <img src="/images/h6.jpg" alt="Highlight 6" className="collage-item collage-item-small" />
         

          {/* Conditionally show additional images */}
          {showMore && (
            <>
             <img src="/images/h9.jpg" alt="Highlight 6" className="collage-item collage-item-small" />
              <img src="/images/h7.jpg" alt="Highlight 7" className="collage-item collage-item-medium" />
              <img src="/images/h8.jpg" alt="Highlight 8" className="collage-item collage-item-medium" />
              <img src="/images/h5.jpg" alt="Highlight 9" className="collage-item collage-item-large" />
              <img src="/images/h10.jpg" alt="Highlight 10" className="collage-item collage-item-small" />
              <img src="/images/h11.jpg" alt="Highlight 11" className="collage-item collage-item-medium" />
              <img src="/images/h12.jpg" alt="Highlight 12" className="collage-item collage-item-medium" />
              <img src="/images/h13.jpg" alt="Highlight 13" className="collage-item collage-item-small" />
            </>
          )}
        </div>

        {/* View More Button */}
        <a onClick={handleShowMore} className="view-more-btn">
          {showMore ? 'View Less Highlights' : 'View More Highlights'}
        </a>
      </div>
    </div>
  );
}

export default Home;