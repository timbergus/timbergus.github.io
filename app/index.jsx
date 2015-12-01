//import reset from './styles/reset.styl';
import layout from './styles/layout.styl';
import colors from './styles/colors.styl';
import variables from './styles/variables.styl';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router'),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Link = Router.Link,
    Marked = require('marked');

var MyComponent = React.createClass({
    // This is useful to get the default props object we want
    // to pass to the component.
    getDefaultProps: function() {
        return {
            txt: 'default message...'
        };
    },
    // This object defines the variables types and characteristics.
    propTypes: {
        txt: React.PropTypes.string.isRequired
    },
    // This gets the initial state of the state object.
    getInitialState: function() {
        return {
            txt: 'state message...'
        };
    },
    // This is a custom function to update the contents of the state.
    // To change the state, we need to use setState() function.
    update: function () {
        setTimeout(function () {
            this.setState({
                txt: 'new state message :)'
            });
        }.bind(this), 5000);
    },
    // This function is called only once when the component is
    // rendered.
    componentDidMount: function() {
        this.update();
    },
    // This function returns the template of the component that
    // tells the parent how to render it.
    render: function () {
        return (
            <div>
                <h1>Timbergus Site Under Construction!</h1>
                <p>This is a {this.props.txt}</p>
                <p>This is a {this.state.txt}</p>
            </div>
        );
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('body'));
