import React, { useContext, useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { userContext } from '../../Context/userContext';



export function SearchBlock() {
  const { name, iconImage}=useContext(userContext);
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImage} username={name}/>
    </div>
  );
}
