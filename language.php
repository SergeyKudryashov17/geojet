<?php
/*
 * Template Name: Выбрать язык
 */
?>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=10"> 
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/style.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/media.css"> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="<?php echo get_template_directory_uri()?>/assets/lightbox/js/lightbox.js"></script>
    <script src="<?php echo get_template_directory_uri()?>/js/slick.min.js"></script>
    <script src="<?php echo get_template_directory_uri()?>/js/snap/dist/snap.svg-min.js"></script>
    <script src="<?php echo get_template_directory_uri()?>/js/script.js"></script>
    <!--[if lt IE 9]>
        <script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <title><?php the_title(); ?></title>
</head>
        <div class="b-popup" id="popup1">
            <div class="b-popup-content">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <img class="logo_eng1" src="<?php echo get_template_directory_uri()?>/images/Logo_eng1.png">
                        
                        <div class="text_language" id="text_1">Advanced technologies in exploration</div>
                        <div class="text_language" id="text_2">Передовые технологии  в геологоразведке</div>
                        <div class="text_language" id="text_3">Tecnología avanzada  en exploración</div>
                        
                        <div class="text_l1">YOUR LANGUAGE:</div>
                        <div class="text_l2">ВАШ ЯЗЫК:</div>
                        <div class="text_l3">TU LENGUAJE:</div>
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
</html>
  