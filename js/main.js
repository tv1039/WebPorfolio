document.addEventListener("DOMContentLoaded", function () {
  // fullpage.js 초기화 설정
  new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: false,
    navigation: true,
    navigationPosition: "right",
    showActiveTooltip: true,
    anchors: ["profile", "portfolio", "contact"],
    navigationTooltips: ["Profile", "Portfolio", "Contact"],
    menu: "nav ul",
    scrollingSpeed: 700,
    fitToSection: true,
    responsiveWidth: 1366,
    responsiveHeight: 768,
    afterLoad: function (origin, destination, direction) {
      const header = document.querySelector("header");
      const mobileMenu = document.querySelector(".mobile-menu");
      const fpNav = document.getElementById("fp-nav");

      // 현재 섹션에 따른 헤더와 네비게이션 스타일 변경
      header.classList.remove("profile", "portfolio", "contact");
      if (
        destination.anchor === "portfolio" ||
        destination.anchor === "contact"
      ) {
        header.classList.add(destination.anchor);
        mobileMenu.style.backgroundColor = "white";
        document
          .querySelectorAll(".mobile-menu ul li a")
          .forEach((item) => (item.style.color = "#DCD2A5"));
        mobileMenu.style.backgroundColor = "white";

        // portfolio나 contact 섹션에서의 도트 네비게이션 스타일
        fpNav.classList.add("dark-section");
      } else {
        header.classList.add("profile");
        mobileMenu.style.backgroundColor = "#1a1a1a";
        document
          .querySelectorAll(".mobile-menu ul li a")
          .forEach((item) => (item.style.color = "white"));
        mobileMenu.style.backgroundColor = "#1a1a1a";

        // profile 섹션에서의 도트 네비게이션 스타일
        fpNav.classList.remove("dark-section");
      }

      // 포트폴리오 섹션에서 아이템이 나타나는 효과
      if (destination.anchor === "portfolio") {
        document.querySelectorAll(".portfolio-item").forEach((item) => {
          item.classList.add("visible");
        });
      } else {
        document.querySelectorAll(".portfolio-item").forEach((item) => {
          item.classList.remove("visible");
        });
      }

      // 포트폴리오 섹션이고 클론 프로젝트가 열려있을 때만 헤더 숨기기
      if (
        destination.anchor === "portfolio" &&
        additionalProjects.classList.contains("show")
      ) {
        header.style.opacity = "0";
        setTimeout(() => {
          header.style.visibility = "hidden";
        }, 300);
      } else {
        // 다른 섹션이거나 클론 프로젝트가 닫혀있으면 헤더 보이기
        header.style.visibility = "visible";
        setTimeout(() => {
          header.style.opacity = "1";
        }, 10);
      }
    },
  });

  document.querySelectorAll(".skill-item").forEach(function (item) {
    item.addEventListener("click", function () {
      const skillName = this.getAttribute("data-skill"); // data-skill 속성에서 기술 이름을 가져옴
      const desciptionContainer = document.querySelector(
        ".skill-desciption-text"
      );
      desciptionContainer.classList.remove("show");

      setTimeout(() => {
        // 새 기술에 대한 정보를 업데이트합니다.
        desciptionContainer.innerHTML = `${skillName}`;
        desciptionContainer.classList.add("show");
      }, 650);
    });
  });

  // 포트폴리오 섹션 더보기 페이지
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const additionalProjects = document.getElementById("additionalProjects");
  const cloneProjectsTitle = document.querySelector(
    ".clone-projects-title.hidden"
  );
  const header = document.querySelector("header");

  loadMoreBtn.addEventListener("click", function () {
    additionalProjects.classList.toggle("hidden");
    cloneProjectsTitle.classList.toggle("hidden");
    additionalProjects.classList.toggle("show");

    // 포트폴리오 섹션에서만 헤더 토글
    if (fullpage_api.getActiveSection().anchor === "portfolio") {
      if (additionalProjects.classList.contains("show")) {
        loadMoreBtn.textContent = "Remove";
        loadMoreBtn.setAttribute("aria-expanded", "true");
        fullpage_api.setAutoScrolling(false);
        cloneProjectsTitle.scrollIntoView({ behavior: "smooth" });
        // 헤더 숨기기
        header.style.opacity = "0";
        setTimeout(() => {
          header.style.visibility = "hidden";
        }, 300);
      } else {
        loadMoreBtn.textContent = "Load More";
        loadMoreBtn.setAttribute("aria-expanded", "false");
        fullpage_api.setAutoScrolling(true);
        // 헤더 보이기
        header.style.visibility = "visible";
        setTimeout(() => {
          header.style.opacity = "1";
        }, 10);
      }
    }
  });

  //텍스트전환 마우스이벤트
  // 커서
  const cursor1 = document.getElementById("cursor1"),
    cursor2 = document.getElementById("cursor2"),
    cursor3 = document.getElementById("cursor3"),
    korLang = document.querySelector(".kor_lang"),
    engLang = document.querySelector(".eng_lang");

  document.body.addEventListener("mousemove", function (n) {
    cursor1.style.left = n.clientX + "px";
    cursor1.style.top = n.clientY + "px";
    cursor2.style.left = n.clientX + "px";
    cursor2.style.top = n.clientY + "px";
    cursor3.style.left = n.clientX + "px";
    cursor3.style.top = n.clientY + "px";
  });

  function cursorHoverOn() {
    cursor2.classList.add("hover");
    cursor3.classList.add("hover");
  }

  function cursorHoverOff() {
    cursor2.classList.remove("hover");
    cursor3.classList.remove("hover");
  }

  const korLangSection = document.querySelector("article.profile");
  korLangSection.addEventListener("mouseenter", function () {
    cursorHoverOn();
    korLang.style.opacity = "0";
    engLang.style.opacity = "1";
  });

  korLangSection.addEventListener("mouseleave", function () {
    cursorHoverOff();
    engLang.style.opacity = "0";
    korLang.style.opacity = "1";
  });

  // 창 크기 변경 시 모바일 메뉴 숨기기
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    }
  });

  // 모바일 메뉴 항목 클릭 시 모바일 메뉴 닫기
  document.querySelectorAll(".mobile-menu ul li a").forEach((item) => {
    item.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });

  // 네비게이션 항목 호버 시 스타일 변경
  document.querySelectorAll("header nav ul li a").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      item.classList.add("hover");
    });
    item.addEventListener("mouseleave", function () {
      item.classList.remove("hover");
    });
  });
});
