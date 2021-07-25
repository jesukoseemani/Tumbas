import React from 'react'
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"
import Main from "../components/Main"

function HomePage() {
  return (
    <>
    <Home>
      
      <SidebarStyle>
          <Sidebar />
      </SidebarStyle>

      <MainStyle>
          <Main />
      </MainStyle>

      <RightBarStyle>
          <Rightbar />
      </RightBarStyle>

     
     
    </Home>
    </>
  )
}

const Home = styled.div`
width:100%;
max-width: 128rem;
margin: 0 auto;
background-color: white;
border-radius: 1rem;
display: flex;
`

const SidebarStyle = styled.div`
flex-basis: 18%;
`

const MainStyle = styled.div`
flex-basis: 54%;
`

const RightBarStyle = styled.div`
flex-basis: 28%;
`


export default HomePage
