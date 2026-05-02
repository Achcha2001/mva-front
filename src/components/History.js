import './History.css';  // Import the CSS file for styling
import React, { useState, useEffect } from 'react';
import TournamentGraph from './graphs';  // Import the graph component

function History() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for the slideshow
  const images = [
    '/images/mvanew1.png',
    '/images/mvanew2.png',
    '/images/mvanew4.png'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
      {/* Slideshow Section */}
      <section className="history-image-section">
        <div
          className="history-overlay"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <h1>Our History</h1>
        </div>
      </section>

      {/* History Text Section */}
      <section className="history-text-section">
        <div className="container">
          <h2>Glimpse Of Our History <img className='ball' src='/images/balll.png' alt="volleyball" /></h2>
          <p>
            The Mercantile Volleyball Association (MVA) was established as an 
            affiliated body of the Sri Lanka Volleyball Federation with the 
            desire to promote the game in Sri Lanka and to provide a platform 
            for mercantile sector employees to showcase their talent and sporting
            abilities. The MVA was resuscitated in 2012 under the leadership of
            Mr. Rohan Somawansa, with the aim of providing an opportunity for the 
            youth in the mercantile sector to engage in extracurricular activities
            and participate in the national game. MVA tournaments were initiated 
            to bring volleyball closer to the hearts of young enthusiasts in the mercantile sector.
          </p>
        </div>
      </section>

      {/* Charter Year 2012-2013 Section */}
      <section className="charter-year-section">
        <div className="container">
          <h2>Charter Year (2012 - 2013)</h2>
          <div className="charter-details">
            <h3>2012</h3>
            <table>
              <thead>
                <tr>
                  <th>Male</th>
                  <th>Female</th>
                  <th>Registered Companies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>40 Teams</td>
                  <td>20 Teams</td>
                  <td>54 companies</td>
                </tr>
              </tbody>
            </table>

            <h3>2013</h3>
            <div className="year-2013">
              <h4>Super League</h4>
              <table>
                <thead>
                  <tr>
                    <th>Male</th>
                    <th>Female</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8 Teams</td>
                    <td>4 Teams</td>
                  </tr>
                </tbody>
              </table>

              <h4>Championship</h4>
              <table>
                <thead>
                  <tr>
                    <th>Male</th>
                    <th>Female</th>
                    <th>Registered Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>46 Teams</td>
                    <td>19 Teams</td>
                    <td>62 companies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-map-section">
        <div className="container">
          <h2>Our Milestones</h2>
          <div className="map-wrapper">
            <ul className="timeline-map">
              <li className="map-point">
                <div className="marker"></div>
                <span className="year">2012</span>
                <p>President Rohan Somawansa started with 40 male and 22 female teams.</p>
              </li>
              <li className="map-point">
                <div className="marker"></div>
                <span className="year">2013</span>
                <p>Number of teams increased to 48 male and 25 female teams.</p>
              </li>
              <li className="map-point">
                <div className="marker"></div>
                <span className="year">2014</span>
                <p>Further growth with 55 male and 26 female teams participating.</p>
              </li>
              <li className="map-point">
                <div className="marker"></div>
                <span className="year">2015</span>
                <p>Record participation with 64 male and 28 female teams competing.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tournament Graph Section */}
      <section className="tournament-graph-section">
        <div className="container">
          <h2>Our Progress</h2>
          <TournamentGraph /> {/* Display the graph here */}
        </div>
      </section>
    </div>
  );
}

export default History;
