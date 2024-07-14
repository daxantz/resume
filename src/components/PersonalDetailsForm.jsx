import Inputgroup from "./Inputgroup"
import { Button } from "@mui/material"
import { useState } from "react"

function PersonalDetailsForm({data, handleChange, showForm}){
    
    
    
    return(
        <form>
            
            
            <Inputgroup labelText={"First Name"} inputType={"text"} name={"firstName"} placeholder={"Enter first name"} value={data.firstName} handleChange={handleChange}/>
            <Inputgroup labelText={"Last Name"} inputType={"text"} name={"lastName"} placeholder={"Enter last name"} value={data.lastName} handleChange={handleChange}/>
            <Inputgroup labelText={"Email"} inputType={"email"} name={"email"} placeholder={"Enter email"} value={data.email} handleChange={handleChange}/>
            <Inputgroup labelText={"Phone Number"} inputType={"number"} name={"phoneNumber"} placeholder={"Enter phone number"} value={data.phoneNumber} handleChange={handleChange}/>
            <Inputgroup labelText={"Address"} inputType={"text"} name={"address"} placeholder={"Enter address"} value={data.address} handleChange={handleChange}/>

            <Button onClick={showForm} variant="contained" color="warning">Submit</Button>
        </form>
    )
}

export default PersonalDetailsForm