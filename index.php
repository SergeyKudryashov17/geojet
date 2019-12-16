<?php get_header(); ?>
<div class="main-page-int"></div>
<section id="main_block">
    <div class="container-fluid">
        <div class="row relative">
            <div class="top-part">
                <?php $group = get_field('main_headline'); ?>
                <div class="main-slogan"  style="font-size: <? echo get_field('size-headline'); ?>px"><? echo $group['headline']; ?></div>
                <div class="mini-slogan" style="font-size: <? echo get_field('size-subheadline'); ?>px"><? echo $group['description']; ?></div>
                <div class="title-page" style="font-size: <? echo get_field('size-subheadline-triangle'); ?>px"><? echo $group['text_triangle'] ?></div>
                <!--<a class="anchorButton" href="#goTo"><img class="scrollPict" src="--><?php //echo get_template_directory_uri()?><!--/images/str.png" alt=""></a>-->
            </div>
            <img class="triangles" src="<?php echo get_template_directory_uri()?>/images/triangles.png" alt="">
        </div>
    </div>
</section>
<section class="cooper white-bg" id="goTo">
    <?php $format_cooper = get_field('format_cooper'); ?>
    <div class="container">
        <!--<div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="text-info">
                        Наша геологоразведочная компания предлагает 3 формата <br> сотрудничества
                    </div>
                </div>
            </div>
        </div>-->
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 form-cooper ">
                <div class="text-right anchor" data-id="#1-format">
                    <?php echo $format_cooper['name_cooper_1']; ?>
                </div>
                <img class="cooper-pic-left anchor" src="<?php echo $format_cooper['picture_cooper_1']; ?>" data-id="#1-format">
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12 form-cooper ">
                <div class="text-center anchor" data-id="#2-format">
                    <?php echo $format_cooper['name_cooper_2']; ?>
                </div>
                <img class="cooper-pic anchor" src="<?php echo $format_cooper['picture_cooper_2']; ?>" data-id="#2-format">
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12 form-cooper ">
                <div class="text-left anchor" data-id="#3-format">
                    <?php echo $format_cooper['name_cooper_3']; ?>
                </div>
                <img class="cooper-pic-right anchor" src="<?php echo $format_cooper['picture_cooper_3']; ?>" data-id="#3-format">
            </div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <div class="subheadline">
                <?php echo get_field('headline-video');?>
                
                <img class="orange-line" src="<?php echo get_template_directory_uri()?>/images/line.png" alt="">
            </div>
            <video class="video-block" autoplay muted loop controls poster="<?php echo get_field('poster'); ?>">
                <source src="<?php echo get_field('video-file'); ?>" type="video/mp4">
            </video>
        </div>
    </div>
</section>
<section class="headline">
    <div class="container-fluid">
        <h2><!--1 ФОРМАТ--></h2>
    </div>
</section>
<section class="first-format relative" id="1-format">
    <div class="container">
        <?php $cooper_1 = get_field('cooper_1');  ?>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="subheadline white">
                    <?php echo $cooper_1['name_type']; ?>
                    <img class="orange-line" src="<?php echo get_template_directory_uri()?>/images/line.png" alt="">
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="row">
                    <div class="info-left-end right-pos relative">
                        <div class="hoverBlockTop" data-number="1"></div>
                        <div class="info-top" data-number="1"><?php echo $cooper_1['signature-1']; ?></div>
                        <div class="circl-top">1</div>
                        <img class="picture" src="<?php echo $cooper_1['picture-1']; ?>" alt="">
                        <div class="circl-bottom">2</div>
                        <div class="info-btm" data-number="2"><?php echo $cooper_1['signature-2']; ?></div>
                        <div class="hoverBlockBtm" data-number="2"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="row">
                    <div class="info-left right-pos relative">
                        <div class="hoverBlockTop" data-number="3"></div>
                        <div class="info-top" data-number="3"><?php echo $cooper_1['signature-3']; ?></div>
                        <div class="circl-top">3</div>
                        <img class="picture" src="<?php echo $cooper_1['picture-2']; ?>" alt="">
                        <div class="info-btm" data-number="4"><?php echo $cooper_1['signature-4']; ?></div>
                        <div class="hoverBlockBtm" data-number="4"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="row">
                    <div class="left-pos info-right relative">
                        <div class="hoverBlockTop" data-number="5"></div>
                        <div class="info-top" data-number="5"><?php echo $cooper_1['signature-5']; ?></div>
                        <div class="circl-top">5</div>
                        <img class="picture" src="<?php echo $cooper_1['picture-3']; ?>" alt="">
                        <div class="circl-bottom">6</div>
                        <div class="info-btm" data-number="6"><?php echo $cooper_1['signature-6']; ?></div>
                        <div class="hoverBlockBtm" data-number="6"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="row">
                    <div class="left-pos info-right-end relative">
                        <div class="hoverBlockTop" data-number="7"></div>
                        <div class="info-top" data-number="7"><?php echo $cooper_1['signature-7']; ?></div>
                        <div class="circl-top">7</div>
                        <img class="picture" src="<?php echo $cooper_1['picture-4']; ?>" alt="">
                        <div class="circl-bottom">8</div>
                        <div class="info-btm" data-number="8"><?php echo $cooper_1['signature-8']; ?></div>
                        <div class="hoverBlockBtm" data-number="8"></div>
                    </div>
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="info-text relative" id="info-text-1">
                    <?php echo $cooper_1['text_description']; ?>
                </div>
                <div class="info-text relative" id="info-text-2">
                    <?php echo $cooper_1['text_description_2']; ?>
                </div>
                <div class="info-text relative" id="info-text-3">
                    <?php echo $cooper_1['text_description_3']; ?>
                </div>
                <div class="info-text relative" id="info-text-4">
                    <?php echo $cooper_1['text_description_4']; ?>
                </div>
                <div class="info-text relative" id="info-text-5">
                    <?php echo $cooper_1['text_description_5']; ?>
                </div>
                <div class="info-text relative" id="info-text-6">
                    <?php echo $cooper_1['text_description_6']; ?>
                </div>
                <div class="info-text relative" id="info-text-7">
                    <?php echo $cooper_1['text_description_7']; ?>
                </div>
                <div class="info-text relative" id="info-text-8">
                    <?php echo $cooper_1['text_description_8']; ?>
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
    <div class="white-gradient"></div>
</section>
<section class="headline">
    <div class="container-fluid">
        <h2><!--2 ФОРМАТ--></h2>
    </div>
</section>
<section class="service" id="2-format">
    <div class="container">
        <?php
        $cooper_2 = get_field('cooper_2');
        $name_type = $cooper_2['name_type'];
        $text_area = $cooper_2['text_area'];
        $list_job = $cooper_2['list_job'];
        ?>
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="subheadline">
                <?php echo $name_type; ?>
                <img class="orange-line" src="<?php echo get_template_directory_uri()?>/images/line.png" alt="">
            </div>
        </div>
        <div class="clear-fix"></div>
        <div class="row">
            <div class="content-text col-md-12 col-sm-12 col-xs-12">
                <?php echo $text_area; ?>
            </div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <div class="hidden-md hidden-sm hidden-xs"></div>
            <div class="col-md-3 col-sm-12 col-xs-12">
                <div class="row">
                    <ul class="listService">
                        <?php
                        $id_main_page = get_option('page_on_front');
                        if ($id_main_page == 2)
                            $link_page = 'https://geojetexploration.com/nashi-uslugi/#block-';
                        elseif ($id_main_page == 8)
                            $link_page = 'https://geojetexploration.com/en/services/#block-';
                        else
                            $link_page = 'https://geojetexploration.com/es/servicios/#block-';

                        $j = count($list_job);
                        for($i = 0; $i < $j; $i++){
                            $name_job = $list_job[$i]['name_job'];
                            $desc_job = $list_job[$i]['desc_job'];
                            if($i == ($j - 1)){
                                echo'
                                    <li class="relative">
                                        <div class="listServiceItem" id="'.$i.'">'.$name_job.'</div>
                                        <div class="LastBorder"></div>
                                        <div class="orange-circle"></div>
                                        <div class="previewService" style="background:url('.$list_job[$i]['fon_job'].') !important; background-size: cover; ">
                                            '.$desc_job.'
                                            <span class="moreRead">
                                                <a href="'.$link_page.$i.'">'.get_field("button_read_more", $id_main_page).'</a>
                                            </span>
                                            <div class="orange-circle-end"></div>
                                        </div>
                                    </li>
                                ';
                            }else{
                                echo'
                                    <li class="relative">
                                        <div class="listServiceItem" id="'.$i.'">'.$name_job.'</div>
                                        <div class="ServiceItemBorder"></div>
                                        <div class="orange-circle"></div>
                                        <div class="previewService" style="background:url('.$list_job[$i]['fon_job'].') !important; background-size: cover;">
                                            '.$desc_job.'
                                            <span class="moreRead">
                                                <a href="'.$link_page.($i+1).'">'.get_field("button_read_more", $id_main_page).'</a>
                                            </span>
                                            <div class="orange-circle-end"></div>
                                        </div>
                                    </li>
                                ';
                            }
                        }
                        ?>
                    </ul>
                </div>
            </div>
            <div class="col-md-2 hidden-sm hidden-xs">
                <div class="row">
                    <svg width="100%" height="300px" style="margin-top:52px">
                        <line id="line-1" x1="0" y1="22" x2="100" y2="22" stroke="rgb(255,116,67)" stroke-width="4" stroke-dasharray="6 4"/>
                        <line id="line-2" x1="102" y1="20" x2="100" y2="275" stroke="rgb(255,116,67)" stroke-width="4" stroke-dasharray="6 4"/>
                        <line id="line-3" x1="98" y1="275" x2="100%" y2="275" stroke="rgb(255,116,67)" stroke-width="4" stroke-dasharray="6 4"/>
                    </svg>
                </div>
            </div>
            <div class="col-md-7 hidden-sm hidden-xs">
                <div class="row">
                    <?php
                    for($i = 0; $i < $j; $i++){
                        $desc_job = $list_job[$i]['desc_job'];
                        echo '
                                <div class="previewService previewServiceDesktop relative" id="'.$i.'-preview" style="background:url('.$list_job[$i]['fon_job'].') !important; background-size: cover;">
                                    '.$desc_job.'
                                    <span class="moreRead">
                                        <a href="'.$link_page.($i+1).'">'.get_field("button_read_more", $id_main_page).'</a>
                                    </span>
                                    <div class="orange-circle-end"></div>
                                </div>
                            ';
                    }
                    ?>
                </div>
            </div>
            <div class="hidden-md hidden-sm hidden-xs"></div>
            <div class="clear-fix"></div>
        </div>
    </div>
</section>
<section class="headline">
    <div class="container-fluid">
        <h2><!--3 ФОРМАТ--></h2>
    </div>
</section>
<section class="service" id="3-format">
    <div class="container">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="subheadline">
                <?php
                $cooper_3 = get_field('cooper3');
                echo $cooper_3['name_type'];
                ?>
                <img class="orange-line" src="<?php echo get_template_directory_uri()?>/images/line.png" alt="">
            </div>
        </div>
        <div class="clear-fix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="content-text">
                    <?php echo $cooper_3['text_area']; ?>
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</section>
<section class="white-bg type_customers" style="margin-top: -60px">
    <div class="container">
        <div class="row">
            <?php
            $type_customer_1 = $cooper_3['type_customer_1'];
            $link_more_page = $cooper_3['type_customer_1']['link_page'];
            if($link_more_page == '') $feedback_class = 'feedback_window';
            else $feedback_class = '';
            ?>
            <div class="col-md-1 hidden-sm hidden-xs"></div>
            <div class="col-md-5 col-sm-5 col-xs-12">
                <img class="pictCustomer" src="<?php echo $type_customer_1['logo_cust']; ?>" alt="">
            </div>
            <div class="col-md-6 col-sm-7 col-xs-12">
                <div class="customerList">
                    <h2><?php echo $type_customer_1['name_type_cust']; ?></h2>
                    <?php echo $type_customer_1['desc_cust']; ?>
                    <a href="<?php echo $link_more_page; ?>">
                        <div class="btn customerListPos <?php echo $feedback_class; ?>"><?php echo get_field('button_more', $id_main_page) ?></div>
                    </a>
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <?php
            $type_customer_2 = $cooper_3['type_customer_2'];
            $link_more_page = $cooper_3['type_customer_2']['link_page'];
            if($link_more_page == '') $feedback_class = 'feedback_window';
            else $feedback_class = '';
            ?>
            <div class="col-md-1 hidden-sm"></div>
            <div class="col-md-6 col-sm-7 hidden-xs">
                <div class="customerList">
                    <h2><?php echo $type_customer_2['name_type_cust']; ?></h2>
                    <?php echo $type_customer_2['desc_cust']; ?>
                    <a>
                        <div class="btn feedback_window"><?php echo get_field('button_more', $id_main_page) ?></div>
                    </a>
                </div>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12">
                <img class="pictCustomer" src="<?php echo $type_customer_2['logo_cust']; ?> " alt="">
            </div>
            <div class="blockText">
                <div class="hidden-lg hidden-md hidden-sm col-xs-12 hidden_block">
                    <div class="customerList">
                        <h2><?php echo $type_customer_2['name_type_cust']; ?></h2>
                        <?php echo $type_customer_2['desc_cust']; ?>
                        <a href="<?php echo $link_more_page; ?>">
                            <div class="btn <?php echo $feedback_class; ?>"><?php echo get_field('button_more', $id_main_page) ?></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <?php
            $type_customer_3 = $cooper_3['type_customer_3'];
            $link_more_page = $cooper_3['type_customer_3']['link_page'];
            if($link_more_page == '') $feedback_class = 'feedback_window';
            else $feedback_class = '';
            ?>
            <div class="col-md-1 hidden-sm"></div>
            <div class="col-md-5 col-sm-5 col-xs-12">
                <img class="pictCustomer" src="<?php echo $type_customer_3['logo_cust']; ?>" alt="">
            </div>
            <div class="col-md-6 col-sm-7 col-xs-12">
                <div class="customerList">
                    <h2><?php echo $type_customer_3['name_type_cust']; ?></h2>
                    <?php echo $type_customer_3['desc_cust']; ?>
                    <a href="<?php echo $link_more_page; ?>">
                        <div class="btn <?php echo $feedback_class; ?>"><?php echo get_field('button_more', $id_main_page) ?></div>
                    </a>
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</section>
<section class="headline">
    <div class="container-fluid">
        <h2><!--2 ФОРМАТ--></h2>
    </div>
</section>
<section class="gray-bg">
    <div class="container">
        <?php $cooper_4 = get_field('cooper_4'); ?>
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="subheadline">
                <?php echo $cooper_4['name_type']; ?>
                <img class="orange-line" src="<?php echo get_template_directory_uri()?>/images/line.png" alt="">
            </div>
        </div>
        <div class="clear-fix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="content-text text-center">
                    <?php echo $cooper_4['text_area']; ?>
                </div>
            </div>
            <div class="clear-fix"></div>
        </div>
        <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-12">
                <img class="pictureGeo" src="<?php echo $cooper_4['image_1']; ?>" alt="">
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
                <img class="pictureGeo" src="<?php echo $cooper_4['image_2']; ?>" alt="">
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
                <img class="pictureGeo" src="<?php echo $cooper_4['image_3']; ?>" alt="">
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
                <img class="pictureGeo" src="<?php echo $cooper_4['image_4']; ?>" alt="">
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
    <div class="clear-fix"></div>
</section>

<div class="popup-info-text">
    <div class="popup-info-text__content">
        <div class="popup-info-text__close"> X </div>
        <div class="popup-info-text__desc" data-id="info-text-1"><?php echo $cooper_1['text_description']; ?></div>
        <div class="popup-info-text__desc" data-id="info-text-2"><?php echo $cooper_1['text_description_2']; ?></div>
        <div class="popup-info-text__desc" data-id="info-text-3"><?php echo $cooper_1['text_description_3']; ?></div>
        <div class="popup-info-text__desc" data-id="info-text-4"><?php echo $cooper_1['text_description_4']; ?></div>
        <div class="popup-info-text__desc" data-id="info-text-5"><?php echo $cooper_1['text_description_5']; ?></div>
        <div class="popup-info-text__desc" data-id="info-text-6"><?php echo $cooper_1['text_description_6']; ?></div>
        <div class="popup-info-text__desc" data-id="info-text-7"><?php echo $cooper_1['text_description_7']; ?></div>
        <div class="popup-info-text__desc" data-id="info-text-8"><?php echo $cooper_1['text_description_8']; ?></div>
    </div>
</div>

<?php get_footer(); ?>
