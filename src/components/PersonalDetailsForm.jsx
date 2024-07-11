import Inputgroup from "./Inputgroup"


export default function PersonalDetailsForm({data, handleChange}){
    
    
    
    return(
        <form>
            <h2>Personal Details</h2>
            
            <Inputgroup labelText={"First Name"} inputType={"text"} name={"firstName"} placeholder={"Enter first name"} value={data.firstName} handleChange={handleChange}/>
            <Inputgroup labelText={"Last Name"} inputType={"text"} name={"lastName"} placeholder={"Enter last name"} value={data.lastName} handleChange={handleChange}/>
            <Inputgroup labelText={"Email"} inputType={"email"} name={"email"} placeholder={"Enter email"} value={data.email} handleChange={handleChange}/>
            <Inputgroup labelText={"Phone Number"} inputType={"number"} name={"phoneNumber"} placeholder={"Enter phone number"} value={data.phoneNumber} handleChange={handleChange}/>
            <Inputgroup labelText={"Address"} inputType={"text"} name={"address"} placeholder={"Enter address"} value={data.address} handleChange={handleChange}/>

            
        </form>
    )
}