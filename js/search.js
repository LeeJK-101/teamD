

function fetchRecipes() {
  fetch('../js/recipe_data.json')
    .then((response) => response.json())
    .then((data) => {
      searchRecipe(data, paramKeyword);
    });
}
fetchRecipes();
const recipe = document.querySelector('.recipe'); //레시피 ul
const searchBtn = document.querySelector('#search-btn'); //검색버튼
const convenienceBtn = document.querySelector('.cookingTime'); //탭 간편요리
const dietFoodBtn = document.querySelector('.dietFood');
const gradeBtn = document.querySelector('.grade'); // 탭 평점순
const timeBtn = document.querySelector('.timerate'); //조리시간순
const viewBtn = document.querySelector('.view'); //조리시간순
const urlParam = new URLSearchParams(window.location.search);
const paramKeyword = urlParam.get('keyword'); // 쿼리스트링 중 id 키의 값을 뽑아줌
const h2 = document.querySelector('h2');
const depth = document.querySelector('.depth');

function displayList(cooking) {
  //cooking배열 안의 해당하는 리스트를 넣고 display시키는 함수
  recipe.innerHTML = ''; //레시피 ul초기화
  cooking.forEach((cook) => {
    const recipeLi = document.createElement('li'); //레시피 안의 ul에 li const 할당
    recipeLi.innerHTML = `
          <img src=".${cook.image}" alt="${cook.name}" />
          <p><span class="material-symbols-outlined">
          grade
          </span>  ${cook.star}</p>
          ${cook.name}
          <p><span class="material-symbols-outlined">
          schedule
          </span>${cook.prep_time}분 </p>
           
        `; //생성된 li안에 html구조 생성
    recipe.append(recipeLi); //html구조 넣은 li을 레시피 ul안에 생성
    recipeLi.addEventListener('click', () => {
      window.location.href = `detailpage.html?id=${cook.id}`;
    });
  }); //
}
function searchRecipe(cooking, keyword) {
  // console.log(cooking);

  const filteredRecipe = [];
  cooking.filter((cook) => {
    if (cook.ingredients) {
      cook.ingredients.map((ingredient) => {
        if (ingredient.includes(keyword)) {
          filteredRecipe.push(cook);
        }
      });
    }
  });

  const filteredRecipe2 = cooking.filter((cook) => {
    return cook.name.includes(keyword);
  });
  const simple = filteredRecipe.filter((cook) => cook.prep_time <= 10); //초간단 레시피 필터
  const dietFood = filteredRecipe.filter((cook) => cook.calories <= 400);
  let normal = true;
  let filteredConvenience = false; //간편식 필터된 상태
  let filteredDiet = false; //다이어트식 필터된 상태
  let none = false;

  if (filteredRecipe.length === 0 || filteredRecipe2.length === 0) {
    recipe.innerHTML =
      '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
    none = true;
  } else {
    if (keyword == '계란') {
      //입력한 키워드 값에 따라 필터된 cooking 배열을 display
      displayList(filteredRecipe);
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(filteredRecipe.length);
    } else if (keyword == '에그') {
      displayList(filteredRecipe);
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(filteredRecipe.length);
    } else if (keyword == '달걀') {
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
    } else if (keyword == '') {
      recipe.innerHTML =
        '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      none = true;
    } else {
      displayList(filteredRecipe2);
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(filteredRecipe2.length);
    }
  }

  // --------------------필터탭----------------------------------------------

  convenienceBtn.addEventListener('click', () => {
    none = false;
    if (simple == '') {
      recipe.innerHTML =
        '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(simple.length);
      none = true;
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

    convenienceBtn.style.color = 'rgba(119, 219, 101, 0.716)';
    dietFoodBtn.style.color = 'black';
  });

  dietFoodBtn.addEventListener('click', () => {
    none = false;
    if (dietFood == '') {
      recipe.innerHTML =
        '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(dietFood.length);
      filteredDiet = true;
      filteredConvenience = false;
      normal = false;
      none = true;
    } else {
      displayList(dietFood);
      h2.innerHTML = '개의 레시피가 검색되었습니다';
      h2.prepend(dietFood.length);
      normal = false;
      filteredDiet = true;
      filteredConvenience = false;
    }

    convenienceBtn.style.color = 'black';
    dietFoodBtn.style.color = 'rgba(119, 219, 101, 0.716)';
  });
  // --------------------배열 순서--------------------------------------

  gradeBtn.addEventListener('click', () => {
    //평점에 따라 배열 순서 정렬
    const gradeArr = filteredRecipe.sort((a, b) => {
      return b.star - a.star;
    });
    const gradeArrConv = simple.sort((a, b) => {
      return b.star - a.star;
    });
    const gradeArrDiet = dietFood.sort((a, b) => {
      return b.star - a.star;
    });
    if (filteredConvenience) {
      displayList(gradeArrConv);
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    } else if (filteredDiet) {
      displayList(gradeArrDiet);
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    } else if (normal) {
      displayList(gradeArr);
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    }
    gradeBtn.style.fontWeight = 'bold';
    timeBtn.style.fontWeight = 'normal';
    viewBtn.style.fontWeight = 'normal';
    depth.insertBefore(gradeBtn, depth.firstChild);
  });
  timeBtn.addEventListener('click', () => {
    const timeArr = filteredRecipe.sort((a, b) => {
      return a.prep_time - b.prep_time;
    });
    const timeArrConv = simple.sort((a, b) => {
      return a.prep_time - b.prep_time;
    });
    const timeArrDiet = dietFood.sort((a, b) => {
      return a.prep_time - b.prep_time;
    });
    if (filteredConvenience) {
      displayList(timeArrConv); //필터된 배열 디스플레이
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    } else if (filteredDiet) {
      displayList(timeArrDiet); // 필터 전 배열 디스플레이
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    } else if (normal) {
      displayList(timeArr);
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    }
    timeBtn.style.fontWeight = 'bold';
    gradeBtn.style.fontWeight = 'normal';
    viewBtn.style.fontWeight = 'normal';
    depth.insertBefore(timeBtn, depth.firstChild);
  });
  viewBtn.addEventListener('click', () => {
    const viewArr = filteredRecipe.sort((a, b) => {
      return a.interest - b.interest;
    });
    const viewArrConv = simple.sort((a, b) => {
      return a.interest - b.interest;
    });
    const viewArrDiet = dietFood.sort((a, b) => {
      return a.interest - b.interest;
    });
    if (filteredConvenience) {
      displayList(viewArrConv);
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    } else if (filteredDiet) {
      displayList(viewArrDiet);
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    } else if (normal) {
      displayList(viewArr);
      if (none) {
        recipe.innerHTML =
          '<p style="height:500px;line-height:500px; ">해당하는 레시피가 없습니다.</p>';
      }
    }
    timeBtn.style.fontWeight = 'normal';
    gradeBtn.style.fontWeight = 'normal';
    viewBtn.style.fontWeight = 'bold';
    depth.insertBefore(viewBtn, depth.firstChild);
  });
}
// ---------------------검색----------------------------------
// searchBtn.addEventListener('click', () => {
//   const keyword = document.querySelector('input').value;
//   // searchRecipe(keyword);
//   dietFoodBtn.style.color = 'black';
//   convenienceBtn.style.color = 'black';
//   depth.insertBefore(gradeBtn, depth.firstChild);
//   gradeBtn.style.fontWeight = 'bold';
//   timeBtn.style.fontWeight = 'normal';
//   viewBtn.style.fontWeight = 'normal';
// });

// searchRecipe(paramKeyword);
gradeBtn.style.fontWeight = 'bold';
