<?php
/*
 *  Template Name: Attention-страница
 */
get_header();

?>
    <section id="main_block" class="action-page-int">
        <div class="container-fluid">
            <div class="row relative">
                <div class="top-part">
                    <?php $group = get_field('main_headline'); ?>
                    <div class="d-none main-slogan main-slogan_action animated"
                         style="font-size: <? echo get_field('size-main-headline'); ?>px"
                         data-animate="<? echo get_field('animate-main-headline'); ?>">
                        <?php echo get_field('headline'); ?>
                    </div>
                    <div class="d-none btn btn_action_head feedback_window mx-auto mt-20 animated"
                         data-animate="<? echo get_field('animate-action-btn'); ?>">
                        <?php echo get_field('text-action-btn'); ?>
                    </div>
                    <div class="d-none main-slogan main-slogan_action animated"
                         style="font-size: <? echo get_field('size-subheadline'); ?>px"
                         data-animate="<? echo get_field('animate-subheadline'); ?>">
                        <?php echo get_field('description')?>
                    </div>
                    <div class="title-page">
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
                            $url_video = get_field('video-block');
                            if(isset($url_video)) : ?>
                                <video class="video-block" autoplay muted loop controls poster="<?php echo get_field('poster'); ?>">
                                    <source src="<?php echo get_field('video-file'); ?>" type="video/mp4">
                                </video>
                            <?php endif; ?>
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
                <div class="btn feedback_window mx-auto mt-20">
                    <?php echo get_field('text-btn') ?>
                </div>
                <a href="<?php echo get_home_url(); ?>" class="link-back">На главную</a>
            </div>
        </div>
    </section>

<?php get_footer(); ?>