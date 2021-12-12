import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src=" https://cdn.dribbble.com/users/627451/screenshots/17005653/media/950814cf86e0b4085f6c406deef9de06.png?compress=1&amp;resize=800x600" alt="picture" />
    </div>
  );
}
