import PersonalDetailsBox from "./PersonalDetailsBox"
import EducationDetailsBox from "./EducationDetailsBox"
import ExperienceDetailsBox from "./ExperienceDetailsBox"
export default function Forms({data, handleChange}){
    return (
        <div>
            // personal details box
            <PersonalDetailsBox data={data} handleChange={handleChange}/>
            //education details box
            <EducationDetailsBox/>
            //experiecne details box
            <ExperienceDetailsBox/>
        </div>
    )
}