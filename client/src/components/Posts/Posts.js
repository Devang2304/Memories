import React from 'react';
import Post from './Post/Post';

const Posts=()=>{
  return (
    <>
    <h1>POSTS</h1>
    <Post/>
    <Post/>
    </> // <></> this is calle das react fragment so that we can create lots of more things in this
    );
}

export default Posts;