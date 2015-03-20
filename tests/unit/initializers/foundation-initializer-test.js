import initializer from 'ember-cli-foundation-modal/initializers/foundation-initializer';
import {module, test} from "qunit";

var foundationConfiguration;

module("Foundation Initializer", {
  beforeEach: function () {
    foundationConfiguration = {};
    $.fn.foundation = function (config) {
      foundationConfiguration.reveal = config.reveal;
    };
  }
});


test("foundation modal root_element can be set", function (assert) {
  initializer({}, {foundationModalElement: "body"});

  assert.equal("body", foundationConfiguration.reveal.root_element);
});

test("foundation modal root_element has a default", function (assert) {
  initializer({}, {});

  assert.equal("div.ember-view", foundationConfiguration.reveal.root_element);
});
