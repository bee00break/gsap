/*import*/
import $ from 'jquery';
import {TweenMax} from "gsap";
import {TimelineMax} from "gsap";

for(let i=0; i<100; i++){//丸生成
    let maru = `<li class='maru'></li>`
    $('.maru_wrap').append(maru);
}


var Hanabi = new Object();//オブジェクト作成

Hanabi.color = function(){//プロパティ
    var val1 = Math.floor(Math.random() * 256 );
    var val2 = Math.floor(Math.random() * 256 );
    var val3 = Math.floor(Math.random() * 256 );
    $('.maru').css({
        background:'rgb('+val1+','+val2+','+val3+')'
    })
}
Hanabi.no1 = function (val) {//プロパティ
    for(let i=0; i<25; i++){
        var random = Math.floor(Math.random() * val );
        var random2 = Math.floor(Math.random() * val );
        TweenMax.to('.maru:nth-of-type('+i+')',2,{
            x:-random,
            y:random2
        })}
}
Hanabi.no2 = function (val) {//プロパティ
    for(let i=25; i<50; i++){
        var random = Math.floor(Math.random() * val );
        var random2 = Math.floor(Math.random() * val );
        TweenMax.to('.maru:nth-of-type('+i+')',2,{
            x:-random,
            y:-random2
        })}
}
Hanabi.no3 = function (val) {//プロパティ
    for(let i=50; i<75; i++){
        var random = Math.floor(Math.random() * val );
        var random2 = Math.floor(Math.random() * val );
        TweenMax.to('.maru:nth-of-type('+i+')',2,{
            x:random,
            y:-random2
        })}
}
Hanabi.no4 = function (val) {//プロパティ
    for(let i=75; i<=100; i++){
        var random = Math.floor(Math.random() * val );
        var random2 = Math.floor(Math.random() * val );
        TweenMax.to('.maru:nth-of-type('+i+')',2,{
            x:random,
            y:random2
        })
    }
}


var tl = new TimelineMax({repeat:-1});
tl.set('.maru',{//ループのとき
    x:'50%',
    y:0
})
.set(Hanabi,{
    color:true
})
.add('go')
.to('.maru_wrap',1,{
    y:-600,
    ease: Power3.easeOut,
},'go')
.to('.maru_wrap',0.3,{
    opacity: 0
},'go+=0.4')
.to('.maru_wrap',0,{
    opacity: 1
},'go+=1')
.to(Hanabi,0,{
    no1:400,
    no2:-400,
    no3:400,
    no4:-400,
})
.to('.maru',1,{
    opacity:0
},'+=1.5')
