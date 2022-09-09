import React, { useState } from 'react';

import moment from 'moment/moment';

import Grid from '../Grid';
import Controller from '../Controller';
import NameDay from '../NameDay';

const Calendar = () => {
  const [today, setToday] = useState(moment());
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState(null);

  const start = today.clone().startOf('month').startOf('week');

  const leftHandler = () => setToday((prev) => prev.clone().subtract(1, 'month'));

  const rightHandler = () => setToday((prev) => prev.clone().add(1, 'month'));

  const changeMonthHandler = () => console.log('change month');

  const openEvents = (metod, event) => {
    console.log('click', metod);
    setEvents(event);
  };

  return (
    <div>
      {isOpen ? <div>FORM</div> : null}
      <Controller
        today={today}
        leftHandler={leftHandler}
        rightHandler={rightHandler}
        changeMonthHandler={changeMonthHandler}
      />
      <NameDay />
      <Grid start={start} openEvents={openEvents} />
    </div>
  );
};

export default Calendar;
