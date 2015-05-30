var React = require('react'),
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
        txt: React.PropTypes.string.isRequired,
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
                <h1>Hello World!</h1>
                <p>This is a {this.props.txt}</p>
                <p>This is a {this.state.txt}</p>
            </div>
        );
    }
});

React.render(<MyComponent />, document.querySelector('div.example1'));




// Example 3.

/*var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="comment box">
                I am a CommentBox created by { this.props.name || 'Gustavo' }.
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var rawMarkup = Marked('__CommentList__', { sanitize: true });
        return (
            <div className="comment list">
                I am a <span className="inline" dangerouslySetInnerHTML={{ __html: rawMarkup }} />.
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        var rawMarkup = Marked('__CommentForm__', { sanitize: true });
        return (
            <div className="comment form">
                I am a <span className="inline" dangerouslySetInnerHTML={{ __html: rawMarkup }} />.
            </div>
        );
    }
});

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Comments</h1>
                <CommentBox name="Gustavo Muñoz" />
                <CommentBox name="Perico el de los Palotes" />
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

var NotFound = React.createClass({
    render: function () {
        return (
            <div className="comment box">404</div>
        );
    }
});

var Nav = React.createClass({
    render: function () {
        return (
            <ul className="navigation">
                <li><Link activeClassName="active" to="home">Home</Link></li>
                <li><Link activeClassName="active" to="box">Box</Link></li>
                <li><Link activeClassName="active" to="list">List</Link></li>
                <li><Link activeClassName="active" to="form">Form</Link></li>
            </ul>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="title">Comments</h1>
                <Nav />
                <RouteHandler />
            </div>
        );
    }
});

var routes = (
  <Route path="/" handler={ App }>
    <DefaultRoute handler={ Home } />
    <Route name="home" path="/" handler={ Home } />
    <Route name="box" path="box" handler={ CommentBox } />
    <Route name="list" path="list" handler={ CommentList } />
    <Route name="form" path="form" handler={ CommentForm } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(
        <Root />,
        document.querySelector('div.example2')
    );
});*/











// Web example.

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="comment box">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {

        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="comment list">
                { commentNodes }
            </div>
        );
    }
});

var Comments = React.createClass({
    getInitialState: function() {
        return {
            data: [{
                author: 'Gustavo Muñoz',
                text: 'React is Cool!'
            }]
        };
    },
    render: function() {
        return (
            <div>
                <h1>Comments</h1>
                <CommentBox />
                <CommentList data={ this.props.data } />
                <CommentList data={ this.state.data } />
                <CommentForm />
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});
        return (
            <div>
                <h2>
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <form className="comment form">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Write something..." />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var data = [
    {
        author: "Pete Hunt",
        text: "This is one comment"
    },
    {
        author: "Jordan Walke",
        text: "This is *another* comment"
    }
];

React.render(<Comments data={ data }/>, document.querySelector('div.example2'));
