
const SCIENCE_API_URL = 'science.json';

const sciencecover = document.querySelector('.scienceNews');
const imgContainer = document.querySelector('#scienceImg');
const titleContainer = document.querySelector('#sciencetext .title');
const descriptionContainer = document.querySelector('#sciencetext .description');

const getTopscience = async () => {
  try {
    const res = await fetch(SCIENCE_API_URL);
    const science = await res.json();
    return science; 
  } catch (e) {
    alert('An error occurred: ' + e);
    return []; 
  }
};

const updateContainerscience = (science) => {
  sciencecover.innerHTML = '';
  
  (science.results || []).slice(3).forEach((science_data) => {
    if (!science_data.title || science_data.url === "null" || science_data.url === "") {
        return; 
    }

    
    const newsContainerarts = document.createElement('li');
    newsContainerarts.setAttribute('class', 'article');

    const imageUrl = (science_data.multimedia && science_data.multimedia.length > 0)
      ? science_data.multimedia[0].url
      : 'default-image-url.jpg';

    newsContainerarts.innerHTML = `
      <h2>${science_data.title}</h2>
      <img src="${imageUrl}" alt="${science_data.title}"/>
      <p>Author: ${science_data.byline || 'Unknown'}</p>
      <p>Description: ${science_data.abstract || 'No description available'}</p>
      <a href="${science_data.url}" target="_blank">About more</a>
    `;

    sciencecover.appendChild(newsContainerarts);
  });
};

const updateLatestNews = (news) => {
    
    if (!news) return;
    const imageUrl = news.multimedia && news.multimedia.length > 0 ? news.multimedia[0].url : null;

    if (imageUrl) {
        imgContainer.innerHTML = `<img src="${imageUrl}" alt="${news.title || 'News Image'}" style="width%; height: 100%;">`;
    }

    titleContainer.innerHTML = `<a href="${news.url || '#'}"><h3>${news.title || 'No Title'}</h3></a>`;

    descriptionContainer.textContent = news.abstract || 'No description available';
};

(async () => {
    const ud_datascience = await getTopscience();
    console.log(ud_datascience);
    updateContainerscience(ud_datascience);

    const validTopNews = (ud_datascience.results || []).find(news => 
        news.title && news.url && news.url !== "null" && news.url !== ""
    );

    if (validTopNews) {
        updateLatestNews(validTopNews);
    }
})();

async function fetchBookData() {
    try {/*https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eHsPZe0Dz2D2HKdpAys2HmM2Dmdsal8*/
        const response = await fetch('test.json');

        if (!response.ok) {
            throw new Error('network response was not ok' + response.statusText);
        }
        const data = await response.json(); 
        let output = "";
        data.results.books.forEach(item => {
            output += `<div class="book-container">
                          <div class="book-list">
                            <p class="rank">${item.rank}</p>
                            <img src="${item.book_image}" alt="${item.book_image}">
                            <p class="title">${item.title}</p>
                            <p class="author">by ${item.author}</p>
                            <p class="description">${item.description}</p>
                          </div>
                        </div>`;
        });
        document.querySelector(".book-lists").innerHTML = output;

    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}
fetchBookData();


/*for navigation */
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
  if (dropdownMenu.classList.contains('open')) {
    icon.classList.remove('uil-bars');
    icon.classList.add('uil-times');
  } else {
    icon.classList.remove('uil-times');
    icon.classList.add('uil-bars');
  }
});

function updateDateTime() {
  const timeElement = document.getElementById('current-time');
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  timeElement.innerHTML = now.toLocaleDateString('en-US', options);
  timeElement.setAttribute('datetime', now.toISOString());
}

updateDateTime();
setInterval(updateDateTime, 1000);
