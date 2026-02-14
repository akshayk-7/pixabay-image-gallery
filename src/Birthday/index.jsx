import React, { useState } from 'react'
import "./index.css"


const bdata=[
  {
    name:"Cristiano Roanaldo",
    age: 41,
    image:"https://imageio.forbes.com/specials-images/imageserve/645ea1c4fce09061884bd21c/0x0.jpg?format=jpg&crop=2774,2772,x925,y0,safe&height=416&width=416&fit=bounds"
  },
  {
    name:"Virat Kohli",
    age:36,
    image:"https://d13ir53smqqeyp.cloudfront.net/fc-player-images/635.png"
    
  },
  {
    name:"Albert Dera",
    age: 35,
    image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"Frank Flores",
    age:39,
    image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"Christopher Campbell",
    age:28,
    image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
  }

]

const index = () => {
 const[data,setData] = useState(bdata);
  const clearAll= () =>{
    setData([]);
  }
  return (
    <div className="container">
      <h3>{data.length} Birthdays Today</h3>{
        data.map((item,index)=>{
          return(
            <div className='person'>
              <img src={item.image} alt="" />
            <div>
              <p>{item.name}</p>
              <span>{item.age}</span>
            </div>
            </div>
          )
        })
      }
    <button onClick={clearAll}>Clear All</button>

    </div>
  )
}

export default index
