import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showRealName: function(){
      alert("Dracula is fictional, but was inspired by 15th century Romanian general and Wallachian Prince Vlad III the Impaler");
    }
  }
});
