
(function(){
var app = angular.module('store', [ ]);
app.controller("panelController", function(){
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});
//Push review onto this products reviews array
app.controller('ReviewController', function(){
  this.review = {};

  this.addReview = function(product) {
    product.reviews.push(this.review);
    //resets to new object
    this.review = {};
  };
});

app.controller('StoreController', function(){
  this.product = gems;
});
var gems =[
  { name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: false,
    soldOut: true,
    images: [
      {
        full: 'dodecahedron-01-full.jpg',
        thumb: 'dodecahedron-01-thunb.jpg'
      },
    ]
  },
  {
    name: "Pentagonal Gem",
    price: 2.50,
    description: "Blah blah",
    canPurchase: false
  }
];
})();
