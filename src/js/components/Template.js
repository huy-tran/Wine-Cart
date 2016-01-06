var React = require('react');
var AppStore = require('../stores/AppStore');
var Product = require('./Product');
var Cart = require('./Cart');

function _appStates(){
  return {
    product: AppStore.getProduct(),
    selected: AppStore.getSelected(),
    cartItems: AppStore.getCartItems(),
    cartVisible: AppStore.getCartVisible()
  }
}

var Template = React.createClass({
  getInitialState: function () {
    return _appStates();
  },
  componentDidMount: function () {
    AppStore.addChangeListener(this.update);
  },
  componentWillUnmount: function () {
    AppStore.removeChangeListener(this.update);
  },
  update: function () {
    this.setState( _appStates() );
  },
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <Product product={this.state.product} selected={this.state.selected} />
          <Cart product={this.state.product} cartItems={this.state.cartItems} cartVisible={this.state.cartVisible}/>
        </div>
      </div>
    );
  }
});

module.exports = Template;