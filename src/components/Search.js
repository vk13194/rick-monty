import React, {useState, useEffect} from 'react'
import List from './List'
import axios from 'axios'
const Search = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    useEffect(()=>{
        let getResults = async () =>{
            const res = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${query}`)
            console.log(res.data.results)
            if(query.length > 0){
            setData(res.data.results)
            }
            }
        getResults();
    },[query])
/*const getResults = async () =>{
const res = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${query}`)
console.log(res.data.results)
if(query.length > 0){
setData(res.data.results)
}
} */

const  handleChange =(e) =>{
 setQuery(e.target.value)
}
const handleSubmit =(e) =>{
e.preventDefault();
//getResults()
}
const handleClear =() =>{
    setQuery("")
    
}
    return (
        <div>
        <form onSubmit={handleSubmit} >
        <div className="form-group  col-md-6 offset-md-3 mt-3" >
        <input type="text" onChange={handleChange}
        className="form-control"
         value={query} />
        </div>
        <button  type="submit"  
        className="btn  btn-secondary btn-block col-md-6 offset-md-3 " >submit</button>
        <button type="button" onClick={handleClear} 
        className="btn  btn-secondary btn-block col-md-6 offset-md-3 mb-5" >ClearSearch</button>
        </form>
          <List listData={data} />
        </div>
    )
}

export default Search
