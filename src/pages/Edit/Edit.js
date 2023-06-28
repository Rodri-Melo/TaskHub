import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const validationPost = yup.object().shape({
  title: yup.string().required('O título é obrigatório').max(40, 'O título precisa ter menos de 40 caracteres'),
  description: yup.string().required('A descrição é obrigatória').max(150, 'A descrição precisa ter menos de 150 caracteres'),
  content: yup.string().required('O conteúdo é obrigatório').max(500, 'O conteúdo precisa ter menos de 500 caracteres'),
});

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationPost),
  });

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const foundPost = posts.find((p) => p.id === id);

    if (foundPost) {
      reset(foundPost); 
    }
  }, [id, reset]);

  const handleEditPost = (data) => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const updatedPosts = posts.map((postItem) => {
      if (postItem.id === id) {
        return { ...postItem, ...data };
      }
      return postItem;
    });

    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate('/');
  };

  return (
    <div>
      <Header />
      <main>
        <div className='card-post'>
          <h1>Editar postagem</h1>
          <div className='line-post'></div>
          <div className='card-body-post'>
            <form onSubmit={handleSubmit(handleEditPost)}>
              <div className='fields'>
                <label>Título</label>
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
                <button type='submit'>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Edit;
