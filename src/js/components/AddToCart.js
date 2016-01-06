var React = require('react');
var AppActions = require('../actions/AppActions');

var AddToCart = React.createClass({
  handleClick: function(){
    AppActions.addItem(this.props.selected);
    AppActions.updateCartVisible(true);
  },
  render: function(){
    var selected = this.props.selected;
    return (
      <button disabled= {selected.inventory > 0 ? '' : 'disabled'} className={selected.inventory > 0 ? '' : 'disabledBtn'} onClick={this.handleClick}>{selected.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}</button>
    );
  }
});

module.exports = AddToCart ;