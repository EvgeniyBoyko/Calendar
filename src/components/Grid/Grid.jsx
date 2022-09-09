import React from 'react';

import moment from 'moment/moment';

import s from './Grid.module.css';

const Grid = ({ start }) => {
  const totalDays = 42;
  const day = start.clone();
  const dayArr = [...Array(42)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');

  return (
    <div className={s.grid}>
      {dayArr.map((item) => (
        <div key={item.format('DDMMYYYY')} className={s.gridItem}>
          <div className={s.dayItem}>
            {!isCurrentDay(item) && item.format('D')}
            {isCurrentDay(item) && <div className={s.currentDay}>{item.format('D')}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
