import React, { Component } from 'react';

class RemindersAdd extends Component{
    state = {
        id: null,
        message: null,
        

    }
    handleInput = (e) => {
        //Set state functiom takes 2 parameters
            // What property that needs changing, what value to chand it with
            // Remember, target = the object that fired the event 
            // So, 
                // event, in the input box: that has the id 'NAME' = e.target.id
                // event, in the inout box: what is the value in the box = e.targer.value
            // this.setState({[NAME]:ValueInNameBox)
          
            this.setState({[e.target.id]: e.target.value})
        
    }

    handleSubmit = (e) => {
        //To prevent the page reloading, preventDefault
        e.preventDefault();
        // Below is very important ...
        // Remeber, we've passed the 'addReminderToState' function as a prop
        // Thus allowing us to call the method from this class (addReminders)
        // The method (addReminderToState), asks for a single prop
        // We pass in the 'state', which is the details of the 'champ' that the user ...
        // sumbited in the form
        // Alas, the addReminderToState method IN THE APP.JS gets passed our champ.
        this.props.addReminderToState(this.state)
        // this.props.addChampsToState(this.state)

        //Removing input from textbox after it's been added
        this.setState({message:''})
    }
    render(){
        return(
            <div className='card z-depth-2'>
                <div className='card-content'>
                    <form className="waves-effect waves-light" onSubmit={this.handleSubmit }>
                        <label htmlFor="name">Message</label>
                        {/* 'required' tag put in to ensure the reminder isn't left blank */}
                        <input  required placeholder="Hey! Add a Reminder" value={this.state.message} type="text" id="message" onChange={this.handleInput}/>

                        <button className="waves-effect waves-light btn z-depth-1 pulse #7b1fa2 purple darken-2"> Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}
export default RemindersAdd