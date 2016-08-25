import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create () {
      var list = this.store.createRecord("list", {
        title: this.listTitle
      })

      list.save();
    }
  }
});
