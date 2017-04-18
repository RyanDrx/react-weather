var React = require('react');

var WeatherMessage = ({ location, temp }) => {
    return (
        <div id='WeatherMessage'>
            <h3>The temperature in {location} is currently {temp}</h3>
        </div>
    );
}

module.exports = WeatherMessage;