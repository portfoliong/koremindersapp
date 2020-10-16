import React from 'react';
import imageThree from '../images/finishedRemindersChecklistImage.jpg';


const  FinishedReminders = ({removeFinishedReminder,finishedReminders}) => {
    

    //Completed Reminders
    const completedRemindersList = finishedReminders.length ? (
        finishedReminders.map(finishedReminders => {
            return (
                //react expects a unique key, for every surrounding element (i.e. the div that encloses the message). For purposes of keeping track (updating/deleteing)
               <div className="collection-item section" key={finishedReminders.id}>
                    <span className="message"> {finishedReminders.message} </span>
                    
                         
                   
                     
               </div>
            )
        })
    ):(
        <p> You've removed all of your completed reminders, Good job!</p>
    )

   
    return (
       
       
       
       <div className='card'>
       <div className="card-image">
           <img src={imageThree}/>
           <span className='finishedRemindersList card-title'>Finished Reminders</span>
       </div>
       
                   
           <div className='card-content'>
            <div>
                    {completedRemindersList}
            </div>
            <div>
                    <button className="waves-effect #0d47a1 blue darken-4 btn" onClick={() => removeFinishedReminder()}> Remove Completed Reminders</button>  
            </div>
           </div>
  
   </div>
        
    )
}
                

export default FinishedReminders;                        
              
                      
                        


