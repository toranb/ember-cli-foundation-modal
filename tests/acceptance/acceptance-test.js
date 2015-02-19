import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('FoundationModal Acceptance Test', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("can open and close the modal when used correctly", function() {
    visit("/foo");
    andThen(function() {
        var modalStyle = find("#resolveModal");
        equal(modalStyle.attr("style"), undefined);
        var backgroundStyle = find(".reveal-modal-bg");
        equal(backgroundStyle.attr("style"), "display: none");
    });
    click("#btn-open-modal");
    andThen(function() {
        var modalStyle = find("#resolveModal");
        equal(modalStyle.attr("style"), "display: block; opacity: 1; visibility: visible; top: 100px;");
        var backgroundStyle = find(".reveal-modal-bg");
        equal(backgroundStyle.attr("style"), "display: block");
    });
    click("#btn-close-modal");
    andThen(function() {
        var modalStyle = find("#resolveModal");
        equal(modalStyle.attr("style"), undefined);
        var backgroundStyle = find(".reveal-modal-bg");
        equal(backgroundStyle.attr("style"), "display: none");
    });
});
