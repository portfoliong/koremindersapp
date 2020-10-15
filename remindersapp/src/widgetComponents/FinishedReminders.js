import React from 'react';


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
            <div className='createdRemindersList z-depth-2 card-title'>
                        
                <div className='card-content'>
                    <div>
                        {completedRemindersList}
                    </div>
                    <div>
                        <button className="waves-effect #ef5350 red lighten-1 btn" onClick={() => removeFinishedReminder()}> Remove Completed Reminders</button>  
                    </div>

                </div>
                      
                        
            </div>
        </div>
       

        
    )
}



export default FinishedReminders;