export default function ResumeEducationItem({item}){
    return(
        <div>
            
            <div className="item Resume-Education-Item">
                <div>
                    <span>{item.startDate} - {item.endDate}</span>
                    <span>{item.location}</span>
                </div>
                <div>
                    <span>{item.school}</span>
                    <span>{item.degree}</span>
                </div>
                
            </div>
        </div>
    )
}