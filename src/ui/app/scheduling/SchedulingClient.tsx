"use client";

import SimpleCard from "../components/cards/SimpleCard";
import SchedulingCalendar from "../components/fullcalendar/SchedulingCalendar";

const SchedulingClient = () => {
  return (
    <SimpleCard>
      <SchedulingCalendar />
    </SimpleCard>
  );
};

export default SchedulingClient;