$(document).ready(function () {
    var flagMenu = false;           // Флаг для определения положения меню (открыто/закрыто)
    //langVersionSite();            // Определение языковой версии сайта (Функция отключена)
    animateBar();                   // Анимация прогресс-баров
    animateBarMobile();             // Анимация прогресс-баров на мобильной версии
    coordinateSVG();                // Отрисовка пунктирных линий svg
    initializationSliders();        // Иницивлизация слайдеров
    showPreview();                  // Показываем конкретное описание на главной
    showTextOnNumber();             // Показываем доп информацию при наведении на цифры
    openPopupTextOnNumber();        // Открытие попапа с описанием при нажатии на цифры в мобильном разрешении
    scrollToContent();              // Прокрутка страницы до контента
    sendAjaxForm();                 // Отправка данных из формы на почту
    openPopap();                    // Открытие и закрытие окна "Связаться"
    openMenuSite(flagMenu);         // Открытие меню при нажатии на кнопку
    scrollActiveItem();             // Выделение активного блока при скролле
    slowTrancitionAnchor();         // Плавный переход по якорным ссылкам
    slickScroll();                  // Липкий скролл подменю на разрешениях от 1200px
    startServiceItem();             // Активация первого элемента списка
    activeBlockOnClick();           // Выделение нажатого блока при клике
    open_closeItem();               // Открытие и закрытие описаний пунктов при нажатии (Главная страница)
    drawCircle();                   // Анимация блока миссия
    mouseoverLang();                // Изменения картинок и надписей в попапе выбора языка при наведении на кнопки
    roundElementLang();             // Анимация popap меню
    roundElementLangauge();         //
    scrollProgressBar(flagMenu);    // Скролл бар
    animateMenuButton();            // Цикличная анимация кнопки меню
    mobileHeaderScroll();           // Уменьшение шапки при прокрутке страницы вниз
    animateHeadlineOnActionPage();  // Анимирование заголовков на страницах шаблона "Action-страница"
    goToAnchorPage();
    interactiveMap();               // Нажатие на точки на карте мира страница "Наши проекты"
});
//Подсветка первого элемента списка при запуске страницы
function startServiceItem() {
    $('.listService > li:first-child').addClass('activeListService');
}

//Функция фиксации блока с подменю при пролистовании страницы
$.fn.followTo = function () {
    //pos - начальная координата, при которой включается липкий скролл
    //topMax - конечная координата, при которой выключается липкий скролл
    //bottomMax - позиция, в которую устанавливается меню в конце родительского блока, при выключении
    //липкого скролла
    var $this = this,
        $window = $(window),
        top_position = $('.service-wrp').offset().top, // + 100
        height_block = $('.services').height(),
        height_menu = $('.listService').height(),
        bottom_position = top_position + height_block - height_menu,
        bottom_padding = height_block - height_menu;

    console.log(top_position);
    console.log(bottom_position);
    console.log(bottom_padding);

    $window.scroll(function (e) {
        if (($window.scrollTop() > top_position) && ($window.scrollTop() <= bottom_position)) {
            $this.css({
                position: 'fixed',
                top: 100
            });
        }
        else if ($window.scrollTop() < top_position){
            $this.css({
                position: 'absolute',
                top: 0
            });
        }
        else if ($window.scrollTop() > bottom_position){
            $this.css({
                position: 'absolute',
                top: bottom_padding
            });
        }
    });
};

//Плавный переход по якорным ссылкам
function goToAnchor(id) {
    $('html,body').stop().animate({ scrollTop: $('#block-' + id).offset().top - 100 }, 1000);
}
function goToSubAnchor(id) {
    $('html,body').stop().animate({ scrollTop: $('#block-sub-' + id).offset().top - 110 }, 1000);
}

// Отслеживание перехода по якорной ссылке на другую страницу
function goToAnchorPage() {
    var anchor = window.location.hash.replace("#","");
    // Если есть якорь и это страница Услуги
    if((anchor !== '') && ($('.service-page').length > 0)) {
        var positionAnchor =  $('#' + anchor + '').offset().top,
            heightHeader = $('header').height() + 50,
            scrollSize = positionAnchor - heightHeader;

        console.log(scrollSize);
        $('html,body').scrollTop(scrollSize);
    }
}

//Функция скрывания всех описаний для пунктов подменю (Главная страница)
function hiddenPreview(){
    for(i = 1; i < 9; i++){
        $('#' + i + '-preview').css('display', 'none');
    }
}

//Функция показа описаний при нажатии на соответствующий пункт подменю
function showPreview(){
    $('.listService > li > .listServiceItem').click(function () {
        var count = 0;
        $('.listService li').each(function () {
            count++;
        });
        var id = $(this).attr('id');
        for(i = 0; i <= count; i++){
            if(Number(i) === Number(id)){
                $('#' + id + '-preview').css('display', 'block');
            }else {
                $('#' + i + '-preview').css('display', 'none');
            }
        }
    });
}

//Показ скрытого текста при наведении на числа (Главная страница)
function showTextOnNumber(){
    //Наведение на цифры в кругах Главная страница
    if($(document).width() >= 768) {
        $('.circl-top').mouseover(function () {
            var N = $(this).text();
            for(i = 1; i < 9; i++){
                $('#info-text-' + i + '').css('display', 'none');
            };
            $('#info-text-' + N + '').css('display','block');
        });
        $('.circl-bottom').mouseover(function () {
            var N = $(this).text();
            for(i = 1; i < 9; i++){
                $('#info-text-' + i + '').css('display', 'none');
            };
            $('#info-text-' + N + '').css('display','block');
        });
        $('.info-top').mouseover(function () {
            var N = $(this).attr('data-number');
            for(i = 1; i < 9; i++){
                $('#info-text-' + i + '').css('display', 'none');
            };
            $('#info-text-' + N + '').css('display','block');
        });
        $('.info-btm').mouseover(function () {
            var N = $(this).attr('data-number');
            for(i = 1; i < 9; i++){
                $('#info-text-' + i + '').css('display', 'none');
            };
            $('#info-text-' + N + '').css('display','block');
        });
        $('.hoverBlockTop').mouseover(function () {
            var N = $(this).attr('data-number');
            for(i = 1; i < 9; i++){
                $('#info-text-' + i + '').css('display', 'none');
            };
            $('#info-text-' + N + '').css('display','block');
        });
        $('.hoverBlockBtm').mouseover(function () {
            var N = $(this).attr('data-number');
            for(i = 1; i < 9; i++){
                $('#info-text-' + i + '').css('display', 'none');
            };
            $('#info-text-' + N + '').css('display','block');
        });
    }
}

// Вывод описания цифр в мобильной версии
function openPopupTextOnNumber() {
    if($(document).width() < 768) {
        $('.info-top').click(function () {
            $('.popup-info-text').css('display','flex');
            var number = $(this).attr('data-number');
            $('.popup-info-text__desc[data-id=info-text-' + number + ']').css('display','block');
        });
        $('.popup-info-text__close').click(function () {
            $('.popup-info-text').css('display','none');
            $('.popup-info-text__desc').css('display', 'none');
        });
        $('.info-btm').click(function () {
            $('.popup-info-text').css('display','flex');
            var number = $(this).attr('data-number');
            $('.popup-info-text__desc[data-id=info-text-' + number + ']').css('display','block');
        });

    }
}

//Выделение элемента подменю при пролистовании страницы к определённому текстовому блоку
//соответствующему данному элементу
function scrollActiveItem(){
    var array_position = new Array(),
        array_menuItem = new Array();
    //Получить координаты заголовков текста и их порядковый номер
    $('.serviceItem > .caption').each(function (index,element) {
        array_position[index] = $(this).offset().top - 90;
    });
    //Получить порядковые номера элементов подменю
    $('.listService > li').each(function (index, element) {
        array_menuItem[index] = $(this).attr('id');
    });
    //При прокрутке к определённой координате брать номер заголовка и по нему добавлять класс к элементу меню
    $(window).scroll(function () {
        lenght_array = array_menuItem.length;
        var length_scroll = $(this).scrollTop();
        for(i = 0; i < lenght_array; i++){
            if((i + 1) == array_position.length){
                if((length_scroll >= (array_position[i] - 200))) { // - 200
                    for(j = 0; j < array_menuItem.length; j++)
                        $('#' + array_menuItem[j] + '').removeClass('activeListService');
                    $('#' + array_menuItem[i] + '').addClass('activeListService');
                }
            }
            if((length_scroll >= (array_position[i] - 70)) && (length_scroll < (array_position[i+1]))){
                for(j = 0; j < array_menuItem.length; j++)
                    $('#' + array_menuItem[j] + '').removeClass('activeListService');
                $('#' + array_menuItem[i] + '').addClass('activeListService');
            }
        }
    })
}

//Отправка данных на сервер без перезагрузки страницы
function sendAjaxForm() {
    $("#form").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "https://geojetexploration.com/wp-content/themes/artrange/send.php",
            data: form_data,
            success: function () {
                alert("Ваше сообщение отпрвлено!");
                $('.popur_feedback').css('display','none');
                $('.popur_form').css('display', 'none');
            }
        });
    });
}

//Открытие popap окна по кнопке "Связаться"
function openPopap(){
    $('.feedback_window').click(function () {
        $('.popur_feedback').css('display','block');
        $('.popur_form').css('display', 'block');
        $('header').css('position','static');
    });
    $('#close_feedback').click( function () {
        $('.popur_feedback').css('display','none');
        $('.popur_form').css('display', 'none');
    })
}

//Открытие меню сайта
function openMenuSite(flagMenu) {
    $('.menu-button img').click(function (event) {
        if((flagMenu === false)){
            var heightHeader = $('header').innerHeight(),
                heightWindow = $(window).height(),
                heightContentMenu = $('.menu-full').height();
            heightMenu = heightWindow - heightHeader;

            // Реализовать открытие меню на всю страницу в мобилке

            $('.menu-full').css({
                'height': heightMenu,
                'top':heightHeader,
                'background':'rgb(0,0,0)',
                'overflow':'scroll'
            });

            $('.menu-full').slideToggle(400);

            $('body').css('overflow', 'hidden');

            $('header').css({
                'position':'fixed',
                'width':'100%',
                'z-index':'1000'
            });

            flagMenu = true;

            $(document).mouseup(function (e){
                var block = $(".menu-full > a"),
                    menu_btn = $(".menu-button > img");
                if ((!block.is(e.target)) && (!menu_btn.is(e.target))){
                    $('.menu-full').fadeOut();
                    $('header').css('position','intial');
                    $('body').removeAttr('style');
                    flagMenu = false;
                }
            });
        }else{
            $('.menu-full').slideToggle(400);
            setTimeout(function(){
                $('header').css('position','intial');
                $('body').removeAttr('style');
            }, 500);
            flagMenu = false;
        }
    });
}

//Плавный переход по якорным ссылкам
function slowTrancitionAnchor(){
    $('.anchor').on('click', function(e){
        var id = $(this).attr('data-id');
        $('html,body').stop().animate({ scrollTop: $(id).offset().top }, 1000);
        e.preventDefault();
    });
    $('.anchorButton').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#goTo').offset().top }, 1000);
        e.preventDefault();
    });
}

//Липкий скролл
function slickScroll(){
    if($('.service-wrp').length){
        var width_block = $('.service-wrp > .container > .row').width();
        if($(window).width() > 1199){
            $('.service-wrp .listService').followTo();
            width_block = width_block * 0.25;
            $('.service-wrp .listService').css('width', width_block);
        }
        else if(($(window).width() > 992) && ($(window).width() <= 1199)){
            width_block = width_block * 0.25;
            $('.service-wrp .listService').followTo(760, 3780, 3000);
        }
        else if(($(window).width() > 767) && ($(window).width() <= 991)){
            $('.service-wrp .listService').followTo(640, 4880, 4200);
            width_block = width_block * 0.4166666667;
        }
    }
}

//Инициализация слайдеров
function initializationSliders(){
    $("#slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
    //Инициализация разных слайдеров с разными параметрами в зависимости от размеров экрана
    if($(window).width() > 1199){
        $("#slider_team").slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        });
        $("#slider_tech").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
        });
    }else if($(window).width() > 991){
        $("#slider_team").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
        });
        $("#slider_tech").slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }else if($(window).width() > 767){
        $("#slider_team").slick({
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        });
        $("#slider_tech").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2
        });
        $("#slider_foto").slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
    }else if($(window).width() <= 767){
        $("#slider_team").slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        });
        $("#slider_tech").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true
        });
        $("#slider_foto").slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
    }
    $("#slider_foto").slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
}

//Выделение нажатого блока при клике
function activeBlockOnClick(){
    $('.service-wrp .listService > li').click(function () {
        $(this).addClass('activeListService');
    });
}

//Открытие и закрытие описаний пунктов при нажатии (Главная страница)
function open_closeItem(){
    if($(window).width() <= '992'){
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
        });
    }
}

//Кнопка переметки вверх страницы
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.toTop').fadeIn();
        }else{
            $('.toTop').fadeOut();
        }
    });
    $('.toTop').click(function() {
        $('body,html').animate({scrollTop:0},1000);
    });
});

//Пролистование страницы до основного контента
function scrollToContent() {
    var title = $('title').text();
    //Если нет перехода к якорю и не русская версия
    if((window.location.hash === '') && ($('body.rus-lang').length == 0)){
        console.log($('body.rus-lang').length);
        //Если не Главная страница
        if(($('.main-page-int').length === 0) && ($('.action-page-int').length === 0)) {
            var height_block = $('#main_block').height();
            $("body,html").animate({"scrollTop":height_block}, "slow");
        }
    }
}

//Анимация прогресс-баров
function animateBar(){
    //Получить level первой страны
    var level_1 = $('#info-country-3').attr('data-level-1'),
        level_2 = $('#info-country-3').attr('data-level-2');
    //Рассчитать пиксели
    var max_height = $('.info-continent').height();
    level_1 = (max_height / 100) * level_1;
    level_2 = (max_height / 100) * level_2;
    //Установить значение height
    $('.first_bar').css('height', level_1);
    $('.second_bar').css('height', level_2);
    //При нажатии на новую страну:
    $('.big_circle').mouseover(function () {
        //получать level
        var id_country = $(this).attr('id');
        level_1 = $('#info-' + id_country + '').attr('data-level-1');
        level_2 = $('#info-' + id_country + '').attr('data-level-2');
        //рассчитать пиксели
        level_1 = (max_height / 100) * level_1;
        level_2 = (max_height / 100) * level_2;
        //установить значение height
        $('.first_bar').css({'height':level_1, 'opacity':'1' });
        $('.second_bar').css({'height':level_2, 'opacity':'1' });
        $('.column').css('opacity', '1');
        if((id_country === 'country-5') || (id_country === 'country-6')){
            $('.first_bar').css('opacity', '0.7');
            $('.second_bar').css('opacity', '0.7');
            $('.column').css('opacity', '0.7');
        }
    });
}

//Анимация прогресс-баров в мобильном разрешении
function animateBarMobile() {
    // Получить level первой страны
    $('.info-continent').each(function () {
        var id_country = $(this).attr('id'),
            level_1 = $(this).attr('data-level-1'),
            level_2 = $(this).attr('data-level-2');

        // Рассчитать пиксели
        var max_width = $('.info-continent').width();
        level_1 = (max_width / 100) * level_1;
        level_2 = (max_width / 100) * level_2;

        // Установить значение height
        var barOne = $(this).find('.bar-one_mobile'),
            barTwo = $(this).find('.bar-two_mobile');

        var target = $(barOne),
            targetPos = target.offset().top,
            winHeight = $(window).height(),
            scrollToElem = targetPos - winHeight;

        $(window).scroll(function () {
            var winScrollTop = $(this).scrollTop();
            if(winScrollTop > scrollToElem) {
                console.log(id_country);
                // Сработает когда пользователь доскроллит к элементу с классом .elem
                if ((id_country === 'info-country-5') || (id_country === 'info-country-6')) {
                    $(barOne).css({'width':level_1, 'opacity':'0.7' });
                } else {
                    $(barOne).css({'width':level_1, 'opacity':'1' });
                }
            }
        });

        var target = $(barTwo),
            targetPos = target.offset().top,
            winHeight = $(window).height(),
            scrollToElem = targetPos - winHeight;

        $(window).scroll(function(){
            var winScrollTop = $(this).scrollTop();
            if(winScrollTop > scrollToElem){
                if ((id_country === 'info-country-5') || (id_country === 'info-country-6')) {
                    $(barTwo).css({'width':level_2, 'opacity':'0.7' });
                } else {
                    $(barTwo).css({'width':level_2, 'opacity':'1' });
                }
            }
        });
    });
}

//Отрисовка пунктирных линий svg
function coordinateSVG() {
    if($('svg').length > 0){
        $('.orange-circle-end').css('display','block');
        var height_ul = $('.listService').height();
        $('svg').css('height', height_ul);
        //Клик по элементу
        $('.listService > li').click(function () {
            //Очищаем все элементы от эффекта активности
            $('.listService > li').each(function() {
                $(this).removeClass('activeListService');
            });
            //Добавляем выбранному элементу класс active
            $(this).addClass('activeListService');
            //Рассчет начальной прямой на основе высоты элемента
            var top_coordinate = $(this).position().top,
                heigth_li = $(this).height(),
                x1 = 0,
                y1 = top_coordinate + (heigth_li / 2) - 1,
                x2 = 100,
                y2 = y1,
                x3 = x2,
                y3 = y1 - 2,
                x4 = x2,
                y4 = 275,
                x5 = x2 - 2,
                y5 = y4,
                x6 = $('svg').width(),
                y6 = y4;

            if( y3 > 275 ){
                y3 = y3 + 4;
            }
            //Передача координат в соответствующие атрибуты svg
            $('#line-1').attr({'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2});
            $('#line-2').attr({'x1': x3, 'y1': y3, 'x2': x4, 'y2': y4});
            $('#line-3').attr({'x1': x5, 'y1': y5, 'x2': x6, 'y2': y6});
        });
    }
}
if (navigator.userAgent.search(/MSIE/) > 0) {
    var s = Snap("#snap");
        bigCircleCoral = s.circle(650, 200, 160),
        orangeCircle = s.circle(650, 200, 125),
        blackCircle = s.circle(650, 200, 35)
        smal1_Circle = s.circle(615, 200, 8),
        smal3_Circle = s.circle(187, 135, 8),
        smal2_Circle = s.circle(740, 200, 8),
        smal4_Circle = s.circle(1092, 265, 8),
        line = s.line(185,200,610,200),
        line1 = s.line(187,200,187,135),
        line2 = s.line(740,200,1094,200),
        line3 = s.line(1092,200,1092,265);

    line.attr({stroke: '#27323f',strokeWidth: 4,opacity:"1",strokeDasharray: 6, });
    line1.attr({stroke: '#27323f',strokeWidth: 4,opacity:"1",strokeDasharray: 6, });
    line2.attr({stroke: '#27323f',strokeWidth: 4,opacity:"1",strokeDasharray: 6, });
    line3.attr({stroke: '#27323f',strokeWidth: 4,opacity:"1",strokeDasharray: 6, });
    bigCircleCoral.attr({ fill: "#FFAE72",position: "fixed",});
    orangeCircle.attr({ fill: "#FF7443" });
    blackCircle.attr({  fill: "#27323f" });
    smal1_Circle.attr({ fill: "#27323f", opacity: "1",})
    smal2_Circle.attr({ fill: "#27323f", opacity: "1",})
    smal3_Circle.attr({ fill: "#27323f", opacity: "1",})
    smal4_Circle.attr({ fill: "#27323f", opacity: "1",})

    setTimeout(function() { $('#left-text-circle').fadeIn(0); }, 0);
    setTimeout(function() { $('#right-text-circle').fadeIn(0); }, 0);
};

// Анамиция блока миссии
function drawCircle() {
    if ($('svg').is('#snap')) {
        console.log('1');
        if (($(window).width() > 1300) && ($(window).width() <= 1399)) {
            var s = Snap("#snap"),
                bigCircleCoral = s.circle(650, 200, 0),
                orangeCircle = s.circle(650, 200, 0),
                blackCircle = s.circle(650, 200, 35)
            smal1_Circle = s.circle(615, 200, 8),
                smal3_Circle = s.circle(187, 135, 8),
                smal2_Circle = s.circle(740, 200, 8),
                smal4_Circle = s.circle(1092, 265, 8),
                line = s.line(185, 200, 610, 200),
                line1 = s.line(187, 200, 187, 135),
                line2 = s.line(740, 200, 1094, 200),
                line3 = s.line(1092, 200, 1092, 265);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})

            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 4000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 185, y1: 200, x2: 610, y2: 200, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 187, y1: 200, x2: 187, y2: 135, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 740, y1: 200, x2: 1094, y2: 200, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 1092, y1: 200, x2: 1092, y2: 265, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 160}, 750);
                orangeCircle.animate({r: 125}, 1000);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 750);
                    orangeCircle.animate({r: 0}, 1000);
                }, 2000);
            };
        }
        //Инициализация анимации с разными параметрами в зависимости от размеров экрана
        else if ($(window).width() > 1400) {
            var s = Snap("#snap"),
                bigCircleCoral = s.circle(650, 200, 0),
                orangeCircle = s.circle(650, 200, 0),
                blackCircle = s.circle(650, 200, 35)
            smal1_Circle = s.circle(615, 200, 8),
                smal3_Circle = s.circle(107, 135, 8),
                smal2_Circle = s.circle(740, 200, 8),
                smal4_Circle = s.circle(1176, 265, 8),
                line = s.line(105, 200, 610, 200),
                line1 = s.line(107, 200, 107, 135),
                line2 = s.line(740, 200, 1182, 200),
                line3 = s.line(1176, 200, 1176, 265);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})

            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 105, y1: 200, x2: 610, y2: 200, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 107, y1: 200, x2: 107, y2: 135, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 740, y1: 200, x2: 1182, y2: 200, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 1176, y1: 200, x2: 1176, y2: 265, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 160}, 750);
                orangeCircle.animate({r: 125}, 1000);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 750);
                    orangeCircle.animate({r: 0}, 1000);
                }, 3500);
            };
        }
        else if (($(window).width() > 1199) && ($(window).width() <= 1299)) {

            var s = Snap("#snap"),
                bigCircleCoral = s.circle(650, 200, 0),
                orangeCircle = s.circle(650, 200, 0),
                blackCircle = s.circle(650, 200, 35)
            smal1_Circle = s.circle(615, 200, 8),
                smal3_Circle = s.circle(217, 135, 8),
                smal2_Circle = s.circle(740, 200, 8),
                smal4_Circle = s.circle(1056, 265, 8),
                line = s.line(215, 200, 610, 200),
                line1 = s.line(217, 200, 217, 135),
                line2 = s.line(740, 200, 1062, 200),
                line3 = s.line(1056, 200, 1056, 265);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})

            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 215, y1: 200, x2: 610, y2: 200, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 217, y1: 200, x2: 217, y2: 135, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 740, y1: 200, x2: 1062, y2: 200, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 1056, y1: 200, x2: 1056, y2: 265, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 150}, 500);
                orangeCircle.animate({r: 115}, 750);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 500);
                    orangeCircle.animate({r: 0}, 750);
                }, 3500);
            };
        }
        else if (($(window).width() > 991) && ($(window).width() <= 1199)) {

            var s = Snap("#snap"),
                bigCircleCoral = s.circle(500, 200, 0),
                orangeCircle = s.circle(500, 200, 0),
                blackCircle = s.circle(500, 200, 30)
            smal1_Circle = s.circle(470, 200, 8),
                smal3_Circle = s.circle(177, 135, 8),
                smal2_Circle = s.circle(555, 200, 8),
                smal4_Circle = s.circle(820, 265, 8),
                line = s.line(175, 200, 470, 200),
                line1 = s.line(177, 200, 177, 135),
                line2 = s.line(555, 200, 820, 200),
                line3 = s.line(820, 200, 820, 265);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})

            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 175, y1: 200, x2: 470, y2: 200, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 177, y1: 200, x2: 177, y2: 135, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 555, y1: 200, x2: 820, y2: 200, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 820, y1: 200, x2: 820, y2: 265, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 130}, 500);
                orangeCircle.animate({r: 95}, 750);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 500);
                    orangeCircle.animate({r: 0}, 750);
                }, 3500);
            };
        }
        else if (($(window).width() > 768) && ($(window).width() <= 991)) {

            var s = Snap("#snap"),
                bigCircleCoral = s.circle(430, 200, 0),
                orangeCircle = s.circle(430, 200, 0),
                blackCircle = s.circle(430, 200, 25)
            smal1_Circle = s.circle(405, 200, 6),
                smal3_Circle = s.circle(177, 135, 6),
                smal2_Circle = s.circle(480, 200, 6),
                smal4_Circle = s.circle(700, 265, 6),
                line = s.line(175, 200, 405, 200),
                line1 = s.line(177, 200, 177, 135),
                line2 = s.line(480, 200, 700, 200),
                line3 = s.line(700, 200, 700, 265);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})


            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 175, y1: 200, x2: 405, y2: 200, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 177, y1: 200, x2: 177, y2: 135, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 8, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 8, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 480, y1: 200, x2: 700, y2: 200, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 770, y1: 200, x2: 700, y2: 265, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 120}, 500);
                orangeCircle.animate({r: 85}, 750);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 500);
                    orangeCircle.animate({r: 0}, 750);
                }, 3500);
            };
        }
        else if (($(window).width() > 991) && ($(window).width() <= 1199)) {

            var s = Snap("#snap"),
                bigCircleCoral = s.circle(500, 200, 0),
                orangeCircle = s.circle(500, 200, 0),
                blackCircle = s.circle(500, 200, 30)
            smal1_Circle = s.circle(470, 200, 8),
                smal3_Circle = s.circle(177, 135, 8),
                smal2_Circle = s.circle(555, 200, 8),
                smal4_Circle = s.circle(820, 265, 8),
                line = s.line(175, 200, 470, 200),
                line1 = s.line(177, 200, 177, 135),
                line2 = s.line(555, 200, 820, 200),
                line3 = s.line(820, 200, 820, 265);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})


            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 175, y1: 200, x2: 470, y2: 200, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 177, y1: 200, x2: 177, y2: 135, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 555, y1: 200, x2: 820, y2: 200, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 820, y1: 200, x2: 820, y2: 265, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 130}, 500);
                orangeCircle.animate({r: 95}, 750);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 500);
                    orangeCircle.animate({r: 0}, 750);
                }, 3500);
            };
        }
        else if (($(window).width() > 600) && ($(window).width() <= 768)) {

            var s = Snap("#snap"),
                bigCircleCoral = s.circle(300, 200, 0),
                orangeCircle = s.circle(300, 200, 0),
                blackCircle = s.circle(300, 200, 25)
            smal1_Circle = s.circle(300, 175, 6),
                smal3_Circle = s.circle(300, 40, 6),
                smal2_Circle = s.circle(300, 225, 6),
                smal4_Circle = s.circle(300, 385, 6),
                line = s.line(175, 200, 405, 200),
                line1 = s.line(300, 175, 300, 40),
                line2 = s.line(480, 200, 700, 200),
                line3 = s.line(300, 225, 300, 385);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})


            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 175, y1: 200, x2: 405, y2: 200, opacity: 0,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 300, y1: 200, x2: 300, y2: 40, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 480, y1: 200, x2: 700, y2: 200, opacity: 0,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 300, y1: 225, x2: 300, y2: 385, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 100}, 500);
                orangeCircle.animate({r: 65}, 750);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 500);
                    orangeCircle.animate({r: 0}, 750);
                }, 3500);
            };
        }
        else if (($(window).width() > 480) && ($(window).width() <= 599)) {

            var s = Snap("#snap"),
                bigCircleCoral = s.circle(240, 200, 0),
                orangeCircle = s.circle(240, 200, 0),
                blackCircle = s.circle(240, 200, 25)
            smal1_Circle = s.circle(240, 175, 6),
                smal3_Circle = s.circle(240, 40, 6),
                smal2_Circle = s.circle(240, 225, 6),
                smal4_Circle = s.circle(240, 385, 6),
                line = s.line(175, 200, 405, 200),
                line1 = s.line(240, 175, 240, 40),
                line2 = s.line(480, 200, 700, 200),
                line3 = s.line(240, 225, 240, 385);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})


            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 175, y1: 200, x2: 405, y2: 200, opacity: 0,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 240, y1: 175, x2: 240, y2: 40, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 480, y1: 200, x2: 700, y2: 200, opacity: 0,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 240, y1: 225, x2: 240, y2: 385, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 100}, 500);
                orangeCircle.animate({r: 65}, 750);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 500);
                    orangeCircle.animate({r: 0}, 750);
                }, 3500);
            };
        }
        else if (($(window).width() > 320) && ($(window).width() <= 479)) {

            var s = Snap("#snap"),
                bigCircleCoral = s.circle(185, 200, 0),
                orangeCircle = s.circle(185, 200, 0),
                blackCircle = s.circle(185, 200, 25)
            smal1_Circle = s.circle(185, 175, 6),
                smal3_Circle = s.circle(185, 40, 6),
                smal2_Circle = s.circle(185, 225, 6),
                smal4_Circle = s.circle(185, 385, 6),
                line = s.line(175, 200, 405, 200),
                line1 = s.line(185, 175, 185, 40),
                line2 = s.line(480, 200, 700, 200),
                line3 = s.line(185, 225, 185, 385);

            line.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line1.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line2.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            line3.attr({stroke: '#27323f', strokeWidth: 4, opacity: "0", strokeDasharray: 6,});
            bigCircleCoral.attr({fill: "#FFAE72", position: "fixed",});
            orangeCircle.attr({fill: "#FF7443"});
            blackCircle.attr({fill: "#27323f"});
            smal1_Circle.attr({fill: "#27323f", opacity: "0",})
            smal2_Circle.attr({fill: "#27323f", opacity: "0",})
            smal3_Circle.attr({fill: "#27323f", opacity: "0",})
            smal4_Circle.attr({fill: "#27323f", opacity: "0",})


            animateCircle();
            setInterval(function () {
                animateCircle();
            }, 7000);


            setInterval(function () {
                blackCircle.animate({opacity: 0.4}, 1500);
            }, 1500);
            setInterval(function () {
                blackCircle.animate({opacity: 1}, 2500);
            }, 2500);


            setTimeout(function () {
                $('#left-text-circle').fadeIn(1250);
            }, 1250);
            setTimeout(function () {
                $('#right-text-circle').fadeIn(1500);
            }, 1500);

            setTimeout(function () {
                line.animate({x1: 175, y1: 200, x2: 405, y2: 200, opacity: 0,}, 1000);
            }, 1000);
            setTimeout(function () {
                line1.animate({x1: 185, y1: 175, x2: 185, y2: 40, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal1_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);
            setTimeout(function () {
                smal3_Circle.animate({r: 6, opacity: 1,}, 1000);
            }, 1000);


            setTimeout(function () {
                smal2_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                smal4_Circle.animate({r: 6, opacity: 1,}, 1250);
            }, 1250);
            setTimeout(function () {
                line2.animate({x1: 480, y1: 200, x2: 700, y2: 200, opacity: 0,}, 1250);
            }, 1250);
            setTimeout(function () {
                line3.animate({x1: 185, y1: 225, x2: 185, y2: 385, opacity: 1,}, 1250);
            }, 1250);

            function animateCircle() {
                bigCircleCoral.animate({r: 100}, 500);
                orangeCircle.animate({r: 65}, 750);
                setTimeout(function () {
                    bigCircleCoral.animate({r: 0}, 500);
                    orangeCircle.animate({r: 0}, 750);
                }, 3500);
            };
        }
    }
}

//Анимация popap меню
function roundElementLang() {
    setInterval(function () {
        setTimeout(function () {
            $('#text_2').css('display','none');
            $('#text_3').css('display','none');
            $('#text_1').css('display','block');
            $('.image_lang1').css('background-color','rgb(255,116, 69)');
            $('.image_lang2').css('background-color','rgb(39, 50, 63)');
            $('.image_lang3').css('background-color','rgb(39, 50, 63)');
        }, 1000);
        setTimeout(function () {
            $('#text_1').css('display','none');
            $('#text_3').css('display','none');
            $('#text_2').css('display','block');
            $('.image_lang2').css('background-color','rgb(255,116, 69)');
            $('.image_lang1').css('background-color','rgb(39, 50, 63)');
            $('.image_lang3').css('background-color','rgb(39, 50, 63)');
        }, 2000);
        setTimeout(function () {
            $('#text_1').css('display','none');
            $('#text_2').css('display','none');
            $('#text_3').css('display','block');
            $('.image_lang3').css('background-color','rgb(255,116, 69)');
            $('.image_lang2').css('background-color','rgb(39, 50, 63)');
            $('.image_lang1').css('background-color','rgb(39, 50, 63)');
        }, 3000);
    }, 5000);
}

// Анимация попап меню
function roundElementLangauge() {
    setInterval(function () {
        setTimeout(function () {
            $('.text_l1').css('display','block');
            $('.text_l2').css('display','none');
            $('.text_l3').css('display','none');
        }, 1000);
        setTimeout(function () {
            $('.text_l1').css('display','none');
            $('.text_l2').css('display','block');
            $('.text_l3').css('display','none');
        }, 2000);
        setTimeout(function () {
            $('.text_l1').css('display','none');
            $('.text_l2').css('display','none');
            $('.text_l3').css('display','block');
        }, 3000);
    }, 5000);
}

// Анимация попап меню
function mouseoverLang() {
    $('.image_lang1').mouseover(function () {
        $('#text_2').css('display','none');
        $('#text_3').css('display','none');
        $('#text_1').css('display','block');
        $('.text_l1').css('display','block');
        $('.text_l2').css('display','none');
        $('.text_l3').css('display','none');
        $('.image_lang1').css('background-color','rgb(255,116, 69)');
        $('.image_lang2').css('background-color','rgb(39, 50, 63)');
        $('.image_lang3').css('background-color','rgb(39, 50, 63)');
    });
        
    $('.image_lang2').mouseover(function () {
        $('#text_1').css('display','none');
        $('#text_3').css('display','none');
        $('#text_2').css('display','block');
        $('.text_l1').css('display','none');
        $('.text_l2').css('display','block');
        $('.text_l3').css('display','none');
        $('.image_lang2').css('background-color','rgb(255,116, 69)');
        $('.image_lang1').css('background-color','rgb(39, 50, 63)');
        $('.image_lang3').css('background-color','rgb(39, 50, 63)');
    });
    $('.image_lang3').mouseover(function () {
        $('#text_1').css('display','none');
        $('#text_2').css('display','none');
        $('#text_3').css('display','block');
        $('.text_l1').css('display','none');
        $('.text_l2').css('display','none');
        $('.text_l3').css('display','block');
        $('.image_lang3').css('background-color','rgb(255,116, 69)');
        $('.image_lang2').css('background-color','rgb(39, 50, 63)');
        $('.image_lang1').css('background-color','rgb(39, 50, 63)');
    });
}

// Определение языковой версии сайта
function langVersionSite() {
    var eng_site = 'http://geojetexploration.com/en/',
        ru_site  = 'http://geojetexploration.com/',
        es_site  = 'http://geojetexploration.com/es/',
        active_site;
    /*
        1. Проверяем флаг (сессия)
            1.1 FALSE: (пользователь только зашёл на сайт) или не создана сессия
                1.1.1 Проверяем метку lang
                    Если не существует:
                        - Открываем попап
                        - Запоминаем выбор польователя
                        - Открываем нужную версию сайта
                    Если существует:
                        - Получаем значение метки
                        - Открываем требуемую версию сайта
            1.2 TRUE или не создана сессия:
                - Ничего не делаем
    */

    // Проверка наличия созданной сессии
    if(sessionStorage.getItem('flag') === null) {
        // Если сессия не создана, то проверяем наличие метки языка
        if (localStorage.getItem('language')) {
            // Функция отключена
            // При наличии метки открываем требуемую версию сайта
            // if (localStorage.getItem('language') === 'eng') {
            //     sessionStorage.setItem('flag', 'true');
            //     window.location = eng_site;
            // }
            // if (localStorage.getItem('language') === 'rus') {
            //     sessionStorage.setItem('flag', 'true');
            //     window.location = ru_site;
            // }
            // if (localStorage.getItem('language') === 'es') {
            //     sessionStorage.setItem('flag', 'true');
            //     window.location = es_site;
            // }
        } else {
            // Если метка не создана, то открывваем попап
            console.log('Метка не создана, открываем попап');
            $('.b-popup').css('display', 'block');
            console.log('Запомнили значение, открываем ссылку');
            $('body').addClass('header-not-fixed');
            $('#eng').click(function () {
                sessionStorage.setItem('flag', 'true');
                localStorage.setItem('language', 'eng');
                window.location = eng_site;
                $('body').addClass('header-not-fixed');
            });
            $('#rus').click(function () {
                console.log('Запомнили значение, открываем ссылку');
                sessionStorage.setItem('flag', 'true');
                localStorage.setItem('language', 'rus');
                window.location = ru_site;
                $('body').addClass('header-not-fixed');
            });
            $('#es').click(function () {
                sessionStorage.setItem('flag', 'true');
                localStorage.setItem('language', 'es');
                window.location = es_site;
                $('body').addClass('header-not-fixed');
            });
        }
    }
    else if(sessionStorage.getItem('flag') === 'true') {
        $('.b-popup').css('display', 'none');
        $('.b-popup-content').css('display', 'none');
        var location = window.location.href;
        if(localStorage.getItem('language') === 'eng')
            active_site = eng_site;
        if(localStorage.getItem('language') === 'rus')
            active_site = ru_site;
        if(localStorage.getItem('language') === 'es')
            active_site = es_site;
    }
}

// Прогремм бар при скролле страницы
function scrollProgressBar() {
    $(window).scroll(function () {
        var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
        $(".progress-bar").width (ratio + "%");
    });
}

// Анимация кнопки меню
function animateMenuButton() {
    setInterval(function () {
        $('.menu-button img').addClass('heartBeat');
        setTimeout( function(){
            $('.menu-button img').removeClass('heartBeat');
        }, 2000)
    }, 3000);
}

// Уменьшение шапки при прокрутке страницы вниз
function mobileHeaderScroll() {
    $(document).scroll(function () {
        console.log()
        if(($(document).width() < 768) && ($(document).scrollTop() > 50) && ($('.menu-full').is(':hidden'))) {
            $('.logo-wrp').removeClass('col-xs-12');
            $('.logo-wrp').addClass('col-xs-10');
            $('.logo-wrp .logo').css('float','left');

            $('.phone-wrp').removeClass('col-xs-12');
            $('.phone-wrp').addClass('hidden-xs');

            $('.menu-wrp').removeClass('col-xs-12');
            $('.menu-wrp').css('float','right');

            if($(document).width() < 479) $('.menu-wrp .menu').css({'margin':'0px auto', 'width':'auto'});
            else $('.menu-wrp .menu').css({'margin':'6px auto', 'width':'auto'});

            $('.menu-wrp .button').css('display','none');
            $('.menu-wrp .menu-button img').css({'float':'right', 'margin-right':'20px'});
            $('.menu-wrp').addClass('col-xs-2');

            $('header').css('height','90px');
        }
        if(($(document).scrollTop() < 50) && ($('.menu-full').is(':hidden'))) {
            $('.logo-wrp').removeClass('col-xs-10');
            $('.logo-wrp').addClass('col-xs-12');
            $('.logo-wrp .logo').removeAttr('style');

            $('.phone-wrp').removeClass('hidden-xs');
            $('.phone-wrp').addClass('col-xs-12');

            $('.menu-wrp').removeClass('col-xs-2');
            $('.menu-wrp').removeAttr('style');
            $('.menu-wrp .menu').removeAttr('style');
            $('.menu-wrp .button').removeAttr('style');
            $('.menu-wrp .menu-button img').removeAttr('style');
            $('.menu-wrp').addClass('col-xs-12');

            $('header').removeAttr('style');
        }
    })
}

// Анимирование заголовков на страницах шаблона "Action-страница"
function animateHeadlineOnActionPage() {
    var slogans = $('.main-slogan'),
        animate1 = $(slogans[0]).attr('data-animate'),
        animate2 = $(slogans[1]).attr('data-animate'),
        animate3 = $('.btn_action_head').attr('data-animate');

    setTimeout(function () {
        $(slogans[0]).removeClass('d-none').addClass(animate1);
    }, 300);
    setTimeout(function () {
        $('.btn_action_head').removeClass('d-none').addClass(animate3);
    }, 1300);
    setTimeout(function () {
        $(slogans[1]).removeClass('d-none').addClass(animate2);
    }, 2300);
}

// Нажатие на точки на карте мира страница "Наши проекты"
function interactiveMap() {
    $('.big_circle').mouseover(function () {
        var array_id = new Array(),
            name = $(this).attr("id");
        $('.info-continent').each(function (i, element) {
            array_id.push($(this).attr('id'));
        });
        for (i = 0; i < array_id.length; i++) {
            if (array_id[i] === ('info-' + name))
                $('#' + array_id[i] + '').css('display', 'block');
            else
                $('#' + array_id[i] + '').css('display', 'none');
        }
    });
}

