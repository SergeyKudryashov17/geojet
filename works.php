<?php
/*
 * Template Name: Наши проекты
 */
?>
<?php get_header(); ?>

    <section id="main_block">
        <div class="container-fluid">
            <div class="row relative">
                <div class="top-part">
                    <?php $group = get_field('main_headline'); ?>
                    <div class="main-slogan" style="font-size: <? echo get_field('size-headline'); ?>px"><? echo $group['headline']; ?></div>
                    <div class="mini-slogan" style="font-size: <? echo get_field('size-subheadline'); ?>px"><? echo $group['signature']; ?></div>
                    <div class="title-page" style="font-size: <? echo get_field('size-subheadline-triangle'); ?>px"><? echo $group['text_triangle']; ?></div>
                </div>
                <img class="triangles" src="<?php echo get_template_directory_uri()?>/images/triangles.png" alt="">
            </div>
        </div>
    </section>
    <section class="block white-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-5 col-xs-12">
                <?php
                $desc_country = get_field('desc_country');
                $info_country = $desc_country['info_country'];
                $j = count($info_country);
                for($i = 0; $i < $j; $i++){
                    echo '
                        <div class="info-continent" id="info-country-'.$i.'" data-level-1="'.$info_country[$i]['level_1'].'" data-level-2="'.$info_country[$i]['level_2'].'">
                            <div class="country">'.$info_country[$i]['name_dist'].'</div>
                            <div class="city">'.$info_country[$i]['list_country'].'</div>
                            <div class="jobs">'.$info_country[$i]['description'].'</div>
                            <div class="bar-one_mobile"></div>
                            <div class="bar-two_mobile"></div>
                        </div>
                    ';
                }
                ?>
                </div>
                <div class="col-md-7 col-sm-7 hidden-xs">
                    <img  src="https://geojetexploration.com/wp-content/themes/artrange/images/grafik.png" class="column">
                    <div class="first_bar"></div>
                    <div class="second_bar"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="map-dots relative">
                        <div class="big_circle" id="country-0">
                            <div class="white_circle"></div>
                        </div>
                        <div class="big_circle" id="country-1">
                            <div class="white_circle"></div>
                        </div>
                        <div class="big_circle" id="country-2">
                            <div class="white_circle"></div>
                        </div>
                        <div class="big_circle" id="country-3">
                            <div class="white_circle"></div>
                        </div>
                        <div class="big_circle" id="country-4">
                            <div class="white_circle"></div>
                        </div>
                        <div class="big_circle" id="country-5">
                            <div class="white_circle"></div>
                        </div>
                        <div class="big_circle" id="country-6">
                            <div class="white_circle"></div>
                        </div>
                    </div>
                </div>
                <div class="clear-fix"></div>
            </div>
        </div>
    </section>
    <!--<section class="geo-info-block">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="row">
                        <div id="slider">
                            <?php
                                $desc_country_potential = get_field('desc_country_potential');
                                $desc_distr = $desc_country_potential['desc_distr'];
                                $j = count($desc_distr);
                                for($i = 0; $i < $j; $i++){
                                    echo '
                                        <div class="mainland">
                                            <div class="subheadline white">
                                                '.$desc_distr[$i]['headline'].'
                                                <img class="orange-line" src="'.get_template_directory_uri().'/images/line.png" alt="">
                                            </div>
                                            <div class="potencial">
                                                <span class="orange">'.$desc_distr[$i]['level_potensial'].'</span>
                                                potencial
                                            </div>
                                            <div class="text-about">
                                                '.$desc_distr[$i]['description'].'
                                            </div>
                                            <div>
                                                <img src="'.$desc_distr[$i]['image'].'" class="continent" alt="">
                                            </div>
                                        </div>
                                    ';
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>-->
    <section class="headline">
    <div class="container-fluid">
        <h2><!--2 ФОРМАТ--></h2>
    </div>
    </section>
    <section class="resources white-bg">
        <div class="container">
            <div class="subheadline">
                <?php
                    $materials = get_field('materials');
                    echo $materials['type_fields'];
                ?>
                <img class="orange-line" src="<?php echo get_template_directory_uri()?>/images/line.png" alt="">
            </div>
        </div>
            <?php
                $materials = get_field('materials');
                $desc_material = $materials['desc_material'];
                $j = count($desc_material);
                $id_main_page = get_option('page_on_front');
                for($i = 0; $i < $j; $i++){
                    if($desc_material[$i]['link_page'] == '') {
                        $class_popup = 'feedback_window';
                        $link = '';
                    }
                    else {
                        $link = 'href="' . $desc_material[$i]['link_page'] .'"';
                        $class_popup = '';
                    }
                    if($i % 2 == 0){
                        echo '
                            <div class="white-bg">
                                <div class="container">';
                    }else{
                        echo '
                            <div class="gray-bg">
                                <div class="container">';
                    }
                    echo '
                    <div class="col-md-12 col-sm-12 col-xs-12 ">
                        <div id="metals-'.$i.'">
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <img src="'.$desc_material[$i]['image'].'" class="minerals-img" alt="">
                            </div>
                            <div class="col-md-8 col-sm-8 col-xs-12">    
                                <div class="geoInfoItem">
                                    <h2>'.$desc_material[$i]["name"].'</h2>
                                    <img class="orange-line" src="'.get_template_directory_uri().'/images/line.png" alt="">
                                    <span>'.$desc_material[$i]["short_desc"].'</span>
                                    '.$desc_material[$i]["long_desc"].'
                                    <a '.$link.' class="btn '.$class_popup.'">'.get_field("button_more", $id_main_page).'</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ';
                    echo '
                            </div>
                        </div>';
                    if(($i == ($j - 2)) || ($i == ($j - 1)))
                        echo '<div class="clear-fix"></div>';
                }
            ?>
            
        </div>
    </section>

<?php get_footer(); ?>