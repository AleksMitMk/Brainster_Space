import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage/HomePage';
import { Container } from 'react-bootstrap';
import NavbarBr from './Components/Navbar/NavbarBr';
import FooterBr from './Components/Footer/FooterBr';
import EventsSpace from './Components/EventsSpace/EventsSpace';
import Academies from './Components/Academies/Academies';
import MyCalendar from './Components/MyCalendar/MyCalendar';
import SpaceBlog from './Components/SpaceBlog/SpaceBlog';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
          <NavbarBr />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/EventSpace" component={EventsSpace}/>
            <Route path="/Academies" component={Academies}/>
            <Route path="/Nastani" component={MyCalendar} />
            <Route path="/SpaceBLog/:category" component={SpaceBlog} />
          </Switch>
          <FooterBr/>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
