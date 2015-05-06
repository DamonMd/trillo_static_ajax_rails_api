var Card = function(id, description, completed) {
  // save the three parameters as properties on the
  // constructed card object
  this.id = id;
  this.description = description;
  this.completed = completed;
};

Card.prototype = {
  save: function() {

  }
}
