import ResumeHead from "./ResumeHEAD";
import ResumeBody from "./ResumeBody";
export default function ResumeBox({data, educationData, experienceData}){
    
    return(
        <div className="ResumeBox">
            {/* resume header */}
            <ResumeHead data={data.personalInputValues} />
            {/* resumebody */}
            <ResumeBody data={data.educationInputValues} educationData={educationData} experienceData={experienceData}/>
        </div>
    )

    
}