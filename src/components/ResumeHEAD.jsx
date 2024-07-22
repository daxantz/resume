export default function ResumeHead({data}){
    return(
        <div>
            <h1>{data.firstName} {data.lastName}</h1>
            <div className="info">
                <p>{data.email}</p>
                <p>{data.phoneNumber}</p>
                <p>{data.address}</p>
            </div>
        </div>
    )
}