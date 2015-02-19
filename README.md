# ember-cli-foundation-modal

[![Build Status][]](https://travis-ci.org/toranb/ember-cli-foundation-modal)

## Description

[ember-cli][] addon that provides a simple zurb foundation 5.5 modal for [ember.js][] web applications

## Installation

```
npm install ember-cli-foundation-modal --save-dev
```

## To use this modal in your app

bower install zurb foundation 5.5

```js
bower install foundation --save
```

add the css file to your Brocfile

```js
app.import('bower_components/foundation/css/foundation.css');
```

add the modal bg div to your application.hbs

```js
<div class="reveal-modal-bg" {{bind-attr style=modalBackgroundStyle}}></div>
```

add the mixin to your application controller

```js
import ApplicationModalMixin from "ember-cli-foundation-modal/mixins/foundation-app-modal";
export default Ember.Controller.extend(ApplicationModalMixin);
```

add the html for the modal to any template and a button to toggle it

```js
<div {{bind-attr style=modalStyle}} id="resolveModal" class="modal reveal-modal medium" data-reveal>
  <button id="close-btn" {{action "toggleModal"}}>Close</button>
</div>
<button id="open-btn" {{action "toggleModal"}}>Open</button>
```

add the mixin to the controller backing the above template

```js
import ModalMixin from "ember-cli-foundation-modal/mixins/foundation-modal";
export default Ember.Controller.extend(ModalMixin);
```

## Running Tests

    npm install
    bower install
    ember test

## License

Copyright © 2015 Toran Billups http://toranbillups.com

Licensed under the MIT License


[Build Status]: https://travis-ci.org/toranb/ember-cli-foundation-modal.svg?branch=master
[ember-cli]: http://www.ember-cli.com/
[ember.js]: http://emberjs.com/
