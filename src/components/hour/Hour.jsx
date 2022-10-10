import React from "react";
import Event from "../event/Event";
import RedLine from "../redline/RedLine";
import { formatMins } from "../../../src/utils/dateUtils.js";
import PropTypes from "prop-types";

const Hour = ({ dataHour, hourEvents, fetchEvents, dataDay }) => {
  const dataDayIsNow = new Date().getDate() === dataDay ? true : false;
  const currentHour =
    new Date().getHours() === dataHour && dataDayIsNow ? true : false;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {currentHour && <RedLine />}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`;
        return (
          <Event
            key={id}
            id={id}
            height={
              (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
              (1000 * 60)
            }
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  dataDay: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Hour;
