
function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
    return false;
}

function feelingLucky() {
    window.location.href = 'https://www.google.com/doodles';
}
