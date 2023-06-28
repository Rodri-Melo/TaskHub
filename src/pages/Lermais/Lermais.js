import Header from '../../components/Header/Header';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function LerMais() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const data = localStorage.getItem('posts');
    const parsedPosts = JSON.parse(data);
    const selectedPost = parsedPosts.find((post) => post.id === id);
    setPost(selectedPost);
  }, [id]);

  return (
    <>
      <div>
        <Header />

        <main>
          <div className='cards'>
            <div className='card'>
              <header>
                <h2>{post.title}</h2>
              </header>
              <div className='line'></div>
              <p> {post.content}  </p>
            </div>
          </div>
        </main>
      </div >
    </>
  );
}

export default LerMais;
