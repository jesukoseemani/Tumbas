import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Box({name, percentage, img, amount, color1, color2}) {
  return (
    <BoxStyle>
      
      <div className="box_top_container">
        <div style={{color: color1}} className="box_top_left">
        <FontAwesomeIcon className="box_icon" icon={img} size="2x" /> 
        </div>
        <div style={{color: color2}} className="box_top_right">
       {percentage}
        </div>
      </div>

      <h5>
        {amount}
      </h5>
      <p>
        {name}

      </p>
    </BoxStyle>
  )
}

const BoxStyle = styled.div`
padding: 1.5rem;
border: .2px solid #d3d1d1;
border-radius: .5rem;
.box_top_container{
   display: flex;
   justify-content: space-between;
   align-items: center;
  .box_top_left{
    /* color: #FC8848; */
  }

  .box_top_right{
       font-size: 1.2rem;
       font-weight: bold;
       /* color: green */
  }
}

h5{
  margin-top: 1.5rem;
  font-size: 1.4rem;
  color: #262636;
}

p{
  margin-top: .5rem;
  font-weight: bold;
  color: #58585c;
}
`

export default Box
