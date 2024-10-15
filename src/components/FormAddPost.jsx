import { useForm } from 'react-hook-form';
import ImageUploader from './ImageUploader.jsx';
import { useState } from 'react';

export const FormAddPost = ({ setShowNewPost, randKey, getPosts, showNewPostWindow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [picture, setPicture] = useState(null);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data) => {
    // Change image to Base64 format
    let imageBase64 = null;
    if (picture) {
      imageBase64 = await fileToBase64(picture);
    }

    let newArticle = {
      ...data,
      id: randKey,
      date: new Date(data.date).toISOString().substring(0, 10),
      picture: imageBase64,
    };

    // Send data to MongoDB
    try {
      const response = await fetch('/api/addArticle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
      });

      if (response.ok) {
        getPosts();
        setShowNewPost(false);
      }
    } catch (error) {
      console.log('Wystąpił taki błąd podczas wysyłania formularza: ', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="layout">
        <h3 className="title_top">Nowy wpis</h3>
        <div className="close" onClick={showNewPostWindow}>
          <img src="../img/icon_close.svg" alt="close" />
        </div>

        {/* Title post */}
        <div className="title">
          <label>Tytuł</label>
          <div className="title_field">
            <input
              {...register('title', {
                required: 'Tytuł jest wymagany',
                maxLength: { value: 50, message: 'Maksymalna długość to 50 znaków' },
              })}
              className={`title_content ${errors.title ? 'error' : ''}`}
              type="text"
              id="title"
              disabled={isSubmitting}
            />
            {errors.title && <span className="error-message">{errors.title.message}</span>}
          </div>
        </div>

        {/* Main content post */}
        <div className="content">
          <label>Treść</label>

          <div className="content_field">
            <textarea
              {...register('content', {
                required: 'Treść jest wymagana',
                maxLength: { value: 250, message: 'Maksymalna długość to 250 znaków' },
              })}
              className={`blog_content ${errors.content ? 'error' : ''}`}
              id="content"
              disabled={isSubmitting}
            />
            {errors.content && <span className="error-message">{errors.content.message}</span>}
          </div>
        </div>

        {/*  Image upload */}
        <ImageUploader onImageUpload={setPicture} />

        {/* Date of publishing */}
        <div className="container_date-author">
          <div className="date">
            <label>Data</label>
            <div className="date_field">
              <input
                {...register('date', { required: 'Data jest wymagana' })}
                className={`date_content ${errors.date ? 'error' : ''}`}
                type="date"
                id="date"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Author */}
          <div className="author">
            <label>Autor</label>
            <div className="author_field">
              <select
                {...register('author', { required: 'Autor jest wymagany' })}
                className={`author ${errors.author ? 'error' : ''}`}
                id="author"
                disabled={isSubmitting}
              >
                <option value="">Wybierz</option>
                <option>Indi</option>
                <option>Tiger</option>
              </select>
            </div>
          </div>

          <button className="btn_add" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Dodawanie...' : 'Dodaj'}
          </button>
        </div>
      </form>
    </>
  );
};
