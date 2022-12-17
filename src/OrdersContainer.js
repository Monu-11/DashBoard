import React from 'react' 
import _ from 'lodash'
import OrderTable from './OrderTable'

const OrdersContainer = (props) => {
    const {customer} = props
    
    const UniqueCustomer = () => {
        const result = _.uniqBy(customer,'Phone')
      return result
       
    }
    //console.log(UniqueCustomer())
    
    const customerFrequency = () => {
     
      const frequencyObj = {1:0,2:0,3:0,4:0,'+5':0}
      UniqueCustomer().forEach((cust)=>{
        const customerOrder = customer.filter((ele)=>{
            return ele.Phone === cust.Phone

        })
        if(customerOrder.length >= 5){
            frequencyObj['+5']+=customerOrder.length
        }else{
            frequencyObj[customerOrder.length]+=customerOrder.length
        }
      })
      return frequencyObj
     }
     
   return(
    <div>
        <h2>Orders Distribution</h2>
        <OrderTable data={customerFrequency()}/>
    </div>
   )
}

export default OrdersContainer