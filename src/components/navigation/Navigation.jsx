import React from "react";
import moment from "moment/moment.js";
import { days } from "../../utils/dateUtils.js";
import PropTypes from "prop-types";

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        if (
          moment(dayDate).format("YYYY/MM/DD") == moment().format("YYYY/MM/DD")
        ) {
          return (
            <div
              className="calendar__day-label selected__day-label"
              key={dayDate}
            >
              <span className="selected__day-label__day-name">
                {days[dayDate.getDay()]}
              </span>
              <span className="selected__day-label__day-number">
                {dayDate.getDate()}
              </span>
            </div>
          );
        } else {
          return (
            <div className="calendar__day-label day-label" key={dayDate}>
              <span className="day-label__day-name">
                {days[dayDate.getDay()]}
              </span>
              <span className="day-label__day-number">{dayDate.getDate()}</span>
            </div>
          );
        }
      })}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
