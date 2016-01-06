var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');

var _product = {},
    _selected = null,
    _cartItems = [],
    _cartVisible = false;

function _productData (data) {
  _product = data[0];
  _selected = data[0].variants[0];
}

function _setSelected (index) {
  _selected = _product.variants[index];
}

function _addItem (item) {
  if (!item.inCart) {
    item.quantity = 1;
    item.inCart = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach(function(cartItem){
      if (cartItem.sku == item.sku) {
        item.quantity += 1;
      }
    });
  }
  _updateInventory(item);
}

function _removeItem (index) {
  _restoreInventory(_cartItems[index]);
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _updateInventory (item) {
  _product.variants.forEach(function (variant, index) {
    if (variant.sku === item.sku) {
      variant.inventory -= 1;
    }
  })
}

function _restoreInventory (item) {
  item.inventory += item.quantity;
}

function _setCartVisible (cartVisible) {
  _cartVisible = cartVisible;
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },
  getProduct: function () {
    return _product;
  },
  getSelected: function () {
    return _selected;
  },
  getCartItems: function () {
    return _cartItems;
  },
  getCartVisible: function(){
    return _cartVisible;
  },
  dispatchIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
      case AppConstants.RECEIVE_PRODUCT:
        _productData(action.data);
        break;
      case AppConstants.SELECT_PRODUCT:
        _setSelected(action.index);
        break;
      case AppConstants.ADD_ITEM:
        _addItem(action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        _removeItem(action.index);
        break;
      case AppConstants.CART_VISIBLE:
        _setCartVisible(action.cartVisible);
        break;
    };
    AppStore.emitChange();
    return true;
  })
});

module.exports = AppStore;