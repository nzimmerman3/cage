import React from 'react'
import Event from './Event'
function EventsList() {
    const events = [
        {
            date: '09-05-2021',
            venue: 'Bottlerock',
            city: 'Napa',
            country: 'CA',
            onSale: 'N'
        },
        {
            date: '09-10-2021',
            venue: 'Beachlife Festival',
            city: 'Redondo Beach',
            country: 'CA',
            onSale: 'Y'
        },
        {
            date: '09-23-2021',
            venue: 'Harrisburg University, Riverfront Park',
            city: 'Harrisburg',
            country: 'PA',
            onSale: 'Y'
        },
        {
            date: '09-24-2021',
            venue: 'Firefly Music Festival',
            city: 'Dover',
            country: 'DE',
            onSale: 'N'
        },
        {
            date: '09-26-2021',
            venue: 'Pilgrimage Festival',
            city: 'Franklin',
            country: 'TN',
            onSale: 'Y'
        },
        {
            date: '02-09-2021',
            venue: 'Pryzm Presented by Banquet Records',
            city: 'Kingston',
            country: 'United Kingdom',
            onSale: 'N'
        },
        {
            date: '02-09-2021',
            venue: 'Pryzm Presented by Banquet Records',
            city: 'Kingston',
            country: 'United Kingdom',
            onSale: 'N'
        },
        {
            date: '02-14-2021',
            venue: 'Wardrobe Presented by Crash Records',
            city: 'Leeds',
            country: 'United Kingdom',
            onSale: 'Y'
        },
        {
            date: '02-09-2021',
            venue: 'Pryzm Presented by Banquet Records',
            city: 'Kingston',
            country: 'United Kingdom',
            onSale: 'N'
        },
        {
            date: '02-14-2021',
            venue: 'Wardrobe Presented by Crash Records',
            city: 'Leeds',
            country: 'United Kingdom',
            onSale: 'Y'
        }
    ]
    const eventsList = events.map(event => <Event event={event}/>)
    return (
        <div>
            {eventsList}
        </div>
    )
}

export default EventsList