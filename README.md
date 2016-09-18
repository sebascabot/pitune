# PiTune

> Écoute de fichier audio avec un Raspberry PI déclanché par des cartes RFID.


## NodeJS setup on the Raspberry PI

    > sudo apt install nodejs nodejs-legacy

### Fix compile issue for native NodeJS module.

To avoid the error `‘REPLACE_INVALID_UTF8’ is not a member of ‘v8::String’` add one line to
`/usr/include/v8.h` (provided in package `libv8-3.14-dev`)

Before the fix

    enum WriteOptions {
        NO_OPTIONS = 0,
        HINT_MANY_WRITES_EXPECTED = 1,
        NO_NULL_TERMINATION = 2,
        PRESERVE_ASCII_NULL = 4
    };

After the fix

    enum WriteOptions {
        NO_OPTIONS = 0,
        HINT_MANY_WRITES_EXPECTED = 1,
        NO_NULL_TERMINATION = 2,
        PRESERVE_ASCII_NULL = 4,
        REPLACE_INVALID_UTF8 = 8
    };

## Install `groove`

    > sudo apt install libgrooveloudness-dev libgrooveplayer-dev libgroovefingerprinter-dev libgroove-dev

## Install `mpd`

    > sudo apt install mpd mpc

Put your MP3 in `mpd` `/var/lib/mpd/music` directory.

Then use `mpc` to play your files.

    > mpc
      volume: 77%   repeat: off   random: off   single: off   consume: off

    > mpc ls
      fire.mp3
      08-daft-punk-get-lucky.mp3

    > mpc add 08-daft-punk-get-lucky.mp3

    > mpc play
      Daft Punk - Get Lucky (feat. Pharrell Williams)
      [playing] #1/1   0:00/6:10 (0%)
      volume: 77%   repeat: off   random: off   single: off   consume: off

    > mpc
      Daft Punk - Get Lucky (feat. Pharrell Williams)
      [playing] #1/1   0:17/6:10 (4%)
      volume: 77%   repeat: off   random: off   single: off   consume: off

