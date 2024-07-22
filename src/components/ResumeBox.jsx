import ResumeHead from "./ResumeHEAD";
import ResumeBody from "./ResumeBody";
export default function ResumeBox({data}){
    
    return(
        <div>
            {/* resume header */}
            <ResumeHead data={data} />
            {/* resumebody */}
            <ResumeBody/>
        </div>
    )

    
}