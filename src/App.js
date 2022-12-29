
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Col,  Row } from 'react-bootstrap';
import './Style.css'


import Lefts from './Components/Lefts';
import Routingss from './Components/Routingss';


function App() {
  return (
    <div className="App">
       
          
      <Row>
        <Col><Header/></Col>
       
      </Row>
      <Row >
        <Col sm={4}><Lefts/></Col>
        <Col sm={8}><Routingss/></Col>
      
      </Row>
      <Row>
        <Col><Footer/></Col>
       
      </Row>
    
    </div>
  );
}

export default App;
