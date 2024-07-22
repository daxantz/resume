import ResumeEducationItem from "./ResumeEducationItem"
import ResumeExperienceItem from "./ResumeExperienceItem"
import ResumeExperienceBox from "./ResumeExperienceItem"
export default function ResumeBody({data, educationData, experienceData}){
    return(
        <div>
            {/* resume education box */}
            <h3>Education</h3>
            {educationData.map((item) =>(
                <ResumeEducationItem key={item.id} item={item}/>
            ))}
            {/* <ResumeEducationItem educationData={educationData}/> */}
            {/* pro experience box */}
            <h3>Experience</h3>
            {experienceData.map((item) =>(
                <ResumeExperienceItem key={item.id} item={item}/>
            ))}
            {/* <ResumeExperienceBox/> */}
        </div>
    )
}