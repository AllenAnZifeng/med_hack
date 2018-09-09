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
        nowIndicator:'true',
        aspectRatio:'1.6',
        events:[{
            title:'Bloating',
            start:'2018-09-08T21:30:00',
            end:'2018-09-08T22:30:00'
        }]
    })

});

var calendar = $('#calendar').fullCalendar('getCalendar');