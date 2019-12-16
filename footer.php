<?php
    $id_main_page = get_option('page_on_front');
    if($id_main_page == 2){
        $placholder_name = 'Имя';
        $placholder_messege = 'Сообщение';
        $rights = 'Все права защищены.';
        $politic = 'Политика конфиденциальности';
        $development = 'Разработка сайта';
        $follow_us = 'Наша страница в LinkedIn';

        $group = get_field('contact_info', 4);
        $mail = $group['e_mail'];
        $number = $group['number_photo'];
    }
    elseif ($id_main_page == 8){
        $placholder_name = 'Name';
        $placholder_messege = 'Message';
        $rights = 'All rights reserved.';
        $politic = 'Privacy policy';
        $development = 'Designed and developed by';
        $follow_us = 'Follow us on';

        $group = get_field('contact_info', 486);
        $mail = $group['e_mail'];
        $number = $group['number_photo'];
    } else {
        $placholder_name = 'Nombre';
        $placholder_messege = 'Mensaje';
        $rights = 'Todos los derechos reservados.';
        $politic = 'Política de privacidad';
        $development = 'Diseñado y desarrollado por';
        $follow_us = 'Sígannos en';

        $group = get_field('contact_info', 848);
        $mail = $group['e_mail'];
        $number = $group['number_photo'];
    }
?>
<div class="b-popup" id="popup1">
    <div class="b-popup-content">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
                <img class="logo_eng1" src="<?php echo get_template_directory_uri()?>/images/Logo_eng1.png">
                <div class="text_language" id="text_1">Advanced technologies in exploration</div>
                <div class="text_language" id="text_2">Передовые технологии  в геологоразведке</div>
                <div class="text_language" id="text_3">Tecnologías avanzadas  en exploración</div>
                <div class="text_l1">YOUR LANGUAGE:</div>
                <div class="text_l2">ВАШ ЯЗЫК:</div>
                <div class="text_l3">SU IDOMA:</div>
                <a class="language" id="eng"  >
                    <div class="image_lang1 ">
                        <img class="flag_1" src="<?php echo get_template_directory_uri()?>/images/united-states.png">
                        <div class="lang">ENGLISH</div>
                    </div>
                </a>
                <a class="language" id="rus"  >
                    <div class="image_lang2 ">
                        <img class="flag_3" src="<?php echo get_template_directory_uri()?>/images/russia.png">
                        <div class="lang">РУССКИЙ</div>
                    </div>
                </a>
                <a class="languages" id="es"  >
                    <div class="image_lang3 ">
                        <img class="flag_2" src="<?php echo get_template_directory_uri()?>/images/spain.png">
                        <div class="lang">ESPAÑOL</div>
                    </div>
                </a>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-12">
                <img class="image1" src="<?php echo get_template_directory_uri()?>/images/98765.png">
            </div>
        </div>
    </div>
</div>
<div class="popur_feedback">
    <div class="popur_form">
        <div id="close_feedback">X</div>
        <div class="row">
            <div class="col-md-2 col-sm-2"></div>
            <div class="col-md-8 col-sm-8">
                <div class="row">
                    <div class="email_geo"><? echo $mail; ?></div>
                    <div class="number"><? echo $number; ?></div>
                    <a class="flex-block align-center justify-center" href="<?php echo get_field('link_linkedin', $id_main_page); ?>" target="_blank">
                        <span class="text-icon"><?php echo $follow_us; ?></span> <img class="soc-icon" src="<?php echo get_template_directory_uri()?>/images/linkedin-3.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="col-md-2 col-sm-2"></div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <div class="col-md-2 col-sm-1 hidden-xs"></div>
            <div class="col-md-10 col-sm-10 col-xs-12">
                <form class="contact_form" id="form" onsubmit="return false;">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input class="center-pos" id="name"  type="text"  name="name"  placeholder="<?php echo $placholder_name ?>"/>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <input class="center-pos" id="email" type="email" name="email"  placeholder="Email"/>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <textarea name="text" id="text_feedback" placeholder="<?php echo $placholder_messege ?>"></textarea>
                    </div>
                    <div class="submit">
                        <button id="sub" type="submit" onsubmit="yaCounter36288400.reachGoal('ZAYAVKA'); return true;"><?php echo get_field('button_send', $id_main_page); ?></button>
                    </div>
                </form>
            </div>
            <div class="col-md-2 col-sm-1 hidden-xs"></div>
            <div class="clear-fix"></div>
        </div>
    </div>
</div>
<a>
    <img class="toTop" src="<?php echo get_template_directory_uri()?>/images/arrow-up.svg" alt="">
</a>
<footer>
    <div class="container">
        <div class="col-md-6 col-sm-6 col-xs-12">
            <img src="<?php echo get_template_directory_uri()?>/images/geo.png" alt="" class="logoFooter">
            <span class="e-mail">
                +7 (900) 555-75-50 <br>
                info@geojetexploration.com
            </span>
            <div class="copyright">
                © 2018 GeoJet Exploration. <?php echo $rights ?><br>
                <a href="#"><?php echo $politic ?>.</a>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="download">
                <a href="<?php echo get_field('file_present', $id_main_page); ?>" target="_blank">
                    <img src="<?php echo get_template_directory_uri()?>/images/download.png">
                    <span><?php echo get_field('button_upload_presentation', $id_main_page); ?></span>
                </a>
            </div>
            <div style="margin: 10px 0;">
                <a class="flex-block align-center justify-end" href="<?php echo get_field('link_linkedin', $id_main_page); ?>" target="_blank">
                    <span class="text-icon"><?php echo $follow_us; ?></span> <img class="soc-icon" src="<?php echo get_template_directory_uri()?>/images/linkedin-3.svg" alt="">
                </a>
            </div>
            <div class="artrange">
                <a href="https://artrange.ru/sozdanie-sajtov-pod-klyuch/" title="Создание сайтов и презентаций" target="_blank">
                    <?php echo $development ?> - <img src="<?php echo get_template_directory_uri()?>/images/artrange.png" alt="">
                </a>
            </div>
        </div>
    </div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="<?php echo get_template_directory_uri()?>/assets/lightbox/js/lightbox.js"></script>
<script src="<?php echo get_template_directory_uri()?>/js/slick.min.js"></script>
<script src="<?php echo get_template_directory_uri()?>/js/snap/dist/snap.svg-min.js"></script>
<script src="<?php echo get_template_directory_uri()?>/js/script.js"></script>

<!-- RedHelper -->
<!--<script id="rhlpscrtg" type="text/javascript" charset="utf-8" async="async"-->
<!--        src="https://web.redhelper.ru/service/main.js?c=geojet"-->
<!--        data-settings="wp-content/themes/artrange/assets/red-helper-api/template.js">-->
<!--</script>-->
<!--/Redhelper -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    var yaParams = {ip: "<? echo $_SERVER['REMOTE_ADDR']; ?>"};
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter36288400 = new Ya.Metrika({
                    id:36288400,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    params:window.yaParams
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/36288400" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<?php wp_footer(); ?>
</body>
</html>