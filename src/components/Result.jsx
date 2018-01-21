import React, { Component } from 'react';
import FlightDetails from './FlightDetails'

class Result extends Component {

    //sets state to control the toggling of flight details

    state = {
        toggleDetails: false
    }


    //this function controls the changing state of each search result. Displaying important flight information when the "Details" button is clicked
    toggleDetails = () => {
        this.setState({ toggleDetails: !this.state.toggleDetails })
    }

    render() {

        const timeConvert = (n) => {
            const minutes = n % 60
            const hours = (n - minutes) / 60
            return `${hours} hours & ${minutes} mins`
        }

        return (
            <div className="flight">
                <div className='bigPrice'>
                    {!this.state.toggleDetails ? <h2>{this.props.result.price.symbol + this.props.result.price.amount}</h2> : null}
                </div>
                {this.props.result.segments.map(segment => {
                    return (
                        <div>
                            <p>
                                <img src={segment.airline.logoURL} alt={segment.airline.name} className="airlineImg" />
                                <span className="title">Departing From:</span> {segment.departure.airport.value} ({segment.departure.city}, {segment.departure.region})
                            <br />
                                {this.state.toggleDetails ?
                                    <span>
                                        <span className='miniTitle'>Airport: </span>{segment.departure.airport.name} <br />
                                    </span> : null}
                                <span className="title">Arriving At:</span> {segment.arrival.airport.value} ({segment.arrival.city}, {segment.arrival.region})
                                <br />
                                {this.state.toggleDetails ?
                                    <span>
                                        <span className='miniTitle'>Airport: </span>{segment.arrival.airport.name} <br />
                                        <span className='miniTitle'>Flight Number: </span>{segment.flightNumber}<br />
                                        {this.props.result.segments.length >= 2 ? <span><span className='miniTitle'>Duration: </span>{timeConvert(segment.duration)}</span> : null}
                                    </span> : null}
                                {this.state.toggleDetails ? <span></span> : null}
                            </p>

                        </div>
                    )
                })}
                {this.state.toggleDetails ? <FlightDetails flight={this.props.result} /> : null}
                {this.state.toggleDetails ? <button onClick={this.toggleDetails}>Hide Details</button> : <button onClick={this.toggleDetails}>Details</button>}
            </div>
        )
    }
}

export default Result;