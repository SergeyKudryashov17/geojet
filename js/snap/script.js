$(document).ready(function () {
    $('.anchor').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#goTo').offset().top }, 1000);
        e.preventDefault();
    });
    $("#slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $("#slider_p").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000
    });
    $("#slider_b").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $("#slider_foto").slick({
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplaySpeed: 2000
    });

    //запуск функции только на нужной странце
    if($(window).width() >= '992'){
        $('.listService > li').mouseover(function(){
            var pos = $(this).position();
            var top = pos.top;

            $('.orange-circle-end').css('display','block');

            (top => 0) && (top < 41.87) ? top = 9 :
                (top > 41.87) && (top < 84.73) ? top = 28:
                (top > 84.73) && (top < 127.6) ? top = 48:
                (top > 127.6) && (top < 170.46) ? top = 67:
                (top > 170.46) && (top < 213.33) ? top = 86:
                (top > 213.33) && (top < 256.19) ? top = 105:
                (top > 256.19) && (top < 299.06) ? top = 125:
                (top > 299.06) ? top = 144 : false;

            drawLine(21, top);
        });
        $('.listService > li').mouseout(function(){
            clearCanvas();
            $('.orange-circle-end').css('display', 'none');
        });
    }
    if($(window).width() <= '767'){
        var flagOpen = false;
        $('.listService > li').click(function () {
            if(!flagOpen){
                $(this).children('.previewService').css('display','block');
                flagOpen = true;
            }
            else{
                $(this).children('.previewService').css('display','none');
                flagOpen = false;
            }
        })
    }

    $('.service-wrp .listService').followTo(780, 3280, 2490);
});
//Функция очистки области рисования при отрисовке линий
function clearCanvas() {
    var canvas = document.getElementById('can_1');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//Отрисовка пунктирных линий
function drawLine(x1, y1) {
    //Получение контекста для рисования
    var canvas = document.getElementById('can_1');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Настройка цвета линии
    ctx.strokeStyle = "rgb(255, 116, 67)";
    ctx.fillStyle = "rgb(255, 116, 67)";

    //Отрисовка первой части линии
    ctx.setLineDash([7, 10]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(147, y1);
    ctx.stroke();

    //Отрисовка второй части линии
    ctx.setLineDash([2, 2]);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(143, y1);
    ctx.lineTo(143, 112);
    ctx.stroke();

    //Отрисовка третьей части линии
    ctx.setLineDash([7, 10]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(140, 112);
    ctx.lineTo(300, 112);
    ctx.stroke();
}
//Фиксация блока с подменю при пролистовании страницы
$.fn.followTo = function (pos, topMax, bottomMax) {
    // var top_position = $('.service-wrp').offset().top;
    // top_position = top_position;
    //
    // var bottom_position = $('footer').offset().top,
    //     stop_position = bottom_position - 1000;
    // bottom_position = bottom_position - 1300; //2450
    
    //получить координаты section перед основным контентом для рассчёта верхней точки активации прокрутки
    //получить координаты верхней границы футера, чтобы от неё рассчитать нижнюю точку остановки прокрутки
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if (($window.scrollTop() > pos) && ($window.scrollTop() <= topMax)) {
            $this.css({
                position: 'fixed',
                top: 35
            });
        }
        else if ($window.scrollTop() < pos){
            $this.css({
                position: 'absolute',
                top: 0
            });
        }
        else if ($window.scrollTop() > topMax){
            $this.css({
                position: 'absolute',
                top: bottomMax
            });
        }
    });
};
//Плавный переход по якорным ссылкам
function goToAnchor(id) {
    $('html,body').stop().animate({ scrollTop: $('#block-' + id + '').offset().top - 40 }, 1000);
}


