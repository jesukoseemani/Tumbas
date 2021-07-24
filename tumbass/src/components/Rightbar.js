import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faBell, faShoppingBag, faUsers, faStarOfLife} from '@fortawesome/free-solid-svg-icons';
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import List from "./List"


function Rightbar() {
 const orderList = [
  {
      name: "Redmi 4X",
      time: "2 minutes ago",
      img: image2,
      amount: 80
  },
  {
    name: "Acer E1-421",
    time: "15 minutes ago",
    img: image3,
    amount: 72
},
{
  name: "Nikon D3500",
  time: "45 minutes ago",
  img: image1,
  amount: 45
}
 ]



  return (
    <Rbar>
        <Icontop>
          <div className="icon_bell">
          <FontAwesomeIcon className="icontop_icons" icon={faBell} size="2x" />
          </div>

          <div className="icon_edit">
          <FontAwesomeIcon className="icontop_icons" icon={faPencilAlt} size="2x" />
          </div>

        </Icontop>

        <Randomphoto>
          <div className="user_component">
            <div className="user_image"></div>
            <div className="user_name">
              <h3>Konter Pulsa</h3>
            </div>
          </div>

          <div className="user_reader">
            <div className="user_board">
            <div className="icon">
            <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            </div>
            <div className="icon_content">
             <div className="icon_number">
              218
             </div>
             <div className="icon_desc">
              Products
             </div>
            </div>       
            </div>

            <div className="line"></div>

            <div className="user_board">
            <div className="icon">
            <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
            <div className="icon_content">
             <div className="icon_number">
              2,580
             </div>
             <div className="icon_desc">
              Followers
             </div>
            </div>       
            </div>
          </div>

        </Randomphoto>

        <Reputation>
         <h4>Reputation</h4>
         <div className="repu_component">
           <div className="repu_icon_container">
           <FontAwesomeIcon className="repu_icon" icon={faStarOfLife} size="2x" /> 
           </div>

           <div className="repu_desc">
                <div className="repu_desc_component">
                <h5>
                  Star sellers
                </h5>
                <p>
                  85%
                </p>
                </div>
                <div className="input_range">
                  <input type="range" name="range" id="range" min="0" max="100" value="100" />
                   <div className="animate-track"></div>
                </div>
                
           </div>     
         </div>
        </Reputation>

        <Recent>
        <div className="recent_component">
         <h4>
         Recent Orders
         </h4>
         <p>
           Sell All
         </p>
        </div>

        <div className="order-list">
        {
          orderList.map((list) => (
            <List name={list.name} time={list.time} img={list.img} amount={list.amount} />
          ))
        }
        </div>
        </Recent>

    </Rbar>
  )
}

const Rbar = styled.div`
width: 100%;
/* height: 100vh; */
padding: 3rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`

const Icontop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

.icon_bell, .icon_edit{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  border: .2px solid #d3d1d1;
  border-radius: 50%;
}

.icontop_icons{
  font-size: 1.5rem;
}
`

const Randomphoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width:100%;

    .user_component{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top:2rem;
      width:100%;

      .user_image{
        height:12rem;
        width:12rem;
    /* border: 1px solid black; */
        background-color: blue;
        border-radius: 50%;
      }

      .user_name{
          margin-top: 2.7rem;
      }
    }

    .user_reader{
      display: flex;
      align-items: center;
      margin: 2rem 0rem;
      width: 100%;
      border: .2px solid #d3d1d1;
      border-radius: .8rem;
      padding: 2rem 0rem;

      .line{
        border: .2px solid #d3d1d1;
        padding: 2rem 0rem;    
      }


      .user_board{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        
        .icon{
          padding: 1rem;
          background-color: #ececec;
          border-radius: .8rem;
        }

        .icon_content{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-left: 1.3rem;
      
          .icon_number{
          font-size: 1.7rem;
          font-weight: bold;
          color: #262636;
          margin-bottom: .5rem;
          }

          .icon_desc{
        font-size: 1.1rem;
        color: #58585c;
          }
        }
      }
    }

`

const Reputation = styled.div`
width: 100%;
margin-top: 1.5rem;

.repu_component{
    display: flex;
    align-items: center;
    width:100%;
    margin-top:1.3rem;
    border: .2px solid #d3d1d1;
    border-radius: .8rem;
    padding: 2rem 1.3rem;
  .repu_icon_container{
    margin-right: 2rem;
    padding: 1rem;
    background-color: #fae3d7;
    border-radius: .8rem;

    .repu_icon{
      color: #FC8848;
    }
  }

  .repu_desc{
    display: flex;
    flex-direction: column;
    flex: 1;
    
    .repu_desc_component{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
    color: #262636;
    h5{
      font-size: 1.4rem;
    }

    p{
      font-size: 1.3rem;
      font-weight: bold;
    }
    }

    .input_range{
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  
  

   input{
     width:100%;
     height: 1rem;
     
     &:focus {
  outline: none;
}
   
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
      
}

 &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      background-color: #FC8848;
      color: #FC8848;
    }

   }

  

   .animate-track{
  background: rgb(236, 226, 226);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(85%);
  padding: 1rem;
  pointer-events: none;
   }

    }
  }
}
`

const Recent = styled.div`
  width: 100%;
  margin-top: 3rem;
.recent_component{
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    color: #417BD4;
    font-weight: bold;
    font-size: 1.2rem;
  }
 
}

.order-list{
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: flex-start; 
  width: 100%;
  margin-top: 1rem;
  border: .2px solid #d3d1d1;
  border-radius: .8rem;
  
}
`


export default Rightbar
