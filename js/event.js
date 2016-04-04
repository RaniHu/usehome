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
        var len = $("ul#slide-img li").length; //获取li标签的长度

        //鼠标滑动到当前圆圈按钮，相应轮播图出现
        $("#slide-circle-btn li").hover(function () {
            var index = $(this).index();     //获取当前元素的索引值
            l=index;                         //使当前索引值与轮播图相同
            $("#slide-img").stop().animate({left: -index * 1350}, 260);
            $(this).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");

        });

        //自动轮播
        var time=setInterval(move_r,2000);

        //鼠标滑到图片时，关定时器
        $("ul#slide-img").hover(function () {
            clearInterval(time);
        },function(){
            time=setInterval(move_r,2000);
        });
        $(".slide-btn").hover(function () {
            clearInterval(time);
        },function(){
            time=setInterval(move_r,2000);
        });
        $("#slide-circle-btn").hover(function () {
            clearInterval(time);
        },function(){
            time=setInterval(move_r,2000);
        });

        //当点击左按钮时
        $("#slide-btn1").click(function () {
            move_l();
        });

        //点击向右按钮时
        $("#slide-btn2").click(function () {
            move_r();
        });

        //向左移动
        function move_l(){
            l--;
            if (l == -1) {
                $("#slide-img").css({left: -(len - 1) * 1350});
                l = len - 2;
            }
            $("ul#slide-img").stop().animate({left: -l * 1350}, 1000);

            //给当前的li标签添加类名，其他兄弟元素移除类名
            $("ul#slide-circle-btn li").eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");

        }
        //向右移动
        function move_r(){
            l++;
            if (l == len) {
                $("#slide-img").css({left: 0});
                l = 1;
            }
            $("ul#slide-img").stop().animate({left: -l * 1350}, 800);

            if (l == len - 1) {
                //如果到最后一张图片，圆圈按钮的第一个显示为灰色
                $("#slide-circle-btn li").eq(0).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");
            } else {
                //当前图片下的圆圈按钮背景变为灰色
                $("ul#slide-circle-btn li").eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");
            }

        }



    });








