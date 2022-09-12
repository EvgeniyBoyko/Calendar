import React from 'react';

import s from './Controller.module.css';

const Controller = ({ today, leftHandler, rightHandler, changeMonthHandler, setOpen }) => {
  return (
    <div className={s.ControllerBox}>
      <button type="button" className={s.addIvent} onClick={() => setOpen(true)}>
        &#43;
      </button>
      <div className={s.DatePickerBox}>
        <div className={s.monthBox}>
          <span className={s.month}>{today.format('MMMM')}</span>
          <span className={s.year}>{today.format('YYYY')}</span>
        </div>
        <button type="button" className={s.button} onClick={leftHandler}>
          &lt;
        </button>
        <button type="button" className={s.button} onClick={rightHandler}>
          &gt;
        </button>
        <button type="button" className={s.DatePicker} onClick={changeMonthHandler}>
          &#128197;
        </button>
      </div>
    </div>
  );
};

export default Controller;
