import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantList from './components/RestaurantList'
import RestaurantUpdate from './components/RestaurantUpdate'
import {Navbar, Nav} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Foodbox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
      <Route path="/add">
         <RestaurantCreate />
      </Route>
      <Route path="/list">
        <RestaurantList />
      </Route>
      <Route path="/update/:id"
      render={props=>(
        <RestaurantUpdate {...props}/>
      )}>
        
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      </Router>
    </div>
  );
}

export default App;
