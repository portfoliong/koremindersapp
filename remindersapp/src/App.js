import React, { Component } from 'react';
import Navbar from './pageComponents/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './pageComponents/HomePage'
import CalendarPage from './pageComponents/CalendarPage'
import ReminderPage from './pageComponents/ReminderPage'


class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          {/* Route Here. 'exact' = cannot include any others, thus we only show the homepage on 'websiteName/'*/}
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/CalendarPage' component={CalendarPage}></Route>
          <Route path='/ReminderPage' component={ReminderPage}></Route>
        </div>
      </BrowserRouter>
     
    )
  }
}
  
export default App;
