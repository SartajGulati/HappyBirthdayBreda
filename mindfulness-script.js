document.addEventListener('DOMContentLoaded', function() {
    const breathCircle = document.querySelector('.breath-circle');
    const breathInstruction = document.querySelector('.breath-instruction');
    const startBreathingButton = document.getElementById('start-breathing');
    const loadVideoButton = document.getElementById('load-video');
    const videoPlaceholder = document.getElementById('video-placeholder');

    let isBreathing = false;

    startBreathingButton.addEventListener('click', toggleBreathingExercise);

    function toggleBreathingExercise() {
        if (isBreathing) {
            stopBreathing();
        } else {
            startBreathing();
        }
    }

    function startBreathing() {
        isBreathing = true;
        startBreathingButton.textContent = 'Stop Breathing Exercise';
        breathe();
    }

    function stopBreathing() {
        isBreathing = false;
        startBreathingButton.textContent = 'Start Breathing Exercise';
        breathInstruction.textContent = 'Breathe in...';
        gsap.to(breathCircle, { scale: 1, duration: 0.5 });
    }

    function breathe() {
        if (!isBreathing) return;

        gsap.to(breathCircle, {
            scale: 1.5,
            duration: 4,
            ease: "power1.inOut",
            onStart: () => breathInstruction.textContent = 'Breathe in...',
            onComplete: () => {
                gsap.to(breathCircle, {
                    scale: 1,
                    duration: 4,
                    ease: "power1.inOut",
                    onStart: () => breathInstruction.textContent = 'Breathe out...',
                    onComplete: breathe
                });
            }
        });
    }

    loadVideoButton.addEventListener('click', function() {
        const videoId = 'oBu-pQG6sTY'; // Replace with your desired YouTube video ID
        videoPlaceholder.innerHTML = `
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `;
    });

    // Animate elements on page load
    gsap.from('.breathing-exercise', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.video-container', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
});