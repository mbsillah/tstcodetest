import React from 'react';

const FlightDetails = (props) => {

    const timeConvert = (n) => {
        const minutes = n % 60
        const hours = (n - minutes) / 60
        return `${hours} hours & ${minutes} mins`
    }

    const layoverTime = (n) => {
        if (props.flight.segments.length <= 1) {
            return 'None'
        } else {
            return timeConvert(n)
        }
    }

    //Extra details for the flights will appear when the user clicks on the Details button

    return (
        <div>
            <span className='miniTitle'>Class: </span>{props.flight.segments[0].bookingClass}<br />
            <span className='miniTitle'>Fare: </span>{props.flight.price.symbol + props.flight.price.amount}<br />
            <span className='miniTitle'>Availabilty: </span>{props.flight.availability} left<br />
            <span className='miniTitle'>Stops: </span>{props.flight.stops}<br />
            {props.flight.segments.length <= 1 ? null :
                <span><span className='miniTitle'>Layover Time: </span>{layoverTime(props.flight.segments[props.flight.segments.length - 1].layoverDuration)}</span>}<br />
            <span className='miniTitle'>Total Flight(s) Time: </span>{timeConvert(props.flight.duration)}<br />
        </div>
    );
};

export default FlightDetails;