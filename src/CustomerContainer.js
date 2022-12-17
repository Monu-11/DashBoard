import React,{useState} from 'react'
import _ from 'lodash'
import CustomerTable from './CustomerTable'
import SearchContainer from './SearchContainer'

const CustomerContainer = (props) => {
    const {customer} = props 
    const [term,setTerm] = useState('') 
   
    const handleChange = (e) => {
        const result = e.target.value
        setTerm(result)
    }
    const filterUniqueCustomer = () => {
        const result = UniqueCustomer().filter((ele)=>{
            return ele.Name.toLowerCase().includes(term) || ele.Phone.toString().includes(term)
        })
        return result
    }
    const UniqueCustomer = () => {
        const result = _.uniqBy(customer,'Phone')
        return result 
    }
 const showDetails = (c) => {
    const result = customer.filter(ele =>ele.Phone === c.Phone)
    
    const OrderDetail = result.length
    const OrderAmount = () => {
        let sum = 0
        for(const cust of result){
            sum+=cust.Amount
            
        }
        return sum
    }
    
    alert(`        Name - ${c.Name}
          No. of Orders - ${OrderDetail}
          Total Amount - ${OrderAmount()}
          `)
 }
  return(
    <div>
        <h2>Listing Customers - {filterUniqueCustomer().length}</h2>
        <SearchContainer term={term} handleChange={handleChange}/>
        <CustomerTable data={filterUniqueCustomer()} showDetails={showDetails}/>
    </div>
  )
}

export default CustomerContainer