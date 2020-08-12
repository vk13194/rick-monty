import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./List.css"
import Pagination from './Pagination'
import Post from './Post'

const List = ({listData}) => {
const [currentPage, setCurrentPage] = useState(1)
const [postPerPage] = useState(20)
 const [totalPosts, setTotaPosts] = useState()
 const [posts, setPosts] = useState([])
 console.log(listData)
  useEffect(  ()=>{
    const fetchPosts = async ()=>{
        console.log(currentPage)
        const res =await axios
        .get(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`)
         setPosts(res.data.results)
         //console.log(res.data.results)
        // setPostPerPage(res.data.info.pages)
         setTotaPosts(res.data.info.count)
         }
  fetchPosts();
  }, [ currentPage ])

  const pagenate = (number) =>{
    setCurrentPage(number) 
   
  }

    return (
        <div>
        { listData.length>0 ? <div className="card1">
       {listData.map((item) =>
       <div className="card mb-3" key={item.id}  style={{width:'18rem'}} >
       <div className="card-body" >
       <h5 className="card-title">{item.name}</h5>
       <h6 className="card-text">{item.air_date}</h6>
        <h6 className="card-text">{item.episode}</h6>
        </div>
     </div>
       )}
       
        </div>: <div>  <Post posts={posts} />
        <Pagination  postPerPage={postPerPage} totalPosts={totalPosts} 
      pagenate={pagenate}
      /> </div> }
        
        </div>
    )
}

export default List
