import { Component, ViewChild } from '@angular/core';
import { NgxTuiCalendarComponent } from 'ngx-tui-calendar';
import { BeforeCreateScheduleEvent } from 'ngx-tui-calendar/lib/Models/Events';
import { Schedule } from 'ngx-tui-calendar/lib/Models/Schedule';

@Component({
	selector: 'app-calendar',
	templateUrl: 'calendar.component.html',
})
export class AppCalendarComponent implements OnInit {
  
	title = 'app';


	

	@ViewChild('calendar') calendar: NgxTuiCalendarComponent;
  schedules: Schedule[];

	calendarViews = [
		{ value: '0', name: 'month' },
		{ value: '1', name: 'week' },
		{ value: '2', name: 'day' }
	];

	defaultView = 'week';

	constructor() {
  }

  ngOnInit(): void {
		// this.calendar.
    this.schedules = [
      {
        id: '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'time',
        dueDateClass: 'error',
        start: (new Date()),
        end: (new Date(Date.now() + 96000000)),
				bgColor: 'red',
				font
      },
      {
        id: '2',
        calendarId: '2',
        title: 'Minha dieta',
        category: 'time',
        dueDateClass: 'error',
        start: (new Date(Date.now() + 96000000)),
        end: (new Date(Date.now() + 960000000))
      }
    ]
  }

  onTuiCalendarCreate($event) {
		/* at this point the calendar has been created and it's methods are available via the ViewChild defined above, so for example you can do: */
		this.calendar.createSchedules([
			/* populated schedules array goes here*/
		]);
	}

  onBeforeCreateSchedule(event: BeforeCreateScheduleEvent) {
    console.log('beforeCreateScheduleEvent', event);
  }

  onDate(date) {
    console.log('onDate', date);
  }

  onTime(dateTime) {
    console.log('dateTime', dateTime);
  }

	onSchedule(schedule) {
		console.log('schedule', schedule);
	}

	onDateChange($event) {
		this.calendar.setDate(new Date($event.target.value));
	}

	onCalendarToday() {
		this.calendar.today();
	}

	onCalendarNext() {
		this.calendar.next();
	}

	onCalendarPrev() {
		this.calendar.prev();
	}

	onChangeCalendarView($event) {
		this.calendar.changeView(this.calendarViews.find(view => view.value === $event.target.value).name);
	}

} 