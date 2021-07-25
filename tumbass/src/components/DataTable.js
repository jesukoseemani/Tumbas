import React from 'react'
import styled from 'styled-components'

function DataTable({photos, name, date, category, brand, price, status, sn, view}) {
  return (
    <DataT>
      <td><img src={photos} alt="photo"></img></td>
      <td>
        <div className="flex">
        <p>
          {name}
        </p>
        <p className="p">
           {sn}
        </p>      
        </div>    
      </td>
      <td>{date}</td>
      <td>{category}</td>
      <td>{brand}</td>
      <td style={{color:"#0f690f"}}>{price}</td>
      <td>
      <div className="flex">
        <p>
        {status}
        </p>
        <p className="p">
        {view}
        </p>
       
      </div>
      </td>
    </DataT>
  )
}

const DataT = styled.tr`
  
  td{
    font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 0rem 1rem 1rem;
  color: #262636;
  text-align: left;

  }
  
img{
  width:2.3rem;
  height:2.3rem;
  object-fit:contain;
}

.flex{
  display: flex;
  flex-direction: column;
  padding-top: 1.6rem;

}
.p{
  margin-top: .5rem;
  color: #58585c;
  font-size: 1rem;
}
`
export default DataTable
