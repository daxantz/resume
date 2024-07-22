export default function ExperienceForm({data, handleChange, addItem, updateData, isEditing,setIsEditing, isShowing, setIsShowing, deleteItem}){
    function handleFunctions(){

        if(isShowing){
            setIsShowing(!isShowing);
            
        }
        
        
        return isEditing ? updateData(data.id) : addItem(data)
        
        
    }

    function handleDelete(){

        if(isShowing){
            return
        }else{
            deleteItem(data.id)
            setIsEditing(false)
        }
    }


    function cancel(){
        if(isShowing){
            setIsShowing(!isShowing)
        }else if(isEditing){
            setIsEditing(false);
            
        }
    }
    return(
        <form action="">
                    <div className="input-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" value={data.company} onChange={(e)=>handleChange('company',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" name="position" value={data.position} onChange={(e)=>handleChange('position',e.target.value)}/>
                    </div>
                    <div className="date-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" name="startDate" value={data.startDate} onChange={(e)=>handleChange('startDate',e.target.value)}/>
                    </div>
                    <div className="date-group">
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="End Date" name="endDate" value={data.endDate} onChange={(e)=>handleChange('endDate',e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" value={data.location} onChange={(e)=>handleChange('location',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="10" value={data.description} onChange={(e)=>handleChange('description',e.target.value)}></textarea>
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
                        <button onClick={(e)=>{
                            e.preventDefault()
                            cancel();
                        }}>Cancel</button>
                    </div>
            </form>
    )
}