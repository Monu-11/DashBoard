import React from 'react' 

const SeacrhContainer = (props) => {
    const {term,handleChange} = props 
     return(
        <div>
            <input type="text" placeholder='search by name or mobile' value={term} onChange={handleChange}/>
        </div>
     )
}

export default SeacrhContainer