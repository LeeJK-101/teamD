const cooking = [
  {
    id: 1,
    name: '레시피1',
    time: '10분',
    image: '../img/sample01.png',
    description: '',
    class: '계란,치즈',
  },
  {
    id: 2,
    name: '레시피2',
    time: '10분',
    image: '../img/sample02.png',
    description: '',
    class: '계란,두부',
  },
  {
    id: 3,
    name: '레시피3',
    time: '10분',
    image: '../img/sample03.png',
    description: '',
    class: '계란',
  },
  {
    id: 4,
    name: '레시피4',
    time: '10분',
    image: '../img/sample04.png',
    description: '',
    class: '두부',
  },
  {
    id: 5,
    name: '레시피5',
    time: '10분',
    image: '../img/sample05.png',
    description: '',
    class: '계란',
  },
  {
    id: 6,
    name: '레시피6',
    time: '10분',
    image: '../img/sample06.png',
    description: '',
    class: '치즈',
  },
  {
    id: 7,
    name: '레시피7',
    time: '10분',
    image: '../img/sample07.png',
    description: '',
    class: '당근',
  },
  {
    id: 8,
    name: '레시피8',
    time: '10분',
    image: '../img/sample08.png',
    description: '',
    class: '계란',
  },
  {
    id: 9,
    name: '레시피9',
    time: '10분',
    image: '../img/sample09.png',
    description: '',
    class: '당근',
  },
  {
    id: 10,
    name: '레시피10',
    time: '10분',
    image: '../img/sample10.png',
    description: '',
    class: '당근',
  },
  {
    id: 11,
    name: '레시피11',
    time: '10분',
    image: '../img/sample11.png',
    description: '',
    class: '계란',
  },
  {
    id: 12,
    name: '레시피12',
    time: '10분',
    image: '../img/sample12.png',
    description: '',
    class: '계란',
  },
  {
    id: 13,
    name: '레시피13',
    time: '10분',
    image: '../img/sample13.png',
    description: '',
    class: '계란',
  },
  {
    id: 14,
    name: '레시피14',
    time: '10분',
    image: '../img/sample14.png',
    description: '',
    class: '계란',
  },
  {
    id: 15,
    name: '레시피15',
    time: '10분',
    image: '../img/sample15.png',
    description: '',
    class: '계란',
  },
  {
    id: 16,
    name: '레시피16',
    time: '10분',
    image: '../img/sample16.png',
    description: '',
    class: '계란',
  },
];

const recipe = document.querySelector('.recipe');
const btn = document.querySelector('#search-btn');

function displayList(cooking) {
  recipe.innerHTML = '';
  cooking.forEach((cook) => {
    const recipeLi = document.createElement('li');
    recipeLi.innerHTML = `
          <img src="${cook.image}" alt="${cook.name}" />
          <p>${cook.name},<br> 조리시간 ${cook.time} </p>
        `;
    recipe.append(recipeLi);
  });
}
function searchRecipe(keyword) {
  const filteredRecipe = cooking.filter((cook) => {
    return cook.class.includes(keyword);
  });

  displayList(filteredRecipe);
}
btn.addEventListener('click', () => {
  const keyword = document.querySelector('input').value;

  searchRecipe(keyword);
});
displayList(cooking);
