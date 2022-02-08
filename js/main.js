$(document).ready(function(){
    //메인 메뉴에 마우스 오버했을 때 서브배경 슬라이드 다운
    //hover이벤트는 유일하게 마우스 오버, 마우스 아웃 이벤트를 다 가지고 있음.
    // $('header nav > ul > li').hover(function(){
        // $('.sub_bg').stop().slideDown(300);
        // $('header').addClass('active');
    // },
    // function(){
        // $('.sub_bg').stop().slideUp(300);
        // $('header').removeClass('active');
    // });
    //내비게이션 메뉴 제이쿼리
     //메뉴 클릭 이벤트 설정
    $('nav > ul > li').click(function(){
       //만약 클릭한 메뉴에 active클래스가 없으면, !(not) : ~가 아닌(논리 연산자)
        if(!($(this).hasClass('active'))){
            //모든 메뉴(li)의 active 제거
            $('nav > ul > li').removeClass('active');
            //클릭한 메뉴 (li)에만 active 추가
            $(this).addClass('active');
            //모든 메뉴의 글자에서 active 제가
            $('nav > ul > li>a').removeClass('active');
            //클릭한 li의 자식객체인 a 태그에 active추가
            $(this).find('>a').addClass('active');
            //모든 서브메뉴에 active추가하고 난 다음 숨김
            $('nav .sub').addClass('active').hide();
            //클릭한 메뉴의 서브메뉴만 보임     
            $(this).find('.sub').show().addClass('active');
        //만약 클릭한 메뉴에 active가 있다면
        }else{
            //클릭한 메뉴에서 active 제거
            $(this).removeClass('active');
            //클릭한 메뉴의 서브메뉴 들어감(active 제거)
            $(this).find('.sub').show().removeClass('active');
            //모든 메뉴에서 active제거하고, 보임
            $('nav .sub').removeClass('active').show();
        }
        //header 오른쪽 고객센터, 마이페이지의 서브메뉴 슘김
        $('.my > ul > li').find('.sub').hide();
        //고객센터, 마이페이지의 메뉴에서 active 제거
        $('.my > ul > li > a').removeClass('active');
    });
    //고객센터, 마이페이지의 메뉴에 클릭이벤트 설정
    $('.my > ul > li').click(function(){
        //클릭한 메뉴의 자식객체 .sub를 찾아서 슬라이드 토글
        $(this).find('.sub').slideToggle();
        //모든 고객센터, 마이페이지 a태그에서 active 제거 
        $('.my > ul > li > a').removeClass('active');
        //클릭한 a태그만 active 설정
        $(this).find('>a').addClass('active');
        //내비게이션의 메뉴들에서 모두 active 제거
        $('nav > ul > li > a').removeClass('active');
        //내비게이션의 모든 서브메뉴둘은 숨김
        $('nav .sub').hide().removeClass('active');
    });
    
    //메인 비주얼 슬라이드
    //.num의 li a에 클릭이벤트 설정(01, 02, 03, 04, 05버튼)
    $('.s1 .num ul li').click(function(){
        //클릭한 li의 인덱스 번호를 numindex변수에 저장
        var numIndex=$(this).index();
        console.log(numIndex);
        //클릭한 번호에 밑줄 나오도록 설정
        //find()는 후속 객체에서 ()안의 객체를 찾아라 라는 명령어
        $('.s1 .num ul li').find('a').removeClass('active');
        //클릭한 li의 후손 a태그를 찾아서 active클래스 추가
        $(this).find('a').addClass('active');


        //.photo ul li개수만큼 반복, each(); 반복 메서드
        $('.s1 .photo ul li').each(function(){
            //.photo ul li의 인덱스번호를 photoIndex변수에 저장
            var photoIndex=$(this).index();
            //만약 photoIndex와 numIndex가 같다면
            if(photoIndex == numIndex){
                //모든 photo ul li는 숨김
                $('.s1 .photo ul li').hide();
                //현재 photo ul li만 보임
                $(this).fadeIn();
            } 
        });
        //.des ul li 개수만큼 반복
        $('.s1 .des ul li').each(function(){
            //.des ul li의 인덱스번호를 desIndex에 저장
            var desIndex=$(this).index();
            //numIndex값과 dexIndex값이 같으면
            if(numIndex == desIndex){
                //모든 설명 숨김
                $('.s1 .des ul li').hide();
                //현재 활성화된 설명만 보임
                $(this).fadeIn();
            }
        });
    
    $('.s2 .num ul li').click(function(){
            //클릭한 li의 인덱스 번호를 numindex변수에 저장
            var numIndex=$(this).index();
            console.log(numIndex);
            //클릭한 번호에 밑줄 나오도록 설정
            //find()는 후속 객체에서 ()안의 객체를 찾아라 라는 명령어
            $('.s2 .num ul li').find('a').removeClass('active');
            //클릭한 li의 후손 a태그를 찾아서 active클래스 추가
            $(this).find('a').addClass('active');
    
    
            //.photo ul li개수만큼 반복, each(); 반복 메서드
            $('.s2 .photo ul li').each(function(){
                //.photo ul li의 인덱스번호를 photoIndex변수에 저장
                var photoIndex=$(this).index();
                //만약 photoIndex와 numIndex가 같다면
                if(photoIndex == numIndex){
                    //모든 photo ul li는 숨김
                    $('.s2 .photo ul li').hide();
                    //현재 photo ul li만 보임
                    $(this).fadeIn();
                } 
            });
            //.des ul li 개수만큼 반복
            $('.s2 .des ul li').each(function(){
                //.des ul li의 인덱스번호를 desIndex에 저장
                var desIndex=$(this).index();
                //numIndex값과 dexIndex값이 같으면
                if(numIndex == desIndex){
                    //모든 설명 숨김
                    $('.s2 .des ul li').hide();
                    //현재 활성화된 설명만 보임
                    $(this).fadeIn();
                }
            });    
        });
    });
    //.btn a에 클릭이벤트 설정, .btn a를 클릭하면 자동 슬라이드가 멈추고, 다시 클릭하면 자동 슬라이도 실행, 버튼 모양도 바뀜
    var sw=0; 
    //스위치 변수(버튼 1개 클릭할 때 마다 상태가 변할 때 사용함)
    $('.btn a').click(function(){
        //만약 sw변수의 값이 0이면 sw변수의 값을 1로 수정
        if(sw==0){
            sw=1;
            //슬라이드 자동실행 멈춤
            clearInterval(auto);
            //.btn a에 active 클래스 추가
            $(this).addClass('active');
        //sw변수의 값이 0이 아니면 sw변수의 값을 0으로 초기화
        }else{
            sw=0;
            //슬라이드 자동실행
            auto=setInterval(fn, 3000);
            $(this).removeClass('active');
        }
    });
    //.num ul li의 인덱스번호를 나타내는 변수 선언
    var numLi=0;
    //3초마다 자동으로 슬라이드 실행
    var auto=setInterval(fn, 3000);
    //fn함수 선언
    function fn(){
        //.num ul li의 인덱스번호를 1씩 증가시킴
        numLi += 1;
        //만약 인덱스번호가 2보다 커지면 0으로 초기화
        if(numLi > 4) { numLi=0;}
        //numLi 인덱스번호에 해당하는 li클릭
        //eq(인덱스 번호) : 인덱스 번호에 해당하는 객체를 가리킴
        $('.s1 .num ul li').eq(numLi).click();
    }
    //콘텐츠 (탭메뉴)
    $('.content_list ul li').click(function(){
        $('.content_list ul li').removeClass('active');
        $(this).addClass('active');
        
        // li의 자식인 a태그의 href속성을 막음.
        //e.preventDefalut()메서드와 같은 역할임
        return false;

    });
    $('.t1').click(function(){
        $('.content_des ul li').hide();
        $('.d1').fadeIn();
        $('.content2 ul li').hide();
        $('.img1').fadeIn();
    });
    $('.t2').click(function(){
        $('.content_des ul li').hide();
        $('.d2').fadeIn();
        $('.content2 ul li').hide();
        $('.img2').fadeIn();
    });
    $('.t3').click(function(){
        $('.content_des ul li').hide();
        $('.d3').fadeIn();
        $('.content2 ul li').hide();
        $('.img3').fadeIn();
    });
    //자동슬라이드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4, //화면에 보이는 리스트 개수
        spaceBetween: 100, //리스트 간격
        freeMode: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        loop:true 
      });
});