/**
 * Created by Palaparthi on 8/26/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lng;
        const {lon, lat}  = cityData.city.coord;
        console.log(temps);
        return(
            <tr key = {name}>
                <td> <GoogleMap lon = {lon} lat = {lat} /> </td>
                <td>
                    <Chart data={temps} flag={true} units="F" color="orange"/>
                </td>
                <td>
                    <Chart data={pressures} flag={false} units="hPa" color="green"/>
                </td>
                <td>
                    <Chart data={humidities} flag={false} units="%" color="blue"/>
                </td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (F)</th>
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

// ES6 equivalent
function mapstateToProps({weather}){
    return {weather}; // {weather} === {weather:weather}

}
// ES5 equivalent
/*function mapStateToProps(state) {
    return {weather: state.weather};
}*/

export default connect(mapstateToProps)(WeatherList);


