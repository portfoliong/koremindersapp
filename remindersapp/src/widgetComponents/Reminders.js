import React from 'react';
import imageTwo from '../images/activeRemindersChecklistImage.jpg';
const  Reminders = ({reminders,removeReminder,addFinishedReminder}) => {
    
    
    //Active Reminders
    //Ternary operator: If there is greater than 1 reminder, add them, if not, no reminders
    const createdRemindersList = reminders.length ? (
        reminders.map(reminders => {
          
             return (
                    //react expects a unique key, for every surrounding element (i.e. the div that encloses the message). For purposes of keeping track (updating/deleteing)
                    <div className="collection-item  section display grid" key={reminders.id}>
                        <div className="message section"> 
                            {reminders.message} 
                        </div>
                                
                        <span>
                            <button className="waves-effect waves-light btn " onClick={() => removeReminder(reminders.id)}> Delete Reminder</button>  
                            <button className="waves-effect waves-light btn" onClick={() => addFinishedReminder(reminders)}> Complete Reminder</button>  
                        </span>
                     </div>           
                  )
           
            }
            
        )
    ):(
        <p> You've set no new reminders: you must be on top of the world, Good Job! </p>
    )
    
   
    return (
    
    <div className='card'>
        <div className="card-image">
            <img src={imageTwo}/>
            <span className='createdRemindersList card-title'>Active Reminders</span>
        </div>
        
                    
            <div className='card-content'>
                <div>
                    {createdRemindersList}
                </div>
            </div>
   
    </div>
        
    )
}                




export default Reminders;