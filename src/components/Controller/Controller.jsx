import React from 'react';

import s from './Controller.module.css';

const Controller = ({ today, leftHandler, rightHandler, changeMonthHandler }) => {
  return (
    <div className={s.ControllerBox}>
      <div className={s.monthBox}>
        <span className={s.month}>{today.format('MMMM')}</span>
        <span className={s.year}>{today.format('YYYY')}</span>
      </div>
      <div className={s.DatePickerBox}>
        <button className={s.button} onClick={leftHandler}>
          &lt;
        </button>
        <button className={s.button} onClick={rightHandler}>
          &gt;
        </button>
        <button className={s.DatePicker} onClick={changeMonthHandler}>
          &#128197;
        </button>
      </div>
    </div>
  );
};

export default Controller;
