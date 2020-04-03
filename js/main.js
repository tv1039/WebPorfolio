
    // 메인 배경 시계
    function realtimeClock() {
        var rtClock = new Date();
        var hours = rtClock.getHours();
        var minutes = rtClock.getMinutes();
        var seconds = rtClock.getSeconds();
        var amPm = hours < 12 ? "AM" : "PM";
        hours = hours > 12 ? hours - 12 : hours;
        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);
        document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds + "" + amPm;
        var t = setTimeout(realtimeClock, 500);
      }
      
      realtimeClock();
    

    // 메인 GNB ON/OFF
    const 
        nav = document.querySelector("#nav"),
        navBtn = nav.querySelectorAll("li"),
        mainBg = document.querySelector('.main_bg')
        ;

    function gnbBtn(){
        
        for(let i = 0 ; i < navBtn.length ; i++) {
        
            navBtn[i].addEventListener('mouseenter',function(){
                const on = nav.querySelector(".on"),
                      on2 = mainBg.querySelector(".on");

                if(!navBtn[i].classList.contains("on")) {
                    if(on) {
                        on.classList.remove("on");
                    
                         if(on2){
                         mainBg.classList.remove("on");
                         }
                         mainBg.classList.add("on");
                    }
                    navBtn[i].classList.add('on')
                } else {
                    navBtn[i].classList.remove("on")
                }
                
                
            })
            
        }
    }gnbBtn();
    

    // 메인 텍스트 ON
    const
        textArea = document.querySelector('.text_area');

    function textShow(){
        textArea.classList.add("on");
    }
    textShow();

    // 버튼 클릭시 MENU ON
    const
        btnMenu = document.querySelector('.menu_btn'),
        menuList = document.querySelector('.menu_list');

        btnMenu.addEventListener("click", ()=> {
            btnMenu.classList.toggle("on"),
            menuList.classList.toggle("on");
        })

    // 스크롤시 SECTION EFFECT & QUICK MENU BLOCK
    window.onload = function () {
        var btnFix = document.querySelector('.side_btn'),
            sectionStart = document.querySelector('#section__1 .container'),
            sectionON = document.querySelector('#section__2 .container'),
            sectionON2 = document.querySelector('#section__3 .container');
        window.addEventListener('scroll', sectionShowup);
        sectionStart.classList.add('on');
        
        function sectionShowup() {
        
          if (window.scrollY >= 650) {
            btnFix.classList.add('on');
            sectionON.classList.add('on');
      
            if (window.scrollY >= 1100) {
              sectionON2.classList.add('on');
            }
          } else {
            btnFix.classList.remove('on');
            sectionON.classList.remove('on');
            sectionON2.classList.remove('on');
          }
        }
      
        sectionShowup();
      };
        
        
        //CONTACT INPUT 키입력시 HOVER ON
        const
            input = document.querySelectorAll('input'),
            textarea = document.querySelector('textarea');

            function inputHover(input){
                input.addEventListener('keyup', () => {
                    this.value = '';
                    if(input.value.length >= 1 ){
                        input.classList.add('on');
                    }
                    else{
                        input.classList.remove('on');
                    }
        
                });
            }
            inputHover(input[0]);
            inputHover(input[1]);
            inputHover(textarea);
            
            
        //SECITON2 INFORMATION 텍스트마우스이벤트
        
        // 커서
            const 
              cursor1 = document.getElementById('cursor1'),
              cursor2 = document.getElementById('cursor2'),
              cursor3 = document.getElementById('cursor3');

            document.body.addEventListener('mousemove', function (n) {
                cursor1.style.left = n.clientX + 'px'
                cursor1.style.top = n.clientY + 'px'
                cursor2.style.left = n.clientX + 'px'
                cursor2.style.top = n.clientY + 'px'
                cursor3.style.left =  n.clientX + 'px'
                cursor3.style.top =  n.clientY + 'px'
            });
      
    
            function cursorHover_on(cursor1){
                cursor2.classList.add('hover'), cursor3.classList.add('hover')
            }
            cursorHover_on();
    
            function cursorHover_off(cursor1){
                cursor2.classList.remove('hover'), cursor3.classList.remove('hover')
            }
            cursorHover_off();
            
            // 한/영 TEXT ON OFF
            const
                 infoHover = document.querySelectorAll('.lang');
                 for(i = infoHover.length -1; i>=0; i--){
                HOVER(infoHover[i])
            }
            // 마우스이벤트
            function HOVER(cursor1){
                cursor1.addEventListener('mouseover', function(){
                    cursorHover_on(cursor1);
                    infoHover[0].style.opacity = '0';
                    infoHover[1].style.opacity = '1';
                });
                 cursor1.addEventListener('mouseout', function(){
                    cursorHover_off(cursor1);
                    infoHover[1].style.opacity = '0';
                    infoHover[0].style.opacity = '1';
                });
            }

            // GNB 버튼 클릭시 섹션이동
            $(function(){

        
                let  scroll_header_nav = $('nav li a'),
                     scroll_quick_nav = $('.menu_list li a');
                    
                    scroll_header_nav.click(function(){

                    let section = $(this).attr('href'),
                        scrollY = $(section).offset().top;
                    $('html,body').stop().animate({scrollTop:scrollY},800);
                   
                    return false;
        
                });

                scroll_quick_nav.click(function(){

                    let section = $(this).attr('href'),
                        scrollY = $(section).offset().top;
                    $('html,body').stop().animate({scrollTop:scrollY},800);
                   
                    return false;
        
                });
            })

            