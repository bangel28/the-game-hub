import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';
import backgroundImage from './images/imgg.jpeg';

function Home() {
    return(     
    <div className='my-home' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="cont-articles">

      <h1>Your ultimate entertainment awaits</h1> 

      <div className="contain-articles">

      <Card className="cont-trending">
        <div>
          <Card.Img src={require("./images/eafc.jpeg")} className="imag"/>
        </div>
        <div className="text-trend">
          <Card.Body className='cont-body'>
            <Card.Text className='cont-text'>
              PRE-ORDER NOW !
            </Card.Text>
          </Card.Body>
        </div>
      </Card>

      <Card className="cont-trending2">
        <div>
          <Card.Img src={require("./images/spidey.jpeg")} className="imag"/>
        </div>
        <div className="text-trend">
          <Card.Body className='cont-body'>
            <Card.Text className='cont-text'>
             PRE-ORDER NOW !
            </Card.Text>
          </Card.Body>
        </div>
      </Card>

      </div>
      <Button href='/Product' variant="outline-light" size="lg">EXPLORE</Button>

      </div>
    </div>
    );

}
export default Home;