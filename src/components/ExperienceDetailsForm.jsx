import Inputgroup from "./Inputgroup"
export default function ExperienceDetailsForm({data, handleChange}){


    return(
        <form>
            <h2>Experience Details</h2>
            <Inputgroup labelText={"Company Name"} inputType={"text"} name={"companyName"} placeholder={"Enter company name"} value={data.companyName} handleChange={handleChange}/>
            <Inputgroup labelText={"Position Title"} inputType={"text"} name={"positionTitle"} placeholder={"Enter position title"} value={data.positionTitle} handleChange={handleChange}/>
            <Inputgroup labelText={"Start Date"} inputType={"date"} name={"startDate"}  value={data.startDate} handleChange={handleChange}/>
            <Inputgroup labelText={"End Date"} inputType={"date"} name={"endDate"} value={data.endDate} handleChange={handleChange}/>
            <Inputgroup labelText={"Location"} inputType={"text"} name={"location"} placeholder={"Enter location"} value={data.location} handleChange={handleChange}/>
            <label htmlFor="description">Description</label>
            <textarea placeholder="Enter description" name="description" id="description" cols="30" rows="10" value={data.description} onChange={(e)=> handleChange("description",e.target.value)} ></textarea>
        </form>
    )
}