var React = require('react');
var Nav = require('Nav');



var Main = (props) => {
    return (
        <div id='weather-app' >
            <Nav></Nav>
            {props.children}
        </div>
    )
}

module.exports = Main;