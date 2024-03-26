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
