import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './ExecutiveCommittee.css';  // Import the CSS file for styling

function ExecutiveCommittee() {
  // Data for the Executive Committee members
  const executiveCommittee = [
    { name: 'Saman Weerasuriya', position: 'President', image: '/images/mva-president.jpg' },
    { name: 'Thilak Thilakarathne', position: 'Senior Vice President', image: '/images/mva-svice.jpg' },
    { name: 'Rohana Weerasooriya', position: 'Vice President', image: '/images/mva-vice1.jpg' },
    { name: 'Chethiya Subasinghe', position: 'Vice President', image: '/images/mva-vice2.jpg' },
    { name: 'Darshana Abesinghe', position: 'Vice President', image: '/images/mva-vice3.jpg' },
    { name: 'Prasangi Samarasinghe', position: 'General Secretary', image: '/images/mva-gs.jpg' },
    { name: 'Subakthi Dewage', position: 'Assistant Secretary', image: '/images/mva-as.jpg' },
    { name: 'Nayanthara Guruge', position: 'Assistant Treasurer', image: '/images/mva-at.jpg' },
    { name: 'Jagath Lal Kumarasiri', position: 'Tournament Organizer', image: '/images/mva-to.jpg' },
    { name: 'Hiranya Senanayake', position: 'Exe. Committee Member', image: '/images/mva-ex1.jpg' },
    { name: 'Sampath Jayasinghe', position: 'Exe. Committee Member', image: '/images/mva-ex2.jpg' },
    { name: 'Sudath Nagashena', position: 'Exe. Committee Member', image: '/images/mva-ex4.jpg' },
    { name: 'Deepal Ekanayake', position: 'Exe. Committee Member', image: '/images/mva-ex3.jpg' },
    { name: 'Ruwansiri Mallikaarachchi', position: 'Exe. Committee Member', image: '/images/mva-ex5.jpg' },
    { name: 'Gayan Dhanushka', position: 'Exe. Committee Member', image: '/images/mva-ex6.jpg' },
    
    // Add more members as needed
  ];

  return (
    <Container className="executive-committee-container">
      {/* Carousel Section */}
      <Row>
        <Col>
          <Carousel fade interval={2000} className="carousel-container">
            <Carousel.Item>
              <img
                className="exco"
                src="../images/group pic.jpg"
                alt="Group Picture 1"
              />
              <Carousel.Caption>
                <h3 className="overlay-text1">Welcome to our Power House</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="exco"
                src="../images/group-pic1.jpg"
                alt="Group Picture 2"
              />
              <Carousel.Caption>
                <h3 className="overlay-text">Welcome to our Power House</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* President's Speech Section */}
      <div className='prs'>
      <Row className="mt-5">
        <Col md={4}>
          <img 
            className="press" 
            src="../images/mva-president.jpg" 
            alt="President's Speech Image" 
          />
        </Col>
        <Col md={8} className="speech-content">
          <h2>Message From The President Of MVA</h2>
          <p>
            It gives me great pleasure to pen this message to the souvenir published to mark the 
            Mercantile Volleyball Tournament – 2024.<br/><br/>
            Looking back at the journey we have come so far, as a pioneering member I am indeed proud of 
            the progress we have made as an Association and above that I am deeply humbled by the contribution 
            that we as the Mercantile Volleyball Association could contribute towards the development and 
            popularising of the national game in the mercantile sector. We see more and more teams participating 
            each year and the enthusiasm and zeal of the players are indeed encouraging.<br/><br/>
            We as an Association have been active for over a decade now and despite the temporary impact due to 
            the COVID pandemic, we have been organising the Mercantile Volleyball Tournament continuously, 
            providing a platform for players to continue their passion.<br/><br/>
            A special mention should be made of our generous sponsors, many of whom have been with us for a number 
            of years, for their generosity and goodwill, which has been a pillar of strength behind the MVA.<br/><br/>
            A healthy body and a healthy mind make a complete person and a healthy workforce is an asset to any 
            organisation. Thus, I invite more organisations to engage their associates in sports, and for the 
            companies that have been with us throughout these years, I encourage them to keep up that commitment 
            and interest.<br/><br/>
            I take this opportunity to appreciate all participating teams for their dedication and good sportsmanship 
            and wish the best of luck for the finalist teams.
          </p>
          <span>Saman Weerasuriya<br></br>President of MVA</span>
        </Col>
      </Row>
      </div>

      {/* General Secretary's Speech Section */}
      <div className='scr'>
      <Row className="mt-5">
        <Col md={4}>
          <img 
            className="press" 
            src="../images/mva-gs.jpg" 
            alt="General Secretary's Speech Image" 
          />
        </Col>
        <Col md={8} className="speech-content">
          <h2>Message From The General Secretary Of MVA</h2>
          <p>
            As the General Secretary of the Mercantile Volleyball Association, it is with immense pride and joy 
            that I extend my warmest greetings through this souvenir, celebrating the Mercantile Volleyball 
            Tournament 2024.<br/><br/>
            This tournament stands as our most significant annual event, and it is a true reflection of the 
            passion and dedication that define our vibrant community. Each year, we come together to witness 
            outstanding displays of talent, sportsmanship, and competitive spirit, and 2024 has been no exception. 
            This year’s tournament has surpassed expectations, bringing together teams and supporters from across 
            the region in a celebration of volleyball excellence.<br/><br/>
            The success of this event is a testament to the hard work and commitment of countless individuals. 
            From our dedicated organizing committee and enthusiastic volunteers to our sponsors and partners, 
            each contribution has been integral in making this tournament a resounding success. Your support and 
            dedication help us elevate the sport of volleyball and foster a spirit of unity and camaraderie.<br/><br/>
            As we reflect on the thrilling matches and memorable moments of this tournament, let us also look ahead 
            with anticipation to future events and opportunities. Together, we will continue to champion the sport, 
            inspire new talent, and celebrate the enduring values of teamwork and perseverance.<br/><br/>
            Thank you for your unwavering support and for being an essential part of the Mercantile Volleyball 
            Tournament 2024. Here's to many more years of exceptional volleyball and shared triumphs.<br/><br/>
            Good Luck for all the teams!
          </p>
          <span>Prasangi Samarasinghe <br></br> General Secretary of MVA</span>
        </Col>
      </Row>
      </div>
      {/* Executive Committee Section */}
      <div className='ex'>
      <Row className="mt-5">
        <h2 className="text-center mb-4">Executive Committee 2024</h2>
        {executiveCommittee.map((member, index) => (
          <Col md={3} key={index} className="text-center mb-4">
            <img 
              src={member.image} 
              alt={member.name} 
              className="committee-member-image img-fluid mb-3" 
            />
            <h5>{member.name}</h5>
            <p>{member.position}</p>
          </Col>
        ))}
      </Row>
      </div>
    </Container>
  );
}

export default ExecutiveCommittee;
