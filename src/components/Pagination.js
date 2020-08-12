import React from 'react'
const Pagination = ({postPerPage, totalPosts, pagenate }) => {
const  pageNumbers=[]
for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
    pageNumbers.push(i);
}
    return (
        <nav>
          <ul className="pagination mt-2">
              {pageNumbers.map(number =>
              <li className="page-item " key={number}>
                  <a  onClick={()=>pagenate(number)} className="page-link" href="#!">{number}</a>
              </li>
                )}
              </ul>  
        </nav>
    )
}

export default Pagination
