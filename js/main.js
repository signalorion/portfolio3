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



$(function () {


    $(".lang_tab a").click(function () {
        $(".lnb_lang").slideToggle();
    });
    
    $(".lnb_lang").hide();
    /*언어설정 슬라이드********************************8*/
    
    $(".mainmenu").hide();
    $(".gnb_right > li").hover(function(){
      /*올렸을 때*/
        $(".mainmenu").show();
        
        var gnbnum = $(this).index();
        //console.log(gnbnum);
        
        $(".menutit").text(navtit[gnbnum]);
        
        /*포문을 돌리기위해서 //ㅠㅠ*/
        
        /*var navbtnnum = navbtn6.length;
        console.log(navbtnnum);
        
        for(var i=0; i<navbtnnum; i++){
            $(".menubtn").html(
                for(var a=0; a<navbtnnum; a++){
            '<li><a href="#">'+navbtn6[a]+'</a></li>'
            };
            );
        };*/
        
    }, function(){
        /*나갔을 때*/
        $(".mainmenu").hide();
    });
    /*nav메뉴설정************************************/
    
    /*var seq=1;
    var popupslide;
    popupslide = setInterval(function(){
        seq++;
        if(seq===4) seq=1;
        
        $(".mvmid_popup").attr("background", 'url(../images/yeosu_popup'+seq+'.jpg) center/cover');
    },3000);*/
    
    /*메인비주얼 배너 돌아가기*****왜안돼...*****************/
    
    $(".bbscont").eq(0).siblings().hide();
    $(".bbstit li").click(function(){
        $(this).addClass("bbshere");
        $(this).siblings().removeClass("bbshere");
        
        var bbstitnum = $(this).index();
        console.log(bbstitnum);
        
        if(bbstitnum===0){
            $(".bbs0").show();
            $(".bbs0").siblings().hide();
        }
        else if(bbstitnum===2){
            $(".bbs2").show();
            $(".bbs2").siblings().hide();
        }
        else if(bbstitnum===4){
            $(".bbs4").show();
            $(".bbs4").siblings().hide();
        }
        else if(bbstitnum===6){
            $(".bbs6").show();
            $(".bbs6").siblings().hide();
        }
        else{
            $(".bbs8").show();
            $(".bbs8").siblings().hide();
        }
    });////click///
    
    $(".bbstit li a").click(function(e){
        e.preventDefault();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}); /*제이쿼리블록*/
