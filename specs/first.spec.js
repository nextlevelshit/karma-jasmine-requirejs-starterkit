define(['app', 'jquery', 'underscore'], function(App, $, _) {

    describe('just checking', function() {

        it('works for app', function() {
            var testString = 'jquery is up and running';
            var el = $('<div></div>').text(testString);

            expect(el.text()).toEqual(testString);
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });
    });
});