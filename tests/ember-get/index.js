/* global TestClient */
MicroTestClient.run({
  name: 'Ember.get',

  setup: function() {
    var obj = Ember.Object.create({
      thingId: 1234,
      person: Ember.Object.create({
        name: 'Evil Trout',
        pet: Ember.Object.create({
          name: 'Rover'
        })
      })
    });
  },

  test: function() {
    obj.get('thingId');
    obj.get('person.name');
    obj.get('person.pet.name');
  }
});
