import { useState } from "react";
import EducationForm from "./EducationForm";
import { v4 } from "uuid";
import pencil from '../images/pencil.png'



export default function EducationDetailsItem({item, data,  addItem, setData, deleteItem, handleChange}){
    //condtionally render form/form component if clicked on
    // import a form component
    const [isEditing, setIsEditing] = useState(false);
    const [editFormValues, setEditFormValues] = useState({
        id: item.id,
        school: item.school,
        degree: item.degree,
        startDate: item.startDate,
        endDate: item.endDate,
        location: item.location,
    })

    
    const handleEditingChange = (input, value) => {
        console.log(`Updating ${input} with value: ${value}`);
        setEditFormValues(prevValues => ({
          ...prevValues,
          [input]: value
        }));
      };

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
                <EducationForm data={editFormValues} handleChange={handleChange} handleEditingChange={handleEditingChange} addItem={addItem} isEditing={isEditing} updateData={updateData} setIsEditing={setIsEditing} deleteItem={deleteItem}/>
        ): (
            <div className="item education-item">
                <p>{editFormValues.school}</p>
                <img onClick={()=> setIsEditing(!isEditing)} className="edit-icon" src={pencil} alt="pencil icon" />
            </div>
        )}
        </div>
        
    )
}