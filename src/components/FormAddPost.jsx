import { useForm } from 'react-hook-form';

export const FormAddPost = ({ setShowNewPost, randKey, getPosts, showNewPostWindow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Add new post form handle
  const onSubmit = async (data) => {
    let newArticle = {
      ...data,
      id: randKey,
      date: new Date(data.date).toISOString().substring(0, 10),
    };

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
          x
        </div>

        <div className="title">
          <label htmlFor="title">Tytuł</label>
        </div>
        <div className="title_field">
          <input
            {...register('title', {
              required: 'Tytuł jest wymagany',
              maxLength: { value: 50, message: 'Maksymalna długość to 50 znaków' },
            })}
            className={`title_content ${errors.title ? 'error' : ''}`}
            type="text"
            id="title"
          />
          {errors.title && <span className="error-message">{errors.title.message}</span>}
        </div>

        <div className="content">
          <label htmlFor="content">Treść</label>
        </div>
        <div className="content_field">
          <textarea
            {...register('content', {
              required: 'Treść jest wymagana',
              maxLength: { value: 250, message: 'Maksymalna długość to 250 znaków' },
            })}
            className={`blog_content ${errors.content ? 'error' : ''}`}
            id="content"
          />
          {errors.content && <span className="error-message">{errors.content.message}</span>}
        </div>

        <div className="date">
          <label htmlFor="date">Data</label>
        </div>
        <div className="date_field">
          <input
            {...register('date', { required: 'Data jest wymagana' })}
            className={`date_content ${errors.date ? 'error' : ''}`}
            type="date"
            id="date"
          />
        </div>

        <div className="author_label">
          <label htmlFor="author">Autor</label>
        </div>
        <div className="author_field">
          <select
            {...register('author', { required: 'Autor jest wymagany' })}
            className={`author ${errors.author ? 'error' : ''}`}
            id="author"
          >
            <option value="">Wybierz</option>
            <option>Indi</option>
            <option>Tiger</option>
          </select>
        </div>

        <div className="button">
          <button className="btn_add" type="submit">
            Dodaj
          </button>
        </div>
      </form>
    </>
  );
};
