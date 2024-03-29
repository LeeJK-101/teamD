const imageList = [
  { src: 'img/mainimg/avocado.png', alt: '아보카도' },
  { src: 'img/mainimg/bread.png', alt: '식빵' },
  { src: 'img/mainimg/cabbage.png', alt: '양배추' },
  { src: 'img/mainimg/carrot.png', alt: '당근' },
  { src: 'img/mainimg/cucumber.png', alt: '오이' },
  { src: 'img/mainimg/doobu.png', alt: '두부' },
  { src: 'img/mainimg/egg.png', alt: '달걀' },
  { src: 'img/mainimg/greenonion.png', alt: '대파' },
  { src: 'img/mainimg/kimchi.png', alt: '김치' },
  { src: 'img/mainimg/mu.png', alt: '무' },
  { src: 'img/mainimg/onion.png', alt: '양파' },
  { src: 'img/mainimg/potato.png', alt: '감자' },
  { src: 'img/mainimg/slicepork.png', alt: '만능냉동삼겹' },
  { src: 'img/mainimg/spam.png', alt: '스팸' },
  { src: 'img/mainimg/tomato.png', alt: '토마토' },
];

const floatContainer = document.querySelector('.float_elements');

imageList.forEach((image) => {
  const link = document.createElement('a');
  link.href = `html/search.html?keyword=${image.alt}`;
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  link.appendChild(img);
  floatContainer.appendChild(link.cloneNode(true)); // 복사본을 추가
});

// Animation
gsap.to('.float_elements', {
  x: '200%',
  duration: 60,
  ease: 'none',
  repeat: -1,
});

gsap.to('.float_elements img', {
  rotation: 360,
  duration: 20,
  ease: 'none',
  repeat: -1,
});

function createDuplicateFloatElements() {
  const originalFloatElements = document.querySelector('.float_elements');
  const duplicateFloatElements = originalFloatElements.cloneNode(true); // 깊은 복사를 통해 복제

  // 원래 요소와 복제된 요소를 연속적으로 배치
  originalFloatElements.insertAdjacentElement(
    'beforebegin',
    duplicateFloatElements
  );

  // 원래 요소의 오른쪽 끝에서 시작하여 무한 루프 애니메이션 적용
  gsap.to('.float_elements', {
    x: '200%', // 오른쪽으로 이동
    duration: 60, // 2배 천천히
    ease: 'none',
    repeat: -1,
  });

  gsap.to('.float_elements img', {
    rotation: 360, // 회전
    duration: 20, // 2배 천천히
    ease: 'none',
    repeat: -1,
  });
}

createDuplicateFloatElements();

function createDuplicateFloatElements() {
  const originalFloatElements = document.querySelector('.float_elements');
  const duplicateFloatElements = originalFloatElements.cloneNode(true); // 깊은 복사를 통해 복제

  // 원래 요소와 복제된 요소를 연속적으로 배치
  originalFloatElements.insertAdjacentElement(
    'beforebegin',
    duplicateFloatElements
  );

  function animateFloatElements() {
    gsap.to('.float_elements', {
      x: '200%', // 오른쪽으로 이동
      duration: 60, // 2배 천천히
      ease: 'none',
      onComplete: function () {
        this.targets().forEach((target) => {
          gsap.set(target, { x: '-100%' }); // 시작 위치로 되돌리기
        });
      },
      repeat: -1,
    });
  }

  function animateFloatImages() {
    gsap.to('.float_elements img', {
      rotation: 360, // 회전
      duration: 20, // 2배 천천히
      ease: 'none',
      repeat: -1,
    });
  }

  animateFloatElements();
  animateFloatImages();
}

createDuplicateFloatElements();

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
  window.open(`/html/detailpage.html?id=${id}`, '_blank');
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
  dish.style.backgroundImage = `url(${recipe.image})`;
  dish.style.backgroundSize = 'cover';
  dish.style.backgroundPosition = 'center';

  const img = new Image();
  img.src = recipe.image;
  img.onload = () => {
    addOverlay(dish, recipe);
  };
}

function addOverlay(dish, recipe) {
  const overlay = document.createElement('div');
  overlay.className = 'dishesOverlay';
  overlay.innerHTML = `
    <p class="name" style="font-size: 25px; font-weight:300;  line-height: 30px;word-break : keep-all;word-wrap:break-word" >${recipe.name}</p>
    <p class="time" style="font-size: 12px; color: lightgrey; margin-top:15px">
      <i class="fas fa-clock" ></i> 약 ${recipe.prep_time}분 소요
    </p>
  `;

  dish.appendChild(overlay);

  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.color = 'white';
  overlay.style.fontWeight = '500';
  overlay.style.textAlign = 'left';
  overlay.style.position = 'relative';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.padding = '14px';
  overlay.style.transition = 'opacity 0.3s ease';
  overlay.style.opacity = '0';
  overlay.style.boxSizing = 'border-box';

  // 클릭 이벤트 추가
  dish.addEventListener('click', () => {
    redirectToDetailPage(recipe.id);
  });
}

//새창 주소
function redirectToDetailPage(id) {
  window.open(`/html/detailpage.html?id=${id}`, '_blank');
}

// 마우스 호버 시 오버레이 표시 및 숨김
document.addEventListener('DOMContentLoaded', () => {
  loadRecipes();

  const dishes = document.querySelectorAll('.dishes');
  dishes.forEach((dish) => {
    dish.addEventListener('mouseover', function () {
      showDishOverlay(this);
    });
    dish.addEventListener('mouseout', function () {
      hideDishOverlay(this);
    });
  });
});

function showDishOverlay(dish) {
  const overlay = dish.querySelector('.dishesOverlay');
  overlay.style.opacity = '1';
}

function hideDishOverlay(dish) {
  const overlay = dish.querySelector('.dishesOverlay');
  overlay.style.opacity = '0';
}

const searchInput = document.getElementById('search-input');
const searchIconIndex = document.getElementById('searchIconIndex');

const showSearchResult = () => {
  let searchWord = searchInput.value;
  window.location.href = `/html/search.html?keyword=${searchWord}`;
  searchInput.value = ''; // 입력 필드의 값을 비워줍니다.
};

const enterKey = (event) => {
  if (event.code === 'Enter') {
    showSearchResult();
  }
};

searchInput.addEventListener('keypress', (event) => {
  enterKey(event);
});

const searchByIconIndex = () => {
  showSearchResult();
};

searchIconIndex.addEventListener('click', searchByIconIndex);
