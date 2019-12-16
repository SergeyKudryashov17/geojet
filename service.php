<?php
/*
 * Template Name: Наши услуги
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
                    <div class="title-page" style="font-size: <? echo get_field('size-subheadline-triangle'); ?>px"><? echo  $group['text_triangle']; ?></div>
                </div>
                <img class="triangles" src="<?php echo get_template_directory_uri()?>/images/triangles.png" alt="">
            </div>
        </div>
    </section>
    <section class="white-bg service-wrp service-page">
        <div class="container">
            <div class="row relative">
                <div class="hidden-md hidden-sm hidden-xs"></div>
                <div class="col-md-3 col-sm-5 hidden-xs">
                    <div class="row relative">
                        <ul class="listService off-before">
                            <?php
                                $desc_services = get_field('desc_services');
                                $j = count($desc_services);
                                $count_bl = 0;
                                $count_subbl = 0;
                                for($i = 0; $i < $j; $i++){
                                    $flag_subitem = $desc_services[$i]['subitem'];
                                    if($i == ($j - 1)){
                                        if($flag_subitem[0] == 'true'){
                                            echo '
                                                <li id="'.($i+1).'-Item">
                                                    <div class="listServiceItem subItemService" onclick="goToSubAnchor('.($count_subbl + 1).');">'.$desc_services[$i]['name_service'].'</div>
                                                </li>
                                            ';
                                            $count_subbl++;
                                        }else{
                                            echo '
                                                <li id="'.($i+1).'-Item">
                                                    <div class="listServiceItem" onclick="goToAnchor('.($count_bl + 1).');">'.$desc_services[$i]['name_service'].'</div>
                                                    <div class="LastBorder"></div>
                                                </li>
                                            ';
                                            $count_bl++;
                                        }
                                    }else{
                                        if($flag_subitem[0] == 'true'){
                                            echo '
                                                <li id="'.($i+1).'-Item">
                                                    <div class="listServiceItem subItemService" onclick="goToSubAnchor('.($count_subbl + 1).');">
                                                        '.$desc_services[$i]['name_service'].'
                                                        <div class="subItemBorder"></div>
                                                    </div>
                                                    
                                                </li>
                                            ';
                                            $count_subbl++;
                                        }else {
                                            echo '
                                                <li id="' . ($i + 1) . '-Item">
                                                    <div class="listServiceItem" onclick="goToAnchor(' . ($count_bl + 1) . ');">' . $desc_services[$i]['name_service'] . '</div>
                                                    <div class="ServiceItemBorder"></div>
                                                </li>
                                            ';
                                            $count_bl++;
                                        }
                                    }
                                }
                            ?>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="col-md-1 hidden-sm hidden-xs"></div>
                <div class="col-md-8 col-sm-7 col-xs-12">
                    <div class="services">
                        <?php
                            $count_bl = 0;
                            $count_subbl = 0;
                            for($i = 0; $i < $j; $i++){
                                if($desc_services[$i]['subitem'][0] == 'true'){
                                    echo '
                                        <div class="serviceItem" id="block-sub-'.($count_bl + 1).'">
                                            <div class="caption">'.$desc_services[$i]['name_service'].'</div>
                                            <img class="orange-line" src="'.get_template_directory_uri().'/images/line.png" alt="">
                                            '.$desc_services[$i]['desc_service'].'   
                                        </div>
                                    ';
                                    $count_bl++;
                                } else {
                                    echo '
                                        <div class="serviceItem" id="block-'.($count_subbl + 1).'">
                                            <div class="caption">'.$desc_services[$i]['name_service'].'</div>
                                            <img class="orange-line" src="'.get_template_directory_uri().'/images/line.png" alt="">
                                            '.$desc_services[$i]['desc_service'].'   
                                        </div>
                                    ';
                                    $count_subbl++;
                                }
                            }
                        ?>
                    </div>
                </div>
                <div class="hidden-md hidden-sm hidden-xs"></div>
                <div class="clear-fix"></div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="white-bg"></div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
