import Ember from "ember";

var ModalMixin = Ember.Mixin.create({
    needs: "application",
    modalStyle: function() {
        if(this.get("controllers.application.modalVisible")) {
            return "display: block; opacity: 1; visibility: visible; top: 100px;";
        }
    }.property("controllers.application.modalVisible"),
    actions: {
        toggleModal: function() {
            this.toggleProperty("controllers.application.modalVisible");
        }
    }
});

export default ModalMixin;
