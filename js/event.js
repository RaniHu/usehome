
window.onload=function(){
    //鼠标划过底部下的a标签，出现下划线
    var footTxt=$(".foot-txt a ");
    for(var i= 0;i<footTxt.length;i++){
        footTxt[i].onmouseover=function(){
            this.style.textDecoration='underline';
        };
        footTxt[i].onmouseout=function(){
            this.style.textDecoration='none';
        }
    }

    //鼠标滑过，go按钮出现边框
    var lis=$(".detail-item li"),
        go_border=$(".detail-item .go-border");
    for(var i=0; i<lis.length;i++){
        //为li标签创建索引
        lis[i].index=i;
        lis[i].onmouseover=function(){
            //this变量引用当前划过的li
            var _this=this;
                go_border[_this.index].style.visibility='visible';
        };
        lis[i].onmouseout=function(){
            var _this=this;
            go_border[_this.index].style.visibility='hidden';
        }
    }



    //轮播图
    /*ar box=$("#slide-box"),
        ul=$("#slide-img"),
        li=ul.getElementsByTagName("li"),
        img=ul.getElementsByTagName("img"),
        prev_btn=$("#slide-btn1"),
        next_btn=$("#slide-btn2"),
        circle_btn=$("#slide-circle-btn");*/
    var ul=document.getElementById("slide-img"),
        li=ul.getElementsByTagName("li"),
        len=0;

    //点击前后按钮时

    setInterval(function () {
        for(var i=0; i<li.length; i++){
            len++;
            ul.style.left='-1350'*len+'px';
        }
    },3000);




};