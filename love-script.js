const loveItems = [
    { text: "Your courage in facing situations where the path forward might not always be clear" },
    { text: "Your deep and genuine care for what you do" },
    { text: "Your commitment to improvement and learning about yourself and life" },
    { text: "Your determination to achieve your goals" },
    { text: "Your intention that you put behind things, from the biggest to the smallest" },
    { text: "Your thought around systems of life, and your commitment to what you find to be right " },
    { text: "Your ability to exist in different spaces" },
    { text: "Your black cat snaps" },
    { text: "The comfort I feel when I'm with you" },
    { text: "Our love of food"},
    { text: "Your freedom around gender roles and sexuality" },
    { text: "Your ability to feel things deeply, even when others cannot" },
    { text: "The depth of our conversations" },
    { text: "Your tism'" },
    { text: "The look in your eyes when you're sleepy" },
    { text: "Your tendency to pull pranks" },
    { text: "Your beautiful body" },
    { text: "Your height" },
    { text: "Your smile" },
    { text: "The tone and depth of your voice" },
    { text: "The way your skin feels against mine"},
    { text: "Your sense of humor (dark and silly)"},
    {text: "The effort you put into things, gifts, loving, planning, thinking, everything"},
];

function createLoveItems() {
    const container = document.querySelector('.love-container');
    loveItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'love-item';
        
        let content = '';
        if (item.image) {
            content += `<img src="${item.image}" alt="Image for ${item.text}">`;
        }
        content += `<p>${item.text}</p>`;
        
        div.innerHTML = content;
        div.addEventListener('click', () => toggleExpand(div));
        container.appendChild(div);

        // Animate items
        gsap.from(div, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: div,
                start: "top bottom-=100",
                end: "bottom top+=100",
                toggleActions: "play none none reverse"
            }
        });
    });
}

function toggleExpand(item) {
    if (item.classList.contains('expanded')) {
        item.classList.remove('expanded');
        gsap.to(item, { duration: 0.3, height: 'auto', width: 'auto' });
    } else {
        const expandedItem = document.querySelector('.love-item.expanded');
        if (expandedItem) {
            expandedItem.classList.remove('expanded');
            gsap.to(expandedItem, { duration: 0.3, height: 'auto', width: 'auto' });
        }
        item.classList.add('expanded');
        gsap.to(item, { duration: 0.3, height: 'auto', width: '100%' });
    }
}

document.addEventListener('DOMContentLoaded', createLoveItems);