describe('directives', function() {

  beforeEach(module('myDirectives'));

  var element = undefined;
  var outerScope = undefined;
  var innerScope = undefined;

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<super-button label="myLabel" on-click="myCallback()"></super-button>');

    outerScope = $rootScope;
    $compile(element)(outerScope);

    innerScope = element.isolateScope();

    outerScope.$digest();
  }));

  it('should render the label', function() {
    outerScope.$apply(function() {
      outerScope.myLabel = "Hello world.";
    });

    expect(element[0].children[0].innerHTML).to.equal('Hello world.');
  });

  describe('click callback', function() {
    var mySpy;

    beforeEach(function() {
      mySpy = sinon.spy();
      outerScope.$apply(function() {
        outerScope.myCallback = mySpy;
      });
    });

    it('should be called when the directive is clicked', function() {
      var event = document.createEvent("MouseEvent");
      event.initMouseEvent("click", true, true);
      element[0].children[1].dispatchEvent(event);

      expect(mySpy.callCount).to.equal(1);
    });
  });
});