export default function PersonalDetailsBox({data, handleChange}){
    return(
        <div>   
            <h2>Personal Details</h2>
            <form action="">
                <div className="input-group">
                    <label htmlFor="fullName">First Name</label>
                    <input type="text" id="firstName" value={data.personalInputValues.firstName} onChange={(e)=> handleChange('personalInputValues','firstName', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={data.personalInputValues.lastName} onChange={(e)=> handleChange('personalInputValues','lastName', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={data.personalInputValues.email} onChange={(e)=> handleChange('personalInputValues','email', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" value={data.personalInputValues.phoneNumber} onChange={(e)=> handleChange('personalInputValues','phoneNumber', e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={data.personalInputValues.address} onChange={(e)=> handleChange('personalInputValues','address', e.target.value)}/>
                </div>
            </form>

        </div>
        
    )
}