import React, { useState } from 'react';
import { Post } from '../../../Post';
import styles from './textcontent.css';

export function TextContent() {
  
  const [isModalOpen, setIsModalOpen]=useState(false);
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src="https://cdn.dribbble.com/users/515705/screenshots/17007178/media/9728b7b1c4fcde61b84aca5b6ab01ebf.jpg" alt="avatar" />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink} onClick={()=>{setIsModalOpen(true)}}>
        Следует отметить, что новая модель организационной деятельности.Следует отметить, что новая модель организационной деятельности.
        </a>
        {isModalOpen && (
          <Post  onClose={()=> {setIsModalOpen(false)}}/> 
        )
        }
      </h2>
    </div>
  );
}
