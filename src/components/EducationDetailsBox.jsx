import EducationForm from "./EducationForm"
import { useState } from "react"
import { v4 } from "uuid"
import EducationDetailsItem from "./EducationDetailsItem"
export default function EducationDetailsBox({formData, handleChange, educationData, setEducationData, setFormValues}){

    // let [inputValues, setInputValues] = useState({
    //     school: '',
    //     degree: '',
    //     startDate: '',
    //     endDate: '',
    //     location: ''
    // })

    // const handleChange = (input, value) =>{
    //     setInputValues(currValues=>({
    //         ...currValues,
    //         [input]:value
    // }))
    // }
    const resetEducationValues = () => {
        setFormValues(prevState => ({
          ...prevState,
          educationInputValues: {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: ''
          }
        }));
      };

    // const [data, setData] = useState([])

    const addItem = (inputValues) =>{
        
        setEducationData(currData =>{
            
            return [...currData, {id: v4(),
                school: inputValues.school,
                degree: inputValues.degree,
                startDate: inputValues.startDate,
                endDate: inputValues.endDate,
                location: inputValues.location,
                
            }]

        })
        resetEducationValues()
    }

    const deleteItem = (id) =>{
        setEducationData(currData => currData.filter(dataItem => dataItem.id !== id))
        
    }
    let [isShowing, setIsShowing] = useState(false);
    return(
        <div>
            <h2>Education</h2>
            {/* <div className="item">
                <p>Brookdale</p>
                <img src="" alt="EYE" />
            </div> */}
            {isShowing ? (
                <EducationForm data={formData.educationInputValues} handleChange={handleChange} addItem={addItem} isShowing={isShowing} setIsShowing={setIsShowing} />
            ):(
                <div>
                    {educationData.map((item) =>(
                        <EducationDetailsItem key={item.id} item={item} data={educationData} setData={setEducationData} addItem={addItem} deleteItem={deleteItem}/>
                    ))}
                </div>
            )}
            

            <div>
                <button onClick={()=> setIsShowing(!isShowing)}>Add Education Item</button>
            </div>
        </div>
    )
}