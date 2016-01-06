module.exports = {
  init: function(){
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
        {
          id: '5',
          name: 'Chivas',
          image: 'chivas.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae consequatur minus iusto modi ullam beatae, exercitationem dolorum dolores rem reprehenderit dicta dolor provident repellat explicabo quod aperiam temporibus mollitia.',
          variants: [
            {
              sku: '113355',
              type: '40oz Bottle',
              price: 4.99,
              inventory: 1
            },
            {
              sku: '224466',
              type: '6 Pack',
              price: 12.99,
              inventory: 5
            },
            {
              sku: '779900',
              type: '30 Pack',
              price: 34.99,
              inventory: 3
            },
            {
              sku: '123123',
              type: '12 Pack',
              price: 21.99,
              inventory: 7
            },
            {
              sku: '123456',
              type: '40 Pack',
              price: 60.99,
              inventory: 30
            },
            {
              sku: '111111',
              type: '15 Pack',
              price: 42.99,
              inventory: 5
            },
          ]
        }
      ]));
  }
}