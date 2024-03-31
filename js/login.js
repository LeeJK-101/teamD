// login page password inputbox eye icon toggle
(function () {
  const togglePasswordIcons = document.querySelectorAll('.toggle-password');
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

// login page form 회전
const tab1div = document.querySelector('#tab1');
const innerForm1 = document.querySelector('.tb1div');
const tab2div = document.querySelector('#tab2');
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
