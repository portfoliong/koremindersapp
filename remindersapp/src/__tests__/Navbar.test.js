// Navbar.test.js
import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar from '../pageComponents/Navbar.js';


describe ('Test: Initialise Navbar and mount all React components (if needed)', () =>{
    
    it('loads the Navbar ',() =>{
        shallow(<Navbar />);
    });

    //The 'mount' method cannot be used on the 'Navbar' component, as the 'link' components within the Navbar.js cannot be used outside of the 'router'

 
});


