import React from 'react';

import moment from 'moment/moment';

import Grid from '../Grid';
import Controller from '../Controller';
import NameDay from '../NameDay';

const Calendar = () => {
  const today = moment();

  const start = today.clone().startOf('month').startOf('week');

  return (
    <div>
      <Controller today={today} />
      <NameDay />
      <Grid start={start} />
    </div>
  );
};

export default Calendar;
