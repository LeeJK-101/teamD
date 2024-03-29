const head = document.querySelector('header');
head.innerHTML = `  
<!-- nav -->
<article class="header_inner">
  <a href="#"
      ><span class="material-symbols-outlined menu" id="burger"> menu </span></a
    >
  <a href="../index.html" class="logo"><img src="../img/logo/logotype01_c2white.svg" alt="logo" style="height: 36px;"></a>
  <nav class="nomalNav">
    <!-- nav-menu -->
    <ul class="nav-links">
      
      <li><a href="/html/allCategories.html">전체 카테고리</a></li>
      <li><a href="#">마이 페이지</a></li>
      <li><a href="login.html">로그인/회원가입</a></li>

    </ul>
  </nav>
  
  <div class="search-box hidden">
    <input type="text"  placeholder="검색" />


    <span class="material-symbols-outlined search-icon" id="search-btn">search </span>
  </div>
  <!-- search -->
  <!-- nav-right-side -->
  <div class="icons">
    <span class="material-symbols-outlined search-icon" id="searchIcon">search </span>
    <a href="#"
      ><span class="material-symbols-outlined account">
        account_circle
      </span></a
    >
    <a href="#"
      ><span class="material-symbols-outlined favorite"> favorite </span></a
    >
  </div>
</article>
<article class="hidden modal">
  <nav class="hiddenNav">
    <ul class="mobileNav">
      <li><a href="#">전체 카테고리</a></li>
      <li><a href="#">마이 페이지</a></li>
      <li><a href="login.html">로그인/회원가입</a></li>
    </ul>
  </nav>
  <div class="modalBack"></div>
</article>
        `;

const searchIcon = document.querySelector('#searchIcon'),
  burger = document.querySelector('#burger'),
  hiddenBtn = document.querySelector('.hidden'),
  nav = document.querySelector('.nomalNav'),
  modal = document.querySelector('.modal'),
  modalBack = document.querySelector('.modalBack'),
  searchBox = document.querySelector('.search-box'),
  navCloseBtn = document.querySelector('.navCloseBtn');

searchIcon.addEventListener('click', () => {
  nav.classList.toggle('hidden');
  searchBox.classList.toggle('hidden');
});
burger.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});
modalBack.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

const searchBtn2 = document.querySelector('#search-btn');

searchBtn2.addEventListener('click', () => {
  const keyword = document.querySelector('input').value;
  // -------나중에 search입력값을 쿼리스트링으로 보내 이동 @@지우지 마세요@@
  window.location.href = `search.html?keyword=${keyword}`;
});

const foot = document.querySelector('footer');

foot.innerHTML = `  <div class="footer-container">
<div class="footer-logo"><a href="../index.html"><img src="../img/logo/logotype03_c1green.svg" alt="logo" height="26px" /></a></div>
</div>
<!-- footer top -->
<div class="footer-row">

<div class="col">

  <div class="footer-info">
    <h2>팀 프로젝트</h2>
  </div>
  <div class="footer-content">
    <ul>
      <li>
        <a class="about" href="#"
          ><img src="../img/logo/logotype04_c1green.svg" alt="logo" width="16px" class="micrologo" /> team D 자취요리사</a
        >
      </li>
      <li>
        <a class="about" ef="#"
          ><i class="fa-solid fa-location"></i>서울시 강동구 고덕로 </a
        >
      </li>
      <li>
        <a class="about" href="#"><i class="fa-solid fa-phone"></i>00-0000-0000</a>
      </li>
      <li>
        <a class="about" href="#"
          ><i class="fa-solid fa-envelope"></i>support@jcyorisa.com</a>
      </li>
    </ul>
  </div>
</div>
<div class="col">
  <div class="footer-info">
    <h2>Team D</h2>
  </div>
  <div class="footer-content">
    <ul>
      <li><a href="#">자취요리사 소개</a></li>
      <li><a href="#">우리에 대해</a></li>
      <li><a href="#">팀 멤버</a></li>
    </ul>
  </div>
</div>
<div class="col">
  <div class="footer-info">
    <h2>서비스</h2>
  </div>
  <div class="footer-content">
    <ul>
      <li><a href="#">추천 요리</a></li>
      <li><a href="#">베스트 요리</a></li>
      <li><a href="#">요리 팁</a></li>
      <li><a href="#">자취요리 컨테스트</a></li>



    </ul>
  </div>
</div>
<div class="col">
  <div class="footer-info">
    <h2>고객센터</h2>
  </div>
  <div class="footer-content">
    <ul>
      <li><a href="#">공지 사항</a></li>
      <li><a href="#">자주묻는 질문</a></li>
      <li><a href="#">QnA</a></li>
      <li><a href="#">제휴 안내</a></li>
      <li><a href="#">개인 정보 정책</a></li>

    </ul>
  </div>
</div>
</div>

<!-- footer bottom -->
<div class="footer-bottom">
<div class="social">
<ul>
    <li>
      <a href="#"><a href="https://www.facebook.com/home.php" target="_blank"><i class="fab fa-facebook-f"></i></a>
    </li>
    <li>
      <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
    </li>
    <li>
      <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
    </li>
    <li>
      <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
    </li>
    <li>
      <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    </li>
  </ul>
</div>
<div class="copyright">
  <p>
    <i class="fa-regular fa-copyright"></i> 2024 Copyright all rights reserved.
  </p>
</div>
</div>
</div>`;
