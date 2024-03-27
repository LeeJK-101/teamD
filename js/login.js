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
// login page signIn and signUp tab toggle
document.addEventListener('DOMContentLoaded', function () {
  var signInTab = document.getElementById('tab-1');
  var signUpTab = document.getElementById('signUp');
  signInTab.addEventListener('change', function () {
    if (signInTab.checked) {
      signUpTab.checked = false;
    }
  });
  signUpTab.addEventListener('change', function () {
    if (signUpTab.checked) {
      signInTab.checked = false;
    }
  });
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
