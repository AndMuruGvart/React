import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../Icons/IconAnon';
import { EColor, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}



export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a 
      href="https://www.reddit.com/api/v1/authorize?client_id=BA_9dzUzJI0Ue2b_3VC81A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}>
      <div className={styles.avatarBox}>
       {avatarSrc
        ?<img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        :<IconAnon/>
       }

      </div>
      <div className={styles.username}>
        <Break size={12}/>
       <Text size={20} color={username? EColor.black: EColor.grey99}> {username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
