'use client';

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import SimpleCard from '../components/Cards/SimpleCard';

const SchedulingClient = () => {
  return (
    <SimpleCard>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        selectable={true}
        
      />
    </SimpleCard>
  )
};

export default SchedulingClient;
