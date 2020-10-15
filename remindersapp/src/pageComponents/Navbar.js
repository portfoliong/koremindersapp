import React from 'react';
import {Link, Navlink, withRouter} from 'react-router-dom';


const Navbar = () =>{
    return(
        <nav className="nav-extended #ff1744 red accent-3 z-depth-2">
            <div className="nav-wrapper">
          
            <a className="brand-logo left">Ko's Reminder App</a>
            <div className="nav-content right">
                <ul className="tabs tabs-transparent">
                    <li className="tab"><Link to="/">Home</Link></li>
                    <li className="tab"><Link to="/calendarPage">Calendar</Link></li>
                    <li className="tab"><Link to="/reminderPage">Reminders</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

//wrapping the navBar in the  higher order component, to give it the same 'powers'(props and methods) as the 
export default withRouter(Navbar);