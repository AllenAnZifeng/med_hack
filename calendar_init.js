'use strict';
$(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'month, list, agenda',
            center: 'title',
            right: 'today, prev, next'
        },
        themeSystem: 'bootstrap4',
        buttonText: {
            prev: '< Previous',
            next: 'Next >',
            today: 'Today',
            month: 'Month',
            list: 'List',
            agenda: 'Agenda'
        },
        selectable:'true',
        nowIndicator:'true'
    })

});

var calendar = $('#calendar').fullCalendar('getCalendar');