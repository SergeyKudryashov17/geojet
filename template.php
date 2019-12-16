<?php
/*
 * Template Name: Шаблонная
 */
?>
<?php get_header(); ?>

    <section id="main_block">
        <div class="container-fluid">
            <div class="row relative">
                <div class="top-part">
                    <?php $group = get_field('main_headline'); ?>
                    <div class="main-slogan" style="<? echo get_field('size-headline'); ?>px"><?php echo get_field('headline'); ?></div>
                    <div class="mini-slogan" style="<? echo get_field('size-subheadline'); ?>px"><?php echo get_field('description')?></div>
                    <div class="title-page" style="<? echo get_field('size-subheadline-triangle'); ?>px">
                        <div class="wrp-title"><?php the_title(); ?></div>
                    </div>
                </div>
                <img class="triangles" src="<?php echo get_template_directory_uri()?>/images/triangles.png" alt="">
            </div>
        </div>
    </section>
    <section class="cooper white-bg" id="goTo">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="custom">
                            <?php
                                $img = get_field('images');
                                $j = count($img);
                                for($i = 0; $i < $j; $i++){
                                    echo '<img class="customImg" src="'.$img[$i]['image'].'">';
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="clear-fix"></div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
