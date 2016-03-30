    $(function () {

    //鼠标划过底部下的a标签，出现下划线
        var footTxt = $(".foot-txt a ");
        for (var i = 0; i < footTxt.length; i++) {
            footTxt[i].onmouseover = function () {
                this.style.textDecoration = 'underline';
            };
            footTxt[i].onmouseout = function () {
                this.style.textDecoration = 'none';
            }
        }

    //鼠标滑过，go按钮出现边框
        var lis = $(".detail-item li");

        var go_border = $(".detail-item .go-border");
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;          //为li标签创建索引

            lis[i].onmouseover = function () {
                var _this = this;      //this变量引用当前划过的li
                go_border[_this.index].style.visibility = 'visible';
            };
            lis[i].onmouseout = function () {
                var _this = this;
                go_border[_this.index].style.visibility = 'hidden';
            }
        }


        //轮播图
        var l = 0;       //表示第一张轮播图(即索引值)
        $("#slide-circle-btn li").first().addClass("circle-btn-on");   //给第一个圆圈按钮添加类名
        var first_img = $("#slide-img li").first().clone();            //将第一张轮播图在最后克隆
        $("#slide-img").append(first_img);
        var circle_btn = $("#slide-circle-btn li");
        var len = $("#slide-img li").length; //获取li标签的长度

        //当点击左按钮时
        $("#slide-btn1").click(function () {
            l--;
            if (l == -1) {
                $("#slide-img").css({left: -(len - 1) * 1350});
                l = len - 2;
            }
            $("#slide-img").animate({left: -l * 1350}, 1000);

            //给当前的li标签添加类名，其他兄弟元素移除类名
            $("#slide-circle-btn li").eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");

        });

        //点击向右按钮时
        $("#slide-btn2").click(function () {
            l++;
            if (l == len) {
                $("#slide-img").css({left: 0});
                l = 1;
            }
            $("#slide-img").animate({left: -l * 1350}, 800);

            //当前图片下的圆圈按钮背景变为灰色
            $("#slide-circle-btn li").eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");
        });

        //鼠标滑动到当前圆圈按钮，相应轮播图出现
        /* var len=0;
         for(var i=0;i<circle_btn.length;i++){
         len++;
         circle_btn[i].index=i;
         var this_btn=this;
         circle_btn[i].hover(circle_btn[this_btn.index].fadeOut(300))

         }
*/

    });








