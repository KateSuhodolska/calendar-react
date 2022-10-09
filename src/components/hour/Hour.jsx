import React from "react";
import Event from "../event/Event";
import RedLine from "../redline/RedLine";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ dataHour, hourEvents, fetchEvents, dataDay }) => {
  const dataDayIsNow = new Date().getDate() === dataDay ? true : false;
  let redLine;
  if (new Date().getHours() === dataHour && dataDayIsNow) {
    redLine = <RedLine />;
  } else redLine = null;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {redLine}
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
            //calculating event height = duration of event in minutes
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

export default Hour;
