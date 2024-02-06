"use client";

import "./SchedulingCalendar.css";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import multiMonthPlugin from '@fullcalendar/multimonth'

const SchedulingCalendar = () => {

  return (
    <FullCalendar
      plugins={[dayGridPlugin, multiMonthPlugin]}
      initialView="dayGridMonth"
      selectable={true}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,multiMonthYear'
      }}
    />
  );
};

export default SchedulingCalendar;
