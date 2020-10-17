// CalendarPage.test.js
import React from 'react';
import { mount, shallow } from 'enzyme';
import CalendarPage from '../pageComponents/CalendarPage.js'

describe ('Test: Initialise Calendar page and mount all React components', () =>{
    
    it('loads the CalendarPage ',() =>{
        shallow(<CalendarPage />);
    });

 
    it('loads all components needed for the Calendar page',() => {
        mount(<CalendarPage />);
    });

});



