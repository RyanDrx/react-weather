var React = require('react');

var WeatherForm = React.createClass({
    onWeatherFormSubmit: function (e) {
        e.preventDefault();

    
        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div id="weatherForm">
                <form onSubmit={this.onWeatherFormSubmit}>
                    <div>
                        <input type="text" ref="location" placeholder="enter city name" />
                    </div>
                    <div>
                       <input type="submit" className="button" value="Get weather" />
                    </div>
                </form>
            </div>
        );
    }
})

module.exports = WeatherForm;