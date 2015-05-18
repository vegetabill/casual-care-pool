Meteor.methods({
  requestWalk: function(doc) {
    var result = Walks.insert({
      plannedAt: doc.plannedAt,
      requester: Meteor.userId()
    });
  },
  addDog: function(attrs) {
    var result = Meteor.users.update(
      Meteor.userId(),
      {
        $push: {
          dogs: {
            name : attrs.name,
            birthdate: attrs.birthdate,
            breed: attrs.breed
          }
        }
      }
    );
  },
  updateProfile: function(attrs) {
    Meteor.users.update(
      Meteor.userId(),
      {
        $set: {
          profile: {
            name : attrs.name,
            mobileNumber: attrs.mobileNumber,
            address: attrs.address
          }
        }
      }
    );
  }
});