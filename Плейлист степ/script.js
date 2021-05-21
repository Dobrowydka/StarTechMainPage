

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
        playing = false,
        mediaPath = 'https://archive.org/download/step-music-startech/audio/',
        extension = '',
        tracks = [{
            "track": 1,
            "name": "Workout Remix Factory, The Allstar Hitmakers, The Workout Heroes – Fireball",
            "duration": "4:08",
            "file": "WorkoutRemixFactoryTheAllstarHitmakersTheWorkoutHeroesFireball(WorkoutMix133BPM)_(yaya.su)"
        }, {
            "track": 2,
            "name": "Shakira - Waka Waka (This Time for Africa)",
            "duration": "3:21",
            "file": "shakira_waka-waka-this-time-for-africa"
        }, {
            "track": 3,
            "name": "Shakira - Rabiosa (feat. Pitbull)",
            "duration": "2:51",
            "file": "Shakira - Rabiosa (feat. Pitbull)"
        }, {
            "track": 4,
            "name": "Shakira - Addicted to You",
            "duration": "2:28",
            "file": "Shakira - Addicted to You_(muzfan.net)"
        }, {
            "track": 5,
            "name": "Red Hardin - Limbo (Ricky Remix)",
            "duration": "4:38",
            "file": "Red_Hardin_-_Limbo_(Ricky_Remix)_(zayceva.site)"
        }, {
            "track": 6,
            "name": "Power Music Workout - Rain over Me (DJ Shocker Remix) (DJ Shocker Remix)",
            "duration": "4:23",
            "file": "Power Music Workout - Rain Over Me (DJ Shocker Remi) (2mz.me)"
        }, {
            "track": 7,
            "name": "Pitbull - Don't Stop The Party ft. TJR",
            "duration": "3:26",
            "file": "Pitbull-feat-TJR_-_Dont-Stop-The-Party_(muzichka.cc)"
        }, {
            "track": 8,
            "name": "Mc Joe - Echa Pa'lla (Manos Pa'rriba)",
            "duration": "4:04",
            "file": "Mc Joe - Echa Pa'lla (Manos Pa'rriba)"
        }, {
            "track": 9,
            "name": "Jennifer Lopez feat Pitbull - Dance Again",
            "duration": "3:57",
            "file": "Jennifer Lopez feat Pitbull - Dance Again"
        }, {
            "track": 10,
            "name": "Imanbek & Afrojack, Gia Koka - Hey Baby",
            "duration": "2:58",
            "file": "Imanbek & Afrojack, Gia Koka - Hey Baby"
        }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});

$(document).ready(function() {
    $('.menu-burger__header').click(function(){
    $('.menu-burger__header').toggleClass('open-menu');
    $('.nav').toggleClass('open-menu');
    });
    });