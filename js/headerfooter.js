
const head = document.querySelector('.headerA');
head.innerHTML = `<!-- nav -->
        <article class="header_inner">
          <a href="#"
              ><span class="material-symbols-outlined menu" id="burger"> menu </span></a
            >
          <a href="#" class="logo"><img src="../img/logo3.svg" alt="logo"></a>
          <nav class="nomalNav">
            <!-- nav-menu -->
            <ul class="nav-links">
              <li><a href="#">계정</li>
              <li><a href="#">마이 페이지</a></li>
              <li><a href="#">전체 카테고리</a></li>
              <li><a href="#">텍스트</a></li>
              <li><a href="#">텍스트</a></li>
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
              <li><a href="#">계정</li>
              <li><a href="#">마이 페이지</a></li>
              <li><a href="#">전체 카테고리</a></li>
              <li><a href="#">텍스트</a></li>
              <li><a href="#">텍스트</a></li>
            </ul>
          </nav>
          <div class="modalBack"></div>
        </article>
        `;
const foot = document.querySelector('.footerA');

foot.innerHTML = `<div class="footer-container">
        
        <!-- footer top -->
        <div class="footer-row">
          <div class="col">
            <div class="footer-info">
            <div class="footer-logo"><a href="#"><img src="../img/logo4.svg" alt="logo" height="26px"/></a></div>
            </div>
            <div class="footer-content">
              <p>팀 프로젝트</p>
              <ul>
                <li>
                  <a class="about" href="#"
                    ><img src="../img/logo2.svg" alt="logo" width="16px" /> 팀 :
                    "D" 자취유리사</a
                  >
                </li>
                <li>
                  <a class="about" ef="#"
                    ><i class="fa-solid fa-location"></i>서울시 강동 켐퍼스</a
                  >
                </li>
                <li>
                  <a class="about" href="#"><i class="fa-solid fa-phone"></i>000-0000-0000</a>
                </li>
                <li>
                  <a class="about" href="#"
                    ><i class="fa-solid fa-envelope"></i>blgn9958@gmail.com</a>
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
                <li><a href="#">우리에 대해</a></li>
                <li><a href="#">우리의 서비스</a></li>
                <li><a href="#">개인 정보 정책</a></li>
                <li><a href="#">비즈니스</a></li>
                <li><a href="#">팀 멤버</a></li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="footer-info">
              <h2>도움말</h2>
            </div>
            <div class="footer-content">
              <ul>
                <li><a href="#">자주묻는 질문</a></li>
                <li><a href="#">저작권</a></li>
                <li><a href="#">help</a></li>
                <li><a href="#">텍스트</a></li>
                <li><a href="#">텍스트</a></li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="footer-info">
              <h2>서비스</h2>
            </div>
            <div class="footer-content">
              <ul>
                <li><a href="#">좋아요 음식</a></li>
                <li><a href="#">인기 유리</a></li>
                <li><a href="#">재료</a></li>
                <li><a href="#">공지 사항</a></li>
                <li><a href="#">텍스트</a></li>
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

