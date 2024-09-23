document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray("section").forEach((section, i) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Countdown timer
    const countdownDate = new Date("2024-11-23T00:00:00").getTime(); // Replace with your actual date
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            document.querySelector('#countdown-section h2').textContent = "I'm here!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
    // Animate link buttons
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        gsap.set(card, { 
            opacity: 0, 
            scale: 0.8, 
            rotation: -5 + Math.random() * 10 
        });
        
        ScrollTrigger.create({
            trigger: "#links-section",
            start: "top 80%",
            onEnter: () => {
                gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "elastic.out(1, 0.5)"
                });
            },
            onLeaveBack: () => {
                gsap.to(card, {
                    opacity: 0,
                    scale: 0.8,
                    rotation: -5 + Math.random() * 10,
                    duration: 0.4,
                    ease: "power2.in"
                });
            }
        });
    });



    const flowerGarden = document.getElementById('flower-garden');
  const svgNS = "http://www.w3.org/2000/svg";
  function startAnimation() {
  // Create SVG
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.style.width = "100%";
  svg.style.height = "100%";
  flowerGarden.appendChild(svg);

  // Create background
  const background = document.createElementNS(svgNS, "rect");
  background.setAttribute("width", "200");
  background.setAttribute("height", "200");
  background.setAttribute("fill", "#191970");
  svg.appendChild(background);

  // Create magnolia flower
  const flower = document.createElementNS(svgNS, "g");
  flower.setAttribute("transform", "translate(100, 100)");
  svg.appendChild(flower);

  // Create petals
  const petalColors = ['#FFFFFF', '#FFFAFA', '#FFF0F5', '#FFFAF0', '#FFF5EE'];  const petalShapes = [
    "M0,0 C-5,-20 5,-40 0,-50 C-5,-40 5,-20 0,0",
    "M0,0 C10,-25 -10,-45 0,-60 C10,-45 -10,-25 0,0"
  ];

  for (let i = 0; i < 9; i++) {
    const petal = document.createElementNS(svgNS, "path");
    petal.setAttribute("d", petalShapes[i % 2]);
    petal.setAttribute("fill", petalColors[i % petalColors.length]);
    petal.setAttribute("transform", `rotate(${i * 40})`);
    petal.style.transformOrigin = "center";
    flower.appendChild(petal);

    // Bloom animation
    gsap.from(petal, {
      scale: 0,
      opacity: 0,
      duration: 3,
      delay: 0.2 * i,
      ease: "power1.out"
    });
  }

  // Create center
  const center = document.createElementNS(svgNS, "circle");
  center.setAttribute("r", "15");
  center.setAttribute("fill", "#FFB6C1");
  flower.appendChild(center);

  gsap.from(center, {
    scale: 0,
    duration: 2,
    delay: 2,
    ease: "back.out(1.7)"
  });

  // Add gentle sway to the whole flower
  gsap.to(flower, {
    rotation: 2,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // Add twinkling stars
  for (let i = 0; i < 20; i++) {
    const star = document.createElementNS(svgNS, "circle");
    star.setAttribute("cx", Math.random() * 200);
    star.setAttribute("cy", Math.random() * 200);
    star.setAttribute("r", Math.random() * 1.5 + 0.5);
    star.setAttribute("fill", "#FFF");
    svg.appendChild(star);

    gsap.to(star, {
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 2 + 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
  const message = document.createElementNS(svgNS, "text");
  message.setAttribute("x", "10");
  message.setAttribute("y", "30");
  message.setAttribute("fill", "#FFF");
  message.setAttribute("font-family", "'Loved by the King', cursive");
  message.setAttribute("font-size", "12");
  message.style.opacity = "0";
  message.textContent = "Sorry it looks like this... it ended up being";
  svg.appendChild(message);

  const subMessage = document.createElementNS(svgNS, "text");
  subMessage.setAttribute("x", "10");
  subMessage.setAttribute("y", "45");
  subMessage.setAttribute("fill", "#FFF");
  subMessage.setAttribute("font-family", "'Loved by the King', cursive");
  subMessage.setAttribute("font-size", "12");
  subMessage.style.opacity = "0";
  subMessage.textContent = "way more math and code than I had expected";
  svg.appendChild(subMessage);


  gsap.to([message, subMessage], {
    opacity: 1,
    duration: 1,
    delay: 10, // Adjust this delay as needed
    ease: "power1.out"
  });

 

}

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  // Start observing the flower garden
  observer.observe(flowerGarden);

    // Animate content on subpages
    const pageContent = document.querySelector('.placeholder');
    if (pageContent) {
        gsap.from(pageContent, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: pageContent,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    }

});


