import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { commentContext } from '../Context/commentContext';
import { replyContext } from '../Context/replyContext';
import styles from './commentform.css';

export function CommentForm() {
  const {value, onChange}=  useContext(commentContext)

  function handleChange(event:ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}> 
       <textarea className={styles.input} value={value} onChange={handleChange} /> 
       <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}

export function CommentForm2() {
  const {value, onChange}=  useContext(replyContext)

  function handleChange2(event:ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit2(event:FormEvent) {
    event.preventDefault();
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit2}> 
       <textarea className={styles.input} value={value} onChange={handleChange2} /> 
       <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}


