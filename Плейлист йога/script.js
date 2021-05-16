

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
            mediaPath = 'https://archive.org/download/1_20210430_20210430_1249/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Tantra Yoga Masters - Escape Gravity",
                "duration": " 3:29",
                "file": "18"
            }, {
                "track": 2,
                "name": "Serenity Calls - Quick Healing ",
                "duration": "2:09",
                "file": "17"
            }, {
                "track": 3,
                "name": " Rebecca Shaw - Kids Study Piano ",
                "duration": "  2:48",
                "file": "16"
            }, {
                "track": 4,
                "name": "Project Divinity - The Spirit Arises",
                "duration": "2:16",
                "file": "15"
            }, {
                "track": 5,
                "name": "Project Divinity - Inside A Cocoon  ",
                "duration": " 5:25",
                "file": "14"
            }, {
                "track": 6,
                "name": "Hampus Naeselius-Within Its Own Silent Shell",
                "duration": "2:34",
                "file": "6"
            }, {
                "track": 7,
                "name": "Lucid But Dreaming-Falling",
                "duration": "1:48",
                "file": "8"
            }, {
                "track": 8,
                "name": " Project Divinity - Eternal Love ",
                "duration": "3:34",
                "file": "11"
            }, {
                "track": 9,
                "name": "Celestial Aeon Project (Matti Paalanen) - Cinematic Piano ",
                "duration": "1:59",
                "file": "10"
            }, {
                "track": 10,
                "name": "Lucid But Dreaming - Lucid Dream  ",
                "duration": "2:53",
                "file": "9"
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