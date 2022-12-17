import React from 'react' 

const OrderTable = (props) => {
  const {data} = props 
  
  return(
    <table>
        <thead>
            <tr>
                <th>No. of orders</th>
                <th>count of customers</th>
            </tr>
        </thead>
        <tbody>
            {
                Object.keys(data).map((ele,i)=>{
                    return<tr key={i}>
                         <td>{ele}</td>
                         <td>{data[ele]}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}
export default OrderTable