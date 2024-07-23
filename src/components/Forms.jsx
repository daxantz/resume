import PersonalDetailsBox from "./PersonalDetailsBox"
import EducationDetailsBox from "./EducationDetailsBox"
import ExperienceDetailsBox from "./ExperienceDetailsBox"
export default function Forms({data, handleChange, setFormValues, educationData, setEducationData,experienceData, setExperienceData}){
    return (
        <div className="Forms">
            
            <PersonalDetailsBox data={data} handleChange={handleChange}/>
            
            <EducationDetailsBox formData={data} handleChange={handleChange} setFormValues={setFormValues} educationData={educationData} setEducationData={setEducationData}/>
            
            <ExperienceDetailsBox formData={data} handleChange={handleChange} setFormValues={setFormValues} experienceData={experienceData} setExperienceData={setExperienceData}/>
        </div>
    )
}