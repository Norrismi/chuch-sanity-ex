export default {
    name: 'event',
    tile: 'Event',
    type: 'document',
    fields: [
        {
            title: 'Event Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Event Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Time and Date',
            name: 'TimeDate',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD-YY',
                timeFormat: 'HH:mm',
                timeStep: 5,
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'Event Picture',
            name: 'picture',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },

        },
        {
            title: 'slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100
            }
        },
        {
            title: 'id',
            name: 'ID',
            type: 'number',

        },

    ]
}


