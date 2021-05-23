import React from 'react'
import Event from './Event'
function EventsList() {
    const events = [
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