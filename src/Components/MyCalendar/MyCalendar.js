import React, { Component } from "react";
import "./MyCalendar.css";
import { Col } from "react-bootstrap";
import Calendar from 'react-calendar';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import "react-big-calendar/lib/css/react-big-calendar.css";


// const localizer = momentLocalizer(moment);
let events = [
  {
    start: '2020-05-21',
    end: '2020-05-21',
    eventClasses: 'optionalEvent',
    title: 'test event111',
    description: 'This is a test description of an event',
    allDay: true,
    color: 'red'
  },
  {
    start: '2020-05-22',
    end: '2020-05-22',
    eventClasses: 'optionalEvent',
    title: 'test event2222',
    description: 'This is a test description of an event',
    color: 'red'
  },
  {
    start: '2020-05-20',
    end: '2020-05-20',
    title: 'test event33',
    description: 'This is a test description of an event',
    data: 'you can add what ever random data you may want to use later',
    color: 'red'
  },
]

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),

    };
  }
  
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <div className="calendar">
        <Col lg={11} className="calendarCenter">
          <h1>Календар</h1>
          <Calendar
            next2Label={false}
            prev2Label={false}
            showNeighboringMonth={false}
            navigationAriaLabel=""
            calendarType='Hebrew'
            locale='sr'
            defaultDate={new Date()}
            tileContent={({ date, view }) =>  view === 'month' && date.getDate() === 10 ? <p>ace</p> : null}
            tileClassName={({ date, view }) => view === 'month' && date.getDate() === 10 ? 'class1' : null}
            // events={this.state.events}
            
          />
        </Col>

      </div>
    );
  }
}

export default MyCalendar;
