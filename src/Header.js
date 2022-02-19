import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBlog, deleteBlog, updateTitle } from './features/Blogs';



function Header() {
  const dispatch = useDispatch();
  const BlogList = useSelector((state) => state.blogs.value);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  
  
  return (
    <>
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a href="/" className="navbar-brand">Blog-App</a>
  </div>
</nav>  
  <div className="addblog" >
  <div className="mb-3 mt-4">
    <input type="text" className="form-control w-25 " style={{marginLeft: "390px"}} placeholder="title..." onChange={(event) => {setTitle(event.target.value)}}/>
    
  </div>
  <div className="mb-3" >
  <textarea class="form-control w-25" placeholder="content..." style={{marginLeft: "390px"}} rows="3" onChange={(event) => {setContent(event.target.value)}}></textarea>
  </div>
  <button className="btn btn-primary" style={{marginLeft: "390px"}} onClick={() => {
            dispatch(
              addBlog({
                id: BlogList[BlogList.length - 1].id + 1,
                title,
                content,
              })
            );
          }}>Add Blog</button>
    </div>
    <div className="blogsList">
    {BlogList.map((blog) => {
      return (
      
      <div className="card text-center mt-3">
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.content}</p>
        
        <button className="btn btn-primary" onClick={() => {
            dispatch(deleteBlog({ id: blog.id }));}}>
            Delete Blog
      </button>
       </div>
      <input style={{width: "340px", margin: "10px", marginLeft: "23px"}} type="text" placeholder="Edit Title" onChange={(event) => {setNewTitle(event.target.value)}}/>
      <button className="btn btn-primary" style={{width: "150px", margin: "5px", marginLeft: "120px", marginBottom: "10px"}} onClick={() => {
        dispatch(updateTitle({id: blog.id, title: newTitle}))
      }}>Update Title</button>

      </div>
      
      )
      
    })}
    </div>
    </>
  );
};

export default Header;
