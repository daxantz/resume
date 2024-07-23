import img from '../assets/react.svg'

export default function ResumeHead({data}){
    return(
        <div className="ResumeHead">
            <h1>{data.firstName} {data.lastName}</h1>
            <div className="info">
                <div>
                    <img src={img} alt="" />
                    <p>{data.email}</p>
                </div>

                <div>
                    <img src={img} alt="" />
                    <p>{data.phoneNumber}</p>
                </div>
                
                <div>
                    <img src={img} alt="" />
                    <p>{data.address}</p>
                </div>
                
            </div>
        </div>
    )
}