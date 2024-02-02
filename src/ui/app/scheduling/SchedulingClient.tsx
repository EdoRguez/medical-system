import { Fragment } from "react";
import { Calendar, Views, dayjsLocalizer } from 'react-big-calendar'

const SchedulingClient = () => {
    const { components, defaultDate, max, views } = useMemo(
        () => ({
          components: {
            timeSlotWrapper: ColoredDateCellWrapper,
          },
          defaultDate: new Date(2015, 3, 1),
          max: dayjs().endOf('day').subtract(1, 'hours').toDate(),
          views: Object.keys(Views).map((k) => Views[k]),
        }),
        []
      )

      return (
        <Fragment>
          <div className="height600" {...props}>
            <Calendar
              components={components}
              defaultDate={defaultDate}
              events={events}
              localizer={djLocalizer}
              max={max}
              showMultiDayTimes
              step={60}
              views={views}
            />
          </div>
        </Fragment>
      )
}

export default SchedulingClient;