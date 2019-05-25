'use strict';

console.log('App is runing');

var app = {
    title: 'ReactApp',
    subtitle: 'put your expenses in your budget',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        appRender();
    }
};

var numbers = [];

var options = void 0;
var removeAll = function removeAll() {
    app.options = [];
    appRender();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRender = function appRender() {
    var temp1 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            ' ',
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'here is your option' : 'no options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'what should i do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'RemoveAll'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (num) {
                return React.createElement(
                    'li',
                    { key: num },
                    num
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(temp1, appRoot);
};

var appRoot = document.getElementById('app');
appRender();
