var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function(){
    return (
      <h1>Hello React</h1>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('myApp'));

module.exports = App;