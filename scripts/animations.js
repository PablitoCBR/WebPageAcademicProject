var elements = {
    second: $(window).height() - $(window).height()*0.5 ,
    third: $(window).height()  * 2 - $(window).height()*0.5,
    forth: $(window).height()  * 3 - $(window).height()*0.5,
    fifth: $(window).height()  * 4 - $(window).height()*0.5,
}
var oneTime ={
    second: true,
    third:true,
    forth:true,
    fifth:true,
}

var headerAnimations = function(){
    var textbox = document.getElementsByClassName("textboxhead")
    var visibility = 0;
    var id = setInterval(show, 30)
    function show(){
        if (visibility == 0.85)
            clearInterval(id);
        else{
            visibility += 0.05
            textbox[0].style.opacity = visibility;
        }
    }    
}

headerAnimations();

var footAlert = document.getElementById("popout");
footAlert.addEventListener('click',function(){
    alert("Nie załączam linków do mediów społęcznościowych i nie łącze się z ich API :P");
});


var aboutPic = function(){
    var pic = document.getElementsByClassName('fighterpic');
    var id = setInterval(show, 10)
    var pos = -700;
    function show(){
        if (pos == 0)
            clearInterval(id);
        else{
            pos += 10;
            pic[0].style.left = pos + "px";
        }
    }    
}
var aboutText = function(){
    var text = document.getElementsByClassName('aboutdescription');
    var id = setInterval(show, 15)
    var opa = 0;
    function show(){
        if (opa == 0.8)
            clearInterval(id);
        else{
            opa += 0.01;
            text[0].style.opacity = opa;
        }
    }    
}
var howToStart = function(){
    var text = document.getElementsByClassName('examples');
    var id = setInterval(show, 30)
    var opa = 0;
    function show(){
        if (opa == 0.5)
            clearInterval(id);
        else{
            opa += 0.01;
            text[0].style.opacity = opa;
        } 
    }    
}

var whereTextBox = function(){
    var text = document.getElementsByClassName('textboxwhere');
    var id = setInterval(pop, 20)
    var opa = 0; 
    var top = 0; 
    function pop(){
        if(opa > 0.75)
            clearInterval(id);
        else{
            opa += 0.03
            if(top<8)
            {
                top += 0.5
                text[0].style.top = top +"%";
            }        
            text[0].style.opacity = opa;
        }
    }
}
var whereText = function(){
    var text = document.getElementsByClassName('wheretext')
    var id = setInterval(anim,20)
    var opa = 0;
    var pos = -90;
    function anim(){
        if(opa > 0.75)
            clearInterval(id);
        else{
            opa += 0.03;
            text[0].style.opacity = opa;
            if(pos < 0)
            {
                pos += 5;   
                text[0].style.top = pos + "px";
            }
        }  
    }
}
var whereImg = function(){
    var img = document.getElementsByClassName('whereimg')
    var id = setInterval(show,20)
    var opa = 0;
    function show(){
        if(opa > 0.6)
            clearInterval(id);
        else{
            opa += 0.01;
            img[0].style.opacity = opa;
        }
    }
}



$(window).scroll(function () { 
    var currentPosition = document.documentElement.scrollTop;
    if(currentPosition > elements.second){
        if(oneTime.second){
            oneTime.second = false;
            aboutPic();
            aboutText();
        }
    }
    if(currentPosition > elements.third){

    }   
    if(currentPosition > elements.forth){
        if(oneTime.forth){
            oneTime.forth = false;
            howToStart();
        }
    }
    if(currentPosition > elements.fifth){
        if(oneTime.fifth){
            oneTime.fifth = false;
            whereTextBox();
            whereText();
            whereImg();
        }
    } 
});
