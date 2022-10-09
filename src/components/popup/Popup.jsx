import React from "react";
import { deleteEvent } from "../../gateway/events";
import "./popup.scss";

const Popup = ({ fetchEvents, idToDelete }) => {
  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId).then(() => fetchEvents());
  };
  return (
    <div className="popup">
      <div className="popup__content">
        <button
          className="delete-event-btn"
          onClick={() => handleDeleteEvent(idToDelete)}
        >
          <i className="fas fa-trash delete-event-btn__icon"></i>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Popup;
