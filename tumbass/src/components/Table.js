import React from 'react'
import styled from "styled-components"
import DataTable from './DataTable'
import image2 from "../images/image2.jpg"
import image4 from "../images/image4.jpg"

function Table() {

  const productData = [
    {
      name: "Cowboy Hat",
      photo: image4,
      sn:"#2807856940",
      date: "Aug 12, 2021",
      category: "Fashion",
      brand: "Swallow",
      price: "$99.89",
      status: "Available",
      views: "18k viewers", 
      id:1    
    },
    {
      name: "Smartphone",
      photo: image2,
      sn:"#3078569230",
      date: "Dec 8, 2021",
      category: "Gadget",
      brand: "Mito",
      price: "$299.89",
      status: "Available",
      views: "103k viewers",
      id:2
    },
   ]

return (
    <StyledTable>
     <h3>Popular Products</h3>
    <table>
    <tr>
    <th>Photos</th>
    <th>Name</th>
    <th>Date</th>
    <th>Category</th>
    <th>Brand</th>
    <th>Price</th>
    <th>Status</th>
    </tr>
      {
        productData.map((data) => (
              <DataTable 
              photos={data.photo}
              name={data.name}
              date={data.date}
              category={data.category}
              brand={data.brand}
              price={data.price}
              status={data.status}
              sn={data.sn}
              view={data.views}
              key={data.id}
              />
        ))
      }
    
     </table>
    </StyledTable>
  )
}
const StyledTable = styled.div`
margin-top: 3rem;
border: .2px solid #d3d1d1;
border-radius: .5rem;
padding: 1rem;
width:100%;
@media(max-width: 700px){
  max-width: 60rem;
 overflow-x: scroll;
}
h3{
  margin-top: 1rem;
  margin-bottom:1.5rem;
  
}

table{
  width: 100%;
  border-collapse: collapse;
  @media(max-width: 700px){
  width: 70rem;
  overflow-x: scroll;
}
}

th{
  font-size: 1.2rem;
  font-weight: 100;
  padding: .8rem 1.5rem;
  background: #EBF1F6;
  color: #58585c;
  text-align: left;

  :first-child{
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
}

  :last-child{
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }


}



`

export default Table
