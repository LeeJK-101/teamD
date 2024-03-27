// login page password inputbox eye icon toggle
(function () {
  var togglePasswordIcons = document.querySelectorAll('.toggle-password');
  togglePasswordIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
      var input = document.querySelector(icon.getAttribute('toggle'));
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    });
  });
})();

// // login page signIn and signUp tab toggle
// document.addEventListener('DOMContentLoaded', function () {
//   const signInTab = document.getElementById('tab1');
//   const signUpTab = document.getElementById('tab2');
//   signInTab.addEventListener('change', function () {
//     if (signInTab.checked) {
//       signUpTab.checked = false;
//     }
//   });
//   signUpTab.addEventListener('change', function () {
//     if (signUpTab.checked) {
//       signInTab.checked = false;
//     }
//   });
// });

var tab1div = document.querySelector('#tab1');
const innerForm1 = document.querySelector('.tb1div');
var tab2div = document.querySelector('#tab2');
const innerForm2 = document.querySelector('.tb2div');

tab1div.addEventListener('click', (e) => {
  if (e.target.checked) {
    innerForm1.style.transform = 'rotate(0)';
    innerForm1.style.zIndex = '99';
    innerForm2.style.transform = 'rotateY(180deg)';
    innerForm2.style.zIndex = '0';
  } else {
    innerForm1.style.transform = 'rotateY(180deg)';
    innerForm1.style.zIndex = '0';
    innerForm2.style.transform = 'rotateY(0)';
    innerForm2.style.zIndex = '99';
  }
});
tab2div.addEventListener('click', (e) => {
  if (e.target.checked) {
    innerForm2.style.visibility = 'visible';
    innerForm2.style.transform = 'rotateY(0)';
    innerForm2.style.zIndex = '99';
    innerForm1.style.transform = 'rotateY(180deg)';
    innerForm1.style.zIndex = '0';
  } else {
    innerForm1.style.transform = 'rotate(0)';
    innerForm1.style.zIndex = '99';
    innerForm2.style.transform = 'rotateY(180deg)';
    innerForm2.style.zIndex = '0';
  }
});

// login page radio checked toggle
// function toggleDiv() {
//   var tab1div = document.querySelector('.tab1div');
//   var tab2div = document.querySelector('.tab2div');
//   // 첫 번째, 두 번째 div 요소를 기본적으로 숨김
//   // tab1div.style.display = 'none';
//   // tab2div.style.display = 'none';

//   // 첫 번째 라디오 버튼이 선택된 경우
//   if (document.getElementById('tab1').checked) {
//     // 첫 번째 div 요소를 보여줌
//     // tab1div.style.display = 'block';
//     document.getElementById('tab1').style.transform = 'rotate(0)';
//     document.getElementById('tab1').style.zIndex = '99';
//     tab2div.style.display = 'block';
//   }
//   // 두 번째 라디오 버튼이 선택된 경우
//   else if (document.getElementById('tab2').checked) {
//     // 두 번째 div 요소를 보여줌
//     // tab2div.style.display = 'block';
//   }
// }

// 페이지 로드 시 함수 호출
// toggleDiv();

// 라디오 버튼 변경 시 함수 호출
// document.querySelectorAll('#tab1, #tab2').forEach(function (radio) {
//   radio.addEventListener('change', toggleDiv);
// });

// login page sign up email address accordion
document.addEventListener('DOMContentLoaded', function () {
  var domainInput = document.getElementById('domain');
  var domainList = document.querySelector('.domain-list');
  domainInput.addEventListener('focus', function () {
    domainList.style.display = 'block';
  });
  domainList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      domainInput.value = e.target.textContent;
      domainList.style.display = 'none';
    }
  });
  // Close domain list when clicking outside of it
  document.addEventListener('click', function (e) {
    if (!domainInput.contains(e.target) && !domainList.contains(e.target)) {
      domainList.style.display = 'none';
    }
  });
});
