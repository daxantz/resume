import PersonalDetailsBox from "./PersonalDetailsBox"
import EducationDetailsBox from "./EducationDetailsBox"
import ExperienceDetailsBox from "./ExperienceDetailsBox"
export default function Forms({data, handleChange, setFormValues, educationData, setEducationData,experienceData, setExperienceData}){
    return (
        <div>
            // personal details box
            <PersonalDetailsBox data={data} handleChange={handleChange}/>
            //education details box
            <EducationDetailsBox formData={data} handleChange={handleChange} setFormValues={setFormValues} educationData={educationData} setEducationData={setEducationData}/>
            //experiecne details box
            <ExperienceDetailsBox formData={data} handleChange={handleChange} setFormValues={setFormValues} experienceData={experienceData} setExperienceData={setExperienceData}/>
        </div>
    )
}