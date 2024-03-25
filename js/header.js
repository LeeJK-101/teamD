const searchIcon = document.querySelector('#searchIcon'),
  navOpenBtn = document.querySelector('.navOpenBtn'),
  nav = document.querySelector('.nav'),
  navCloseBtn = document.querySelector('.navCloseBtn');

searchIcon.addEventListener('click', () => {
  nav.classList.toggle('openSearch');
  nav.classList.remove('openNav');
  if (nav.classList.contains('openSearch')) {
    return searchIcon.classList.replace('search', 'uil-times');
  }
  searchIcon.classList.replace('uil-times', 'search');
});
// --------------------------------------------------

navOpenBtn.addEventListener('click', () => {
  nav.classList.add('openNav');
  nav.classList.remove('openSearch');
  searchIcon.classList.replace('uil-times', 'search');
});
navCloseBtn.addEventListener('click', () => {
  nav.classList.remove('openNav');
});
