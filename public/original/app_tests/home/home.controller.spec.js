$script.ready('applicationDependencies',function () {

    describe('app', function () {
        var controller;

        beforeEach(module('app'));

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
            controller = $controller('HomeController');
        }));


        describe('Home controller', function () {
            it('should be created successfully', function () {
                expect(controller).to.be.defined;
            });
        });

    });
},'module');

