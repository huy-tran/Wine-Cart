var React = require('react');
var ReactDOM = require('react-dom');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var Template = require('./components/Template');

ProductData.init();
CartAPI.getProductData();

var App = React.createClass({
  render: function(){
    return (
      <Template />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('myApp'));

module.exports = App;