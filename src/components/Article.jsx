import { format } from '@formkit/tempo';
import { useEffect, useRef, useState } from 'react';

export const Article = ({ author, date, title, content, picture, index = 0 }) => {
  const addPostDate = format(date, 'medium');
  const [isVisible, setIsVisible] = useState(false);
  const articleRef = useRef(null);

  // Use Intersection Observer to detect when article enters viewport
  useEffect(() => {
    const element = articleRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  // Calculate animation delay based on index
  const animationDelay = Math.min(index * 0.1, 1);

  return (
    <div
      ref={articleRef}
      className={`cd-timeline__block ${isVisible ? 'article-visible' : 'article-hidden'}`}
      style={{ '--animation-delay': `${animationDelay}s` }}
    >
      <div
        className={`cd-timeline__img cd-timeline__img--picture ${author === 'Indi' && 'paw_bg-yellow'}`}
        data-content="Indi"
      >
        <img src="img/paw.svg" alt="paw" />
      </div>

      <div className="cd-timeline__content text-component">
        <h2>{title}</h2>
        <span>{author}</span>
        <p className="color-contrast-medium">{content}</p>

        {picture && <img src={picture} alt="image from this article" />}

        <div className="flex justify-between items-center">
          <span className="cd-timeline__date">{addPostDate}</span>
        </div>
      </div>
    </div>
  );
};
