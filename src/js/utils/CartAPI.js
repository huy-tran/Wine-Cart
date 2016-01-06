var AppActions = require('../actions/AppActions');

module.exports = {
  getProductData: function(){
    var data = JSON.parse(localStorage.getItem('product'));
    AppActions.receiveProduct(data);
  }
};