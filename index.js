// var text = "dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.";
function displayText1(text){
    document.getElementById("text1").innerHTML=text;
    decreaseOpacity1();
}
function hideText1(){
    document.getElementById("text1").innerHTML="";
    increaseOpacity1();
}
function decreaseOpacity1(){
    var el=document.getElementById("postimage1");
    el.setAttribute('style','opacity: 0.5;')
}
function increaseOpacity1(){
    var el=document.getElementById("postimage1");
    el.setAttribute('style','opacity: 1;')
}

// var text = "dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.";
function displayText2(text){
    document.getElementById("text2").innerHTML=text;
    decreaseOpacity2();
}
function hideText2(){
    document.getElementById("text2").innerHTML="";
    increaseOpacity2();
}
function decreaseOpacity2(){
    var el=document.getElementById("postimage2");
    el.setAttribute('style','opacity: 0.5;')
}
function increaseOpacity2(){
    var el=document.getElementById("postimage2");
    el.setAttribute('style','opacity: 1;')
}