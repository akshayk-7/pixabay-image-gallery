import React from 'react'
import './index.css'

const Card = ({ item }) => {
const tagList = item.tags.split(',').slice(0,5)
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.webformatURL} alt={item.tags} />
      </div>

      <div className="card-body">
        <p className="author">By: {item.user}</p>

           <div className="tag-container">
          {tagList.map((tag, index) => (
            <span key={index} className="tag-pill">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
