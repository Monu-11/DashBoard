import React from 'react' 

const StatsItem = (props) => {
    const {count,text} = props
   return(
    <div>
        <h1>{count}</h1>
        <h2>{text}</h2>
    </div>
   )
}

export default StatsItem