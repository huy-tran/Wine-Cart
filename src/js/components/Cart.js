var React = require('react');
var RemoveFromCart = require('./RemoveFromCart');
var AppActions = require('../actions/AppActions');

var Cart = React.createClass({
  closeCart: function(){
    AppActions.updateCartVisible(false);
  },
  openCart: function(){
    AppActions.updateCartVisible(true);
  }, 
  render: function(){
    var product = this.props.product;
    var total = 0;
    var cartItems = this.props.cartItems.map(function (cartItem, index) {
      var subtotal = cartItem.quantity * cartItem.price;
      total += subtotal;
      return (
        <div key={cartItem.sku} className="item-summary">
          <h4>{cartItem.type} x {cartItem.quantity} = ${subtotal.toFixed(2)}</h4>
          <RemoveFromCart index={index} />
        </div>  
      )
    });
    return (
      <div className={"col-sm-4 col-sm-push-2 cart"}>
        <button className={"closeBtn " + (this.props.cartVisible ? 'active' : '')} onClick={this.closeCart}>x</button>
        <button className={"openBtn " + (this.props.cartVisible ? '' : 'active')} onClick={this.openCart}>View Cart</button>
        <div className={"cart-info " + (this.props.cartVisible ? 'active' : '')}>
          <div className="info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="summary">
              {cartItems}
            </div>
          </div>
          <div className="total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Cart ;