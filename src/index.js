function getWatched(parent, className, className2, className3, items, images, parentButton) {
  const movieTrendingList = document.getElementsByClassName(parent)[0];
  const moviesButton = document.getElementsByClassName(parentButton)[0];

  items.forEach((movieItem, index) => {
    const trendingImgContainer = document.createElement('div');
    trendingImgContainer.classList.add(className);
    trendingImgContainer.classList.add(className2);
    movieTrendingList.appendChild(trendingImgContainer);

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.id = ('movie-img' + '-' + index);
    setAttribute(movieImg, movieItem, className3);

    movieImg.setAttribute('src', images[0].url);
    trendingImgContainer.appendChild(movieImg);

    const movieDetail = document.createElement('div');
    movieDetail.classList.add('movie-details');
    trendingImgContainer.appendChild(movieDetail);

    const titleMovie = document.createElement('span');
    titleMovie.classList.add('movie-title');
    setTextContext(titleMovie, movieItem, className3);
    movieDetail.appendChild(titleMovie);

    const yearMovie = document.createElement('span');
    yearMovie.classList.add('movie-year');
    setTextContextYear(yearMovie, movieItem, className3);
    movieDetail.appendChild(yearMovie);

    images.shift();
  });

  i++;
  const next = document.createElement('button');
  next.id = 'next' + i;
  next.classList.add('next');
  moviesButton.appendChild(next);
  createImgButton(next, 'button-next', '../assets/icons/next.png');

  const prev = document.createElement('button');
  prev.id = 'prev' + i;
  prev.classList.add('prev');
  moviesButton.appendChild(prev);
  createImgButton(prev, 'button-prev', '../assets/icons/prev.png');
}

function createHero() {
  const header = document.getElementsByClassName('header')[0];
  const titleHeader = document.createElement('h2');
  titleHeader.innerHTML = `${trendingMovies[0].movie.title}`;
  header.appendChild(titleHeader);

  const yearMovieHero = document.createElement('p');
  yearMovieHero.classList.add('movie-year-hero');
  yearMovieHero.innerText = `${movieHeroDescription.Year}`;
  header.appendChild(yearMovieHero);

  const descriptionMovieHero = document.createElement('p');
  descriptionMovieHero.classList.add('movie-description');
  descriptionMovieHero.innerHTML = `${movieHeroDescription.Plot}`;
  header.appendChild(descriptionMovieHero);
}

function setAttribute(element, movieItem, classItem) {
  if (classItem === 'movies-trending-item' || classItem === 'movies-recommended-item') {
      element.setAttribute('alt', movieItem.movie.title);
  } else if (classItem === 'movies-popular-item') {
      element.setAttribute('alt', movieItem.title);
  }
}

function setTextContext(element, movieItem, classItem) {
  if (classItem === 'movies-trending-item' || classItem === 'movies-recommended-item') {
    element.textContent = movieItem.movie.title;
  } else if (classItem === 'movies-popular-item') {
    element.textContent = movieItem.title;
  }
}

function setTextContextYear(element, movieItem, classItem) {
  if (classItem === 'movies-trending-item' || classItem === 'movies-recommended-item') {
    element.textContent = movieItem.movie.year;
  } else if (classItem === 'movies-popular-item') {
    element.textContent = movieItem.year;
  }
}

createHero();
let i = -1;
getWatched('movies-trending-list', 'trending-img-container', 'movies-item', 'movies-trending-item', trendingMovies, movieTrendingImg, 'movies-trending-wrapper', i);
getWatched('movies-popular-list', 'popular-img-container', 'movies-item', 'movies-popular-item', popularMovies, moviePopularImg, 'movies-popular-wrapper', i);
getWatched('movies-recommended-list', 'recommended-img-container', 'movies-item', 'movies-recommended-item', recommendedMovies, movieRecommendedImg, 'movies-recommended-wrapper', i);


const gap = 16;

const carouselTrending = document.getElementById("movies-trending-carousel");
const carouselPopular = document.getElementById("movies-popular-carousel");
const carouselRecommended = document.getElementById("movies-recommended-carousel");
const content = document.getElementsByClassName("movies-list");
const moviesTrendingList = document.getElementById("movies-trending-list");
const moviesPopularList = document.getElementById("movies-popular-list");
const moviesRecommendedeList = document.getElementById("movies-recommended-list");

if (carouselTrending !== null) {

  let width = carouselTrending.offsetWidth;
  window.addEventListener("resize", e => (width = carouselTrending.offsetWidth));
  
  const next = document.getElementById('next0');
  next.addEventListener("click", e => {
    carouselTrending.scrollBy(width + gap, 0);
    if (carouselTrending.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carouselTrending.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  
  const prev = document.getElementById('prev0');
  prev.addEventListener("click", e => {
    carouselTrending.scrollBy(-(width + gap), 0);
    if (carouselTrending.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carouselTrending.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
}

if (carouselPopular !== null) {

  let width = carouselPopular.offsetWidth;
  window.addEventListener("resize", e => (width = carouselPopular.offsetWidth));

  const next = document.getElementById('next1');
  next.addEventListener("click", e => {
    carouselPopular.scrollBy(width + gap, 0);
    if (carouselPopular.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carouselPopular.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  
  const prev = document.getElementById('prev1');
  prev.addEventListener("click", e => {
    carouselPopular.scrollBy(-(width + gap), 0);
    if (carouselPopular.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carouselPopular.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
}

if (carouselRecommended !== null) {

  let width = carouselRecommended.offsetWidth;
  window.addEventListener("resize", e => (width = carouselRecommended.offsetWidth));

  const next = document.getElementById('next2');
  next.addEventListener("click", e => {
    carouselRecommended.scrollBy(width + gap, 0);
    if (carouselRecommended.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carouselRecommended.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  
  const prev = document.getElementById('prev2');
  prev.addEventListener("click", e => {
    carouselRecommended.scrollBy(-(width + gap), 0);
    if (carouselRecommended.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carouselRecommended.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
}

function createImgButton(parent, className, src) {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('button-carousel', className);
  parent.appendChild(img);
}
