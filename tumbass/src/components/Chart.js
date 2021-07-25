import React from 'react'
import { Bar } from 'react-chartjs-2';

function Chart() {

  const data = {
    labels:["Jan", "Feb", "Mar", "Apr", "May", 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets:[{
      label:[],
      data:[
        4000,
        8000,
        6000,
        2000,
        7000,
        6000,
        4000,
        6000,
        4000,
        6000,
        4000,
        7000
      ],
     
      backgroundColor:'#97C1FE',
      borderWidth:0,
      borderColor:'none',
      hoverBorderWidth:1.5,
      hoverBackgroundColor: '#1900ff',
      hoverBorderColor:'#1900ff',
      barThickness: 15,
      borderRadius: 15,
      borderSkipped: false
    }]
  }


  const options = {
    maintainAspectRatio: false,
    responsive: true,
    // aspectRatio: 1,
    title:{
      display:false, 
    },

    plugins: {
      
      legend: {
          display: false,
      },

      tooltip:{
      enabled:true,
      xAlign:"center",
      yAlign:"bottom",
      backgroundColor: "#1900ff"
     },

      },

    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    
    scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        display: false,
      },
     
    },
    x: {
      grid: {
        drawBorder: false,
        display: false
      }
    }
  }
  }

  return (
    <>
       <Bar
          data={data}
          options={options}
        />
    </>
  )
}



export default Chart
