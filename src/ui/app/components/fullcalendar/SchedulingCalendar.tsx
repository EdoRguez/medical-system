"use client";

import "./SchedulingCalendar.css";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const SchedulingCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      selectable={true}
    />
  );
};

export default SchedulingCalendar;
