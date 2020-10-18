// ReminderPage.test.js
import React from 'react';
import { mount, shallow } from 'enzyme';
import ReminderPage from '../pageComponents/ReminderPage.js';
import RemindersAdd from '../widgetComponents/RemindersAdd';
import renderer from 'react-test-renderer';

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

    //snapshot: 
    // --> this imported utility allows for the testing of the output of the render method. i.e. is what I want rendered, rendered accordindly.
    // --> It reads: expect this object (reminderPage component) to match the snapshot
    it('tests to see if the render method in ReminderPage renders correctly', () => {
        const reminderPage = shallow(<ReminderPage/>);
        expect(reminderPage).toMatchSnapshot();
    })

    //event tests:
    // --> below Eznymes mount and simulate methods are going to be use to: load the reminder page, then see if the submission (Add reminder) button works
    it('test the add ReminderAdd sumbit button works',()=>{
        const reminderAdd = mount(<RemindersAdd/>);
        //we create a variable of the component. Then 'in that page', we find an element 'button', with the id of '#remindersAddSubmitButton'
        //we then simulate a 'click' on the button
        reminderAdd
            .find('button#remindersAddSubmitButton')
            .simulate('click')

        reminderAdd.unmount();
    })
    
});

//It also worth noting that Jest is a node-base TEST RUNNER, while Enzyme is a TEST UTILITY PACKAGE.
//  --> i.e. the methods 'shallow' & 'mount' are Enzyme, the rest (it, describe) are Jest. 