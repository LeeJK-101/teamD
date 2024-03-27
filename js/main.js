// JSON 데이터를 불러오는 함수
function fetchRecipes() {
  return fetch('/js/recipe_data.json')
    .then((response) => response.json())
    .then((data) => data);
}

// 랜덤한 id를 반환하는 함수
function getRandomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 랜덤한 레시피 이미지를 설정하는 함수
async function setRandomRecipeImages() {
  const recipes = await fetchRecipes();

  const pick1Id = getRandomId(1001, 1016).toString();
  const pick2Id = getRandomId(1001, 1016).toString();
  const pick3Id = getRandomId(1001, 1016).toString();

  const pick1 = document.querySelector('.pick1');
  const pick2 = document.querySelector('.pick2');
  const pick3 = document.querySelector('.pick3');

  const pick1Recipe = recipes.find(
    (recipe) => recipe.id.toString() === pick1Id
  );
  const pick2Recipe = recipes.find(
    (recipe) => recipe.id.toString() === pick2Id
  );
  const pick3Recipe = recipes.find(
    (recipe) => recipe.id.toString() === pick3Id
  );

  pick1.style.backgroundImage = `url(${pick1Recipe.image})`;
  pick1.style.backgroundPosition = 'center';
  pick1.style.backgroundSize = 'cover';
  pick1.innerHTML = `
                <div class="overlay">
                    <p class="name">${pick1Recipe.name}</p>
                    <p class="time"><i class="fas fa-clock" style="font-size: 12px; color: lightgrey;"></i> 약 ${
                      pick1Recipe.prep_time
                    }분 소요</p>
                    <p class="ingredients">${pick1Recipe.ingredients.join(
                      ', '
                    )}</p>
                </div>
            `;

  pick2.style.backgroundImage = `url(${pick2Recipe.image})`;
  pick2.style.backgroundPosition = 'center';
  pick2.style.backgroundSize = 'cover';
  pick2.innerHTML = `
                <div class="overlay">
                    <p class="name">${pick2Recipe.name}</p>
                    <p class="time"><i class="fas fa-clock" style="font-size: 12px; color: lightgrey;"></i> 약 ${
                      pick2Recipe.prep_time
                    }분 소요</p>
                    <p class="ingredients">${pick2Recipe.ingredients.join(
                      ', '
                    )}</p>
                </div>
            `;

  pick3.style.backgroundImage = `url(${pick3Recipe.image})`;
  pick3.style.backgroundPosition = 'center';
  pick3.style.backgroundSize = 'cover';
  pick3.innerHTML = `
                <div class="overlay">
                    <p class="name">${pick3Recipe.name}</p>
                    <p class="time"><i class="fas fa-clock" style="font-size: 12px; color: lightgrey;"></i> 약 ${
                      pick3Recipe.prep_time
                    }분 소요</p>
                    <p class="ingredients">${pick3Recipe.ingredients.join(
                      ', '
                    )}</p>
                </div>
            `;

  // 스타일 적용
  const overlayStyle = `
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.7);
                border-radius: 12px;
                padding: 20px;
            `;

  // 클릭 이벤트 리스너 추가
  pick1.addEventListener('click', () => redirectToDetailPage(pick1Recipe.id));
  pick2.addEventListener('click', () => redirectToDetailPage(pick2Recipe.id));
  pick3.addEventListener('click', () => redirectToDetailPage(pick3Recipe.id));

  const nameStyle = `
                color: white;
                font-size: 20px;
                margin-bottom: 12px;
            `;

  const timeStyle = `
                color: lightgrey;
                font-size: 12px;
                margin-bottom: 5px;
            `;

  const ingredientsStyle = `
                color: white;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            `;

  document.querySelectorAll('.overlay').forEach((overlay) => {
    overlay.style.cssText = overlayStyle;
    overlay.querySelector('.name').style.cssText = nameStyle;
    overlay.querySelector('.time').style.cssText = timeStyle;
    overlay.querySelector('.ingredients').style.cssText = ingredientsStyle;
  });
}

// 상세 페이지로 새 탭에서 열리도록 이동하는 함수
function redirectToDetailPage(id) {
  window.open(`/html/detail.html?id=${id}`, '_blank');
}
// 페이지 로드 시 랜덤한 레시피 이미지 설정
document.addEventListener('DOMContentLoaded', () => {
  setRandomRecipeImages();
});

// 슬라이드
let n = 0;

function slide() {
  const slideItems = document.querySelectorAll('.todaypicks_box .today');

  if (n < 2) {
    n++;
  } else {
    n = 0;
  }

  slideItems.forEach((item) => {
    item.style.display = 'none';
  });

  slideItems[n].style.display = 'block';
}

setInterval(slide, 2000);

// 기존 6개의 .dishes에 레시피 이미지와 오버레이 설정하는 함수
async function loadRecipes() {
  const recipes = await fetchRecipes();
  const selectedRecipes = [];

  const dishes = document.querySelectorAll('.dishes');

  for (let dish of dishes) {
    let randomRecipe;
    do {
      const randomIndex = Math.floor(Math.random() * (1016 - 1001 + 1)) + 1001;
      randomRecipe = recipes.find((r) => r.id === randomIndex);
    } while (selectedRecipes.includes(randomRecipe.id));

    selectedRecipes.push(randomRecipe.id);

    setDishBackground(dish, randomRecipe);
  }
}

function setDishBackground(dish, recipe) {
  // 레시피 이미지 설정
  dish.style.backgroundImage = `url(${recipe.image})`;
  dish.style.backgroundSize = 'cover';
  dish.style.backgroundPosition = 'center';

  // 이미지 로드 후 오버레이 추가
  const img = new Image();
  img.src = recipe.image;
  img.onload = () => {
    addOverlay(dish, recipe);
  };
}

function addOverlay(dish, recipe) {
  // 오버레이 요소 생성 및 설정
  const overlay = document.createElement('div');
  overlay.className = 'dishesOverlay';
  overlay.innerHTML = `
    <span class="name">${recipe.name}</span>
    <span class="time">
      <i class="fas fa-clock" style="font-size: 12px; color: lightgrey;"></i> 약 ${recipe.prep_time}분 소요
    </span>
  `;
  dish.appendChild(overlay);

  // 오버레이 스타일 설정
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  overlay.style.color = 'white';
  overlay.style.fontSize = '14px';
  overlay.style.fontWeight = '500';
  overlay.style.textAlign = 'left';
  overlay.style.position = 'absolute';
  overlay.style.bottom = '0';
  overlay.style.left = '0';
  overlay.style.right = '0';
  overlay.style.padding = '10px';
  overlay.style.transition = 'opacity 0.3s ease';
  overlay.style.opacity = '0';
}

// 페이지 로드 시 6개의 레시피 이미지 설정 및 오버레이 적용
document.addEventListener('DOMContentLoaded', () => {
  loadRecipes();
});
