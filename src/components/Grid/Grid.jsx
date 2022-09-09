import React from 'react';

import moment from 'moment/moment';

import s from './Grid.module.css';

const Grid = ({ start, openEvents }) => {
  const totalDays = 42;
  const day = start.clone();
  const dayArr = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');

  return (
    <div className={s.grid}>
      {dayArr.map((item) => (
        <div key={item.unix()} className={s.gridItem} onClick={() => openEvents('open')}>
          <div className={s.dayItem}>
            {isCurrentDay(item) ? <div className={s.currentDay}>{item.format('D')}</div> : item.format('D')}
          </div>
          <div>
            {/* <div>start: {item.format('X')}</div> */}
            {/* <div>
              {events.filter(
                (event) => event.date >= item.format('X') && event.date <= item.clone().endOf('day').format('X'),
              )}
            </div> */}
            {/* <div>end: {item.clone().endOf('day').format('X')}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
