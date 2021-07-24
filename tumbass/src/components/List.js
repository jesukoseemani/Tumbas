import React from 'react'
import styled from 'styled-components'

function List({name, img, time, amount}) {
  return (
    <ListItem>
           
           <div className="list_board">
            
            <div className="list_image">
                <img src={img} alt="images" /> 
            </div>

            <div className="list_content">
             
             <div className="list_name">
              {name}
             </div>
             
             <div className="list_time">
             {time}
             </div>
            
            </div>       
            </div>
           

           <div className="list_amount">
            +${amount}.00
            </div>
    </ListItem>
  )
}


const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width:100%;
  padding: 1rem;

.list_board{
  display: flex;
  align-items: center;
  width:100%;
  .list_image{
    border: .2px solid #d3d1d1;
    padding: .2rem;
    background-color: #ececec;
    border-radius: .4rem;
    img{
      width: 3rem;
      height: 3rem;
      object-fit: contain;
    }
}


.list_content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
.list_name{
  color: #262636;
  font-weight: bold;
  font-size: 1.35rem;
  margin-bottom: .5rem;
}

.list_time{
  color: #58585c;
}
}
}


.list_amount{
 color: #4EAC8C;
 font-weight: bold;
font-size: 1.35rem;
padding-top: .5rem;

}
`

export default List
