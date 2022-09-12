import React, { useState, useEffect } from 'react';

import moment from 'moment/moment';

import s from './Modal.module.css';

const Modal = ({ setOpen, today }) => {
  const [happening, setHappening] = useState({
    title: '',
    description: '',
    date: moment().format('X'),
  });

  useEffect(() => {
    localStorage.setItem('happening', JSON.stringify(happening));
  }, [happening]);

  //   const [events, setEvents] = useState([]);

  //   useEffect(() => {
  //     const save = localStorage.getItem('happening');
  //     const arr = JSON.parse(save);
  //     setEvents(arr);
  //   }, [today]);

  //   console.log(setEvent());
  return (
    <div className={s.modal} onClick={() => setOpen(false)}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <form>
          <label>
            <input
              type="text"
              placeholder="input title"
              onChange={(e) => {
                setHappening({ ...happening, title: e.currentTarget.value });
              }}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="input description"
              onChange={(e) => {
                setHappening({ ...happening, description: e.currentTarget.value });
              }}
            />
          </label>
        </form>
        <div>
          <button>Save</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
