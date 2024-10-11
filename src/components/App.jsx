import React from 'react';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Header } from '../components/Header';
import { Article } from '../components/Article';
import { FormAddPost } from '../components/FormAddPost';

import '../css/style.css';
import '../css/myStyle.css';
import '../css/formAddPost.css';
import '../css/loginPanel.css';

function App() {
  const [articlesDB, setArticles] = useState([]);
  const [login, setLogin] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const randKey = nanoid(5);

  // get articles from MongoDB
  const getPosts = () => {
    return fetch('/api/getArticles')
      .then((data) => data.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Błąd:', error));
  };

  useEffect(() => {
    getPosts();
  }, []);

  // show / hide addPostForm
  const showNewPostWindow = () => setShowNewPost(!showNewPost);

  return (
    <>
      <Header
        login={login}
        showNewPostWindow={showNewPostWindow}
        loginTopButton={() => setLogin(!login)}
        showNewPost={showNewPost}
      />
      <img src="img/wave.svg" className="wave" alt="blue wave" />
      {/* Section with all articles */}
      <section className="cd-timeline js-cd-timeline">
        <div className="container max-width-lg cd-timeline__container" id="blog_container">
          {articlesDB.map((article) => (
            <Article
              key={article.id}
              author={article.author}
              date={article.date}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
      </section>
      {/* Popup with add new post form after successful login */}
      {/* {showNewPost && ( */}
      <div className="add_content">
        <FormAddPost
          articles={articlesDB}
          updateBlogState={(newArticle) => setArticles(newArticle)}
          showNewPostWindow={showNewPostWindow}
          showNewPost={showNewPost}
          randKey={randKey}
          getPosts={getPosts}
          setArticles={setArticles}
          setShowNewPost={() => setShowNewPost(!showNewPost)}
        />
      </div>
      {/* )} */}
    </>
  );
}

export default App;
