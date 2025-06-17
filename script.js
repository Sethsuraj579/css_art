const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.btn.btn-sm');
const suggestions = [
    { name: "Serenity in Purple", file: "Serenity.html" },
    { name: "Sunset Whispers", file: "Sunset.html" },
    { name: "Nature's Calm", file: "Nature.html" },
    { name: "Golden Glow", file: "Golden.html" },
    { name: "Cosmic Pulse", file: "Cosmic.html" },
    { name: "Desert Dunes", file: "Desert.html" },
    { name: "Electric Vibes", file: "Electric.html" },
    { name: "Fresh Spring", file: "Spring.html" },
    { name: "Beauty Field", file: "Spring.html" },
    { name: "White Blossoms", file: "Spring.html" },
    { name: "Standing Tulip", file: "Spring.html" },
    { name: "Daffodil", file: "Spring.html" },
    { name: "Grass Land", file: "Spring.html" },
    { name: "The Beauty Bird", file: "Spring.html" },
    { name: "Spring White", file: "Spring.html" },
    { name: "Blue Dunes", file: "Spring.html" },
    { name: "Hanging Jasmine", file: "Spring.html" },
    { name: "Flower Power", file: "Spring.html" },
    { name: "Spring Awakening", file: "Spring.html" },
    { name: "Red Forest", file: "Spring.html" },
    { name: "Plant Dreams", file: "Spring.html" },
    { name: "Pond Reflection", file: "Spring.html" },
    

];

// Create suggestion box
const suggestionBox = document.createElement('ul');
suggestionBox.style.position = 'absolute';
suggestionBox.style.background = '#fff';
suggestionBox.style.border = '1px solid #ccc';
suggestionBox.style.listStyle = 'none';
suggestionBox.style.margin = 0;
suggestionBox.style.padding = '0 0.5em';
suggestionBox.style.zIndex = 1000;
suggestionBox.style.display = 'none';
suggestionBox.style.maxHeight = '150px';
suggestionBox.style.overflowY = 'auto';
suggestionBox.style.width = searchInput.offsetWidth + 'px';
searchInput.parentNode.appendChild(suggestionBox);

searchInput.addEventListener('input', function () {
    const value = this.value.trim().toLowerCase();
    suggestionBox.innerHTML = '';
    if (!value) {
        suggestionBox.style.display = 'none';
        return;
    }
    const filtered = suggestions.filter(s => s.name.toLowerCase().includes(value));
    if (filtered.length === 0) {
        suggestionBox.style.display = 'none';
        return;
    }
    filtered.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s.name;
        li.style.cursor = 'pointer';
        li.style.padding = '0.3em 0';
        li.addEventListener('mousedown', function (e) {
            e.preventDefault();
            window.location.href = s.file;
        });
        suggestionBox.appendChild(li);
    });
    suggestionBox.style.display = 'block';
    suggestionBox.style.width = searchInput.offsetWidth + 'px';
});

document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
        suggestionBox.style.display = 'none';
    }
});

searchButton.addEventListener('click', function () {
    const value = searchInput.value.trim().toLowerCase();
    const match = suggestions.find(s => s.name.toLowerCase() === value);
    if (match) {
        window.location.href = match.file;
    } else {
        alert('No matching art found.');
    }
});