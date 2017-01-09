import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import Chart from '../components/chart'
import GoogleMap from '../components/GoogleMapLoader'

class WeatherList extends Component {

    renderWeather (cityData)  {
        const name      = cityData.city.name
        const temps     = cityData.list.map( weather => weather.main.temp) 
        const pressure  = cityData.list.map( weather => weather.main.pressure)  
        const humidity     = cityData.list.map( weather => weather.main.humidity) 
        //const {lon, lat} = citData.city.coord
        // above is the destructing es6 sytax refactoring (easier for what's below)
        const lon           = cityData.city.coord.lon 
        const lat           = cityData.city.coord.lat
            // weather => weather.main.temps === function (weather) { return weather.main.temp }
        //console.log(GoogleMap)
        return (
            <tr key={ name }> // adding key has to be unique and top level element 
                <td><GoogleMap lon={lon} lat={lat}/></td> 
                <td> 
                   <Chart data= {temps} units='K' color='orange' /> 
                </td> 
                <td> 
                   <Chart data= {pressure}  units='hPa' color='black' /> 
                </td> 
                <td> 
                   <Chart data= {humidity}  units='%' color='green' /> 
                </td> 
            </tr>
        )
    }

    render () {
        return (
            <table className='table table-hover'> 
                <thead> 
                    <tr><th>City</th><th>Temperature</th><th>Pressure</th><th>Humidity</th></tr> 
                </thead> 
                <tbody> 
                    {this.props.weather.map(this.renderWeather)}
                </tbody> 
            </table> 
        )
    }
}

const mapStateToProps = ({weather}) => {
    return {weather}
}

export default connect (mapStateToProps)(WeatherList)