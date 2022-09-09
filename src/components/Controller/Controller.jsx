import React from 'react';

import s from './Controller.module.css';

const Controller = ({ today }) => {
  return (
    <div className={s.ControllerBox}>
      <div className={s.monthBox}>
        <span className={s.month}>{today.format('MMMM')}</span>
        <span className={s.year}>{today.format('YYYY')}</span>
      </div>
      <div className={s.DatePickerBox}>
        <button className={s.button}>&lt;</button>
        <button className={s.button}>&gt;</button>
        <button className={s.DatePicker}>&#128197;</button>
      </div>
    </div>
  );
};

export default Controller;
