import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var waitFor = function(callback) {
    return andThen(function() {
        stop();
        Ember.run.later(function() {
             callback();
             start();
        }, 500);
    });
};

Ember.Test.registerHelper("waitFor", waitFor);

var App;

module('FoundationModal Acceptance Test', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("can open and close the modal when used correctly", function(assert) {
    visit("/");
    waitFor(function() {
        var theModal = find("#my-modal");
        assert.ok(theModal.is(":hidden"));
    });
    click("#btn-open-modal");
    waitFor(function() {
        var theModal = find("#my-modal");
        assert.ok(!theModal.is(":hidden"));
    });
    click("#btn-close-modal");
    waitFor(function() {
        var theModal = find("#my-modal");
        assert.ok(theModal.is(":hidden"));
    });
});
