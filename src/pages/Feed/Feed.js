import React, { useEffect, useState } from 'react';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import { Link } from 'react-router-dom';
import './Feed.css';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('posts');
    if (data) {
      setPosts(JSON.parse(data));
    }
  }, []);

  const deletePost = (id) => {
    const updatedPosts = posts.filter((p) => p.id !== id);
    setPosts(updatedPosts)
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  }

  return (
    <>
      <div>
        <HeaderMain />
      </div>

      <main>
        <div className='cards'>
          {posts.map((post, index) => (
            <div className='card' key={index}>
              <header>
                <h2>{post.title}</h2>
              </header>
              <div className='line'></div>
              <p>{post.description}</p>
              <div className='btns'>
                <div className='btn-edit'>
                  <Link to={`/edit/${post.id}`}>
                    <button>Edit</button>
                  </Link>
                </div>
                <div className='btn-readmore'>
                  <Link to={`/lermais/${post.id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
                <div className='btn-delete'>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Feed;
