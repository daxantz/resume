import EducationForm from "./EducationForm"
export default function EducationDetailsBox(){
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