var r_menu = document.querySelector("#ex_01 .res_menu img");
//클릭할 대상
var targetMenu = document.querySelector("#ex_01 .menu");
//슬라이드 다운될 대상

r_menu.addEventListener("click", function(){
    var targetActive = targetMenu.classList.contains("active");
    //true, false
    // console.log(targetActive);

    if(!targetActive){
        targetMenu.classList.add("active");
    }else{
        targetMenu.classList.remove("active");
    }
});


////////////////////////////////////////////////////////////////////
var r_menu = document.querySelector("#ex_02 .mypage ");
//클릭할 대상
var targetMenu = document.querySelector("#ex_02 .menu");
//슬라이드 다운될 대상

r_menu.addEventListener("click", function(){
    var targetActive = targetMenu.classList.contains("active");
    //true, false
    // console.log(targetActive);

    if(!targetActive){
        targetMenu.classList.add("active");
    }else{
        targetMenu.classList.remove("active");
    }
});


