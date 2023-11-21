// script.js
const container = document.getElementById('gridContainer');

function generateItems() {
    // Clear existing content
    container.innerHTML = '';

    // Number of items to generate
    const itemCount = 12;

    for (let i = 1; i <= itemCount; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = `Item ${i}`;
        container.appendChild(item);
    }
}

// Initial generation
generateItems();

// Update on window resize
window.addEventListener('resize', generateItems);
