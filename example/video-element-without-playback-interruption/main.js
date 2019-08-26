'use strict';

// Create an instance
var wavesurfer;

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {
    // Load audio from existing media element
    var mediaElt = document.querySelector('video');

    var initializeButton = document.querySelector('[data-action="initialize"]');

    mediaElt.addEventListener('play', function() {
        initializeButton.style.display = 'block';
    });

    document
        .querySelector('[data-action="initialize"]')
        .addEventListener('click', function() {
            // Init
            wavesurfer = WaveSurfer.create({
                container: document.querySelector('#waveform'),
                waveColor: '#A8DBA8',
                progressColor: '#3B8686',
                backend: 'MediaElement',
                height: 65,
                mediaControls: true,
                normalize: true,
                mediaReadyBeforeWavesurferInstantiated: true
            });

            wavesurfer.load(mediaElt);

            initializeButton.disabled = true;
        });
});
