import React from 'react';

import moment from 'moment/moment';

import s from './Grid.module.css';

const Grid = ({ start, events }) => {
  const totalDays = 42;
  const day = start.clone();
  const dayArr = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  // console.log(events);

  const arrEvents = [...Array(events)];

  console.log(arrEvents);
  return (
    <div className={s.grid}>
      {dayArr.map((item) => (
        <div key={item.unix()} className={s.gridItem}>
          <div className={s.dayItem}>
            {isCurrentDay(item) ? <div className={s.currentDay}>{item.format('D')}</div> : item.format('D')}
          </div>
          <ul className={s.list}>
            {arrEvents
              .filter((event) => event.date >= item.format('X') && event.date <= item.clone().endOf('day').format('X'))
              .map((event) => (
                <li className={s.list_item} key={event.date}>
                  <button className={s.list_item_btn}>{event.title}</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Grid;
