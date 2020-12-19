/*여수시청 자바스크립트*/

/*nav메뉴에 호버했을때 뜨는 것들*/
var navtit = [
    "전자민원",
    "시민참여",
    "분야별정보",
    "산업경제",
    "행정정보",
    "여수소개",
    "정보공개"
]

var navbtn0 = ["종합민원안내",
            "종합민원이용안내",
             "분야별민원안내",
             "온라인민원신청",
             "규제개혁",
               "법률상담",
               "신고센터",
               "여수시에 바란다"
            ]

var navbtn1 = ["스마트폰활용 여수홍보 동영상 공모전",
            "안내로봇",
             "시민참여",
             "정책토론방",
             "박람회 사후활용방안 사례연구",
               "시정평가단",
               "대형폐기물배출신청",
               "OK통합예약포털",
               "주민자치센터",
               "자원봉사",
               "소셜허브",
               "모바일앱",
               "적극행정"
            ]
var navbtn2 = ["복지",
            "교육",
             "문화/체육",
             "의료/식품/위생",
             "교통/자동차",
               "환경",
               "재난/안전",
               "산림/녹지",
               "도시/주택",
               "공유재산정보"
            ]
var navbtn3 = ["투자유치/MICE산업",
            "기업정보/지원정책",
             "기업지원소식",
             "기업사랑 운동",
             "사이버산단",
               "창업/공장설립",
               "소비자",
               "해양수산정보",
               "에너지정보",
               "일자리정보",
               "농축산"
            ]
var navbtn4 = ["여수소식",
            "예산/재정 정보",
             "시정자료실",
             "통계로보는 여수",
             "행정서비스헌장",
               "청렴감사정보"
            ]
var navbtn5 = ["여수의 과거",
            "여수의 현재",
             "여수의 미래",
             "세계속의 여수",
             "주요시정안내",
               "여수의 상징",
               "여수갤러리",
               "거북선의 고향 여수",
               "청사안내"
            ]
var navbtn6 = ["코로나19관련 긴급민생지원 안내",
            "사전정보공표",
             "코로나19 긴급생활비지원",
             "임산부 건강관리비지원",
             "계약정보공개",
               "정보공개제도안내",
               "공개정보",
               "비공개 대상정보",
               "정보공개사무편람",
               "행정처분업소공개",
               "공공데이터",
               "정책실명제",
               "지방공기업",
               "행정정보사전공표목록",
               "국가안전대진단점검결과",
               "연구용역공개"
            ]

var welcometit = [
    "오동도",
    "거문도백도",
    "향일암",
    "금오도비렁길",
    "여수세계박람회장",
    "진남관",
    "여수밤바다/산단야경",
    "영취산진달래",
    "여수해상케이블카",
    "여수이순신대교"
]






$(function () {


    $(".lang_tab a").click(function () {
        $(".lnb_lang").slideToggle();
    });

    $(".lnb_lang").hide();
    /*언어설정 슬라이드********************************8*/

    $(".mainmenu").hide();
    $(".gnb_right > li").hover(function () {
        /*올렸을 때*/
        $(".mainmenu").show();

        var gnbnum = $(this).index();
        //console.log(gnbnum+"번째");

        $(".menutit").text(navtit[gnbnum]);

        /*포문을 돌리기위해서 //ㅠㅠ*/
        
/*        var nnn6 = navbtn6.length
        console.log(nnn6);
        for(i=0; i<=nnn6; i++){
        $(".menubtn").empty().append(
            '<li><a href="#">'+navbtn6[i]+'</a></li>'
        
        );/////append///////////////
            
        }/////////i++//////////////////////*/
        
        /*var navbtnnum = navbtn6.length;
        console.log(navbtnnum);
        
        for(var i=0; i<navbtnnum; i++){
            $(".menubtn").html(
                for(var a=0; a<navbtnnum; a++){
            '<li><a href="#">'+navbtn6[a]+'</a></li>'
            };
            );
        };*/

    }, function () {
        /*나갔을 때*/
        $(".mainmenu").hide();
    });
    /*nav메뉴설정************************************/
    
    var mvmidn = 0;
    var mvmid_pop = setInterval(function(){
        mvmidn++;
        if(mvmidn ===3) mvmidn=0;
        
        $(".mvmid_list").children().eq(mvmidn).addClass("mvmidhere");
        $(".mvmid_list").children().eq(mvmidn).siblings().removeClass("mvmidhere");
    },5000);/*메인비주얼 배너 돌아가기******************/
    
    $(".mm_btns li a").click(function(e){
        e.preventDefault();
    });
    
    

    /*새소식****************************/
    $(".bbscont").eq(0).siblings().hide();
    $(".bbstit li").click(function () {
        $(this).addClass("bbshere");
        $(this).siblings().removeClass("bbshere");

        var bbstitnum = $(this).index();
        console.log(bbstitnum);

        if (bbstitnum === 0) {
            $(".bbs0").show();
            $(".bbs0").siblings().hide();
        } else if (bbstitnum === 2) {
            $(".bbs2").show();
            $(".bbs2").siblings().hide();
        } else if (bbstitnum === 4) {
            $(".bbs4").show();
            $(".bbs4").siblings().hide();
        } else if (bbstitnum === 6) {
            $(".bbs6").show();
            $(".bbs6").siblings().hide();
        } else {
            $(".bbs8").show();
            $(".bbs8").siblings().hide();
        }
    }); ////click///

    $(".bbstit li a").click(function (e) {
        e.preventDefault();
    });

    /*팝업존과 여수 핫뉴스****************************/
    var seq = 0;
    var stoprotate = 1;

    var popuprotate = setInterval(function () {
        seq++;

        if (seq === 3) seq = 0;

        $(".mcbanner.pimglist").children().eq(seq).addClass("pimghere");
        $(".mcbanner.pimglist").children().eq(seq).siblings().removeClass("pimghere");

    }, 5000);

    $(".mc_popup .mcban_btn_stop a").click(function (e) {
        e.preventDefault();

        if (stoprotate === 1) {
            clearInterval(popuprotate);

            $(this).parent().css({
                backgroundPosition: " -425px -64px"
            });

            stoprotate = 0;
        } /////////////if////////////////
        else if (stoprotate === 0) {
            //다시 인터발을 돌릴라는데 왜 안될까..?

            $(this).parent().css({
                backgroundPosition: " -409px -64px"
            });

            stoprotate = 1;
        }; ////////////////////////////else if

    });//////////중지버튼을 누르면/////////////
    
    

    /*여수 핫뉴스**************************************/
    var newsrotate = setInterval(function () {
        seq++;

        if (seq === 3) seq = 0;

        $(".mcbanner.nimglist").children().eq(seq).addClass("nimghere");
        $(".mcbanner.nimglist").children().eq(seq).siblings().removeClass("nimghere");

    }, 5000);

    $(".mc_news .mcban_btn_stop a").click(function (e) {
        e.preventDefault();
        
        if (stoprotate === 1) {
            clearInterval(newsrotate);

            $(this).parent().css({
                backgroundPosition: " -425px -64px"
            });

            stoprotate = 0;
        } /////////////if////////////////
        else if (stoprotate === 0) {
            //다시 인터발을 돌릴라는데 왜 안될까..?

            $(this).parent().css({
                backgroundPosition: " -409px -64px"
            });

            stoprotate = 1;
        }; ////////////////////////////else if
    });
    
    



    /*민원서비스 탭메뉴***********************************/
    $(".minwon_t_title li a").click(function (e) {
        e.preventDefault();
    });

    var mthn = $(".minwon_tit_here").index();
    $(".minwon_serv_list").children().eq(mthn).siblings().hide();

    $(".minwon_t_title li").click(function () {
        var mwn = $(this).index();
        console.log(mwn);
        $(".minwon_serv_list").children().eq(mwn).siblings().hide();

        $(".minwon_serv_list").children().eq(mwn).show();

        $(this).addClass('minwon_tit_here');
        $(this).siblings().removeClass('minwon_tit_here');

    });


    /*웰컴비주얼*************************************/
    $(".circle_num a").click(function(e){
        e.preventDefault();
    });
    
    var wcpn = 1;//배경번호매기기
    var welcomnum = 0; //타이틀
    
    $(".circle_num .cir_left").click(function(){
        wcpn--;
        welcomnum--;
        
        if(wcpn ===0) wcpn=10;
        if(welcomnum ===-1) welcomnum=9;
        
        $(".welcome_pic").stop().css({
            background:'url(images/n_tour_img'+ wcpn +'.jpg)'
            //여기에 입력하면 index에서 출발하는거라 ../를 쓰면 못찾는다!!
        });/*배경바뀌기*/
        
        $(".cir_num span").empty().append(wcpn);
        $(".welcomecircle big span").empty().append(wcpn);/*번호*/
        
        $(".welcomecircle small").empty().append(welcometit[welcomnum]);
        //welcometit
        
    });/*왼쪽클릭*/
    
    $(".circle_num .cir_right").click(function(){
        wcpn++;
        welcomnum++;
        
        if(wcpn ===11) wcpn=1;
        if(welcomnum ===10) welcomnum=0;
        
        $(".welcome_pic").stop().css({
            background:'url(images/n_tour_img'+ wcpn +'.jpg)'
            //여기에 입력하면 index에서 출발하는거라 ../를 쓰면 못찾는다!!
        });/*배경바뀌기*/
        
        $(".cir_num span").empty().append(wcpn);
        $(".welcomecircle big span").empty().append(wcpn);
        
        $(".welcomecircle small").empty().append(welcometit[welcomnum]);
        //welcometit
        
    });/*오른쪽클릭*/






    
    
    
    
    

}); /*제이쿼리블록*/
