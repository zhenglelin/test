$(function(){
    //百分比
    function animate(){
      $(".charts").each(function(i,item){
        var a=parseInt($(item).attr("w"));
        $(item).animate({
        width: a+"%"
        },1000);
    });
    }
    animate();

    //登录选项卡
    $(function(){
        $('.login').find('.login-tab h1').click(function(){
            $('.login').find('.login-tab h1').attr('class','');
            $('.login').find('.tab-inner').css('display','none');
            $(this).attr('class','act');
            $('.login').find('.tab-inner').eq($(this).index()).css('display','block')
        })
    });

    //项目列表选项卡
    function drop1(){
        var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('h1');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.toggleClass('act');

        if (!e.data.multiple) {
            $el.find('.tab1-list').not($next).slideUp().parent().find('h1').removeClass('act');
        };
    }   
    var accordion = new Accordion($('.tab1'), false);
    }
    drop1();
    //选项卡下拉选择
    function drop2(){
        var liNumber=$(".tab1-list li").length;
         for(var i=0;i<liNumber;i++){
            $(".tab1-list li").eq(i).bind('click',function(){
                $(".tab1-list li").css({"color":"#000"});
                $(this).css({"color":"#e0187b"})
            })
         };
    }
    drop2();
    //返回
    function showScroll(){
        $(window).scroll( function() { 
            var scrollValue=$(window).scrollTop();
                scrollValue > 100 ? $('div[class=scroll]').fadeIn():$('div[class=scroll]').fadeOut();
        } );    
        $('.scroll').click(function(){
            $("html,body").animate({scrollTop:0},200);  
        }); 
    }
    showScroll();
    //分享
    function show(){
        $(".share").click(function(){
            $(".layer-box").fadeIn();
            $(".layer").animate({bottom:'0'});
        });
        $(".layer-box,.cancel").click(function(){
            $(".layer").animate({bottom:'-206px'})
            $(".layer-box").fadeOut();
        })
    }
    show()
    //选择价格
    function price(){
        var liNumber=$(".price-sel li").length;
         for(var i=0;i<liNumber;i++){
            $(".price-sel li").eq(i).bind('click',function(){
                $(".price-sel li").removeClass("act");
                $(this).addClass("act")
            })
         };
    }
    price();
    //确认弹框
    function con(){
        $(".con").click(function(){
            $(".layer1").fadeIn();
        });
        $(".layer1-inner a,.layer1").click(function(){
            $(".layer1").fadeOut();
        })
    }
    con();


});