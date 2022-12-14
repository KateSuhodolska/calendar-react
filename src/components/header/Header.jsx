import React from "react";
import { getDisplayedMonth } from "../../utils/dateUtils";
import PropTypes from "prop-types";
import "./header.scss";

const Header = ({
  handleTodayButton,
  prevWeek,
  nextWeek,
  weekStartDate,
  openModal,
}) => {
  return (
    <>
      <header className="header">
        <button className="button create-event-btn" onClick={openModal}>
          <i className="fas fa-plus create-event-btn__icon"></i>
          Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={handleTodayButton}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={prevWeek}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={nextWeek}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">
            {getDisplayedMonth(weekStartDate)}
          </span>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  handleTodayButton: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
  weekStartDate: PropTypes.object,
  openModal: PropTypes.func.isRequired,
};

export default Header;
