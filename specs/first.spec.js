define(['app', 'jquery', 'underscore'], function(App, $, _) {

    describe('Just checking if everything is loaded', function() {

        it('Checking if my application renders correctly', function() {
            var testString = 'App runs successfully';

            App.render(testString);

            expect(App.output).toEqual(testString);
        });

        it('Checking jquery dom manipulation function', function() {
            var testString = 'jquery is up and running';
            var el = $('<div></div>').text(testString);

            expect(el.text()).toEqual(testString);
        });

        it('Checking fundamental underscore function', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });
    });
});