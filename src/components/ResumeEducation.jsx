export default function ResumeEducation({data}){




    return(

        <div>
            <h3>Education</h3>
            <div className="education-info">
                <div>
                    <span>{data.startDate} - {data.endDate}</span>
                    <p>{data.location}</p>
                </div>
                <div>
                    <h4>{data.school}</h4>
                    <p>{data.degree}</p>
                </div>
                
            </div>
        </div>
    )
}