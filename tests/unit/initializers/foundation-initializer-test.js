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

test("foundation modal does not force configuration", function (assert) {
  initializer({}, {});

  assert.equal("div.ember-view", foundationConfiguration.reveal.root_element);
  assert.equal(250, foundationConfiguration.reveal.animation_speed);
});

test("foundation modal allows configuration of animation speeds", function (assert) {
  initializer({}, {foundationModalAnimationSpeed: 0});

  assert.equal("div.ember-view", foundationConfiguration.reveal.root_element);
  assert.equal(0, foundationConfiguration.reveal.animation_speed);
});

test("foundation modal allows overrides configurations of invalid values", function (assert) {
  initializer({}, {foundationModalAnimationSpeed: "bob"});

  assert.equal("div.ember-view", foundationConfiguration.reveal.root_element);
  assert.equal(250, foundationConfiguration.reveal.animation_speed);
});

test("foundation modal allows overrides configurations of negative values", function (assert) {
  initializer({}, {foundationModalAnimationSpeed: -1});

  assert.equal("div.ember-view", foundationConfiguration.reveal.root_element);
  assert.equal(250, foundationConfiguration.reveal.animation_speed);
});
