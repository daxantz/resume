export default function PersonalDetailsBox({data, handleChange}){
    return(
        <div>   
            <h2>Personal Details</h2>
            <form action="">
                <div className="input-group">
                    <label htmlFor="fullName">Firsts Name</label>
                    <input type="text" id="firstName" value={data.firstName} onChange={(e)=> handleChange('firstName', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={data.lastName} onChange={(e)=> handleChange('lastName', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={data.email} onChange={(e)=> handleChange('email', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" value={data.phoneNumber} onChange={(e)=> handleChange('phoneNumber', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={data.address} onChange={(e)=> handleChange('address', e.target.value)}/>
                </div>
            </form>

        </div>
        
    )
}