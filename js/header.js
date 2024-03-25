const searchIcon = document.querySelector('#searchIcon'),
  burger = document.querySelector('#burger'),
  hiddenBtn = document.querySelector('.hidden'),
  nav = document.querySelector('.nomalNav'),
  modal = document.querySelector('.modal'),
  modalBack = document.querySelector('.modalBack'),
  searchBox = document.querySelector('.search-box'),
  navCloseBtn = document.querySelector('.navCloseBtn');

searchIcon.addEventListener('click', () => {
  nav.classList.toggle('hidden');
  searchBox.classList.toggle('hidden');
});
burger.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});
modalBack.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', () => {
  const keyword = document.querySelector('input').value;
  // -------나중에 search입력값을 쿼리스트링으로 보내 이동 @@지우지 마세요@@
  // window.location.href = `search.html?class=${keyword}`;
});
