import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { CommentFormContainer } from '../CommentFormContainer/CommentFormContainer';
import { Comments } from './Comments';
import styles from './post.css';




export function Post() {
  const ref=useRef<HTMLDivElement>(null);
  const history=useHistory();

  useEffect(() => {
    function handleClick(event:MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/posts');
      }
    }

    document.addEventListener('click', handleClick) 
    return () => {
      document.removeEventListener('click', handleClick); 
    }
  }, [])
  
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal ((
    <div  className={styles.modal} ref={ref}>
      <h2>Следует отметить, что новая модель организациии деятельности поможет</h2>
      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
      </div>
      <CommentFormContainer/>
      {/* <Comments/> */}
    </div>
  ), node);
}
