export default function PersonalDetailsBox(){
    return(
        <div>   
            <h2>Personal Details</h2>
            <form action="">
                <div className="input-group">
                    <label htmlFor="fullName">Firsts Name</label>
                    <input type="text" id="firstName"/>
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName"/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div className="input-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber"/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Adress</label>
                    <input type="text" id="address"/>
                </div>
            </form>

        </div>
        
    )
}