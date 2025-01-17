export default function ResumeExperienceItem({item}){
    return(
        
            
            <div className="item Resume-Experience-Item">
                <div>
                    
                    <span>{item.startDate} - {item.endDate} </span>
                    <span>{item.location}</span>
                </div>
                <div>
                    <span>{item.company}</span>
                    <span>{item.position}</span>
                    <p>{item.description}</p>
                </div>
                
            </div>
        
    )
}