import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        showModal: function() {
            return $("#my-modal").foundation("reveal", "open");
        },
        hideModal: function() {
            return $("#my-modal").foundation("reveal", "close");
        }
    }
});
