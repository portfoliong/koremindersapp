// HomePage.test.js
import React from 'react';
import { mount, shallow } from 'enzyme';
import HomePage from '../pageComponents/HomePage.js'

describe ('Test: Initialise HomePage and mount all React components', () =>{
    
    it('loads all components needed for the HomePage',() => {
        mount(<HomePage />);
    });

    it('loads the HomePage ',() =>{
        shallow(<HomePage />);
    });


});


 
  

