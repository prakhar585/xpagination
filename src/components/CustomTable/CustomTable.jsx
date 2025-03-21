import React, { useState, useEffect } from 'react'
import './CustomTable.css';

const CustomTable = ({ employeeData, currentPage }) => {
  const [paginationData , setpaginationData] = useState([]);
  
   
    useEffect(()=>{
        const calculateList =(employeeData, currentPage)=>{
          
          if(!employeeData || employeeData.length === 0){
            return;
          }

          let newData = [];

          if(currentPage === 1){
            newData = employeeData.slice(0,10);
          }else{
            let startIndex = (currentPage-1)*10;
            let endIndex = Math.min(startIndex+10, employeeData.length);
            newData = employeeData.slice(startIndex,endIndex);
          }


          setpaginationData(newData);
         
        }
        
        
        calculateList(employeeData, currentPage);
        console.log(`ans is `,paginationData);


    },[employeeData, currentPage])
    
    return (
    <div>
        <table className='table'>
            <tr className='table-heading'>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
            {paginationData.map((item)=>(<tr className='table-row'>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
            </tr>))}
        </table>
        
    </div>
  )
}

export default CustomTable
