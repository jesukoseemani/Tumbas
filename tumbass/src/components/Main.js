import React from 'react'
import styled from 'styled-components'
import image2 from "../images/image2.jpg"
import image4 from "../images/image4.jpg"

function Main() {
   const dashBoardData = [
     {
       TotalSales: {
         name: "Total Sales",
         amount: "$27,340.00",
         percentage: "+24%",
         img: 12,
       }, 
       TotalExpenses: {
        name: "Total Expenses",
        amount: "$17,340.00",
        percentage: "-14%",
        img: 12,
      },
      TotalVisitor: {
        name: "Total Visitor",
        amount: "18,260.00",
        percentage: "+48%",
        img: 12,
      },
      TotalOrders: {
        name: "Total Orders",
        amount: "11,340.00",
        percentage: "-12%",
        img: 12,
      }
     }
   ]

   const productData = [
    {
      name: "Cowboy Hat",
      photo: image4,
      sn:"#2807856940",
      date: "Aug 12, 2021",
      category: "Fashion",
      brand: "Swallow",
      price: 99.89,
      status: "Available",
      views: "18k viewers",     
    },
    {
      name: "Smartphone",
      photo: image2,
      sn:"#3078569230",
      date: "Dec 8, 2021",
      category: "Gadget",
      brand: "Mito",
      price: 299.89,
      status: "Available",
      views: "103k viewers",
    },
   ]

 const years= []

  return (
    <MainStyle>
      <h1>KOSH</h1>
      <h1>KOSH</h1>
      <h1>KOSH</h1>
    </MainStyle>
  )
}

const MainStyle = styled.div``

export default Main
