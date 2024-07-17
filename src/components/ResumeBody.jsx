import ResumeEducationBox from "./ResumeEducationBox"
import ResumeExperienceBox from "./ResumeExperienceBox"
export default function ResumeBody(){
    return(
        <div>
            {/* resume education box */}
            <ResumeEducationBox/>
            {/* pro experience box */}
            <ResumeExperienceBox/>
        </div>
    )
}