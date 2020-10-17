// ReminderPage.test.js
import React from 'react';
import { mount, shallow } from 'enzyme';
import ReminderPage from '../pageComponents/ReminderPage.js'

// describe is used as a 'container' for the tests
//     --> Think of it as a functional component, that exuctes all tests inside it
//     --> It takes 2 parameters, a name, and a function
//     --> Note the unkown function synax (name, unknown function {function contents})
describe ('Test: Initialise Reminder page and mount all React components', () =>{

    // --> Again, note the syntax. name/unknown function/ function contents
    //below is a Unit test (: a test for ONE specific function)
    it('loads the reminder page',() =>{
        shallow(<ReminderPage />);
    });

    //below is an Integration test (: a test for ALL components in the tree of the reminder page (related))
    it('loads all components needed for the reminder page',() => {
        mount(<ReminderPage />);
    });

});

//It also worth noting that Jest is a node-base TEST RUNNER, while Enzyme is a TEST UTILITY PACKAGE.
//  --> i.e. the methods 'shallow' & 'mount' are Enzyme, the rest (it, describe) are Jest. 