import {createSlice} from '@reduxjs/toolkit';
import { BlogsList } from '../blogsList';

export const blogSlice = createSlice({
  
  name: 'blogs',
  initialState: {value: BlogsList},
  
  reducers : {
    addBlog: (state, action) => {
      state.value.push(action.payload);
    },
    
    deleteBlog: (state, action) => {
      state.value = state.value.filter((blog) => blog.id !== action.payload.id);
    },
    updateTitle: (state, action) => {
      state.value.map((blog) => {
        if(blog.id === action.payload.id){
        blog.title = action.payload.title;
      }  
        
      })
      
    }
    
  }
  
});

export const { addBlog, deleteBlog, updateTitle } = blogSlice.actions;
export default blogSlice.reducer;