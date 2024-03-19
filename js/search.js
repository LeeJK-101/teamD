const cooking = [
  {
    name: '레시피1',
    time: '10분',
    image: '../img/sample01.png',
    description: '',
    class: '계란,치즈',
  },
  {
    name: '레시피2',
    time: '10분',
    image: '../img/sample02.png',
    description: '',
    class: '계란,두부',
  },
  {
    name: '레시피3',
    time: '10분',
    image: '../img/sample03.png',
    description: '',
    class: '계란',
  },
  {
    name: '레시피4',
    time: '10분',
    image: '../img/sample04.png',
    description: '',
    class: '두부',
  },
  {
    name: '레시피5',
    time: '10분',
    image: '../img/sample05.png',
    description: '',
    class: '계란',
  },
  {
    name: '레시피6',
    time: '10분',
    image: '../img/sample06.png',
    description: '',
    class: '치즈',
  },
  {
    name: '레시피7',
    time: '10분',
    image: '../img/sample07.png',
    description: '',
    class: '당근',
  },
  {
    name: '레시피8',
    time: '10분',
    image: '../img/sample08.png',
    description: '',
    class: '계란',
  },
  {
    name: '레시피9',
    time: '10분',
    image: '../img/sample09.png',
    description: '',
    class: '당근',
  },
  {
    name: '레시피10',
    time: '10분',
    image: '../img/sample10.png',
    description: '',
    class: '당근',
  },
  {
    name: '레시피11',
    time: '10분',
    image: '../img/sample11.png',
    description: '',
    class: '감자',
  },
  {
    name: '레시피12',
    time: '10분',
    image: '../img/sample12.png',
    description: '',
    class: '계란',
  },
  {
    name: '레시피13',
    time: '10분',
    image: '../img/sample13.png',
    description: '',
    class: '계란',
  },
  {
    name: '레시피14',
    time: '10분',
    image: '../img/sample14.png',
    description: '',
    class: '계란',
  },
  {
    name: '레시피15',
    time: '10분',
    image: '../img/sample15.png',
    description: '',
    class: '계란',
  },
  {
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
  if (keyword == '계란') {
    displayList(filteredRecipe);
  } else if (keyword == '치즈') {
    displayList(filteredRecipe);
  } else if (keyword == '당근') {
    displayList(filteredRecipe);
  } else if (keyword == '두부') {
    displayList(filteredRecipe);
  } else if (keyword == '감자') {
    displayList(filteredRecipe);
  } else {
    recipe.innerHTML =
      '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
  }
}
btn.addEventListener('click', () => {
  const keyword = document.querySelector('input').value;

  searchRecipe(keyword);
});

recipe.innerHTML =
  '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
