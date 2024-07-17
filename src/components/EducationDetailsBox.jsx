import EducationForm from "./EducationForm"
import { useState } from "react"
import { v4 } from "uuid"
export default function EducationDetailsBox(){

    let [inputValues, setInputValues] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: ''
    })

    const handleChange = (input, value) =>{
        setInputValues(currValues=>({
            ...currValues,
            [input]:value
    }))
    }

    const [data, setData] = useState([])

    const addItem = (inputValues) =>{
        
        setData(currData =>{
            
            return [...currData, {id: v4(),
                school: inputValues.school,
                degree: inputValues.degree,
                startDate: inputValues.startDate,
                endDate: inputValues.endDate,
                location: inputValues.location,
                
            }]

        })
        setInputValues({
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            
        })
    }

    const deleteItem = (id) =>{
        setData(currData => currData.filter(dataItem => dataItem.id !== id))
        
    }
    let [isShowing, setIsShowing] = useState(false);
    return(
        <div>
            <h2>Education</h2>
            <div className="item">
                <p>Brookdale</p>
                <img src="" alt="EYE" />
            </div>

            <EducationForm data={inputValues} handleChange={handleChange} addItem={addItem} isShowing={isShowing} setIsShowing={setIsShowing} />

            <div>
                <button>Add Education Item</button>
            </div>
        </div>
    )
}