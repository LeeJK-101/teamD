const urlParam = new URLSearchParams(window.location.search);
const recipeId = urlParam.get('id');
let recipeData;

function fetchRecipe() {
  fetch('/js/recipe_data.json')
    .then((response) => response.json())
    .then((data) => {
      const recipeData = data.find((recipe) => {
        return recipe.id == recipeId;
      });
      console.log(recipeData);
      renderRecipe(recipeData);
    })
    .catch((err) => console.log('상품 데이터를 불러오는데 실패했습니다.'));
}
fetchRecipe();

function renderRecipe(recipe) {
  // 여기에 html로 정보 삽입하는 코드 작성하기!!
  document.querySelector('.recipe-name').innerHTML = recipe.name;
  document.querySelector('.recipeimg img').src = `.${recipe.image}`;
  document.querySelector('.recipedetail .text').innerHTML = recipe.prep_time;

  const ingredients = document.getElementById('ingredients');
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement('li');
    li.innerText = ingredient;
    document.querySelector('.ingredients ul').append(li);
  });

  const steps = document.getElementById('steps');
  recipe.steps.forEach((step) => {
    const li = document.createElement('li');
    li.innerText = step;
    document.querySelector('.steps ol').append(li);
  });
}

document.querySelector('.hearticon').addEventListener('click', (e) => {
  const srcArr = e.target.src.split('/');
  const src = srcArr[srcArr.length - 1];
  if (src === 'heart.png') {
    e.target.src = '/img/heart-fill.png';
  } else {
    e.target.src = '/img/heart.png';
  }
});

document.querySelector('.shareicon').addEventListener('click', () => {
  const shareObject = {
    title: document.querySelector('.recipe-name').innerHTML,
    text: `${document.querySelector('.recipe-name').innerHTML} 레시피 보러가기`,
    url: window.location.href,
  };

  if (navigator.share) {
    // Navigator를 지원하는 경우만 실행하기
    navigator
      .share(shareObject)
      .then(() => {
        // 정상 동작할 경우 실행
        alert('공유하기 성공');
      })
      .catch((error) => {
        alert('에러가 발생했습니다.');
      });
  } else {
    // navigator를 지원하지 않는 경우
    alert('페이지 공유를 지원하지 않습니다.');
  }
});
