export default function ResumeExperience({data}){
    

    return(
        <div className="ResumeExperience">
            <h3>Education</h3>
            <div className="experience-info">
                <div>
                    <span>{data.startDate} - {data.endDate}</span>
                    <p>{data.location}</p>
                </div>
                <div>
                    <h4>{data.companyName}</h4>
                    <p>{data.positionTitle}</p>
                    <p>{data.description}</p>
                </div>
                
            </div>
        </div>
    )
}