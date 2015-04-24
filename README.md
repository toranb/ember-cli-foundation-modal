# ember-cli-foundation-modal

[![Build Status][]](https://travis-ci.org/toranb/ember-cli-foundation-modal)
[![NPM Downloads][]](https://www.npmjs.org/package/ember-cli-foundation-modal)

## Description

[ember-cli][] addon that sets the foundation reveal root_element to a value that you customize or a reasonable default.

## Installation

```
npm install ember-cli-foundation-modal --save-dev
```

## To use this modal in your app

bower install zurb foundation 5.5

```js
bower install foundation --save
```

The purpose of this project is to set a reasonable default for reveal's modal location. This default will work great as long as your app doesn't have nested routes.

More than likely, you will need to customize the location of the modal further by assigning it to the top level div in your ember application. To do this, customize the APP portion your environment.js file.

In addition, you probably don't want to wait for the modal during your tests, so you should set the animation speed for the modal to 0.

```js
module.exports = function(/* environment, appConfig */) {
  return { 
    APP: {
      foundationModalElement: '#ember-application',
      foundationModalAnimationSpeed: 0
    }
  };
};
```

## Running Tests

    npm install
    bower install
    ember test

## License

Copyright © 2015 Toran Billups http://toranbillups.com

Licensed under the MIT License

[NPM Downloads]: https://img.shields.io/npm/dm/ember-cli-foundation-modal.svg
[Build Status]: https://travis-ci.org/toranb/ember-cli-foundation-modal.svg?branch=master
[ember-cli]: http://www.ember-cli.com/
[ember.js]: http://emberjs.com/
