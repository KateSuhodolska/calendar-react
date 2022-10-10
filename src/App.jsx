import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import { fetchEventsList, createNewEvent } from "./gateway/events";
import {
  getWeekStartDate,
  generateWeekRange,
  getDateTime,
} from "../src/utils/dateUtils.js";
import moment from "moment/moment.js";
import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [modalIsOpen, setModalState] = useState(false);
  const [events, createNewEvents] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const handleTodayButton = () => {
    setWeekStartDate(new Date());
  };
  const handleNextWeek = () => {
    setWeekStartDate(new Date(moment(weekStartDate).add(7, "days").format()));
  };
  const handlePrevWeek = () => {
    setWeekStartDate(
      new Date(moment(weekStartDate).subtract(7, "days").format())
    );
  };

  const changeModalState = () => {
    setModalState(!modalIsOpen);
  };

  useEffect(() => {
    getEventsList();
  }, []);
  const getEventsList = () => {
    fetchEventsList().then((event) => createNewEvents(event));
  };
  const createEvent = (event, events) => {
    event.preventDefault();
    const { title, date, startTime, endTime, description } = events;
    createNewEvent({
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    }).then(() => getEventsList());
    changeModalState();
  };

  return (
    <>
      {modalIsOpen === true && (
        <Modal closeModal={changeModalState} createEvent={createEvent} />
      )}
      <Header
        handleTodayButton={handleTodayButton}
        prevWeek={handlePrevWeek}
        nextWeek={handleNextWeek}
        weekStartDate={weekDates[0]}
        openModal={changeModalState}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        fetchEvents={getEventsList}
      />
    </>
  );
};

export default App;
