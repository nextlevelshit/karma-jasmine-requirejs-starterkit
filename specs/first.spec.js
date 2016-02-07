define(['app', 'jquery', 'underscore'], function(App, $, _) {

    describe('Just checking if everything is loaded', function() {

        it('Checking jquery function', function() {
            var testString = 'jquery is up and running';
            var el = $('<div></div>').text(testString);

            expect(el.text()).toEqual(testString);
        });

        it('Checking real jquery dom manpipulation', function() {
            var testString = 'App runs successfully and jquery works like a charm';
            var outputElement = $('<div></div>').attr('id', 'message');

            App.setOutputElement(outputElement);
            App.render(testString);

            expect(outputElement.text()).toEqual(testString);
        });

        it('Checking fundamental underscore function', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });
    });
});