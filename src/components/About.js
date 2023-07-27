import './About.css';

function About() {

  return (
    <div id="#about-us" className="about-cont" aria-label="About Us">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about">
          <h3>Welcome to The GameHub, your ultimate destination for all things gaming!</h3>
          <p></p>
          <p>
          Founded in 2001, our site was born out of love for the fascinating world of video games and the desire to share this passion with everybody.   
          Here, we are passionate about video games and we strongly believe in their ability to entertain, inspire and connect gamers around the world.  
          At The GameHub we are driven by the mission of providing our customers with an exceptional gaming experience. 
          Our dedicated team works tirelessly to bring you a catalog of carefully selected games.</p>
          <p>We would like to express our gratitude to our customers who make this adventure an extraordinary reality. 
          Your support and passion for video games inspires us every day to move forward and provide the best possible service.</p>
          <p>Thank you for joining us on this incredible adventure.</p> 
          <p>At TheGameHub, the game has only just begun!</p>
        </div>
      </div>
      <div className='contact'>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i> Email : contact@thegamehub.com
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone : +1 (123) 000-0000
          </p>
        </div>
      </div>

    </div>
  );
    
}

export default About;