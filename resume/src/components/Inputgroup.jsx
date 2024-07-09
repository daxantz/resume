import "../componentStyles/Inputgroup.css"


export default function Inputgroup({labelText,inputType, name, placeholder, value, dataChange}){
    
    return(
        <div className="Inputgroup">
            <label htmlFor={name}>{labelText}</label>
            <input id={name} type={inputType} name={name} placeholder={placeholder} value={value} onChange={(e)=> dataChange(name, e.target.value)} />
        </div>
    )
}