<?php
/*
 * Template Name: Страница информации
 */
get_header();
?>
    <section id="main_block">
        <div class="container-fluid">
            <div class="row relative">
                <div class="top-part">
                    <div class="main-slogan" style="font-size: <? echo get_field('size-headline'); ?>px"><? the_field('headline'); ?></div>
                    <div class="mini-slogan" style="font-size: <? echo get_field('size-subheadline'); ?>px"><? the_field('description'); ?></div>
                    <div class="title-page" style="font-size: <? echo get_field('size-subheadline-triangle'); ?>px"><? the_field('text_triangle'); ?></div>
                </div>
                <img class="triangles" src="<?php echo get_template_directory_uri()?>/images/triangles.png" alt="">
            </div>
        </div>
    </section>
    <section class="white-bg">
        <?php
        $info = get_field('info-pages');
        $i = 0;
        foreach($info as $item) :
            if(($i == 0) || (($i % 2) == 0)) {
                $color_class = 'white-bg';
            } else {
                $color_class = 'gray-bg';
            }
            ?>
            <div class="<?php echo $color_class; ?>">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <h2 class="subheadline_left"><?php echo $item['name-info']; ?></h2>
                            <img class="orange-line_left" src="<?php echo get_template_directory_uri(); ?>/images/line.png" alt="">
                        </div>
                        <div class="col-md-7 col-12">
                            <div class="geoInfoItem">
                                <div><?php echo $item['desc-info']; ?></div>
                                <a href="<?php echo $item['link-info']; ?>" class="btn"><?php echo $item['text-btn']; ?></a>
                            </div>
                        </div>
                        <div class="col-md-5 col-12">
                            <img src="<?php echo $item['img-info'] ?>" class="info-img" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <?php
            $i++;
        endforeach;
        ?>
    </section>

<?php get_footer(); ?>
