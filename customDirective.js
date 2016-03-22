


//for elements
app.directive('productDescription', function(){
  return {
    restrict: 'E',
    templateUrl: 'product-description.html'
  };
});


//for attributes
app.directive('productSpecs', function(){
  return {
    restrict: 'A',
    templateUrl: 'product-specs.html'
  };
});

//example of putting controller inside directive, took code from tabs controller, removed from index
app.directive("productTabs", function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller:function(){
        this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
      },
      controllerAs: 'tab'
    };
  });
