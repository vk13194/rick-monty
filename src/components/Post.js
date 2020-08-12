import React from 'react'
import './Post.css'
const Post = ({posts}) => {
    return (
        <div className="card1">
        {posts.map((item) =>
        <div className="card mb-3" key={item.id}  style={{width:'18rem'}} >
        <div className="card-body" >
        <h5 className="card-title"> {item.name}</h5>
        <h6 className="card-text">{item.air_date}</h6>
        <h6 className="card-text">{item.episode}</h6>

         </div>
      </div>
        )}
         </div>
    )
}

export default Post
