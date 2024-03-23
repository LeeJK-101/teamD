const cooking = [
  {
    grade: 5,
    name: '레시피1',
    time: 10,
    image: '../img/sample01.png',
    description: '',
    class: '계란,치즈',
    calories: '450',
  },
  {
    grade: 3,
    name: '레시피2',
    time: 20,
    image: '../img/sample02.png',
    description: '',
    class: '계란,두부',
    calories: '450',
  },
  {
    grade: 5,
    name: '레시피3',
    time: 10,
    image: '../img/sample03.png',
    description: '',
    class: '계란',
    calories: '550',
  },
  {
    grade: 5,
    name: '레시피4',
    time: 20,
    image: '../img/sample04.png',
    description: '',
    class: '두부',
    calories: '450',
  },
  {
    grade: 5,
    name: '레시피5',
    time: 10,
    image: '../img/sample05.png',
    description: '',
    class: '계란',
    calories: '450',
  },
  {
    grade: 5,
    name: '레시피6',
    time: 10,
    image: '../img/sample06.png',
    description: '',
    class: '치즈',
    calories: '450',
  },
  {
    grade: 5,
    name: '레시피7',
    time: 10,
    image: '../img/sample07.png',
    description: '',
    class: '당근',
    calories: '550',
  },
  {
    grade: 4,
    name: '레시피8',
    time: 20,
    image: '../img/sample08.png',
    description: '',
    class: '계란',
    calories: '350',
  },
  {
    grade: 5,
    name: '레시피9',
    time: 10,
    image: '../img/sample09.png',
    description: '',
    class: '당근',
    calories: '450',
  },
  {
    grade: 3,
    name: '레시피10',
    time: 10,
    image: '../img/sample10.png',
    description: '',
    class: '당근',
    calories: '450',
  },
  {
    grade: 5,
    name: '레시피11',
    time: 10,
    image: '../img/sample11.png',
    description: '',
    class: '감자',
    calories: '450',
  },
  {
    grade: 2,
    name: '레시피12',
    time: 20,
    image: '../img/sample12.png',
    description: '',
    class: '계란',
    calories: '450',
  },
  {
    grade: 5,
    name: '레시피13',
    time: 10,
    image: '../img/sample13.png',
    description: '',
    class: '계란',
    calories: '450',
  },
  {
    grade: 4,
    name: '레시피14',
    time: 10,
    image: '../img/sample14.png',
    description: '',
    class: '계란',
    calories: '550',
  },
  {
    grade: 3,
    name: '레시피15',
    time: 20,
    image: '../img/sample15.png',
    description: '',
    class: '계란',
    calories: '350',
  },
  {
    grade: 5,
    name: '레시피16',
    time: 10,
    image: '../img/sample16.png',
    description: '',
    class: '계란',
    calories: '250',
  },
];

const recipe = document.querySelector('.recipe'); //레시피 ul
const searchBtn = document.querySelector('#search-btn'); //검색버튼
const convenienceBtn = document.querySelector('.cookingTime'); //탭 간편요리
const dietFoodBtn = document.querySelector('.dietFood');
const gradeBtn = document.querySelector('.grade'); // 탭 평점순
const timeBtn = document.querySelector('.timerate'); //조리시간순
const urlParam = new URLSearchParams(window.location.search);
const productId = urlParam.get('class'); // 쿼리스트링 중 id 키의 값을 뽑아줌
const h2 = document.querySelector('h2');

function displayList(cooking) {
  //cooking배열 안의 해당하는 리스트를 넣고 display시키는 함수
  recipe.innerHTML = ''; //레시피 ul초기화
  cooking.forEach((cook) => {
    const recipeLi = document.createElement('li'); //레시피 안의 ul에 li const 할당
    recipeLi.innerHTML = `
          <img src="${cook.image}" alt="${cook.name}" />
          <p>${cook.grade}<br>
          <p>${cook.name},<br> 조리시간 ${cook.time}분 </p>  
        `; //생성된 li안에 html구조 생성
    recipe.append(recipeLi); //html구조 넣은 li을 레시피 ul안에 생성
  }); //
}
function searchRecipe(keyword) {
  const filteredRecipe = cooking.filter((cook) => {
    return cook.class.includes(keyword); //입력한 키워드를 찾아 cooking 배열을 필터
  });
  let normal = true;
  let filteredConvenience = false; //간편식 필터된 상태
  let filteredDiet = false; //다이어트식 필터된 상태

  if (keyword == '계란') {
    //입력한 키워드 값에 따라 필터된 cooking 배열을 display
    displayList(filteredRecipe);
    h2.innerHTML = '개의 레시피가 검색되었습니다';
    h2.prepend(filteredRecipe.length);
  } else if (keyword == '치즈') {
    displayList(filteredRecipe);
    h2.innerHTML = '개의 레시피가 검색되었습니다';
    h2.prepend(filteredRecipe.length);
  } else if (keyword == '당근') {
    displayList(filteredRecipe);
    h2.innerHTML = '개의 레시피가 검색되었습니다';
    h2.prepend(filteredRecipe.length);
  } else if (keyword == '두부') {
    displayList(filteredRecipe);
    h2.innerHTML = '개의 레시피가 검색되었습니다';
    h2.prepend(filteredRecipe.length);
  } else if (keyword == '감자') {
    displayList(filteredRecipe);
    h2.innerHTML = '개의 레시피가 검색되었습니다';
    h2.prepend(filteredRecipe.length);
  } else {
    recipe.innerHTML =
      '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';

    // 해당하는 키워드가 없을 시 레시피가 없음을 알림
  }

  // --------------------필터탭----------------------------------------------
  const simple = filteredRecipe.filter((cook) => cook.time <= 10); //초간단 레시피 필터
  const dietFood = filteredRecipe.filter((cook) => cook.calories <= 400);

  convenienceBtn.addEventListener('click', () => {
    if (simple == '') {
      recipe.innerHTML =
        '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(simple.length);
      normal = false;
      filteredDiet = true;
      filteredConvenience = false;
    } else {
      displayList(simple); //초간단 레시피 필터가 적용됐을 경우 디스플레이 후 필터변수에 true할당
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(simple.length);
      normal = false;
      filteredConvenience = true;
      filteredDiet = false;
    }
  });

  dietFoodBtn.addEventListener('click', () => {
    if (dietFood == '') {
      recipe.innerHTML =
        '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(dietFood.length);
      filteredDiet = true;
      filteredConvenience = false;
      normal = false;
    } else {
      displayList(dietFood);
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(dietFood.length);
      normal = false;
      filteredDiet = true;
      filteredConvenience = false;
    }
  });
  // --------------------배열 순서--------------------------------------
  gradeBtn.addEventListener('click', () => {
    //평점에 따라 배열 순서 정렬
    const gradeArr = filteredRecipe.sort((a, b) => {
      return b.grade - a.grade;
    });
    const gradeArrConv = simple.sort((a, b) => {
      return b.grade - a.grade;
    });
    const gradeArrDiet = dietFood.sort((a, b) => {
      return b.grade - a.grade;
    });
    if (filteredConvenience) {
      displayList(gradeArrConv);
    } else if (filteredDiet) {
      displayList(gradeArrDiet);
    } else if (normal) {
      displayList(gradeArr);
    }
  });
  timeBtn.addEventListener('click', () => {
    //평점에 따라 배열 순서 정렬
    const timeArr = filteredRecipe.sort((a, b) => {
      return a.time - b.time;
    });
    const timeArrConv = simple.sort((a, b) => {
      return a.time - b.time;
    });
    const timeArrDiet = dietFood.sort((a, b) => {
      return a.grade - b.grade;
    });
    if (filteredConvenience) {
      displayList(timeArrConv); //필터된 배열 디스플레이
    } else if (filteredDiet) {
      displayList(timeArrDiet); // 필터 전 배열 디스플레이
    } else if (normal) {
      displayList(timeArr);
    }
  });
}
// ---------------------검색----------------------------------
searchBtn.addEventListener('click', () => {
  const keyword = document.querySelector('input').value;

  searchRecipe(keyword);
});

searchRecipe(productId);
