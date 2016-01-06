var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addItem: function (item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  },
  selectProduct: function (index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SELECT_PRODUCT,
      index: index
    });
  },
  removeItem: function (index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      index: index
    });
  },
  updateCartVisible: function (cartVisible) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CART_VISIBLE,
      cartVisible: cartVisible
    });
  },
  receiveProduct: function (data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_PRODUCT,
      data: data
    });
  },
};

module.exports = AppActions;