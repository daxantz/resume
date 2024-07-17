export default function EducationForm({data, handleChange, addItem, updateData, isEditing,setIsEditing, isShowing, setIsShowing, deleteItem}){
    function handleFunctions(){

        if(isShowing){
            setIsShowing(!isShowing);
            
        }
        
        
        return isEditing ? updateData(data.id) : addItem(data)
        
        
    }

    function handleDelete(){
        deleteItem(data.id)
        
        setIsEditing(false)
    }
    return(
        <form action="">
                    <div className="input-group">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="school" value={data.school} onChange={(e)=>handleChange('school',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="Degree">Degree</label>
                        <input type="text" id="Degree" name="degree" value={data.degree} onChange={(e)=>handleChange('degree',e.target.value)}/>
                    </div>
                    <div className="date-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" name="startDate" value={data.startDate} onChange={(e)=>handleChange('starDate',e.target.value)}/>
                    </div>
                    <div className="date-group">
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="End Date" name="endDate" value={data.endDate} onChange={(e)=>handleChange('endDate',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" value={data.location} onChange={(e)=>handleChange('location',e.target.value)}/>
                    </div>
                    <div className="buttons">
                        <button onClick={(e)=>{
                            e.preventDefault()
                            handleDelete();
                        }}>Delete</button>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            handleFunctions()
                            //hide form
                        }}>Save</button>
                        <button>Cancel</button>
                    </div>
            </form>
    )
}