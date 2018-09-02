import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export class WeatherList extends Component{

    // average(data) {
    //     return _round(_.sum(data)/data.length);
    // }

    renderWeather(cityData){
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        return(
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="blue" units="K"/></td>
                <td><Chart data={humidities} color="green" units="hPa" /></td>
                <td><Chart data={pressures} color="black" units="%"/></td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){ // const weather = state.weather
    return { weather }; //{weather } == { weather: weather}
}

export default connect(mapStateToProps)(WeatherList)