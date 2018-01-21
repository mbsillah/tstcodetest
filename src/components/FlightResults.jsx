import React, { Component } from 'react';
import Result from './Result'
import axios from 'axios'

class FlightResults extends Component {

    //set initial state

    state = {
        searchCriteria: {},
        results: [],
        toggleAirportDetails: false
    };

    //makes axios call to set state and ready the DOM for the .map process

    componentWillMount() {
        axios.get('https://api.myjson.com/bins/1gb9tf')
            .then((res) => {
                this.setState({
                    searchCriteria: res.data.searchCriteria,
                    results: res.data.results
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //the render component will map through each result and make a new component for each result

    render() {
        return (
            <div>
                <h2 className="searchTitle">Displaying flights from {this.state.searchCriteria.departureLocation} to {this.state.searchCriteria.arrivalLocation}</h2>
                {this.state.results.map(result => {
                    return (
                        <Result key={result.id} result={result} />
                    )
                })}
            </div>
        );
    }
}

export default FlightResults;