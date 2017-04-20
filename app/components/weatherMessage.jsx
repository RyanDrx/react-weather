var React = require('react');

var WeatherMessage = ({ location, temp }) => {
    return (
        <div id='WeatherMessage'>
            <h3 className="text-center">The temperature in <u>{location}</u> is currently {temp}&deg;F</h3>
        </div>
    );
}

module.exports = WeatherMessage;