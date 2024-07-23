import ExperienceDataItem from "./ExperienceDataItem"
import { useState } from "react"
import ExperienceForm from "./ExperienceForm"
import { v4 } from "uuid"
export default function ExperienceDetailsBox({formData, handleChange, experienceData, setExperienceData, setFormValues}){
    // state for the experience array which is an array of objects with the inputs and their values
    // example {company: 'Google', position: 'engineer', startDate: '2/24/15', endDate: '12/24/20', location: 'san francisco',description: 'This is the description of my responsiblites for the position'}
    // loop over experienceData array and map a experienceItem component
    // const [inputValues, setInputValues] = useState({
    //     company: '',
    //     position: '',
    //     startDate: '',
    //     endDate: '',
    //     location:'',
    //     description: ''

    // })

    // const handleChange = (input, value)=>{
    //     setInputValues(currValues=>({
    //             ...currValues,
    //             [input]:value
    //     }))
    // }

    const resetExperienceValues = () => {
        setFormValues(prevState => ({
          ...prevState,
          experienceInputValues: {
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ''
          }
        }));
      };
    // const [data, setData] = useState([])

    const addItem = (inputValues) =>{
        
        setExperienceData(currData =>{
            
            return [...currData, {id: v4(),
                company: inputValues.company,
                position: inputValues.position,
                startDate: inputValues.startDate,
                endDate: inputValues.endDate,
                location: inputValues.location,
                description: inputValues.description
            }]

        })
        resetExperienceValues()
    }

    const deleteItem = (id) =>{
        setData(currData => currData.filter(dataItem => dataItem.id !== id))
        
    }
    let [isShowing, setIsShowing] = useState(false);
    
    return(
        <div className="ExperienceDetailsBox box">
            <h2>Experience</h2>
            {isShowing ? (
                <ExperienceForm data={formData.experienceInputValues} handleChange={handleChange} addItem={addItem} isShowing={isShowing} setIsShowing={setIsShowing} />
                
            ): (
                <div>
                    {experienceData.map((item) => (
                        <ExperienceDataItem key={item.id} item={item} data={experienceData} setData={setExperienceData} addItem={addItem} deleteItem={deleteItem} handleChange={handleChange}/>
                    ))}
                </div>
            )}
            <div>
                <button onClick={()=>setIsShowing(!isShowing)}>Add Experience Item</button>
            </div>
        </div>
    )
}