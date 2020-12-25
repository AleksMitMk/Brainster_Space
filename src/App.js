import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
        <HashRouter>
          <NavbarBr />
          <Switch>
            <Route exact path="https://aleksmitmk.github.io/Brainster_Space/" component={HomePage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="https://aleksmitmk.github.io/Brainster_Space/EventSpace" component={EventsSpace}/>
            <Route path="https://aleksmitmk.github.io/Brainster_Space/Academies" component={Academies}/>
            <Route path="https://aleksmitmk.github.io/Brainster_Space/Nastani" component={MyCalendar} />
            <Route path="https://aleksmitmk.github.io/Brainster_Space/SpaceBLog/:category" component={SpaceBlog} />
          </Switch>
          <FooterBr/>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
