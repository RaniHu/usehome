
window.onload=function(){
    //��껮���ײ��µ�a��ǩ�������»���
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