export default function PersonalDetailsHeader({data}){



    return(
        <div className="PersonalDetailsHeader">
            <div className="personal-details-info">
                <h1>{data.firstName} {data.lastName}</h1>
                <div>
                    <span>{data.email}</span>
                    <span>{data.phoneNumber}</span>
                    <span>{data.address}</span>
                </div>
            </div>
        </div>
    )
}