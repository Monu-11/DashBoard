import React from 'react' 

const CustomerTable = (props) => {
    const {data,showDetails} = props
   // console.log(props)

  
  return(
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            {data.map((c)=>{
                return<tr key={c.Phone}>
                    <td>{c.Name}</td>
                    <td>{c.Phone}</td>
                    <td><button onClick={()=>{
                        showDetails(c)
                    }}>show</button></td>
                </tr>
            })}
        </tbody>
    </table>
  )
}

export default CustomerTable