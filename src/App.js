import { Navbar,Nav,Container } from 'react-bootstrap';

import './App.css';
import { dataVid } from './components/Data';
import Videos from "./components/Videos";

function App() {
  console.log("starting app.js")
  return (
   <div>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    <Videos dataVid={dataVid} name="hello world" />
   </div>
  );
}

export default App;
