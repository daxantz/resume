import "../componentStyles/Inputgroup.css"


export default function Inputgroup({labelText,inputType, name, placeholder ='', value, handleChange}){
    
    return(
        <div className="Inputgroup">
            <label htmlFor={name}>{labelText}</label>
            <input maxLength={30} id={name} type={inputType} name={name} placeholder={placeholder} value={value} onChange={(e)=> handleChange(name, e.target.value)} />
        </div>
    )
}