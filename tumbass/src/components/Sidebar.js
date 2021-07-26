import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faFileAlt, faShoppingBag, faCog, faPaperPlane, faUsers } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <Sbar>
      
      <div className="logo_component">
        <div className="logo"></div>
       
        <h3>Tumbas</h3>
      </div>


      <h3 className="sbar_head">Menu</h3>
      <ul>
        <li>
        <a href="#" className="list_item" style={{color: "#5C8FD8", borderRight:"2px solid blue"}}>
          <div className="icon">
          <FontAwesomeIcon icon={faThLarge} size="2x" />
          </div>
          <div className="icon_paragraph">
          <p>Overview</p>
          </div>       
          </a>
        </li>
       
        <li>
          <a href="#" className="list_item">
          <div className="icon">
          <FontAwesomeIcon icon={faFileAlt} size="2x" />
          </div>
          <div className="icon_paragraph">
          <p>Orders</p>
          </div>
          </a>
        </li>

        <li>
          <a href="#" className="list_item">
          <div className="icon">
          <FontAwesomeIcon icon={faShoppingBag} size="2x" />
          </div>
          <div className="icon_paragraph">
          <p>Products</p>
          </div>
          </a>
        </li>

        <li>
          <a href="#" className="list_item">
          <div className="icon">
          <FontAwesomeIcon icon={faCog} size="2x" />
          </div>
          <div className="icon_paragraph">
          <p>Settings</p>
          </div>
          </a>
        </li>
      </ul>


      <h3 className="sbar_head">Business</h3>
      <ul>
        <li>
          <a href="#" className="list_item">
          <div className="icon">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </div>
          <div className="icon_paragraph">
          <p>Shipment</p>
          </div>
        
          </a>
        </li>

        <li>
          <a href="#" className="list_item">
          <div className="icon">
          <FontAwesomeIcon icon={faUsers} size="2x" />
          </div>
          <div className="icon_paragraph">
          <p>Employee</p>
          </div>
          </a>
        </li>
      </ul>

      <Footer>
        <h3>
          &copy; Tumbas, 2021
        </h3>
        <p>Platform for solution of all types <br/> of business to be more advanced.</p>
      </Footer>
    </Sbar>
  
  )
}

const Sbar = styled.div`
width: 100%;
position: relative;
/* height: 100vh; */
padding: 3rem 0rem 3rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;


.logo_component{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:100%;

  @media(max-width:1200px){
    display: none;
  }
  

  .logo{
    height:4rem;
    width:4rem;
    /* border: 1px solid black; */
    background-color: blue;
    border-radius: 50%;
  }

  h3{
    color: blue;
    margin-left: 2rem;
  }
}

.sbar_head{
  margin-top: 4rem;
  color: #2b2a2a;
  @media(max-width:1200px){
    margin-top: 10rem;
  }
}

li{
  margin: 2rem 0rem;
}

.list_item{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #58585c;

  .icon{
    width: 2rem;
  }

  .icon_paragraph{
    margin-left: 2rem;
    text-align: left;
  }

}

`

const Footer = styled.div`
margin-top: 2rem;
position: fixed;
bottom: 2rem;
width:100%;

@media(max-width:1200px){
  position: static;
  }
h3{
  color: #2b2a2a;
  font-size: 1.37rem;
}

p{
  width:100%;
  color: #58585c;
  margin-top: .5rem;
}
`

export default Sidebar
