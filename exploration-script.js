document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    const map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample destinations (you can modify these)
    const destinations = [
        { name: "New York", coords: [40.7128, -74.0060] },
        { name: "Cambridge, Massachusetts", coords: [42.3736, -71.1097] },
        { name: "Puerto Rico", coords: [18.2208, -66.5901] },
        { name: "Atlacomulco, Mexico", coords: [19.7980, -99.8766] },
        { name: "Mexico City", coords: [19.4326, -99.1332] },
        { name: "Berlin", coords: [52.5200, 13.4050] },
        { name: "Amsterdam", coords: [52.3676, 4.9041] },
        { name: "Ireland", coords: [53.1424, -7.6921] },
        { name: "Scotland", coords: [56.4907, -4.2026] },
        { name: "Prague", coords: [50.0755, 14.4378] },
        { name: "Split, Croatia", coords: [43.5081, 16.4402] },
        { name: "Budapest", coords: [47.4979, 19.0402] },
        { name: "Barcelona", coords: [41.3851, 2.1734] },
        { name: "Palamós, Spain", coords: [41.8486, 3.1288] }
    ];


    destinations.forEach(dest => {
        L.marker(dest.coords).addTo(map)
            .bindPopup(dest.name)
            .openPopup();
    });

    // Bucket list functionality
    const bucketList = document.getElementById('bucket-list-items');
    const newItemInput = document.getElementById('new-item');
    const addItemBtn = document.getElementById('add-item-btn');

    // Sample bucket list items (you can modify these)
    const bucketListItems = [
        "Live on the coast of Spain for 3 weeks",
        "Yurt in vermont",
        "Canada Roadtrip",
        "NYC Apartment hunt"
    ];

    function renderBucketList() {
        bucketList.innerHTML = '';
        bucketListItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item}
                <button onclick="removeItem(${index})">✕</button>
            `;
            bucketList.appendChild(li);
        });
    }

    function addItem() {
        const newItem = newItemInput.value.trim();
        if (newItem) {
            bucketListItems.push(newItem);
            newItemInput.value = '';
            renderBucketList();
        }
    }

    window.removeItem = function(index) {
        bucketListItems.splice(index, 1);
        renderBucketList();
    };

    addItemBtn.addEventListener('click', addItem);
    newItemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addItem();
    });

    renderBucketList();

    // Quote generator
    const quoteElement = document.getElementById('quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    const quotes = [
        "The world is a book and those who do not travel read only one page. - Augustine of Hippo",
        "Travel is fatal to prejudice, bigotry, and narrow-mindedness. - Mark Twain",
        "The journey of a thousand miles begins with a single step. - Lao Tzu",
        "Travel far enough, you meet yourself. - David Mitchell",
        "Adventure is worthwhile in itself. - Amelia Earhart"
    ];

    function newQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    newQuoteBtn.addEventListener('click', newQuote);

    // Initial quote
    newQuote();

    // Animations
    gsap.from('.world-map', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.bucket-list', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
    gsap.from('.quote-generator', { opacity: 0, y: 50, duration: 1, delay: 0.9 });
});