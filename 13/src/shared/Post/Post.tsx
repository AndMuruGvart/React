import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentFormContainer } from '../CommentFormContainer/CommentFormContainer';
import { Comments } from './Comments';
import styles from './post.css';

interface IPost {
  onClose?: () => void;
  text?:string;
  title?:string;
}


export function Post(props:IPost) {
  const ref=useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event:MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
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
      <h2>{props.title}</h2>
      <div className={styles.content}>
        <p>{props.text}</p>
      </div>
      <CommentFormContainer/>
      {/* <Comments/> */}
    </div>
  ), node);
}
