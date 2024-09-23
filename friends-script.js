document.addEventListener('DOMContentLoaded', function() {
    // YouTube Video ID - replace with your actual video ID
    const videoId = 'YOUR_YOUTUBE_VIDEO_ID';

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = function() {
        new YT.Player('youtube-player', {
            height: '360',
            width: '640',
            videoId: videoId,
            playerVars: {
                'autoplay': 0,
                'controls': 1,
                'rel': 0,
                'fs': 1
            }
        });
    };

    // Animations
    gsap.from('.friends-message', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.video-container', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
});