import Inputgroup from "./Inputgroup"
import { useState } from "react"

export default function PersonalDetailsForm({data, onChange}){
    const [formData, setFormData] = useState({firstName:"", lastName:"",phoneNumber:"",email:"",address:""})
    const handleChange = (field, value)=>{
        // const changeField = e.target.name;
        // const newValue = e.target.value
        setFormData(currData=>({
            ...currData,
            [field]: value
        
        }
        ))
        console.log("previous "+ field, formData[field])
        console.log("new " + field + " state ", value)
    }
    return(
        <form>
            <h2>Personal Details</h2>
            
            <Inputgroup labelText={"First Name"} inputType={"text"} name={"firstName"} placeholder={"Enter first name"} value={formData.firstName} dataChange={(field, value) => handleChange(field, value)}/>
            <Inputgroup labelText={"Last Name"} inputType={"text"} name={"lastName"} placeholder={"Enter last name"} value={formData.lastName} dataChange={(field, value) => handleChange(field, value)}/>
            <Inputgroup labelText={"Email"} inputType={"email"} name={"email"} placeholder={"Enter email"} value={formData.email} dataChange={(field, value) => handleChange(field, value)}/>
            <Inputgroup labelText={"Phone Number"} inputType={"text"} name={"phoneNumber"} placeholder={"Enter phone number"} value={formData.phoneNumber} dataChange={(field, value) => handleChange(field, value)}/>
            <Inputgroup labelText={"Address"} inputType={"text"} name={"address"} placeholder={"Enter address"} value={formData.address} dataChange={(field, value) => handleChange(field, value)}/>

            
        </form>
    )
}