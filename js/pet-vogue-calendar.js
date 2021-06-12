// 使用其他的id直接把樣式生成，再使用css 去控制 media 讓區塊分別顯示
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar-xs');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridFourDay',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 1 },
        buttonText: '1 day'
      }
    },
    displayEventTime: false,
    slotMinTime : '09:00:00',
    slotMaxTime : '18:00:00',
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },

  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');

  var calendarEl = document.getElementById('calendar-sm');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridFourDay',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 4 },
        buttonText: '4 day'
      }
    },
    displayEventTime: false,
    slotMinTime : '09:00:00',
    slotMaxTime : '18:00:00',
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },

  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');

  var calendarEl = document.getElementById('calendar-md');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridWeek',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    eventTimeFormat: {
      hour: 'numeric',
      meridiem: 'short',
    },
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },

  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');
  
  var calendarEl = document.getElementById('calendar-lg');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'title',
      right: 'prev,next today'
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },
  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');

  
});
// 行事曆