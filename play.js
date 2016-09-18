var groove = require('groove');
var assert = require('assert');

var file = {
  dir: '/home/pi/snd/',
  names: [
    '08-daft-punk-get-lucky.mp3',
    'fire.mp3'
  ]
};
file.paths = file.names.map(function (f) { return file.dir + f; })

var playlist = groove.createPlaylist();
var player = groove.createPlayer();

player.attach(playlist, function (err) {
  assert.ifError(err);
});

player.on('nowplaying', function () {
  var current = player.position();

  if (current.item) {
    console.log(JSON.stringify(current));
  } else {
    playlist.clear(); // Just to be nice (assume file handle will close properly on exit)
    player.detach(function (err) {
      assert.ifError(err);
      console.log("Bye.");
    });
  }
});

groove.open(file.paths[1], function (err, file) {
  assert.ifError(err);
  playlist.insert(file);
});
