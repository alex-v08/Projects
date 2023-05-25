
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {
  return (
<div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );

}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default App;
