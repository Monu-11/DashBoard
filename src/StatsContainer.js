import React from "react";
import StatsItem from "./StatsItem";
import _ from 'lodash'

const StatsContainer = (props) => {
    const {customer} = props 
     //console.log(customer)
    const OrderCount = customer.length
    const TotalAmount = () =>{
        let sum = 0
        for(const cust of customer){
            sum+=cust.Amount
        }
        return sum
    }
    const UniqueCustomer = () => {
        const result = _.uniqBy(customer,'Phone')
       // console.log(result)
        return result
    }
    return(
        <div>
           <StatsItem count={OrderCount} text="Orders"/>
           <StatsItem count={TotalAmount()} text="Amount"/>
           <StatsItem count={UniqueCustomer().length} text="customers"/>
        </div>
    )
}

export default StatsContainer