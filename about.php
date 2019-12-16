<?php
/*
 * Template Name: О нас
 */
?>
<?php get_header(); ?>

    <section id="main_block">
        <div class="container-fluid">
            <div class="row relative">
                <div class="top-part">
                    <?php $group = get_field('main_headline'); ?>
                    <div class="main-slogan" style="font-size: <? echo get_field('size-headline'); ?>px"><?php echo $group['headline']; ?></div>
                    <div class="mini-slogan" style="font-size: <? echo get_field('size-subheadline'); ?>px"><?php echo $group['signature']; ?></div>
                    <div class="title-page" style="font-size: <? echo get_field('size-subheadline-triangle'); ?>px"><? echo $group['text_triangle']; ?></div>
                </div>
                <img class="triangles" src="<?php echo get_template_directory_uri()?>/images/triangles.png" alt="">
            </div>
        </div>
    </section>
    <section class=white-bg>
        <div class="container-fluid wrp-mission">
            <?php $mission = get_field('mission'); ?>
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="subheadline"><?php echo $mission['headline']; ?></div>
                    <img class="orange-line" src="<?php echo get_template_directory_uri(); ?>/images/line.png" alt="">
                </div>
                <div class="clear-fix"></div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div id="left-text-circle" class="col-md-1"><?php echo $mission['caption_1_left']; ?></div>
                    <svg id="snap" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" xmlns:ev="https://www.w3.org/2001/xml-events">
                    </svg>
                    <div id="right-text-circle" class="col-md-1"><?php echo $mission['caption_1_right']; ?></div>
                </div>
                <div class="clear-fix"></div>
            </div>
            <div class="block_gray">  
                <div class="row">
                    <div class="col-md-12">
                        <div class="subtitlepos"><?php echo $mission['subtitlepos']; ?></div>
                        <div class="subheadline-bl white">
                            <img class="black-line" src="<?php echo get_template_directory_uri()?>/images/line2.png" alt="">
                        </div>
                    </div>
                    <div class="clear-fix"></div>
                </div>
                <div class="row advantages-block">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="block_text">
                            <img src="<?php echo get_template_directory_uri()?>/images/hand-tool.png" alt="">
                            <div><?php echo $mission['block_text_left']; ?></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="block_text">
                            <img src="<?php echo get_template_directory_uri()?>/images/globe.png" alt="">
                            <div><?php echo $mission['block_text_right']; ?></div>
                        </div>
                    </div>
                    <div class="clear-fix"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="ant">
        <div class="container">
            <?php $about_gj = get_field('about_GJ') ?>
            <div class="col-md-12">
                <div class="subheadline white"><?php echo $about_gj['headline'] ?></div>
                <img class="orange-line" src="<?php echo get_template_directory_uri(); ?>/images/line.png" alt="">
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <?php $card_1 = $about_gj['Card-1']; ?>
                    <div class="orange-wrp">
                        <span><?php echo $card_1['headline']; ?></span>
                        <div class="wrp-img" style="background: url(<?php echo $card_1['image_fon']; ?>); background-size: cover; background-position: center;z-index:0;">
                            <div class="wrp-img-black" style="background:black;opacity:0.5;z-index:2;"></div>
                            <img id="logo_1" class="logo_icon" src="<?php echo $card_1['image_logo']; ?>" alt="">
                        </div>
                    </div>
                    <div class="white-wrp">
                        <?php
                            $j = count($card_1['items']);
                            for($i = 0; $i < $j; $i++){
                                echo '<span>'.$card_1["items"][$i]["name_item"].'</span>';
                            }
                        ?>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <?php $card_2 = $about_gj['Card-2']; ?>
                    <div class="orange-wrp">
                        <span><?php echo $card_2['headline']; ?></span>
<!--                        <img src="--><!--<?php //echo $card_2['image']; ?>--><!--" alt="">-->
                        <div class="wrp-img" style="background: url(<?php echo $card_2['image_fon']; ?>); background-size: cover; background-1position: center;">
                            <div class="wrp-img-black" style="background:black;opacity:0.5;z-index:2;"></div>
                            <img id="logo_2" class="logo_icon" src="<?php echo $card_2['image_logo']; ?>" alt="">
                        </div>
                    </div>
                    <div class="white-wrp">
                        <?php
                            $j = count($card_2['items']);
                            for($i = 0; $i < $j; $i++){
                                echo '<span>'.$card_2["items"][$i]["name_item"].'</span>';
                            }
                        ?>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <?php $card_3 = $about_gj['Card-3']; ?>
                    <div class="orange-wrp">
                        <span><?php echo $card_3['headline']; ?></span>
                        <div class="wrp-img" style="background: url(<?php echo $card_3['image_fon']; ?>); background-size: cover; background-position: center;">
                            <div class="wrp-img-black" style="background:black;opacity:0.5;z-index:2;"></div>
                            <img id="logo_3" class="logo_icon" src="<?php echo $card_3['image_logo']; ?>" alt="">
                        </div>
                    </div>
                    <div class="white-wrp">
                        <?php
                        $j = count($card_3['items']);
                        for($i = 0; $i < $j; $i++){
                            echo '<span>'.$card_3["items"][$i]["name_item"].'</span>';
                        }
                        ?>
                    </div>
            </div>
                <div class="clear-fix"></div>
            </div>
        </div>
    </section>
<!--    <section class="white-bg">-->
<!--        <div class="container">-->
<!--            <div class="row">-->
<!--                <div class="col-md-12 col-sm-12">-->
<!--                    --><?php //$our_team = get_field('team'); ?>
<!--                    <div class="subheadline">--><?php //echo $team['headline']; ?><!--НАША КОМАНДА</div>-->
<!--                    <img class="orange-line" src="images/line.png" alt="">-->
<!--                    <div class="row">-->
<!--                        <div id="slider_team">-->
                            <?php
                                //$team_man = $our_team['team_man'];
                                //$j = count($team_man);
                                //for($i = 0; $i < $j; $i++){
                                    //echo'
//                                        <!--<div class="slideTeamItem">-->
//                                            <img src="'.$team_man[$i]["photo"].'" class="people">
//                                            <div class="aboutAssociate">
//                                                <div class="nameAssociate">'.$team_man[$i]["name"].'</div>
//                                                <img class="orange-line" src="'.get_template_directory_uri().'/images/line.png" alt="">
//                                                <div class="positionAssociate">'.$team_man[$i]["position"].'</div>
//                                                <p>'.$team_man[$i]["description"].'</p>
//                                            </div>
//                                        </div>
                                    //';
                                //}
                            ?>
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
    <section class="gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <?php $technical_base = get_field('technical_base'); ?>
                    <div class="subheadline"><?php echo $technical_base['headline']; ?></div>
                    <img class="orange-line" src="<?php echo get_template_directory_uri(); ?>/images/line.png" alt="">
                    <div class="desc_headline"><?php echo $technical_base['description']; ?></div>
                    <div class="black-dash-line relative"></div>
                    <div id="slider_tech">
                        <?php
                            $item_slider = $technical_base['item_slider'];
                            $j = count($item_slider);
                            for($i = 0; $i < $j; $i++){
                                echo '
                                    <div class="slideTechItem">
                                        <img src="'.$item_slider[$i]["logo"].'">
                                        <div class="TechDepartment">'.$item_slider[$i]["name_element"].'</div>
                                        <p>'.$item_slider[$i]["description"].'</p>
                                    </div>
                                ';
                            }
                        ?>
                    </div>
                </div>
                <div class="clear-fix"></div>
            </div>
        </div>
    </section>
<!--    <section class="white-bg" id="foto_slider">-->
<!--        <div class="container-fluid">-->
<!--            <div class="row">-->
<!--                <div class="col-md-12 col-sm-12">-->
<!--                    <div class="row">-->
<!--                        <div id="slider_foto">-->
<!--                            --><?php
//                                $foto_slider = get_field('foto_slider');
//                                $j = count($foto_slider['foto']);
//                                for($i = 0; $i < $j; $i++){
//                                    echo '<div class="slideFotoItem" style="background: url('.$foto_slider["foto"][$i]["foto_item"].'); background-size: cover" ></div>';
//                                }
//                            ?>
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="clear-fix"></div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->

<?php get_footer(); ?>