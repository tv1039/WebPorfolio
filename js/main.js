document.addEventListener("DOMContentLoaded", function () {
  // fullpage.js 초기화 설정
  new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: false,
    anchors: ["profile", "portfolio", "contact"],
    navigationTooltips: ["Profile", "Portfolio", "Contact"],
    menu: "nav ul", // 헤더 네비게이션과 연결
    afterLoad: function (origin, destination, direction) {
      const header = document.querySelector("header");
      const mobileMenu = document.querySelector(".mobile-menu");

      // 현재 섹션에 따른 헤더 스타일 변경
      header.classList.remove("profile", "portfolio", "contact");
      if (
        destination.anchor === "portfolio" ||
        destination.anchor === "contact"
      ) {
        header.classList.add(destination.anchor);
        document
          .querySelectorAll(".hamburger i")
          .forEach((icon) => (icon.style.color = "#242424"));
        mobileMenu.style.backgroundColor = "white";
        document
          .querySelectorAll(".mobile-menu ul li a")
          .forEach((item) => (item.style.color = "#DCD2A5"));
        mobileMenu.style.backgroundColor = "white";
      } else {
        header.classList.add("profile");
        document
          .querySelectorAll(".hamburger i")
          .forEach((icon) => (icon.style.color = "white"));
          mobileMenu.style.backgroundColor = "#242424";
        document
          .querySelectorAll(".mobile-menu ul li a")
          .forEach((item) => (item.style.color = "white"));
        mobileMenu.style.backgroundColor = "#242424";
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

      // 포트폴리오 섹션이 아닌 경우 팝업 닫기 및 스와이퍼 초기화
      if (destination.anchor !== "portfolio") {
        const additionalProjects =
          document.getElementById("additionalProjects");
        if (additionalProjects.style.display === "flex") {
          additionalProjects.classList.add("hidden");
          additionalProjects.style.display = "none";
          if (swiperInstance) {
            swiperInstance.destroy(true, true); // 스와이퍼 완전히 제거
            swiperInstance = null; // 스와이퍼 인스턴스 초기화
          }
        }
      }
    },
  });

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // 햄버거 버튼 클릭 시 모바일 메뉴 토글
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // 창 크기 변경 시 모바일 메뉴 숨기기
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // 모바일 메뉴 항목 클릭 시 모바일 메뉴 닫기
  document.querySelectorAll(".mobile-menu ul li a").forEach((item) => {
    item.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
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

  // 프로젝트 팝업창
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const additionalProjects = document.getElementById("additionalProjects");
  const closeBtn = document.querySelector(".close-btn");
  let swiperInstance = null;

  // 팝업 열기
  loadMoreBtn.addEventListener("click", function () {
    additionalProjects.classList.remove("hidden");
    additionalProjects.style.display = "flex"; // 팝업 표시

    // Swiper 초기화
    if (!swiperInstance) {
      swiperInstance = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slidesPerView: 1, // 기본 슬라이드 수
        loop: true,
        breakpoints: {
          // 768px 이하의 화면에서는 1개의 슬라이드만 보이도록 설정
          768: {
            slidesPerView: 3,
          },
        },
      });
    }
  });

  // 팝업 닫기
  closeBtn.addEventListener("click", function () {
    additionalProjects.classList.add("hidden");
    additionalProjects.style.display = "none";
    if (swiperInstance) {
      swiperInstance.destroy(true, true); // 스와이퍼 완전히 제거
      swiperInstance = null; // 스와이퍼 인스턴스 초기화
    }
  });

  // 팝업 바깥 영역 클릭 시 닫기
  additionalProjects.addEventListener("click", function (event) {
    if (event.target === additionalProjects) {
      additionalProjects.classList.add("hidden");
      additionalProjects.style.display = "none";
      if (swiperInstance) {
        swiperInstance.destroy(true, true); // 스와이퍼 완전히 제거
        swiperInstance = null; // 스와이퍼 인스턴스 초기화
      }
    }
  });
});
