import React, {useState, useEffect} from 'react'
import CommentPage from './CommentPage'; 


const PostList = () => {
    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
 const [totalResult,setTotalResults] = useState("");
    const [postPerPage, setPostPerPage] = useState(10);




useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
        .then((response) => response.json())
        .then((data) =>{
            setPostPerPage( Math.ceil(data.length/postPerPage))
            setPostList(data)

            
          })
}, [currentPage])

const pages= [];
for(let i= 1 ; i<postPerPage; i++){
    pages.push(i)
}


    return (
        <div className="wrapper">
            {postList.map((post)=>{
                return<div className='post-card'>
                 
                    <h2>Title:{post.title}</h2>
                    <CommentPage  postId={post.id} />
                </div>
            }) }
            <div>
                <div className='pagination'>
                    <div>
                        {pages.map((pageNumber)=>{
                            return<button className='page-number' onClick={(()=>{setCurrentPage(pageNumber)})}>{pageNumber}</button>
                        })}
                    </div>
                </div>
              

		
	  </div>
        </div>
    )
}

export default PostList
