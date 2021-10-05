import React from 'react'
import styled from 'styled-components'
import search from "../images/search-outline.svg"
import Box from "../components/Box"
import Table from './Table'
import Chart from "./Chart"
import { faShoppingBag, faChartPie, faUsers, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function Main() {
   
  return (
    <MainStyle>
     
     <InputSearch>
        <input type="search" className="search" placeholder="Search for product" />
        <img src={search} alt="search" className="search_icon" />
     </InputSearch>

     <OverView>
     <h3>Overview</h3>
     
     <Boxes>
      
     <Box 
     name={"Total Sales"} 
     amount={"$27,340.00"} 
     percentage={"+24%"} 
     img={faShoppingBag}
     color1={"#FC8848"}
     color2={"#0f690f"}
     />

     <Box 
     name={"Total Expenses"} 
     amount={"$17,340.00"} 
     percentage={"-14%"} 
     img={faChartPie}
     color1={"#660f66"}
     color2={"#c90808"}
     />

     <Box 
     name={"Total Visitor"} 
     amount={"18,260.00"} 
     percentage={"+48%"} 
     img={faUsers}
     color1={"#0f690f"}
     color2={"#0f690f"}
     />

     <Box 
     name={"Total Orders"} 
     amount={"11,340.00"} 
     percentage={"-12%"} 
     img={faShoppingCart}
     color1={"#d13737"}
     color2={"#c90808"}
     />
    
     </Boxes>
  </OverView>
  
  {/* <Chart /> */}
  <ChartContainer>
    <div className="hero">
    <div className="hero_flow">
    <p>Income</p>
    <p className="p">Expense</p>
    </div>
    <div className="year_container">
    <select className="year" name="year">
    <option value="1990">1990</option>
    <option value="1991">1991</option>
    <option value="1992">1992</option>
    <option value="1993">1993</option>
    <option value="1994">1994</option>
    <option value="1995">1995</option>
    <option value="1996">1996</option>
    <option value="1997">1997</option>
    <option value="1998">1998</option>
    <option value="1999">1999</option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021" selected>2021</option>
    </select>
    </div>
    </div>
    
    <div className="chart_Container">
      <Chart />
    </div>
    

  </ChartContainer>
 
<TableContainer>
   <Table />
   {/* <a href="https://docs.google.com/document/d/1CP4TReCEs4bT22k_xj9YF6anI4e1rDdg8TZ6vmJ4rZI/edit?usp=sharing" className="data_doc">GET POPULAR PRODUCTS DATA</a> */}
</TableContainer>
 

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

@media(max-width: 510px){
  /* width: 55rem;
  overflow-x: scroll; */
  width: 30rem;
}

@media(max-width: 438px){
  border-right: none;
}
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
margin-top: 1.2rem;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1.5rem;

@media(max-width: 700px){
  grid-template-columns: repeat(2, 1fr);
 
}

@media(max-width: 530px){
  
  grid-template-columns:  1fr;
 
}
`

const ChartContainer = styled.div`
padding: 1.5rem;
border: .2px solid #d3d1d1;
margin-top: 2rem;
width:100%;
/* height: 30rem; */

.chart_Container{
  width:100%;
  max-width: 72rem;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
}
}

.hero{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .6rem;

  .hero_flow{
  display: flex;
  align-items: center;
   

  p{
    font-size: 1.4rem;
    color: #262636;
    font-weight: bold;
  }
  .p{
    margin-left: 1rem;
    color: #9e9e9e;
  }

  }

  .year_container{
   

    .year{
    outline:none;
    border: none;
    padding:.5rem;
    background: #f1f4f7;
    border-radius: .5rem;
    font-weight: bold;
    }
  }
}

`

const TableContainer = styled.div`
width: 100%;
/* @media(max-width: 700px){
    height: 8rem;
    margin-top:2rem;
    border: .2px solid #d3d1d1;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

.data_doc{
  display:none;
  justify-content: center;
  align-items: center;
  text-align:center;
  width:100%;
  font-weight: bold;
  cursor: pointer;

  @media(max-width: 700px){
    display: flex;
  }
}
`
export default Main
