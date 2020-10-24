import React from 'react';
import imageHome from '../images/imageHome.jpg'; 

import reactImage from '../images/homePageLogoReactJS.png';
import javascriptImage from '../images/homePageLogoJavaScript.png';
import HTMLImage from '../images/homePageLogoHTML.png';
import CSSImage from '../images/homePageLogoCSS.png';
import JestImage from '../images/homePageLogoJest.png';
import EnzymeImage from '../images/homePageLogoEnzyme.png';

import GithubImage from '../images/homePageLogoGithub.png';
import NPMImage from '../images/homePageLogoNPM.png';
import VSImage from '../images/homePageLogoVS.png';

const  HomePage = () => {
    
    return (
           <div className='row'> 
           <div className='col s12 m4 l4'>{/*placeholder*/}</div>

                  <div className='card col s12 m4 l4 center'>
                      <div className="card-image center">
                          <img src={imageHome}/>
                          <span className='card-title center'> Welcome </span>
                      </div>

                                  
                          <div className='card-content '>
                              <div className='z-depth-1'>
                                <p1> ... to Ko's Reminders App, I hope you enjoy your stay!</p1>
                                <p1> You may want to know what technologies have been utilised to create this application, so heres a list;</p1>
                              </div>

                              <h6> Development Tools</h6>
                              <div>
                                  <ul className="collection">
                                            {/*Development Tools*/}
                                            <li class="collection-item avatar">
                                              <img src={reactImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> React JS </span>
                                              <p><sub> Framework </sub></p>
                                            </li> 

                                            <li class="collection-item avatar">
                                            <img src={javascriptImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> JavaScript </span>
                                              <p><sub> Functionality </sub></p>
                                            </li> 
                                            
                                            <li class="collection-item avatar">
                                            <img src={HTMLImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> HTML </span>
                                              <p><sub> Structure </sub></p> 
                                            </li> 

                                            <li class="collection-item avatar">
                                              <img src={CSSImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> CSS </span>
                                              <p><sub> Styling </sub></p>
                                            </li> 

                                            <li class="collection-item avatar">
                                              <img src={JestImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> Jest </span>
                                              <p><sub> Testing </sub></p>
                                            </li> 
                                            
                                            <li class="collection-item avatar">
                                              <img src={EnzymeImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> Enzyme </span>
                                              <p><sub> Testing </sub></p>
                                            </li>
                                        </ul>
                              </div>

                              <h6> Supporting Tools</h6>
                              <div>
                                  <ul className="collection">
                                            {/*Supporting Tools*/}
                                            <li class="collection-item avatar">
                                              <img src={GithubImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> Github </span>
                                              <p><sub> Repository </sub></p>
                                            </li> 

                                            <li class="collection-item avatar">
                                            <img src={NPMImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> NPM </span>
                                              <p><sub> Package Manager </sub></p>
                                            </li> 
                                            
                                            <li class="collection-item avatar">
                                            <img src={VSImage} alt="ReactLogo" class="circle"/>
                                              <span class="title"> Microsoft Visual Studio </span>
                                              <p><sub> Integrated Development Environment </sub></p> 
                                            </li> 

                                        </ul>
                              </div>
                          </div>
                  </div>
  
                  <div className='col s12 m4 l4'>{/*placeholder*/}</div>
           </div>      
    )
}             
export default HomePage;    
                                                                

                             
                                
                               

                                  
                                  

                            






        
