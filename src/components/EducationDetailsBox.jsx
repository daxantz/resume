export default function EducationDetailsBox(){
    return(
        <div>
            <h2>Education</h2>
            <div className="item">
                <p>Brookdale</p>
                <img src="" alt="EYE" />
            </div>

            <form action="">
                    <div className="input-group">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="school"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="Degree">Degree</label>
                        <input type="text" id="Degree" name="degree"/>
                    </div>
                    <div className="date-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" name="startDate"/>
                    </div>
                    <div className="date-group">
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="End Date" name="endDate"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location"/>
                    </div>
                    <div className="buttons">
                        <button>Delete</button>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
            </form>

            <div>
                <button>Add Education Item</button>
            </div>
        </div>
    )
}