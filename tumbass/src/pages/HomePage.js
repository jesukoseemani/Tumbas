import React, { useState } from 'react'
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"
import Main from "../components/Main"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from "react-router-dom"

function HomePage() {
 const [toggler , setToggler] = useState(false)
 const [movebar , setMovebar] = useState(false)
 const history = useHistory()
 const toggleStyle = {
   display : toggler ? "flex" : "", 
   transform : toggler ? "translateX(0%)" : "",
  //  position : toggler ? "fixed" : "relative",
  //  top: toggler ? "3rem" : "",
  //  left: toggler ? "2rem" : "",
  //  background: toggler ? "#0f0909" : ""
}

const pageHandler = () => {
 history.push("/info")
}

const togglerHandler = () => {
  setToggler(!toggler)
  setMovebar(!movebar)

}

  return (
    <>
    <Home>
      <Flex style={{
                   
                    justifyContent: movebar ? "space-between" : "",
                    flexDirection:movebar ? "row" : "column",                   
                  }}>
      <Toggle onClick={togglerHandler}>
        <FontAwesomeIcon className="logo_icon" icon={faBars} size="2x" />
      </Toggle>
    
      <NewPage1 style={{display : movebar ? "none" : ""}} onClick={pageHandler}>
        <FontAwesomeIcon className="logo_icon" icon={faArrowAltCircleRight} size="2x" />
      </NewPage1>
      </Flex>

      <SidebarStyle style={toggleStyle}>
          <Sidebar />
      </SidebarStyle>

      <MainStyle>
          <Main />
      </MainStyle>

      <NewPage onClick={pageHandler}>
        <FontAwesomeIcon className="logo_icon" icon={faArrowAltCircleRight} size="2x" />
      </NewPage>

      <RightBarStyle>
          <Rightbar />
      </RightBarStyle>

     
     
    </Home>
    </>
  )
}

const Home = styled.div`
width:100%;
max-width: 140rem;
margin: 0 auto;
background-color: white;
border-radius: 1rem;
display: flex;
position: relative;
`

const SidebarStyle = styled.div`
flex-basis: 18%;


@media(max-width: 1200px){
  display: none;
  flex-basis: 25%;
  width: 30rem;
  height:calc(100vh + 3rem);
  position: fixed;
  top: -3rem;
  left: 0;
  transform: translateX(-100%);
  transition: all 250ms ease;
  background: #EBF1F6;
  z-index: 1;
}
`

const MainStyle = styled.div`
flex-basis: 54%;

@media (max-width: 1200px){
  flex-basis: 67%;
}
@media(max-width: 1080px){
  flex-basis: 87%; 
}

/* @media(max-width: 685px){
  flex-basis: 50.5rem; 
} */
`

const RightBarStyle = styled.div`
flex-basis: 28%;
@media (max-width: 1200px){
  flex-basis: 35%;
}
@media(max-width: 1080px){
  display: none;
  
}
`

const Flex = styled.div`
display:flex;
flex-direction: column;

`
const Toggle = styled.div`
display: none;
justify-content: center;
align-items: center;
padding: 1.5rem;
border: .2px solid #d3d1d1;
border-radius: 50%;
cursor: pointer;
height: 3rem;
margin: 3rem 1rem 0rem 1rem;
z-index: 100;
/* position: fixed;
top: 0;
left: 0; */

@media (max-width: 1200px){
  display: flex;
}
@media(max-width: 438px){
  margin: 3rem .5rem 0rem .5rem;

}
.logo_icon{
  color: blue;  
  }
`
const NewPage = styled.div`
display: none;
justify-content: center;
align-items: center;
padding: 1.5rem;
border: .2px solid #d3d1d1;
border-radius: 50%;
cursor: pointer;
height: 3rem;
margin: 3rem 1rem 0rem 1rem;
z-index: 100;

.logo_icon{
  color: blue;  
  }
@media(max-width: 1080px){
  display: flex;
}
@media(max-width: 438px){
  display: none;
}

`

const NewPage1 = styled.div`
display: none;
justify-content: center;
align-items: center;
padding: 1.5rem;
border: .2px solid #d3d1d1;
border-radius: 50%;
cursor: pointer;
height: 3rem;
margin: 3rem .5rem 0rem .5rem;
z-index: 100;

.logo_icon{
  color: blue;  
  }

@media(max-width: 438px){
  display: flex;
}

`
export default HomePage
