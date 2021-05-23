import React from 'react'

function Event({event}) {
    return (
        <div>

            <div id="outerDiv" class="event row no-gutter center-block vert-center">
              <div class="col-lg-7 no-gutter vert-center">

                <div class="col-lg-4 ">
                  <div>{getParsedDate(event.date)}</div>
                </div>
                <div class="col-lg-8">
                  <div>{event.venue}</div>
                </div>

              </div>
              <div class="col-lg-5 no-gutter vert-center">
                
                <div class="col-lg-7 gutter">
                  <div>{event.city}, {event.country}</div>
                </div>
                <div class="col-lg-5 gutter">
                  {/* <div class="col-lg-12"> */}
                    {getButton(event.onSale)}
                  {/* </div> */}
                </div>

              </div>
            </div>
            
        </div>
    )
}

function getButton(onSale) {
    switch (onSale) {
        case 'Y':
            return <button type="button" class="btn btn-default btn-xl">Get Tickets</button>
            break;
        case 'N':
            return <button type="button" class="btn btn-default btn-xl">Sold Out</button>
            break;
        }
}

function getParsedDate(strDate) {
    var date = new Date(strDate);
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    switch (mm) {
        case 1:
            mm = 'January';
            break;
        case 2:
            mm = 'February';
            break;
        case 3:
            mm = 'March';
            break;
        case 4:
            mm = 'April';
            break;
        case 5:
            mm = 'May';
            break;
        case 6:
            mm = 'June';
            break;
        case 7:
            mm = 'July';
            break;
        case 8:
            mm = 'August';
            break;
        case 9:
            mm = 'September';
            break;
        case 10:
            mm = 'October';
            break;
        case 11:
            mm = 'November';
            break;
        case 12:
            mm = 'December';
            break;
    }
    date =  dd + "th " + mm + " " + yyyy;
    return date.toString();
}

export default Event