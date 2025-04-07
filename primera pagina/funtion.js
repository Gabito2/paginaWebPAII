document.getElementById('searchForm').addEventListener('submit', function (e) {

    e.preventDefault();
    
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    const cards = document.querySelectorAll('#cardContainer .card');
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title');
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});