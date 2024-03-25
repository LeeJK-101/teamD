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

// 페이지 로드 시 랜덤한 레시피 이미지 설정
document.addEventListener('DOMContentLoaded', () => {
  setRandomRecipeImages();
  loadRecipes();
});

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

setInterval(slide, 3000);
// =================================================================================
//
//     6 종
//
// =================================================================================
// async function loadRecipes() {
//   const recipes = await fetchRecipes();

//   const dishes = document.querySelectorAll('.dishes');

//   dishes.forEach((dish, index) => {
//     const recipe = recipes[index];
//     dish.style.backgroundImage = `url(${recipe.image})`;
//     dish.style.backgroundSize = 'cover';
//     dish.style.backgroundPosition = 'center';
//   });
// }

// async function fetchRecipes() {
//   const response = await fetch('/js/recipe_data.json');
//   const data = await response.json();
//   // id 1001~1016 중에서 랜덤하게 6개 선택
//   const selectedRecipes = data
//     .filter((recipe) => recipe.id >= 1001 && recipe.id <= 1016)
//     .slice(0, 6);
//   return selectedRecipes;
// }

// loadRecipes();
