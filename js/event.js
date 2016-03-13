
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
};