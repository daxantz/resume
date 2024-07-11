import PersonalDetailsHeader from "./PersonalDetailsHeader"
import '../componentStyles/Resume.css'
import ResumeEducation from "./ResumeEducation"
import ResumeExperience from "./ResumeExperience"
export default function Resume({data}){

    return(
        <div className="Resume">
            //resume header: personal details info
            <PersonalDetailsHeader data={data.personalDetails}/>

            //resume body education info and experience info
            <ResumeEducation data={data.educationDetails}/>
            <ResumeExperience data={data.experienceDetails}/>
        </div>
    )
}