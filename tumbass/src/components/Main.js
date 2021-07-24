import React from 'react'
import styled from 'styled-components'
import image2 from "../images/image2.jpg"
import image4 from "../images/image4.jpg"
import search from "../images/search-outline.svg"
import sbag from "../images/shopping-bags.svg"
import analytics from "../images/analytics.svg"
import scart from "../images/shopping-cart.svg"
import user from "../images/user-group.svg"
import Box from "../components/Box"

function Main() {
   const dashBoardData = [
     
       {
         name: "Total Sales",
         amount: "$27,340.00",
         percentage: "+24%",
         img: sbag,
       }, 
       {
        name: "Total Expenses",
        amount: "$17,340.00",
        percentage: "-14%",
        img: analytics,
       },
       {
        name: "Total Visitor",
        amount: "18,260.00",
        percentage: "+48%",
        img: user,
       },
       {
        name: "Total Orders",
        amount: "11,340.00",
        percentage: "-12%",
        img: scart,
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
     
     <InputSearch>
        <input type="search" className="search" placeholder="Search for product" />
        {/* <FontAwesomeIcon className="search_icon" icon={faSearch}/> */}
        <img src={search} alt="search" className="search_icon" />
     </InputSearch>

     <OverView>
     <h3>Overview</h3>
     
     <Boxes>
      
      {
      dashBoardData.map((data) => (
            <Box 
            name={data.name} 
            amount={data.amount} 
            percentage={data.percentage} 
            img={data.img} />
             ))
      }
     
     </Boxes>
      

     </OverView>


    </MainStyle>
  )
}

const MainStyle = styled.div`
display: flex;
flex-direction: column;
width:100%;
border-right: .2px solid #d3d1d1;
border-left: .2px solid #d3d1d1;
margin:3rem 0rem;
padding: 0rem 2rem;

`

const InputSearch = styled.div`
width: 100%;
position:relative;
  .search{
    width:100%;
    height: 5rem;
    border: none;
    border-radius: 3rem;
    outline: none;
    background: #EBF1F6;
    color: #58585c;
    padding-left: 7rem; 
  }

  .search_icon{
    position: absolute;
    top: 1.2rem;
    left: 3rem;

    font-size: 2.5rem;
    font-weight: 100;

    height: 2.8rem;
    width: 2.8rem;
  }
`

const OverView = styled.div`
margin-top: 3rem;

`

const Boxes = styled.div`

`
export default Main
