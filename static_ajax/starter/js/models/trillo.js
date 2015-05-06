var TrilloModel = function() {
  this.cards = [];
};

TrilloModel.prototype = {
  fetchCards: function() {
    $.ajax({
      url: "http://localhost:3000/cards",
      method: "get",
      dataType: "json"
    }).done(function(data){
      // for each card in the data response array
      // append the card object to the 'cards' array
      for(var i=0; i < data.length; i++) {
        var newCard = new Card(data[i].id, data[i].description, data[i].completed);
        trilloModel.cards.push(newCard);
      }
    })
  }
};
