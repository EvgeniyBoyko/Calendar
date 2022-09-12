import React, { useState, useEffect } from 'react';

import moment from 'moment/moment';

import Grid from '../Grid';
import Controller from '../Controller';
import NameDay from '../NameDay';
import Modal from '../Modal';

const Calendar = () => {
  const [today, setToday] = useState(moment());
  const [isOpen, setIsOpen] = useState(false);

  const start = today.clone().startOf('month').startOf('week');

  const leftHandler = () => setToday((prev) => prev.clone().subtract(1, 'month'));

  const rightHandler = () => setToday((prev) => prev.clone().add(1, 'month'));

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const save = localStorage.getItem('happening');
    const arr = JSON.parse(save);
    setEvents(arr);
  }, [today]);

  return (
    <div>
      <Controller today={today} leftHandler={leftHandler} rightHandler={rightHandler} setOpen={setIsOpen} />
      <NameDay />
      <Grid start={start} events={events} />
      {isOpen && <Modal open={isOpen} setOpen={setIsOpen} today={today} />}
    </div>
  );
};

export default Calendar;
