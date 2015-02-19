import Ember from "ember";

var ApplicationModalMixin = Ember.Mixin.create({
    modalVisible: false,
    modalBackgroundStyle: function() {
        var visible = this.get("modalVisible");
        if (visible) {
            return "display: block";
        }
        return "display: none";
    }.property("modalVisible")
});

export default ApplicationModalMixin;
