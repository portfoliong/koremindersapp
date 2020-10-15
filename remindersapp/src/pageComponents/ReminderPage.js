import React, { Component } from 'react';
import Reminders from '../widgetComponents/Reminders.js';
import RemindersAdd from '../widgetComponents/RemindersAdd.js';
import FinishedReminders from '../widgetComponents/FinishedReminders.js';

class ReminderPage extends Component{
  state = {
      reminders: [
        {id: 1, message:'Do some more React'},
        {id: 2, message:'Or Javascript'},
        {id: 3, message:'But probably just react'}
      ],
      
      finishedReminders: [
        {id: null , message:null},
      ]
}
  


  // PROPS can be used for more than just data.
  // We can pass the below FUNCTION as a prop.
  // This allows the component that was passed the below function ...
// To have access to it.
addReminderToState = (newReminder) => {
    // We're just gonna add a random ID (uniqueKey) to our champ object so it  can go in our state above
    newReminder.id = Math.random();
    
    //We can't change  the state directly, that's desctructive. 
    //So, instead we're going to use  the spread operator, to create a new array
    //The spread operator takes each element in the array, and allows you to append another element (i.e. our newChamp)
      // Syntax: let newArray = [...this.state.oldArray, newItem]
      // Note: the '...' and the square brackets ([]) are syntax for the SPREAD operator
    let reminders = [...this.state.reminders, newReminder];

    //Then, we equate our new array (champs ... i CHOSE the same name), to  our  state
      //by using the set state  function
      // notice that we don't write  champs = champs, we write champs: champs
    this.setState({
      reminders: reminders
    })



}

removeReminderFromState = (id) => {
  //As we know from the above methoer (addReminderToState), we cannot have any destructive editing of the state
  //So, we have to create a new aray, and setState with that new array. 
  //It reads, create a new array called reminders. take out any reminders in reminders that has a uniqueKey the same as the one passed in via the parameter
  let reminders = this.state.reminders.filter(reminders => {
     return reminders.id !== id
   })

   this.setState({reminders: reminders})

   console.log(reminders)
}

addFinishedReminder = (reminders) =>{
// Follows same explanation as 'addReminderToState'.
// Creating an array that appends the new 'finished reminder'
   let completedReminders = [...this.state.finishedReminders, reminders];

     this.setState({
       finishedReminders: completedReminders
     })

     let thisNewFinishedRemindersMessage = reminders.message;

//Ensuring the finished reminder is removed from reminder.
// Why?: If the finished reminder is removed from the 'active' reminders list,  it cannot be added twice by the  user 
    let updatedReminders = this.state.reminders.filter(reminders => {
      return reminders.message !== thisNewFinishedRemindersMessage
    })

    this.setState({reminders: updatedReminders})
  console.log(this.state.reminders)
  
  
    
}

removeFinishedReminder = () =>{
//Follows same explanation as 'removeReminderFromState'.
 let completedReminder = '';
 this.setState({finishedReminders: ''})
}

 
  render(){
    return (
            <div className="App row center">
                <div className="col s12 m4 l2"><h5>Add a Reminder</h5>
                    <RemindersAdd  addReminderToState={this.addReminderToState}/>
                </div>

                <div className="col s12 m4 l8"><h5>Reminders</h5>
                    <Reminders  reminders={this.state.reminders} removeReminder={this.removeReminderFromState}  addFinishedReminder={this.addFinishedReminder}/>
                </div>
                
                <div className="col s12 m4 l2"><h5>Complete Reminders</h5>
                    <FinishedReminders  removeFinishedReminder={this.removeFinishedReminder} finishedReminders={this.state.finishedReminders}/>
                </div>
            </div>
              
    )    
    
    }
}
export default ReminderPage;
