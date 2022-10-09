import React, { useState, useEffect } from "react";
import "./redline.scss";

const RedLine = () => {
  const [top, setTop] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => setTop(new Date().getMinutes()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="decorate-red-line" style={{ top }}></div>;
};

export default RedLine;
