let books = [];

fetch('books.json')
  .then(res => res.json())
  .then(data => {
    books = data;

    populateFilters(books);

    applyFilters();
  });

function populateFilters(data) {
  const yearSet = new Set();
  const authorSet = new Set();

  data.forEach(book => {
    yearSet.add(book.Published);
    authorSet.add(book.Author);
  });

  const yearFilter = document.getElementById('yearFilter');
  [...yearSet].sort().forEach(year => {
    const opt = document.createElement('option');
    opt.value = year;
    opt.textContent = year;
    yearFilter.appendChild(opt);
  });

  const authorFilter = document.getElementById('authorFilter');
  [...authorSet].sort().forEach(author => {
    const opt = document.createElement('option');
    opt.value = author;
    opt.textContent = author;
    authorFilter.appendChild(opt);
  });
}

function displayTopBooks(filteredBooks) {
  const topBooks = [...filteredBooks].sort((a, b) => b.Score - a.Score).slice(0, 10);
  const container = document.getElementById('top-books');
  container.innerHTML = '';

  if (topBooks.length === 0) {
    container.innerHTML = "<p>No books match your filters.</p>";
    return;
  }

  topBooks.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
      <img src="${book.Image}" alt="${book.Title}">
      <div class="content">
        <h3>${book.Title}</h3>
        <p><strong>Author:</strong> ${book.Author}</p>
        <p><strong>Rating:</strong> ⭐ ${book.Score}</p>
        <p><strong>Published:</strong> ${book.Published}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function applyFilters() {
  const search = document.getElementById('search').value.toLowerCase();
  const year = document.getElementById('yearFilter').value;
  const rating = parseFloat(document.getElementById('ratingFilter').value) || 0;
  const author = document.getElementById('authorFilter').value;

  const filtered = books.filter(book => {
    const matchesSearch =
      book.Title.toLowerCase().includes(search) ||
      book.Author.toLowerCase().includes(search);

    const matchesYear = !year || book.Published == year;
    const matchesRating = !rating || parseFloat(book.Score) >= rating;
    const matchesAuthor = !author || book.Author === author;

    return matchesSearch && matchesYear && matchesRating && matchesAuthor;
  });

  displayTopBooks(filtered);
}

document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('yearFilter').addEventListener('change', applyFilters);
document.getElementById('ratingFilter').addEventListener('change', applyFilters);
document.getElementById('authorFilter').addEventListener('change', applyFilters);
