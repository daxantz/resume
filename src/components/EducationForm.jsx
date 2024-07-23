export default function EducationForm({data, handleChange, handleEditingChange, addItem, updateData, isEditing,setIsEditing, isShowing, setIsShowing, deleteItem}){
    function handleFunctions(){

        if(isShowing){
            setIsShowing(!isShowing);
            
        }
        
        
        return isEditing ? updateData(data.id) : addItem(data)
        
        
    }

    function cancel(){
        if(isShowing){
            setIsShowing(!isShowing)
        }else if(isEditing){
            setIsEditing(false);
            
        }

        
    }

    function handleDelete(){

        if(isShowing){
            
            return
        }else{
            deleteItem(data.id)
            setIsEditing(false)
        }
        
        
        
        
    }
    return(
        <form action="">
                    <div className="input-group">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="school" value={data.school} onChange={(e)=> isShowing ? handleChange('educationInputValues','school',e.target.value): handleEditingChange('school', e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="Degree">Degree</label>
                        <input type="text" id="Degree" name="degree" value={data.degree} onChange={(e)=> isShowing ? handleChange('educationInputValues','degree',e.target.value): handleEditingChange('degree', e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" name="startDate" value={data.startDate} onChange={(e)=> isShowing ? handleChange('educationInputValues','startDate',e.target.value): handleEditingChange('startDate', e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="End Date" name="endDate" value={data.endDate} onChange={(e)=> isShowing ? handleChange('educationInputValues','endDate',e.target.value): handleEditingChange('endDate', e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" value={data.location} onChange={(e)=> isShowing ? handleChange('educationInputValues','location',e.target.value): handleEditingChange('location', e.target.value)}/>
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
                            e.preventDefault();
                            
                            cancel()
                        }}>Cancel</button>
                    </div>
            </form>
    )
}