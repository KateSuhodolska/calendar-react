import React, { useState } from "react";
import Popup from "../popup/Popup";
import PropTypes from "prop-types";
import "./event.scss";

const Event = ({ height, marginTop, title, time, id, fetchEvents }) => {
  const [popupIsOpen, setPopupState] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const openPopup = () => {
    setPopupState(true);
  };

  return (
    <div style={eventStyle} className="event" onClick={openPopup}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {popupIsOpen === true && (
        <Popup idToDelete={id} fetchEvents={fetchEvents} />
      )}
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Event;
