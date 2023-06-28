import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header/Header';
import './Post.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const validationPost = yup.object().shape({
  title: yup.string().required('O titulo é obrigatório').max(40, 'O titulo precisa ter menos de 40 caracteres'),
  description: yup.string().required('A descrição é obrigatória').max(150, 'a descrição precisa ter menos de 150 caracteres'),
  content: yup.string().required('O conteúdo é obrigatório').max(500, 'O conteúdo precisa ter menos de 500 caracteres'),
});

function Post() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) => {
    const postId = uuidv4();
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = { id: postId, ...data };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    navigate('/');
  };
  

  return (
    <div>
      <Header />
      <main>
        <div className='card-post'>
          <h1>Criar postagem</h1>
          <div className='line-post'></div>
          <div className='card-body-post'>
            <form onSubmit={handleSubmit(addPost)}>
              <div className='fields'>
                <label>Titulo</label>
                <input type='text' name='title' {...register('title')} />
                <p className='error-message'>{errors.title?.message}</p>
              </div>
              <div className='fields'>
                <label>Descrição</label>
                <input type='text' name='description' {...register('description')} />
                <p className='error-message'>{errors.description?.message}</p>
              </div>
              <div className='fields'>
                <label>Conteúdo</label>
                <textarea type='text' name='content' {...register('content')}></textarea>
                <p className='error-message'>{errors.content?.message}</p>
              </div>
              <div className='btn-post'>
                <button type='submit'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Post;
