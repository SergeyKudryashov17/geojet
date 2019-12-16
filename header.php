<!DOCTYPE html>
<html lang="ru" prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=10"> 
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/slick.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/slick-theme.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/lightbox/css/lightbox.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/animate-css/animate.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/style.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/media.css">
    <link rel="icon" href="<?php echo get_template_directory_uri()?>/images/favicon1.png" type="image/x-icon" />
    <!--[if lt IE 9]>
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri() ?>/images/favicon1.ico" type="image/x-icon" />
    <![endif]-->
    <!--[if lt IE 9]>
        <script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <?php
        if(get_field('name_link') == '') $title_link = get_the_title();
        else $title_link = get_field('name_link');

        $link_site = get_permalink();
        $img_link = get_field('img_link');
        $desc_link = get_field('desc_link');

    ?>
    <meta property="og:title" content="<?php echo $title_link; ?>" />
    <meta property="og:url" content="<?php echo $link_site; ?>" />
    <meta property="og:image" content="<?php echo $img_link; ?>" />
    <meta property="og:description" content="<?php echo $desc_link; ?>" />
    <title><?php echo strip_tags(get_the_title()); ?></title>

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

    <?php wp_head(); ?>
    <?php
    // Получение id главной страницы
    $id_main_page = get_option('page_on_front');
    switch ($id_main_page) {
        case 8:
            $active_eng = 'active-link-lang';
            $lang = 'eng-lang';
            break;
        case 2:
            $active_rus = 'active-link-lang';
            $version = 'rus';
            $lang = 'rus-lang';
            break;
        case 642:
            $active_esp = 'active-link-lang';
            $lang = 'esp-lang';
            break;
    }

    if ($lang == 'rus-lang') : ?>
        <script src="//code-ru1.jivosite.com/widget.js" jv-id="p2qPZzkrPy" async></script>
    <?php endif;?>
</head>
<body class="<?php echo $lang ?>">
<header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 logo-wrp">
                <a href="<?php echo get_permalink($id_main_page); ?>">
                    <img class="logo" src="<?php echo get_template_directory_uri()?>/images/Logo final без текста.svg" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12 phone-wrp">
                <div class="language_vers">
                    <div class="number-phone <?php echo $version; ?>">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        +7 900 555-75-50
                    </div>
                    <a href="https://geojetexploration.com/en/" class="<?php echo $active_eng; ?>">ENG</a>
                    <a href="https://geojetexploration.com/" class="<?php echo $active_rus; ?>">RUS</a>
                    <a href="https://geojetexploration.com/es/" class="<?php echo $active_esp; ?>">ESP</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12 menu-wrp">
                <div class="menu">
                    <a href="#">
                        <div class="button left-pos feedback_window"><?php echo get_field('name_button_contact', $id_main_page) ?></div>
                    </a>
                    <div class="menu-button animated right">
                        <img src="<?php echo get_template_directory_uri()?>/images/menu.png" alt="Меню">
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="progress-bar"></div>
</header>
<?php wp_nav_menu( array(
        'container'       => 'div',
        'container_class' => 'menu-full',
    ) );
?>