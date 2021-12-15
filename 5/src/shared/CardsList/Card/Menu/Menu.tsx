import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { merge } from '../../../../utils/js/merge';
import { generateId, generateRandomString } from '../../../../utils/react/generateRandomString';
import { GenericList } from '../../../GenericList';
import { pipe } from '../../../../utils/react/pipe';
import { preventDefault } from '../../../../utils/react/preventDefault';
import { stopPropagation } from '../../../../utils/react/stopPropagation';

const LIST = [
  {As: 'div' as const, text: 'Комментарии'},
  {As: 'div' as const, text: 'Поделиться'},
  {As: 'div' as const, text: 'Скрыть'},
  {As: 'div' as const, text: 'Сохранить'},
  {As: 'div' as const, text: 'Пожаловаться'},
  {As: 'div' as const, text: 'Закрыть'}
].map(generateId)


export function Menu() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick=(id:string) => {
    setList(list.filter((item) => item.id!==id))
  } 

  const handleAdd = () => {
    setList(list.concat(generateId({text: generateRandomString(), As: 'div' as const})))
  }

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
          </button>
        }
      >
        <button onClick={pipe(preventDefault, stopPropagation, handleAdd)}>Add Element</button>
        <div className={styles.dropdown}></div>
        
        <ul>
          {/* <GenericList list={list.map(merge({onClick:handleItemClick}))} /> */}
          <GenericList  list={list} />
        </ul>
        
      </Dropdown>

    </div>
  );
}
