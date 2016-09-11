var mongoose    = require("./connection");
var seedData    = require("./seeds");

var Contact       = mongoose.model("Contact");

Contact.remove().then(function(){
  Contact.create(seedData).then(function(){
    process.exit();
  });
});

// Run node db/seed_db.js to seed database
