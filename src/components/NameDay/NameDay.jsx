import React from 'react';
import s from './NameDay.module.css';

const NameDay = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>Mon</li>
        <li className={s.item}>Tue</li>
        <li className={s.item}>Wed</li>
        <li className={s.item}>Thu</li>
        <li className={s.item}>Fri</li>
        <li className={s.item}>Sat</li>
        <li className={s.item}>Sun</li>
      </ul>
    </div>
  );
};

export default NameDay;
