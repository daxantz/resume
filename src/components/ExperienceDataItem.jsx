import { useState } from "react"
import ExperienceForm from "./ExperienceForm";
import { v4 } from "uuid";
export default function ExperienceDataItem({item, data,  addItem, setData, deleteItem}){
    //condtionally render form/form component if clicked on
    // import a form component
    const [isEditing, setIsEditing] = useState(false);
    const [editFormValues, setEditFormValues] = useState({
        id: item.id,
        company: item.company,
        position: item.position,
        startDate: item.startDate,
        endDate: item.endDate,
        location: item.location,
        description: item.description
    })

    
    const handleChange = (input, value)=>{
        setEditFormValues(currValues=>({
                ...currValues,
                [input]:value
        }))
    }

    const updateData = (id) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, ...editFormValues };
            }
            return item;
        });

        setData(updatedData);
        setIsEditing(false);
        
    };

    
    return(
        <div>
            {isEditing ? (
                <ExperienceForm data={editFormValues} handleChange={handleChange} addItem={addItem} isEditing={isEditing} updateData={updateData} setIsEditing={setIsEditing} deleteItem={deleteItem}/>
        ): (
            <div className="item">
                <p>{editFormValues.company}</p>
                <img onClick={()=> setIsEditing(!isEditing)} src="" alt="EYE" />
            </div>
        )}
        </div>
        
    )
}