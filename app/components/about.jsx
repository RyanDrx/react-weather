var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">
                About
            </h1>
            <p>
                This is a weather app built using React.js and Foundation CSS. 
            </p>
            <p>
                Weather provided by the Weather API at OpenWeatherMap.org.
            </p>
            <p> Tools used:</p>
            <ul>
                <li>
                    <a href='http://foundation.zurb.com'>Foundation</a> - Responsive CSS Framework
                </li>
                <li>
                    <a href='https://facebook.github.io/react/'> React.js</a> - Javascript Framework
                </li>
                <li>
                    <a href='https://github.com/RyanDrx/react-weather'>GitHub </a>For this Site
                </li>
                <li>
                    <a href="http://openweathermap.org/">OpenWeatherMap</a> - used to search for weather data by city.
                 </li>
            </ul>
        </div>
    )
}

module.exports = About;