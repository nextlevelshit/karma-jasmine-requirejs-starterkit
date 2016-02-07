define(function() {

    var App = {
        output: '',
        outputElement: '',

        setOutputElement: function(element) {
            this.outputElement = element;
        },

        render: function(message) {
            this.outputElement.html(message);
        },
    };

    return App;

});