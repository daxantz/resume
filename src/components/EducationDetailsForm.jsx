import Inputgroup from "./Inputgroup"
import { Button } from "@mui/material"

export default function EducationForm({data, handleChange, showForm}){




    return(
        <form>
            <h2>Education Details</h2>
            <Inputgroup labelText={"School"} inputType={"text"} name={"school"} placeholder={"Enter School"} value={data.school} handleChange={handleChange}/>
            <Inputgroup labelText={"Degree"} inputType={"text"} name={"degree"} placeholder={"Enter Degree"} value={data.degree} handleChange={handleChange}/>
            <Inputgroup labelText={"Start Date"} inputType={"date"} name={"startDate"}  value={data.startDate} handleChange={handleChange}/>
            <Inputgroup labelText={"End Date"} inputType={"date"} name={"endDate"}  value={data.endDate} handleChange={handleChange}/>
            <Inputgroup labelText={"Location"} inputType={"text"} name={"location"} placeholder={"Enter location"} value={data.location} handleChange={handleChange}/>
            <Button onClick={showForm} variant="contained" color="warning">Submit</Button>
         </form>
    )
}